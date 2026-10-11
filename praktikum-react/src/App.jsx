import { useState } from "react";

function ItemTugas({ item, onToggle, onHapus }) {
  return (
    <li className={item.selesai ? "selesai" : ""}>
      <span>{item.judul}</span>
      <button type="button" onClick={() => onToggle(item.id)}>
        {item.selesai ? "Batalkan" : "Selesai"}
      </button>
      <button type="button" onClick={() => onHapus(item.id)}>
        Hapus
      </button>
    </li>
  );
}

const FILTER = ["Semua", "Aktif", "Selesai"];

export default function App() {
  const [judul, setJudul] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [error, setError] = useState("");
  const [tugas, setTugas] = useState([
    { id: "awal", judul: "Pelajari JSX", selesai: false },
  ]);

  function tambah(event) {
    event.preventDefault();
    const teks = judul.trim();
    if (!teks) {
      setError("Judul tugas wajib diisi.");
      return;
    }
    const item = {
      id: crypto.randomUUID(), judul: teks, selesai: false,
    };
    setTugas((lama) => [...lama, item]);
    setJudul("");
    setError("");
  }

  function toggle(id) {
    setTugas((lama) => lama.map((item) =>
      item.id === id ? { ...item, selesai: !item.selesai } : item
    ));
  }

  function hapus(id) {
    setTugas((lama) => lama.filter((item) => item.id !== id));
  }

  const jumlahSelesai = tugas.filter((item) => item.selesai).length;
  // Filter hanya mengubah daftar yang ditampilkan, bukan data state
  const tampil = tugas.filter((item) => {
    if (filter === "Aktif") return !item.selesai;
    if (filter === "Selesai") return item.selesai;
    return true;
  });

  return (
    <main>
      <h1>Daftar Tugas Kuliah</h1>
      <form onSubmit={tambah}>
        <label htmlFor="judul">Judul tugas</label>
        <div className="baris-form">
          <input id="judul" value={judul}
            onChange={(event) => setJudul(event.target.value)} />
          <button type="submit">Tambah</button>
        </div>
      </form>
      {error && <p role="alert">{error}</p>}
      <p>Selesai {jumlahSelesai} dari {tugas.length} tugas</p>
      <div className="baris-form">
        {FILTER.map((nama) => (
          <button key={nama} type="button"
            aria-pressed={filter === nama}
            onClick={() => setFilter(nama)}>
            {nama}
          </button>
        ))}
      </div>
      {tugas.length === 0 ? (
        <p>Belum ada tugas.</p>
      ) : tampil.length === 0 ? (
        <p>Tidak ada tugas pada filter {filter}.</p>
      ) : (
        <ul>
          {tampil.map((item) => (
            <ItemTugas key={item.id} item={item}
              onToggle={toggle} onHapus={hapus} />
          ))}
        </ul>
      )}
    </main>
  );
}
