'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KubusCalculator() {
  const [sisiLuas, setSisiLuas] = useState('');
  const [sisiVolume, setSisiVolume] = useState('');
  const [luas, setLuas] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungLuas = () => {
    const s = parseFloat(sisiLuas);
    if (!isNaN(s)) {
      setLuas(6 * s * s);
    }
  };

  const hitungVolume = () => {
    const s = parseFloat(sisiVolume);
    if (!isNaN(s)) {
      setVolume(s * s * s);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Kubus </h1>
      <div className="flex space-x-4 mb-4">
  
  <h2>Kaysan Fatih Harimuswarah</h2>
</div>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Luas Permukaan</h2>
          <label className="block mb-2">Masukkan Sisi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Sisi Kubus"
            value={sisiLuas}
            onChange={(e) => setSisiLuas(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungLuas}>Hitung Luas</button>
          {luas !== null && <p className="mt-4 text-lg">Hasil Luas: {luas}</p>}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">Volume</h2>
          <label className="block mb-2">Masukkan Sisi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2 w-full"
            placeholder="Sisi Kubus"
            value={sisiVolume}
            onChange={(e) => setSisiVolume(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded w-full" onClick={hitungVolume}>Hitung Volume</button>
          {volume !== null && <p className="mt-4 text-lg">Hasil Volume: {volume}</p>}
        </div>
      </div>
      <Link href="/bangunRuang" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
