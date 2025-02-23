'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorSegitiga() {

  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [sisi1, setSisi1] = useState('');
  const [sisi2, setSisi2] = useState('');
  const [sisi3, setSisi3] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = 0.5 * alas * tinggi;
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Segitiga</h1>
      <h2>Nurul Karimah</h2>
      <div className="flex space-x-8">
        {/* Card untuk menghitung Luas */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Alas:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Alas Segitiga"
            value={alas}
            onChange={(e) => setAlas(e.target.value)}
          />
          <label className="block mb-2">Masukkan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Tinggi Segitiga"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuas}>Hitung Luas</button>
          {hasilLuas !== null && <p className="mt-4 text-lg">Hasil Luas: {hasilLuas}</p>}
        </div>

        {/* Card untuk menghitung Keliling */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Keliling</h2>
          <label className="block mb-2">Masukkan Sisi 1:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi 1 Segitiga"
            value={sisi1}
            onChange={(e) => setSisi1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Sisi 2:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi 2 Segitiga"
            value={sisi2}
            onChange={(e) => setSisi2(e.target.value)}
          />
          <label className="block mb-2">Masukkan Sisi 3:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi 3 Segitiga"
            value={sisi3}
            onChange={(e) => setSisi3(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungKeliling}>Hitung Keliling</button>
          {hasilKeliling !== null && <p className="mt-4 text-lg">Hasil Keliling: {hasilKeliling}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
