'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function TabungCalculator() {
  const [jariJariLuas, setJariJariLuas] = useState('');
  const [tinggiLuas, setTinggiLuas] = useState('');
  const [jariJariVolume, setJariJariVolume] = useState('');
  const [tinggiVolume, setTinggiVolume] = useState('');
  const [luas, setLuas] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungLuas = () => {
    const r = parseFloat(jariJariLuas);
    const t = parseFloat(tinggiLuas);
    if (!isNaN(r) && !isNaN(t)) {
      setLuas(2 * Math.PI * r * (r + t));
    }
  };

  const hitungVolume = () => {
    const r = parseFloat(jariJariVolume);
    const t = parseFloat(tinggiVolume);
    if (!isNaN(r) && !isNaN(t)) {
      setVolume(Math.PI * r * r * t);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Tabung</h1>
      <h2>Muhammad Jibran Ghaly</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Luas Permukaan</h2>
          <label className="block mb-2">Masukkan Jari-jari dan Tinggi:</label>
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Jari-jari" value={jariJariLuas} onChange={(e) => setJariJariLuas(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi" value={tinggiLuas} onChange={(e) => setTinggiLuas(e.target.value)} />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungLuas}>Hitung Luas</button>
          {luas !== null && <p className="mt-4 text-lg">Hasil Luas: {luas.toFixed(2)}</p>}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Volume</h2>
          <label className="block mb-2">Masukkan Jari-jari dan Tinggi:</label>
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Jari-jari" value={jariJariVolume} onChange={(e) => setJariJariVolume(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi" value={tinggiVolume} onChange={(e) => setTinggiVolume(e.target.value)} />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungVolume}>Hitung Volume</button>
          {volume !== null && <p className="mt-4 text-lg">Hasil Volume: {volume.toFixed(2)}</p>}
        </div>
      </div>
      <Link href="/bangunRuang" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
