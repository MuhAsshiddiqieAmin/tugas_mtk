'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorLingkaran() {

  const [jariJari1, setJariJari1] = useState('');
  const [jariJari2, setJariJari2] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = Math.PI * Math.pow(parseFloat(jariJari), 2);
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = 2 * Math.PI * parseFloat(jariJari);
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Lingkaran</h1>
      <div className="flex space-x-8">
        {/* Card untuk menghitung Luas */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Jari-Jari:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Jari-Jari Lingkaran"
            value={jariJari1}
            onChange={(e) => setJariJari1(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuas}>Hitung Luas</button>
          {hasilLuas !== null && <p className="mt-4 text-lg">Hasil Luas: {hasilLuas.toFixed(2)}</p>}
        </div>

        {/* Card untuk menghitung Keliling */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Keliling</h2>
          <label className="block mb-2">Masukkan Jari-Jari:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Jari-Jari Lingkaran"
            value={jariJari2}
            onChange={(e) => setJariJari2(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungKeliling}>Hitung Keliling</button>
          {hasilKeliling !== null && <p className="mt-4 text-lg">Hasil Keliling: {hasilKeliling.toFixed(2)}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
