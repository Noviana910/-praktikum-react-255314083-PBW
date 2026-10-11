import { useState } from "react";

const BATAS = 30;

export default function App() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <main>
      <h1>Penghitung Kehadiran</h1>
      <p>Jumlah hadir: {jumlah}</p>
      <button
        onClick={() => setJumlah((n) => Math.min(BATAS, n + 1))}
        disabled={jumlah >= BATAS}
      >
        Tambah
      </button>
      <button onClick={() => setJumlah((n) => Math.max(0, n - 1))}>
        Kurangi
      </button>
      <button onClick={() => setJumlah(0)}>Reset</button>
      <p>{jumlah === 0 ? "Belum ada mahasiswa" : "Ada mahasiswa"}</p>
    </main>
  );
}
