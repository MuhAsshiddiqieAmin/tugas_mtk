import Link from 'next/link';

export default function BangunDatar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Pilih Bangun Datar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card name="Persegi" href="/persegi" keliling="4 × s" luas="s × s" />
        <Card name="Persegi Panjang" href="/persegi-panjang" keliling="2 × (p + l)" luas="p × l" />
        <Card name="Jajar Genjang" href="/jajar-genjang" keliling="a + b + c + d" luas="a × t" />
        <Card name="Segitiga" href="/segitiga" keliling="a + b + c" luas="½ × a × t" />
        <Card name="Belah Ketupat" href="/belah-ketupat" keliling="a + b + c + d" luas="½ × d1 × d2" />
        <Card name="Layang-Layang" href="/layang-layang" keliling="a + b + c + d" luas="½ × d1 × d2" />
        <Card name="Trapesium" href="/trapesium" keliling="a + b + c + d" luas="(a + b) / 2 × t" />
        <Card name="Lingkaran" href="/lingkaran" keliling="2 × π × r" luas="π × r²" />
      </div>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Home</Link>
    </div>
  );
}

function Card({ name, href, keliling, luas }) {
  return (
    <Link href={href} className="block p-6 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition-all">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-400">Keliling: {keliling}</p>
      <p className="text-sm text-gray-400">Luas: {luas}</p>
    </Link>
  );
}
