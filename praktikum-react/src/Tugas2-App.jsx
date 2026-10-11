function KartuMatkul({ nama, sks, dosen }) {
  return (
    <article>
      <h2>{nama}</h2>
      <p>Jumlah SKS: {sks}</p>
      <p>Dosen: {dosen}</p>
    </article>
  );
}

export default function App() {
  const mataKuliah = [
    { id: "web", nama: "Pemrograman Web", sks: 3, dosen: "Pak Puspa" },
    { id: "db", nama: "Basis Data", sks: 2, dosen: "Pak Kartono" },
    { id: "jar", nama: "Jaringan Komputer", sks: 3, dosen: "Pak Edo" },
    { id: "pbo", nama: "Pemrograman Berorientasi Objek", sks: 3, dosen: "Bu Tatik" },
  ];

  return (
    <main>
      <h1>Daftar Mata Kuliah</h1>
      {mataKuliah.map((item) => (
        <KartuMatkul
          key={item.id}
          nama={item.nama}
          sks={item.sks}
          dosen={item.dosen}
        />
      ))}
    </main>
  );
}
