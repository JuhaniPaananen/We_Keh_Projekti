const form = document.getElementById('taskForm');
const list = document.getElementById('taskList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nimi = document.getElementById('nimi').value;
  const tiedot = document.getElementById('tiedot').value;
  document.getElementById('haku').addEventListener('input', haeJaPaivita);

  await fetch('/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nimi, tiedot })
  });

  form.reset();
  haeJaPaivita();
});

async function haeJaPaivita() {
    const res = await fetch('/tasks');
    let data = await res.json();
  
    const haku = document.getElementById('haku').value.toLowerCase();
  
    if (haku.trim() !== "") {
      data = data.filter(task =>
        task.nimi.toLowerCase().includes(haku)
        //Alemmalla haetaan kummallakin:
        //task.nimi.toLowerCase().includes(haku) ||
        //task.tiedot.toLowerCase().includes(haku)
      );
    }
  
    list.innerHTML = '';
  
    data.forEach(task => {
      const div = document.createElement('div');
      div.className = 'taski ' + (task.vaihe === 'valmis' ? 'vihrea' : task.vaihe === 'kesken' ? 'keltainen' : 'punainen');
      
      div.innerHTML = `
        <p class="uppercase">${task.vaihe}<p/>
        <strong>${task.nimi}</strong><br/>
        ${task.tiedot}<br/>
        <small>${task.aloitus} - ${task.lopetus || ''}</small><br/><br/>
        ${task.vaihe !== 'valmis'
          ? `<button onclick="siirra(${task.id})">Siirry →</button>`
          : `<button onclick="poista(${task.id})">Poista</button>`}
        <button onclick="tiedot(${task.id})">Tiedot</button>
      `;
  
      list.appendChild(div);
    });
  }

async function siirra(id) {
  await fetch(`/tasks/${id}/siirry`, { method: 'PUT' });
  haeJaPaivita();
}

async function poista(id) {
  await fetch(`/tasks/${id}`, { method: 'DELETE' });
  haeJaPaivita();
}

async function tiedot(id) {
  const res = await fetch(`/tasks/${id}`);
  const data = await res.json();

  var lop_Vastaus = "Ei vielä";
  if(data.lopetus == null) { alert(`Nimi: ${data.nimi}\nTiedot: ${data.tiedot}\nAloitettu: ${data.aloitus}\nLopetettu: ${lop_Vastaus}`);}
  else {alert(`Nimi: ${data.nimi}\nTiedot: ${data.tiedot}\nAloitettu: ${data.aloitus}\nLopetettu: ${data.lopetus || '-'}`);}
}

window.onload = haeJaPaivita;
