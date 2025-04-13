import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskiKortti from './TaskiKortti';
import LuoTaskiLomake from './LuoTaskiLomake';
import './App.css';

const API_OSOITE = 'http://localhost:3000';

export default function Sovellus() {
  const [taskit, asetaTaskit] = useState([]);
  const [valittuTaski, asetaValittuTaski] = useState(null);

  const haeTaskit = async () => {
    const vastaus = await axios.get(`${API_OSOITE}/tasks`);
    asetaTaskit(vastaus.data);
  };

  useEffect(() => {
    haeTaskit();
  }, []);

  const luoTaski = async (uusiTaski) => {
    await axios.post(`${API_OSOITE}/tasks`, uusiTaski);
    haeTaskit();
  };

  const siirraTaski = async (id) => {
    await axios.put(`${API_OSOITE}/tasks/${id}/siirry`);
    haeTaskit();
  };

  const poistaTaski = async (id) => {
    await axios.delete(`${API_OSOITE}/tasks/${id}`);
    haeTaskit();
  };

  const naytaTiedot = (taski) => {
    alert(`Tiedot: ${taski.tiedot}\nAika: ${taski.aloitus}\nVaihe: ${taski.vaihe}`);
    {/* Tähän olisi tullut korjattuna ajan määritelmät, mutta en keksinyt miten sen saisi järkevästi, joten se jäi nyt. */}
    if (taski.vaihe == "ei aloitettu")
    {
    }
    else if (taski.vaihe == "kesken")
    {

    }
    else 
    {

    }
  };

  const jaotellut = {
    'ei aloitettu': [],
    'kesken': [],
    'valmis': []
  };

  taskit.forEach(t => jaotellut[t.vaihe].push(t));

  return (
    <div className="p-4 max-w-7xl mx-auto" style={{ minHeight: '90vh', alignContent: 'center' }}>
      <h1 className="text-3xl font-bold mb-6" style={{ alignItems: 'center', textAlign: 'center' }}>📝 Taskien hallinta</h1>
      
      <div className="taski-sarake bg-gray-800 text-white p-4 mb-6 rounded">
        <LuoTaskiLomake onCreate={luoTaski} />
      </div>

      <p></p> {/* Väli */}

      <div className="taski-sarakkeet mt-8 flex gap-4 overflow-x-auto">
        {Object.entries(jaotellut).map(([vaihe, lista]) => {
          const luokka = `sarake-${vaihe.replace(/\s+/g, '-').toLowerCase()}`;

          return (
            <div
              key={vaihe}
              className={`taski-sarake ${luokka} min-w-[300px] max-w-[400px]`}
            >
              <h2 className="text-xl font-semibold mb-4 text-center">
                {vaihe.toUpperCase()}
              </h2>
              <div className="space-y-4 max-h-[70vh] overflow-auto pr-2">
                {lista.map(taski => (
                  <TaskiKortti
                    key={taski.id}
                    taski={taski}
                    siirra={() => siirraTaski(taski.id)}
                    poista={() => poistaTaski(taski.id)}
                    naytaTiedot={() => naytaTiedot(taski)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
