function Judul() {
  return <h1>Profil Mahasiswa</h1>;
}

function Biodata({ nama, nim, prodi }) {
  return (
    <section>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {prodi}</p>
    </section>
  );
}

function Footer() {
  return <footer>Praktikum Pemrograman Web</footer>;
}

export default function App() {
  const nama = "Fransisca Noviana";
  const nim = "255314083";
  const prodi = "Informatika";

  return (
    <main>
      <Judul />
      <Biodata nama={nama} nim={nim} prodi={prodi} />
      <Footer />
    </main>
  );
}
