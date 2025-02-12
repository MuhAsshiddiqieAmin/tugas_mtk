'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function PrismaSegitigaCalculator() {
  const [alasLuas, setAlasLuas] = useState('');
  const [tinggiSegitigaLuas, setTinggiSegitigaLuas] = useState('');
  const [tinggiPrismaLuas, setTinggiPrismaLuas] = useState('');
  const [alasVolume, setAlasVolume] = useState('');
  const [tinggiSegitigaVolume, setTinggiSegitigaVolume] = useState('');
  const [tinggiPrismaVolume, setTinggiPrismaVolume] = useState('');
  const [luas, setLuas] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungLuas = () => {
    const a = parseFloat(alasLuas);
    const ts = parseFloat(tinggiSegitigaLuas);
    const tp = parseFloat(tinggiPrismaLuas);
    if (!isNaN(a) && !isNaN(ts) && !isNaN(tp)) {
      const luasAlas = 0.5 * a * ts;
      const luasSelimut = 3 * (a * tp);
      setLuas((2 * luasAlas) + luasSelimut);
    }
  };

  const hitungVolume = () => {
    const a = parseFloat(alasVolume);
    const ts = parseFloat(tinggiSegitigaVolume);
    const tp = parseFloat(tinggiPrismaVolume);
    if (!isNaN(a) && !isNaN(ts) && !isNaN(tp)) {
      setVolume((0.5 * a * ts) * tp);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Prisma Segitiga</h1>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Luas Permukaan</h2>
          <label className="block mb-2">Masukkan Alas, Tinggi Segitiga, dan Tinggi Prisma:</label>
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Alas Segitiga" value={alasLuas} onChange={(e) => setAlasLuas(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi Segitiga" value={tinggiSegitigaLuas} onChange={(e) => setTinggiSegitigaLuas(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi Prisma" value={tinggiPrismaLuas} onChange={(e) => setTinggiPrismaLuas(e.target.value)} />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungLuas}>Hitung Luas</button>
          {luas !== null && <p className="mt-4 text-lg">Hasil Luas: {luas}</p>}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Volume</h2>
          <label className="block mb-2">Masukkan Alas, Tinggi Segitiga, dan Tinggi Prisma:</label>
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Alas Segitiga" value={alasVolume} onChange={(e) => setAlasVolume(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi Segitiga" value={tinggiSegitigaVolume} onChange={(e) => setTinggiSegitigaVolume(e.target.value)} />
          <input type="number" className="p-2 rounded bg-gray-700 text-white mb-2 w-full" placeholder="Tinggi Prisma" value={tinggiPrismaVolume} onChange={(e) => setTinggiPrismaVolume(e.target.value)} />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungVolume}>Hitung Volume</button>
          {volume !== null && <p className="mt-4 text-lg">Hasil Volume: {volume}</p>}
        </div>
      </div>
      <Link href="/bangunRuang" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
