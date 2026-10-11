# Praktikum React JS Dasar

Nama: Fransisca Noviana | NIM: 255314083 | Program Studi: Informatika
Mata kuliah: Pemrograman Web

## Menjalankan

```
npm install
npm run dev
```

Buka URL Local yang tampil di terminal (biasanya http://localhost:5173).
Pemeriksaan tambahan: `npm run build`, `npm run preview`, `npm run lint`.

## Isi proyek

`src/App.jsx` berisi hasil akhir Tugas 4 (Daftar Tugas Kuliah + filter
Semua/Aktif/Selesai). Data hanya di state, jadi kembali ke satu tugas awal
setelah halaman dimuat ulang (sesuai versi dasar pada modul).

Tugas lain disimpan sebagai file terpisah. Untuk melihatnya, ubah satu baris
import di `src/main.jsx`, lalu simpan (server dev otomatis memuat ulang):

| Tugas | File | Baris import di `src/main.jsx` |
|---|---|---|
| 1. Profil mahasiswa | `src/Tugas1-App.jsx` | `import App from "./Tugas1-App.jsx";` |
| 2. Daftar mata kuliah | `src/Tugas2-App.jsx` | `import App from "./Tugas2-App.jsx";` |
| 3. Penghitung kehadiran 0 sampai 30 | `src/Tugas3-App.jsx` | `import App from "./Tugas3-App.jsx";` |
| 4. Daftar Tugas + filter | `src/App.jsx` | `import App from "./App.jsx";` (bawaan) |
| Pengayaan 1: localStorage | `src/Pengayaan1-App.jsx` | `import App from "./Pengayaan1-App.jsx";` |
| Pengayaan 2: edit judul | `src/Pengayaan2-App.jsx` | `import App from "./Pengayaan2-App.jsx";` |

Kembalikan ke `import App from "./App.jsx";` setelah selesai melihat.
`src/index-awal.css` adalah CSS awal dari Percobaan 1 (arsip, tidak diimpor).
