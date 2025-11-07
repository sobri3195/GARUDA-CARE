# SIMRS RS Trimatra - Sistem Informasi Rumah Sakit Trimatra

Sistem Informasi Rumah Sakit (SIMRS) komprehensif yang dirancang untuk Rumah Sakit Trimatra dengan fitur lengkap termasuk modul Aerospace Medicine untuk mendukung layanan kesehatan bagi ketiga angkatan (TNI AD, AL, AU).

## 🚀 Fitur Utama

### 1. Registrasi, Antrean & Rujukan
- Registrasi pasien baru/lama dengan NIK/NRP
- Pemetaan unit/satuan TNI (AD, AL, AU)
- Sistem antrean omni-channel (loket, kiosk, mobile/web)
- Manajemen jadwal dokter dan poliklinik
- Rujukan internal dan eksternal (BPJS)
- Administrasi dokumen (SEP, surat rujukan, consent)

### 2. Rekam Medis Elektronik (RME)
- SOAP Notes dengan problem list dan care plan
- IGD dengan triase ESI/START dan time-stamping
- Rawat Jalan dan Rawat Inap
- Bedah/OK dengan surgical safety checklist
- ICU/HCU dengan flowsheet intensif
- Obgyn & Neonatal, Penyakit Infeksi
- Aerospace Medicine (fit-to-fly, pemeriksaan awak)
- Dokumen legal dan informed consent

### 3. Farmasi
- E-Resep dengan verifikasi otomatis
- Drug interaction checking
- Dispensing dengan barcode (Five Rights)
- Manajemen stok multi-gudang
- Narkotika/Psikotropika tracking
- Monitoring rantai dingin (cold chain)
- Farmakovigilans dan antimicrobial stewardship

### 4. Laboratorium & Radiologi
- Order pemeriksaan lab/radiologi
- Specimen tracking
- Validasi hasil dengan delta check
- Critical value alert
- Integrasi alat analyzer
- PACS viewer (dalam pengembangan)

### 5. Keperawatan & Penunjang Klinik
- Asesmen keperawatan (NANDA, NIC/NOC)
- eMAR (electronic Medication Administration Record)
- Bundle kepatuhan (VAP, CAUTI, CLABSI)
- Manajemen gizi dan diet
- Fisioterapi dan rehabilitasi

### 6. Manajemen Operasional
- Bed Management dengan peta real-time
- Monitoring BOR/LOS/TOI
- Linen & Laundry tracking
- Housekeeping scheduling
- Limbah medis/B3
- CMMS (Computerized Maintenance Management System)

### 7. Keuangan & Revenue Cycle
- Multi-skema tarif (TNI/Umum/BPJS)
- Billing otomatis
- Klaim BPJS (V-Claim/e-Klaim)
- Manajemen piutang
- Pelaporan fiskal

### 8. SDM, Jadwal & Pendidikan
- Roster shift dinas
- Kredensial & privilege (STR/SIP)
- Absensi terintegrasi
- Teaching hospital & logbook

### 9. Mutu, Risiko & Keselamatan Pasien
- Pelaporan insiden keselamatan pasien
- PPI (Pencegahan dan Pengendalian Infeksi)
- Akreditasi (SNARS/KARS)
- Survei kepuasan pasien

### 10. Komunikasi & Telemedis
- Portal pasien
- Telemedis/telemedicine
- Notifikasi otomatis (WA/SMS/Email)
- Call center & CRM

### 11. Analitik & Pelaporan
- Dashboard eksekutif
- Pelaporan wajib (SIRS, IFRS)
- 10 besar penyakit
- Data warehouse
- Penelitian dan etik

### 12. Aerospace Medicine ✈️
- **Fit-to-Fly Assessment**: Pemeriksaan kelayakan terbang awak pesawat
- **Pemeriksaan Berkala Awak**: Audiometri, visus, spirometri, EKG, lab khusus
- **Medical Readiness**: Status kesiapan medis individual dan unit untuk deployment
- **Grounding/Waiver Management**: Pengelolaan grounding sementara dan waiver medis
- **Aircrew Profile**: Rekam profil kesehatan awak dan deployability
- **Drug/Alcohol Screening**: Tes berkala untuk keamanan penerbangan

## 🛠️ Teknologi

- **Frontend**: React.js 18+
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Styling**: CSS3 (Custom Design System)
- **Deployment**: Netlify

## 📦 Instalasi

### Prerequisites
- Node.js 16+ dan npm

### Clone dan Install
```bash
git clone <repository-url>
cd simrs-rs-trimatra
npm install
```

## 🚀 Development

Jalankan development server:

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

## 🏗️ Build untuk Production

```bash
npm run build
```

Hasil build akan tersimpan di folder `build/` yang siap di-deploy ke Netlify.

## 📤 Deploy ke Netlify

### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Via Netlify Dashboard
1. Login ke [Netlify](https://www.netlify.com)
2. Klik "Add new site" → "Import an existing project"
3. Connect ke repository Git Anda
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Deploy!

### Via Drag & Drop
1. Jalankan `npm run build`
2. Buka [Netlify Drop](https://app.netlify.com/drop)
3. Drag folder `build/` ke area drop
4. Selesai!

## 📁 Struktur Folder

```
src/
├── components/          # Komponen reusable
│   ├── Sidebar.js      # Menu navigasi
│   ├── Header.js       # Header dengan user info
│   ├── Breadcrumb.js   # Navigasi breadcrumb
│   ├── Footer.js       # Footer aplikasi
│   ├── TableWithExport.js  # Tabel dengan export
│   └── DataTable.js    # Komponen tabel
├── pages/              # Halaman utama aplikasi
│   ├── Dashboard.js
│   ├── Registrasi.js
│   ├── RME.js
│   ├── Farmasi.js
│   ├── Laboratorium.js
│   ├── Radiologi.js
│   ├── Keperawatan.js
│   ├── RawatInap.js
│   ├── Operasional.js
│   ├── Keuangan.js
│   ├── SDM.js
│   ├── Mutu.js
│   ├── Telemedis.js
│   ├── Analitik.js
│   └── AerospaceMedicine.js
├── data/               # Data dan mock data
├── contexts/           # React Context untuk state management
├── utils/              # Utility functions
├── App.js             # Main app component
├── index.js           # Entry point
└── index.css          # Global styles
```

## 🎨 Design System

Aplikasi menggunakan custom design system dengan:
- **Warna Utama**: Blue (#003d82) dan Gold (#d4af37)
- **Typography**: System fonts untuk performa optimal
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG 2.1 compliant
- **Animations**: Smooth transitions dan hover effects

## ✨ Fitur Baru

### Navigasi
- **Breadcrumb**: Navigasi hierarki halaman yang jelas
- **Menu Terorganisir**: Sidebar dengan kategori Pelayanan, Administrasi, dan Kepegawaian
- **Logo**: Logo RS Trimatra dengan animasi di sidebar

### Footer
- Informasi kontak rumah sakit
- Jam operasional
- Social media links

### Export Data
Setiap tabel data dilengkapi dengan fitur export ke berbagai format:
- **Copy**: Copy data ke clipboard
- **Excel**: Export ke format .xls
- **CSV**: Export ke format .csv
- **Word**: Export ke format .doc
- **PDF**: Print/save as PDF

### Animasi
- Fade in/out transitions
- Slide animations
- Hover effects pada buttons dan cards
- Smooth scrolling
- Pulse animation pada logo

## 🔐 Keamanan & Compliance

- Data pasien terenkripsi
- Role-based access control (RBAC)
- Audit trail untuk semua transaksi
- Compliance dengan:
  - UU No. 29 Tahun 2004 (Praktik Kedokteran)
  - Permenkes No. 24 Tahun 2022 (Rekam Medis)
  - PP No. 46 Tahun 2014 (SIMRS)
  - Standar KARS/SNARS

## 📋 Roadmap

### Phase 1 (Current) ✅
- Core modules implementation
- Enhanced UI/UX with animations
- Breadcrumb navigation
- Export functionality
- Netlify deployment

### Phase 2 (Q2 2024)
- Backend API integration
- Real-time features (WebSocket)
- Advanced analytics
- Mobile app (React Native)

### Phase 3 (Q3 2024)
- AI/ML features
- Predictive analytics
- Advanced telemedicine
- IoT integration (medical devices)

### Phase 4 (Q4 2024)
- Blockchain for medical records
- Advanced security features
- Multi-hospital network
- International standards (HL7 FHIR, DICOM)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

## 📄 License

Copyright © 2024 RS Trimatra. All rights reserved.

## 👥 Team

- **Developer**: SIMRS Development Team
- **Medical Advisor**: Aerospace Medicine Specialists
- **Project Manager**: RS Trimatra IT Department

## 📞 Support

Untuk pertanyaan dan dukungan:
- Email: info@rstrimatra.id
- Phone: (021) 1234-5678
- Website: www.rstrimatra.id

## 🙏 Acknowledgments

- TNI Trimatra (AD, AL, AU)
- Kementerian Kesehatan RI
- BPJS Kesehatan
- Aviation Medicine Community

---

**Made with ❤️ for Indonesian Military Healthcare**
