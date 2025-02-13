'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function BalokCalculator() {
  const [panjangLuas, setPanjangLuas] = useState('');
  const [lebarLuas, setLebarLuas] = useState('');
  const [tinggiLuas, setTinggiLuas] = useState('');
  const [panjangVolume, setPanjangVolume] = useState('');
  const [lebarVolume, setLebarVolume] = useState('');
  const [tinggiVolume, setTinggiVolume] = useState('');
  const [luas, setLuas] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungLuas = () => {
    const p = parseFloat(panjangLuas);
    const l = parseFloat(lebarLuas);
    const t = parseFloat(tinggiLuas);
    if (!isNaN(p) && !isNaN(l) && !isNaN(t)) {
      setLuas(2 * (p * l + p * t + l * t));
    }
  };

  const hitungVolume = () => {
    const p = parseFloat(panjangVolume);
    const l = parseFloat(lebarVolume);
    const t = parseFloat(tinggiVolume);
    if (!isNaN(p) && !isNaN(l) && !isNaN(t)) {
      setVolume(p * l * t);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Balok</h1>
      <h2>Raihana Jinan Ulya</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Luas Permukaan</h2>
          <label className="block mb-2">Masukkan Panjang, Lebar, dan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Panjang"
            value={panjangLuas}
            onChange={(e) => setPanjangLuas(e.target.value)}
          />
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Lebar"
            value={lebarLuas}
            onChange={(e) => setLebarLuas(e.target.value)}
          />
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Tinggi"
            value={tinggiLuas}
            onChange={(e) => setTinggiLuas(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungLuas}>Hitung Luas</button>
          {luas !== null && <p className="mt-4 text-lg">Hasil Luas: {luas}</p>}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Volume</h2>
          <label className="block mb-2">Masukkan Panjang, Lebar, dan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Panjang"
            value={panjangVolume}
            onChange={(e) => setPanjangVolume(e.target.value)}
          />
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Lebar"
            value={lebarVolume}
            onChange={(e) => setLebarVolume(e.target.value)}
          />
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Tinggi"
            value={tinggiVolume}
            onChange={(e) => setTinggiVolume(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungVolume}>Hitung Volume</button>
          {volume !== null && <p className="mt-4 text-lg">Hasil Volume: {volume}</p>}
        </div>
      </div>
      <Link href="/bangunRuang" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}