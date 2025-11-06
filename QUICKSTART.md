# 🚀 Quick Start Guide - SIMRS TNI AU

## Instalasi Cepat (5 Menit)

### 1. Prerequisites
Pastikan terinstall:
- Node.js 16 atau lebih baru ([Download](https://nodejs.org))
- npm (included dengan Node.js)
- Git ([Download](https://git-scm.com))

Check versi:
```bash
node --version  # harus v16.0.0 atau lebih
npm --version   # harus v8.0.0 atau lebih
```

### 2. Clone & Install
```bash
# Clone repository
git clone <repository-url>
cd simrs-tni-au

# Install dependencies
npm install
```

### 3. Jalankan Development Server
```bash
npm start
```

Buka browser dan akses: `http://localhost:3000`

✅ Done! Aplikasi sudah berjalan.

## 🌐 Deploy ke Netlify (3 Menit)

### Cara Tercepat: Drag & Drop

1. **Build aplikasi**
   ```bash
   npm run build
   ```

2. **Buka [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag folder `build/` ke browser**

4. **✅ Selesai!** Akses URL yang diberikan

### Cara Terbaik: Git Integration

1. **Push ke Git**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect di Netlify**
   - Login ke [Netlify](https://app.netlify.com)
   - Klik "Add new site" → "Import an existing project"
   - Connect repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Klik "Deploy site"

3. **✅ Auto-deploy aktif!** Setiap push = auto deploy

## 📋 Command Reference

```bash
# Development
npm start              # Jalankan dev server (http://localhost:3000)

# Production
npm run build         # Build untuk production
npx serve -s build   # Test production build locally

# Testing
npm test             # Run tests (jika ada)

# Linting
npm run lint         # Check code quality (jika configured)
```

## 🎯 Akses Modul

Setelah aplikasi berjalan, akses modul via menu sidebar:

- **Dashboard** - `/` - Overview dan statistik
- **Registrasi** - `/registrasi` - Pendaftaran pasien & antrean
- **Rekam Medis** - `/rme` - SOAP notes, progress notes
- **Farmasi** - `/farmasi` - E-resep & stok obat
- **Laboratorium** - `/laboratorium` - Order & hasil lab
- **Radiologi** - `/radiologi` - Pemeriksaan radiologi
- **Keperawatan** - `/keperawatan` - Asuhan keperawatan
- **Rawat Inap** - `/rawat-inap` - Bed management
- **Operasional** - `/operasional` - Operasional RS
- **Keuangan** - `/keuangan` - Billing & klaim
- **SDM** - `/sdm` - Jadwal & kredensial
- **Mutu** - `/mutu` - Quality assurance
- **Telemedis** - `/telemedis` - Telemedicine
- **Analitik** - `/analitik` - Reporting
- **Aerospace Medicine** - `/aerospace` - Medical aviation (khusus TNI AU)

## 🎨 Kustomisasi

### Ubah Warna Brand
Edit `/src/index.css`:
```css
:root {
  --primary: #1e40af;        /* Warna utama */
  --tniau-blue: #003d82;     /* Biru TNI AU */
  --tniau-gold: #d4af37;     /* Gold TNI AU */
}
```

### Tambah Menu Sidebar
Edit `/src/components/Sidebar.js`:
```javascript
const menuItems = [
  // Tambahkan item baru
  { path: '/menu-baru', icon: IconName, label: 'Menu Baru' },
  // ...
];
```

### Tambah Halaman Baru
1. Buat file di `/src/pages/MenuBaru.js`
2. Import & tambah route di `/src/App.js`

## 🔧 Troubleshooting

### Port 3000 sudah digunakan
```bash
# Windows
set PORT=3001 && npm start

# Mac/Linux
PORT=3001 npm start
```

### Error saat npm install
```bash
# Clear cache dan install ulang
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build gagal
```bash
# Check error message
npm run build

# Jika masalah dependency
npm install --legacy-peer-deps
```

### Aplikasi blank/error di browser
1. Check console browser (F12)
2. Clear browser cache
3. Restart dev server

## 📱 Mobile Development

Test responsive:
- Chrome DevTools (F12) → Toggle device toolbar
- Test di:
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1920px)

## 🔐 Environment Variables (Opsional)

Buat file `.env.local`:
```
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_BPJS_API_URL=https://vclaim-api.bpjs-kesehatan.go.id
```

Access di code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## 📚 Dokumentasi Lengkap

- [README.md](./README.md) - Dokumentasi utama
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Panduan deployment detail
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Panduan kontribusi
- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - API specs

## 🆘 Butuh Bantuan?

1. Check [README.md](./README.md)
2. Buka [Issues](https://github.com/your-repo/issues)
3. Email: support@simrs-tniau.mil.id

## ✨ Tips Pro

```bash
# Install React DevTools extension
# https://chrome.google.com/webstore/detail/react-developer-tools

# Hot reload otomatis saat edit code
# (sudah enabled by default)

# Format code dengan Prettier
npm install -D prettier
npx prettier --write "src/**/*.{js,jsx,json,css}"

# Bundle analysis
npm install -D webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

## 🎉 Selamat!

Anda sudah siap develop SIMRS TNI AU. Happy coding! 🚀

---

**Need help? Open an issue or contact us!**
