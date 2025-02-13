'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorLayangLayang() {

  const [diagonal1, setDiagonal1] = useState('');
  const [diagonal2, setDiagonal2] = useState('');
  const [sisi1, setSisi1] = useState('');
  const [sisi2, setSisi2] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = 0.5 * diagonal1 * diagonal2;
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = 2 * (parseFloat(sisi1) + parseFloat(sisi2));
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Layang-Layang</h1>
      <h2>Muhammad Asshiddiqie Amin</h2>
      <div className="flex space-x-8">
        {/* Card untuk menghitung Luas */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Diagonal 1:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Diagonal 1"
            value={diagonal1}
            onChange={(e) => setDiagonal1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Diagonal 2:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Diagonal 2"
            value={diagonal2}
            onChange={(e) => setDiagonal2(e.target.value)}
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
            placeholder="Sisi 1"
            value={sisi1}
            onChange={(e) => setSisi1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Sisi 2:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi 2"
            value={sisi2}
            onChange={(e) => setSisi2(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungKeliling}>Hitung Keliling</button>
          {hasilKeliling !== null && <p className="mt-4 text-lg">Hasil Keliling: {hasilKeliling}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
