const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const dbPath = path.resolve(__dirname, 'tasks.db');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error(err.message);
  console.log('✅ Yhdistetty SQLite-tietokantaan onnistui');
});

db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nimi TEXT NOT NULL,
    tiedot TEXT,
    aloitus TEXT,
    lopetus TEXT,
    vaihe TEXT DEFAULT 'ei aloitettu'
  )
`);

app.post('/tasks', (req, res) => {
  const { nimi, tiedot } = req.body;
  const aloitus = new Date().toISOString().split('T')[0];

  db.run(
    `INSERT INTO tasks (nimi, tiedot, aloitus, vaihe) VALUES (?, ?, ?, ?)`,
    [nimi, tiedot, aloitus, 'ei aloitettu'],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({
        id: this.lastID,
        nimi,
        tiedot,
        aloitus,
        lopetus: null,
        vaihe: 'ei aloitettu'
      });
    }
  );
});

app.get('/tasks', (req, res) => {
  db.all(`SELECT * FROM tasks`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/tasks/:id', (req, res) => {
  db.get(`SELECT * FROM tasks WHERE id = ?`, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Taskia ei löytynyt' });
    res.json(row);
  });
});

app.put('/tasks/:id/siirry', (req, res) => {
  db.get(`SELECT * FROM tasks WHERE id = ?`, [req.params.id], (err, taski) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!taski) return res.status(404).json({ error: 'Taskia ei löytynyt' });

    let uusiVaihe = taski.vaihe;
    let lopetus = taski.lopetus;

    if (taski.vaihe === 'ei aloitettu') {
      uusiVaihe = 'kesken';
    } else if (taski.vaihe === 'kesken') {
      uusiVaihe = 'valmis';
      lopetus = new Date().toISOString().split('T')[0];
    }

    db.run(
      `UPDATE tasks SET vaihe = ?, lopetus = ? WHERE id = ?`,
      [uusiVaihe, lopetus, req.params.id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ ...taski, vaihe: uusiVaihe, lopetus });
      }
    );
  });
});

app.delete('/tasks/:id', (req, res) => {
  db.get(`SELECT * FROM tasks WHERE id = ?`, [req.params.id], (err, taski) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!taski) return res.status(404).json({ error: 'Taskia ei löytynyt' });

    if (taski.vaihe !== 'valmis') {
      return res.status(400).json({ error: 'Vain valmiin taskin voi poistaa' });
    }

    db.run(`DELETE FROM tasks WHERE id = ?`, [req.params.id], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Taski poistettu', id: req.params.id });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveri käynnissä: http://localhost:${PORT}`);
});