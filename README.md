# Roomora 🌌 - Property Booking Web App

**Roomora** adalah prototipe aplikasi web *frontend* modern untuk platform pemesanan properti, yang dibangun dengan visi untuk menciptakan antarmuka yang estetik, modern, dan fungsional.

### Tagline
*"Find your stay, feel at home."*

---

## 📜 Tentang Proyek

Proyek ini merupakan simulasi lengkap dari pengalaman pengguna pada sebuah platform *booking online*. Dibangun dari nol, Roomora didesain untuk menjadi sebuah *portfolio piece* yang menunjukkan kemampuan dalam pengembangan antarmuka web modern, mulai dari konsep desain hingga implementasi fitur-fitur kompleks.

Aplikasi ini bersifat *frontend-only*, artinya tidak ada *database* atau *server* sungguhan. Seluruh data (seperti daftar properti dan status login) dikelola di sisi klien menggunakan React Context, menjadikannya contoh sempurna untuk mendemonstrasikan keahlian dalam manajemen *state* dan arsitektur komponen.

## ✨ Fitur Utama

-   **Halaman Utama Dinamis**: *Landing page* yang menarik secara visual dengan beberapa bagian: *hero section*, destinasi unggulan, penjelajahan berdasarkan kategori, dan bagian promo.
-   **Eksplorasi & Filter Canggih**: Pengguna dapat melihat semua properti dan memfilternya secara *real-time* berdasarkan nama, harga, rating, dan fasilitas.
-   **Tampilan Detail Properti**: Halaman yang menampilkan informasi lengkap tentang properti, termasuk galeri foto, deskripsi, fasilitas, dan boks pemesanan.
-   **Alur Pemesanan Lengkap**: Pengguna dapat mengisi detail pemesanan di halaman konfirmasi dan akan mendapatkan halaman sukses dengan ringkasan transaksi.
-   **Sistem Akun & Wishlist**: Pengguna dapat "login" (simulasi) untuk mengakses halaman akun pribadi, di mana mereka bisa melihat daftar properti yang telah mereka tandai sebagai favorit (*wishlist*).
-   **UX Modern**: Menggunakan sistem notifikasi modal yang profesional untuk menggantikan `alert()` bawaan browser, memberikan pengalaman pengguna yang lebih baik.

## 🛠️ Teknologi yang Digunakan

-   **React.js (v19)**: Fondasi utama untuk membangun antarmuka pengguna yang interaktif dan berbasis komponen.
-   **Vite**: *Build tool* modern yang memberikan pengalaman pengembangan super cepat.
-   **Tailwind CSS (via CDN)**: *Framework* CSS *utility-first* untuk mendesain antarmuka kustom dengan cepat.
-   **Lucide React**: *Library* ikon yang ringan, modern, dan konsisten.
-   **React Context**: Digunakan untuk manajemen *state* global, terutama untuk `AuthContext` (status login & *wishlist*) dan `ModalContext` (sistem notifikasi).

## 🚀 Instalasi & Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/yuridazani/roomora-app.git]
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd roomora-app
    ```
3.  **Install semua *dependencies*:**
    ```bash
    npm install
    ```
4.  **Jalankan server development:**
    ```bash
    npm run dev
    ```
    Buka browser Anda dan navigasi ke `http://localhost:5173` (atau port lain yang ditampilkan di terminal).

## 📁 Struktur Folder

```
src
├── assets/         // Gambar & ikon lokal
├── components/     // Komponen UI yang dapat dipakai ulang
├── context/        // React Context untuk state global
├── data/           // Data statis/tiruan (daftar properti)
├── pages/          // Komponen halaman (HomePage, ExplorePage, dll.)
├── App.jsx         // Komponen utama + routing
└── main.jsx        // Titik masuk aplikasi React
```

## 🎨 Identitas Brand

**Tipografi**
- Heading / Logo: `Clash Display`
- Body: `Satoshi`
- Accent: `Recoleta` (*fallback*: `Playfair Display`)

**Palet Warna**
- Primary (Brand Main): `Midnight Green` - `#113537`
- Secondary: `Charcoal` - `#37505C`
- Background Light: `Champagne` - `#FFEAD0`
- Accent: `Bright Pink Crayola` - `#F76F8E`
- Neutral/Detail: `Rose Taupe` - `#96616B`

---

Proyek ini adalah demonstrasi pengembangan aplikasi *frontend* modern dari ide hingga eksekusi.

**Dibuat oleh: Yurida Zani**
