# SIMRS RS Trimatra - Sistem Informasi Rumah Sakit Trimatra

Sistem Informasi Rumah Sakit (SIMRS) komprehensif yang dirancang untuk Rumah Sakit Trimatra dengan fitur lengkap termasuk modul Aerospace Medicine untuk mendukung layanan kesehatan bagi ketiga angkatan (TNI AD, AL, AU).

## ⭐ Fitur Terbaru v2.10.0 - Header Activation & Comprehensive Inpatient Module

### 🔧 Header Component - Semua Fungsi Aktif
Navigasi yang lebih powerful dengan 5 dropdown interaktif:
- **🔍 Search** - Pencarian global (No. RM, NIK, nama, jadwal dokter, hasil lab/radiologi)
- **⚡ Quick Actions** - Shortcut cepat (daftar pasien, dashboard, e-resep, order lab)
- **💬 Messages** - Pesan real-time dari dokter, perawat, dan farmasi (5 pesan)
- **🔔 Notifications** - Notifikasi prioritas URGENT/INFO/SUCCESS dengan alert hasil lab kritis (3 notifikasi)
- **⚙️ Settings** - Profil, notifikasi, bahasa, tema, keamanan

### 🏥 Modul Rawat Inap - Implementasi Lengkap Standar Indonesia
**11 Tab Komprehensif** sesuai standar Permenkes, SIRS, dan SNARS:

1. **Dashboard & BOR** - Statistik real-time (120 bed, 94 pasien aktif, BOR 78.3%), 6 indikator mutu (BOR, ALOS, TOI, BTR, NDR, GDR), grafik sensus 7 hari

2. **Registrasi & Admisi** - Pendaftaran dari IGD/Rawat Jalan, pilih kelas (VIP/I/II/III/ICU/HCU), penetapan DPJP, diagnosa awal

3. **Bed Management** - Peta bed interaktif real-time:
   - VIP A: 10 bed dengan status individual
   - ICU: 12 bed dengan visualisasi interaktif
   - Status bed: 🟢 Kosong | 🔴 Terisi | 🟠 Dibersihkan | 🟡 Dipesan | ⚫ Maintenance
   - BOR per ruangan dengan hover detail nama pasien

4. **Asuhan Pasien** - CPPT/SOAP terintegrasi RME, monitoring vital sign, order set (obat, lab, radiologi, konsultasi), jadwal kunjungan DPJP

5. **Farmasi & E-Resep** - Sesuai Permenkes 24/2022: e-resep, verifikasi apoteker, unit dose dispensing, monitoring stok per ruangan

6. **Penunjang Medis** - Order lab & radiologi, hasil otomatis muncul, notifikasi hasil kritis (misal: Kalium 6.8 mEq/L)

7. **Pelaporan SIRS** - Integrasi SIRS Online Kemenkes: auto-hitung BOR/ALOS/TOI/BTR/NDR/GDR, laporan RL 1.3, export SIRS

8. **Billing & Tagihan** - Auto-billing (kamar, tindakan, obat, lab), integrasi kasir/BPJS, split billing

9. **Mutasi Pasien** - Pindah kamar/kelas, rujuk eksternal, pulang APS, resume medis otomatis

10. **Discharge Planning** - Standar SNARS 1.1: resume medis (ICD-10), edukasi pasien, resep pulang, surat keterangan rawat

11. **Keamanan & Audit** - Role-based access, audit trail, kepatuhan regulasi (Permenkes 24/2022, UU ITE, SIRS, SNARS), enkripsi AES-256

➡️ **Lihat [CHANGELOG_TRIMATRA.md](CHANGELOG_TRIMATRA.md) untuk detail lengkap fitur v2.10.0**

---

## ⭐ Fitur v2.9.1 - Patient Journey & UX Enhancement

### 🏥 Alur Pelayanan Pasien Interaktif
Visualisasi lengkap perjalanan pasien dari registrasi hingga pulang:
- **10 Tahap Pelayanan**: Registrasi → Anamnesis → Pemeriksaan Dokter → Lab → Radiologi → Farmasi → Rawat Inap → Resume Medis → Pembayaran → Pasien Pulang
- **Statistik Real-time**: Jumlah pasien per tahap, waktu tunggu, okupansi bed
- **Tahap Opsional**: Lab, Radiologi, dan Rawat Inap sesuai indikasi medis
- **Hover untuk Detail**: Informasi lengkap setiap tahap dengan deskripsi
- **Color-coded**: Setiap tahap memiliki warna identitas untuk kemudahan navigasi
- **Informasi Penting**: Estimasi waktu, alur IGD khusus, keterangan BPJS

### 🎨 Favicon Baru RS Trimatra
Ikon baru yang lebih representatif untuk rumah sakit militer:
- Medical cross (putih/emas) di pusat sebagai simbol pelayanan kesehatan
- Background biru militer (#003d82) - warna resmi TNI
- 3 bintang emas merepresentasikan tri-angkatan (TNI AD, AL, AU)
- Heartbeat line untuk penekanan aspek medis
- Desain modern dan profesional

---

## 🚀 Fitur v2.9.0 - Document Management & Integration Suite

### 🔔 Pusat Notifikasi Terpadu
Sistem notifikasi terintegrasi yang menampung alert dari **SEMUA modul** sistem:
- 💊 Farmasi (stok kritis, obat expired)
- 🏥 ICU (pasien kritis, saturasi O2)
- 📅 Jadwal (perubahan jadwal dokter)
- 🔧 Peralatan (maintenance terjadwal)
- 👤 Registrasi, 🔬 Laboratorium, ⚕️ Bedah Sentral, 🚑 IGD, 🛏️ Rawat Inap, 💰 Keuangan
- **Filter & prioritas**: Critical, High, Medium, Low dengan color coding
- **Tab navigasi**: Semua, Belum Dibaca, Perlu Tindakan, Critical
- Link langsung ke modul terkait

### 📅 Kalender Operasional RS
Tampilan visual kalender mingguan untuk semua jadwal operasional:
- 👨‍⚕️ **Jadwal Dokter** per poli dengan jam praktek
- 🏥 **Ruang Bedah** - jadwal operasi dengan detail pasien, dokter bedah, ruang OK
- 👩‍⚕️ **Shift Perawatan** - shift pagi/sore/malam per unit dengan koordinator
- 📋 **Kegiatan Medis** - rapat komite, pelatihan PPGD, grand round, audit
- Color-coded events dengan filter dan export PDF

### 📂 Upload & Arsip Digital Pasien
Sistem manajemen dokumen digital lengkap:
- **Tipe dokumen**: Hasil pemeriksaan, surat rujukan, resume medis, informed consent, surat keterangan, resep obat, laporan operasi
- **Format**: PDF, JPG, PNG, DICOM (maks 10 MB)
- **Pencarian & filter** berdasarkan pasien, NRP, tipe dokumen
- **Export** ke 5 format (CSV, Excel, JSON, PDF, Print)
- **Keamanan**: Enkripsi AES-256, audit trail lengkap

### ✍️ Integrasi e-Signature
Tanda tangan digital dengan 3 metode:
1. **Digital Certificate** - Untuk dokter/staff medis dengan sertifikat terenkripsi
2. **Biometric Signature** - Untuk pasien menggunakan tablet signature pad
3. **PIN Verification** - Backup method dengan two-factor authentication
- **Blockchain recording** untuk mencegah pemalsuan
- **Compliance**: UU ITE dan Permenkes 24/2022
- **Retensi dokumen**: 10 tahun - selamanya

### 🏥 BPJS Web Service Integration
Integrasi real-time dengan VClaim BPJS:
- **Validasi Eligibilitas**: Cek peserta berdasarkan NIK/No. Kartu
- **Manajemen SEP**: Pembuatan dan tracking SEP otomatis
- **Klaim INA-CBG**: Submit klaim, monitoring approval, tracking selisih tarif
- **Dashboard**: SEP aktif, eligible count, klaim submitted
- **Log aktivitas**: Real-time logging semua transaksi VClaim

### 🎖️ TNI Health Command Integration
Sinkronisasi dengan database kesehatan TNI:
- **Data Personel**: Auto-sync NRP, pangkat, korps, kesatuan, status medis
- **Rekam Medis**: Real-time sync pemeriksaan, diagnosa, tindakan ke TNI Health Command
- **Kesiapan Kesatuan**: Tracking medically fit, under treatment, not fit per unit
- **Breakdown per Angkatan**: TNI AD, TNI AL, TNI AU dengan persentase kesiapan
- **Log sinkronisasi**: Audit trail lengkap semua aktivitas sync

➡️ **Lihat [FEATURES_VERIFICATION.md](FEATURES_VERIFICATION.md) untuk detail lengkap semua fitur**

---

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

### 13. Back Office 💼

#### Asuransi Penjamin
- **Informasi Pasien BPJS**: Dashboard pasien BPJS dengan tracking SEP dan tarif INA-CBG
- **Informasi Pasien Non-BPJS**: Manajemen 12+ perusahaan asuransi swasta
- **Pengajuan Claim**: Sistem pengajuan claim dengan validasi dokumen
- **Manajemen Claim**: Tracking status claim (Disetujui/Partial/Ditolak)
- **Penerimaan Pembayaran**: Recording pembayaran dari penjamin dengan aging monitoring

#### Gudang Umum
- **Informasi Barang**: Katalog lengkap (ATK, Elektronik, Furniture, Kebersihan, Konsumsi)
- **Rekomendasi Pemesanan Otomatis**: Algoritma auto-reorder berdasarkan min stock & usage patterns
- **Penerimaan Barang**: Workflow penerimaan dengan verifikasi
- **Pemusnahan Barang**: Berita Acara Pemusnahan dengan tracking regulasi
- **Mutasi Barang**: Transfer antar lokasi dengan approval
- **Stok Opname**: Periodic stock taking dengan variance analysis

#### Pengadaan/Pembelian
- **Purchase Order Manual**: Form PO lengkap dengan perhitungan PPN 11%
- **PO dari Rekomendasi**: Generate PO otomatis dari rekomendasi gudang
- **Manajemen Supplier**: Database supplier dengan rating dan kategori
- **Manajemen PO**: Complete PO lifecycle (Draft → Approval → Sent → Received)
- **Retur Barang**: Pengelolaan retur dengan dokumentasi lengkap

#### Akuntansi (11 Modul)
- **Invoice & Tagihan**: Manajemen invoice dan billing per penjamin
- **Kartu Piutang**: Detail piutang per debitur dengan saldo running
- **Aging Piutang**: Analisis umur piutang (0-30, 31-60, 61-90, >90 hari)
- **Kartu Hutang**: Detail hutang per supplier dengan saldo running
- **Aging Hutang**: Analisis umur hutang dengan status monitoring
- **Jurnal Umum**: Double-entry bookkeeping dengan auto-generation
- **Buku Besar**: General ledger per account dengan periode filter
- **Laporan Laba Rugi**: Income statement (Bulanan/Quarterly/Annual)
- **Laporan Neraca**: Balance sheet dengan aktiva/passiva
- **Laporan Arus Kas**: Cash flow statement
- **Laporan Keuangan Lainnya**: Perubahan modal, neraca saldo, rasio keuangan

#### Manajemen Keuangan
- **Manajemen Kas**: Buku kas harian dengan tutup kas
- **Manajemen Bank**: Multi-bank accounts (Mandiri, BNI, BRI, BCA) dengan reconciliation
- **Transfer Dana**: Internal & external transfer dengan audit trail

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
│   ├── Asuransi.js      # NEW: Insurance management
│   ├── GudangUmum.js    # NEW: General warehouse
│   ├── Pengadaan.js     # NEW: Procurement
│   ├── Akuntansi.js     # NEW: Accounting (11 modules)
│   ├── KeuanganManajemen.js  # NEW: Financial management
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
