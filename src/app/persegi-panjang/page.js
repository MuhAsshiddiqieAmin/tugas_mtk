'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorPersegiPanjang() {

  const [panjang1, setPanjang1] = useState('');
  const [panjang2, setPanjang2] = useState('');
  const [lebar, setLebar] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = panjang1 * lebar;
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = 2 * (parseFloat(panjang2) + parseFloat(tinggi));
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Persegi Panjang</h1>
      <h2>Muhammad Syahrul Ramadhan</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Panjang:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Panjang Persegi Panjang"
            value={panjang1}
            onChange={(e) => setPanjang1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Lebar:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Lebar Persegi Panjang"
            value={lebar}
            onChange={(e) => setLebar(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuas}>Hitung Luas</button>
          {hasilLuas !== null && <p className="mt-4 text-lg">Hasil Luas: {hasilLuas}</p>}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Keliling</h2>
          <label className="block mb-2">Masukkan Panjang:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Panjang Persegi Panjang"
            value={panjang2}
            onChange={(e) => setPanjang2(e.target.value)}
          />
          <label className="block mb-2">Masukkan Lebar:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Lebar Persegi Panjang"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungKeliling}>Hitung Keliling</button>
          {hasilKeliling !== null && <p className="mt-4 text-lg">Hasil Keliling: {hasilKeliling}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
