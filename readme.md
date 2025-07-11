# Website Custom Acrylic

Website produk custom acrylic dengan UI/UX yang menarik dan integrasi WhatsApp untuk pemesanan.

## Ciri-ciri Utama

### 🎨 UI/UX Menarik

- Design moden dengan Tailwind CSS
- Responsive untuk semua peranti
- Animasi dan transisi yang lancar
- Warna dan tipografi yang konsisten

### 🔍 Fungsi Carian dan Penapis

- Carian produk secara real-time
- Penapis mengikut kategori (Papan Tanda, Display, Hiasan)
- Interface yang mudah digunakan

### 📱 Integrasi WhatsApp

- Hantar pesanan terus ke WhatsApp
- Maklumat lengkap produk dalam mesej
- Kod pelanggan automatik
- Gambar produk, nama, kuantiti dan spesifikasi

### 🛍️ Sistem Produk

- 8 produk contoh dengan gambar berkualiti
- Modal untuk memilih spesifikasi
- Pilihan saiz, warna dan kuantiti
- Nota tambahan untuk keperluan khas

## Struktur Fail

```
acrylic-website/
├── index.html          # Fail HTML utama
├── script.js           # JavaScript untuk fungsi website
└── README.md           # Dokumentasi ini
```

## Cara Penggunaan

### 1. Buka Website

- Buka fail `index.html` dalam pelayar web
- Website akan memuatkan semua produk secara automatik

### 2. Cari Produk

- Gunakan kotak carian untuk mencari produk
- Atau gunakan butang penapis kategori

### 3. Pilih Produk

- Klik butang "Pilih Produk" pada mana-mana produk
- Isi maklumat yang diperlukan dalam modal:
  - Kuantiti
  - Saiz (lebar x tinggi)
  - Warna
  - Nota tambahan

### 4. Hantar ke WhatsApp

- Klik butang "Hantar ke WhatsApp"
- Mesej akan dibuka dalam WhatsApp dengan maklumat lengkap
- Kod pelanggan akan dijana secara automatik

## Konfigurasi

### Nombor WhatsApp

Untuk menukar nombor WhatsApp, edit fail `script.js`:

```javascript
// Baris 158 - Tukar nombor telefon
const whatsappUrl = `https://wa.me/60123456789?text=${encodeURIComponent(
  message
)}`;
```

### Produk

Untuk menambah atau mengubah produk, edit array `products` dalam `script.js`:

```javascript
const products = [
  {
    id: 1,
    name: "Nama Produk",
    category: "sign", // sign, display, decoration
    price: 150.0,
    image: "URL_GAMBAR",
    description: "Penerangan produk",
  },
  // ... produk lain
];
```

### Kategori

Untuk menambah kategori baru, edit HTML dalam `index.html`:

```html
<button
  class="category-btn px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
  data-category="kategori_baru"
>
  Nama Kategori
</button>
```

## Teknologi Digunakan

- **HTML5** - Struktur website
- **Tailwind CSS** - Styling dan responsive design
- **JavaScript (ES6+)** - Fungsi interaktif
- **Font Awesome** - Ikon
- **Unsplash** - Gambar produk

## Responsive Design

Website ini direka untuk berfungsi dengan baik pada:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## Browser Support

- Chrome (versi terkini)
- Firefox (versi terkini)
- Safari (versi terkini)
- Edge (versi terkini)

## Penambahbaikan Masa Depan

- [ ] Sistem troli
- [ ] Kalkulator harga automatik
- [ ] Galeri gambar produk
- [ ] Sistem ulasan pelanggan
- [ ] Integrasi dengan sistem pembayaran
- [ ] Panel admin untuk menguruskan produk

## Sokongan

Untuk pertanyaan atau bantuan teknikal, sila hubungi kami melalui WhatsApp yang tertera dalam website.

---

**Dibangunkan dengan ❤️ untuk Custom Acrylic**
