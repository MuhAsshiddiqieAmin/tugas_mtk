import Link from 'next/link';

export default function BangunRuang() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Pilih Bangun Ruang</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card name="Kubus" href="kubus" formula="6R²" volume="R³" />
        <Card name="Balok" href="balok" formula="2pl + 2pt + 2lt" volume="plt" />
        <Card name="Limas Segiempat" href="limas-segiempat" formula="L₁ + L₂ + L₃ + L₄ + L₅" volume="1/3 La T" />
        <Card name="Prisma Segitiga" href="prisma-segitiga" formula="(S₁ + S₂ + S₃) × T" volume="1/2 aT" />
        <Card name="Limas Segitiga" href="limas-segitiga" formula="L₁ + L₂ + L₃ + L₄" volume="1/6 aT" />
        <Card name="Tabung" href="tabung" formula="2πrT + 2πr²" volume="πr²T" />
        <Card name="Kerucut" href="kerucut" formula="πrs + πr²" volume="1/3 πr²T" />
        <Card name="Bola" href="bola" formula="4πr²" volume="4/3 πr³" />
      </div>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">&#8592; Kembali ke Home</Link>
    </div>
  );
}

function Card({ name, href, formula, volume }) {
  return (
    <Link href={href} className="block p-6 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition-all">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-400">Luas: {formula}</p>
      <p className="text-sm text-gray-400">Volume: {volume}</p>
    </Link>
  );
}
