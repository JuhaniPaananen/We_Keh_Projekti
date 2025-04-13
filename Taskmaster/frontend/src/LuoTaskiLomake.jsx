import React, { useState } from 'react';

export default function LuoTaskiLomake({ onCreate }) {
  const [nimi, asetaNimi] = useState('');
  const [tiedot, asetaTiedot] = useState('');

  const kasitteleLomake = (e) => {
    e.preventDefault();
    if (!nimi.trim()) return;
    onCreate({ nimi, tiedot });
    asetaNimi('');
    asetaTiedot('');
  };

  return (
    <div className="taski-lomake bg-gray-800 text-white shadow-xl p-6 rounded-xl border border-gray-200 mb-6">
      <form onSubmit={kasitteleLomake} className="lomake-pino">
        <h2 className="text-2xl font-semibold text-white">Luo uusi taski</h2>
        <input
          type="text"
          value={nimi}
          onChange={e => asetaNimi(e.target.value)}
          placeholder="Taskin nimi"
          className="lomake-kentta"
          required
        />
        <textarea
          value={tiedot}
          onChange={e => asetaTiedot(e.target.value)}
          placeholder="Kuvaus tai lisätiedot"
          className="lomake-kentta"
          style={{ minHeight: '10vh' }}
        ></textarea>
        <button 
          type="submit" 
          className="lomake-nappi">
          Lisää taski
        </button>
        <p></p> {/* Väli */}
      </form>
    </div>
  );
}
