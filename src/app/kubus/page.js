'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KubusCalculator() {
  const [sisi, setSisi] = useState('');
  const [luas, setLuas] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungKubus = () => {
    const s = parseFloat(sisi);
    if (!isNaN(s)) {
      setLuas(6 * s * s);
      setVolume(s * s * s);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Kubus</h1>
      <input
        type="number"
        placeholder="Masukkan panjang sisi"
        value={sisi}
        onChange={(e) => setSisi(e.target.value)}
        className="mb-4 p-2 text-black"
      />
      <button onClick={hitungKubus} className="bg-blue-500 p-2 rounded text-white">Hitung</button>
      {luas !== null && volume !== null && (
        <div className="mt-4">
          <p>Luas Permukaan: {luas}</p>
          <p>Volume: {volume}</p>
        </div>
      )}
      <Link href="/bangunRuang" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>    
  );
}
