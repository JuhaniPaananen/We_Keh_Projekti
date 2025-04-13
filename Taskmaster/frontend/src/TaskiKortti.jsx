import React from 'react';

export default function TaskiKortti({ taski, siirra, poista, naytaTiedot }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border taski-kortti">
      <h3 className="font-semibold text-lg mb-1">{taski.nimi}</h3>
      <p className="text-sm text-gray-600 mb-2">Lisätty: {taski.aloitus}</p>
      <p className="text-sm text-gray-600 mb-2">Valmis: {taski.lopetus || ''}</p>
      <div className="flex gap-2">
        <button
          onClick={naytaTiedot}
          className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 text-sm"
        >
          Tiedot
        </button>
        {taski.vaihe !== 'valmis' ? (
          <button
            onClick={siirra}
            className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 text-sm"
          >
            Siirry
          </button>
        ) : (
          <button
            onClick={poista}
            className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 text-sm"
          >
            Poista
          </button>
        )}
      </div>
    </div>
  );
}
