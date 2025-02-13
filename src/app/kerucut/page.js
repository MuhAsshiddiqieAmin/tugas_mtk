'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorKerucut() {

  const [jariJari1, setJariJari1] = useState('');
  const [jariJari2, setJariJari2] = useState('');
  const [tinggi1, setTinggi1] = useState('');
  const [tinggi2, setTinggi2] = useState('');
  const [hasilVolume, setHasilVolume] = useState(null);
  const [hasilLuasPermukaan, setHasilLuasPermukaan] = useState(null);

  const hitungVolume = () => {
    const volume = (1 / 3) * Math.PI * Math.pow(parseFloat(jariJari1), 2) * parseFloat(tinggi1);
    setHasilVolume(volume);
  };

  const hitungLuasPermukaan = () => {
    const s = Math.sqrt(Math.pow(parseFloat(jariJari2), 2) + Math.pow(parseFloat(tinggi2), 2)); // Garis pelukis
    const luasPermukaan = Math.PI * parseFloat(jariJari2) * (parseFloat(jariJari2) + s);
    setHasilLuasPermukaan(luasPermukaan);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Kerucut</h1>
      <h2>Muhammad Rifqi Assyauqi Iqbal</h2>
      <div className="flex space-x-8">
        {/* Card untuk menghitung Volume */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Volume</h2>
          <label className="block mb-2">Masukkan Jari-Jari:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Jari-Jari Alas"
            value={jariJari1}
            onChange={(e) => setJariJari1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Tinggi Kerucut"
            value={tinggi1}
            onChange={(e) => setTinggi1(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungVolume}>Hitung Volume</button>
          {hasilVolume !== null && <p className="mt-4 text-lg">Hasil Volume: {hasilVolume.toFixed(2)}</p>}
        </div>

        {/* Card untuk menghitung Luas Permukaan */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas Permukaan</h2>
          <label className="block mb-2">Masukkan Jari-Jari:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Jari-Jari Alas"
            value={jariJari2}
            onChange={(e) => setJariJari2(e.target.value)}
          />
          <label className="block mb-2">Masukkan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Tinggi Kerucut"
            value={tinggi2}
            onChange={(e) => setTinggi2(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuasPermukaan}>Hitung Luas Permukaan</button>
          {hasilLuasPermukaan !== null && <p className="mt-4 text-lg">Hasil Luas Permukaan: {hasilLuasPermukaan.toFixed(2)}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
