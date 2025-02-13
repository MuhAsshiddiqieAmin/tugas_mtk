'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function KalkulatorJajarGenjang() {

  const [alas1, setAlas1] = useState('');
  const [alas2, setAlas2] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [sisiMiring, setSisiMiring] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = alas1 * tinggi;
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = 2 * (parseFloat(alas2) + parseFloat(sisiMiring));
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Jajar Genjang</h1>
      <h2>sakha ibadil kiram</h2>
      <div className="flex space-x-8">
        {/* Card untuk menghitung Luas */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Alas:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Alas Jajar Genjang"
            value={alas1}
            onChange={(e) => setAlas1(e.target.value)}
          />
          <label className="block mb-2">Masukkan Tinggi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Tinggi Jajar Genjang"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuas}>Hitung Luas</button>
          {hasilLuas !== null && <p className="mt-4 text-lg">Hasil Luas: {hasilLuas}</p>}
        </div>

        {/* Card untuk menghitung Keliling */}
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Keliling</h2>
          <label className="block mb-2">Masukkan Alas:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Alas Jajar Genjang"
            value={alas2}
            onChange={(e) => setAlas2(e.target.value)}
          />
          <label className="block mb-2">Masukkan Sisi Miring:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi Miring Jajar Genjang"
            value={sisiMiring}
            onChange={(e) => setSisiMiring(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungKeliling}>Hitung Keliling</button>
          {hasilKeliling !== null && <p className="mt-4 text-lg">Hasil Keliling: {hasilKeliling}</p>}
        </div>
      </div>
      <Link href="/bangunDatar" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Pilihan</Link>
    </div>
  );
}
