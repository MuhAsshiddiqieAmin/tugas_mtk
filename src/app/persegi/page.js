'use client'
import { useState } from 'react';
//import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function KalkulatorPersegi() {

  // const pathname = usePathname();
  // const bangun = pathname.split('/').pop();

  const [sisi1, setSisi1] = useState('');
  const [sisi2, setSisi2] = useState('');
  const [hasilLuas, setHasilLuas] = useState(null);
  const [hasilKeliling, setHasilKeliling] = useState(null);

  const hitungLuas = () => {
    const luas = sisi1 * sisi1;
    setHasilLuas(luas);
  };

  const hitungKeliling = () => {
    const keliling = 4 * sisi2;
    setHasilKeliling(keliling);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Persegi</h1>
      <h2>Raihana Jinan Ulya</h2>
      <div className="flex space-x-8">
        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Luas</h2>
          <label className="block mb-2">Masukkan Sisi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi Persegi"
            value={sisi1}
            onChange={(e) => setSisi1(e.target.value)}
          />
          <button className="mt-4 bg-blue-500 p-2 rounded" onClick={hitungLuas}>Hitung Luas</button>
          {hasilLuas !== null && <p className="mt-4 text-lg">Hasil Luas: {hasilLuas}</p>}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl w-80">
          <h2 className="text-xl font-semibold mb-4">Keliling</h2>
          <label className="block mb-2">Masukkan Sisi:</label>
          <input
            type="number"
            className="p-2 rounded bg-gray-700 text-white mb-2"
            placeholder="Sisi Persegi"
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
