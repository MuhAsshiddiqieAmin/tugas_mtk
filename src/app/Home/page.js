import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kalkulator Bangun Datar dan Ruang</h1>
      <p className="text-lg mb-6">Kelompok Roblox</p>
      <p className="text-md mb-6 text-center">
        Muh. Asshiddiqie Amin, Muh Jibran Ghaly, Muhammad Syahrul Ramadhan, Muhammad Rifatul Anam,<br/>
        Kaysan Fatih Harimuswarah, Sakha Ibadil Kiram, Raihana Jinan Ulya, Nurul Karimah
      </p>
      
      <div className="flex space-x-4">
      <Link href="/bangunDatar">
        <button style={{ margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white' }}>
          Kalkulator Bangun Datar
        </button>
      </Link>
      <Link href="/bangunRuang">
        <button style={{ margin: '10px', padding: '10px', backgroundColor: 'green', color: 'white' }}>
          Kalkulator Bangun Ruang
        </button>
      </Link>
      </div>
    </div>
  );
}
