# Panduan Implementasi Export Tabel

## Cara Menggunakan TableWithExport

Untuk menambahkan fitur export (Copy, Excel, CSV, Word, PDF) pada tabel di halaman manapun, ikuti langkah berikut:

### 1. Import Komponen

```javascript
import TableWithExport from '../components/TableWithExport';
```

### 2. Wrap Tabel dengan TableWithExport

```javascript
<TableWithExport title="Judul Export" tableId="unique-table-id">
  <table className="table" id="unique-table-id">
    <thead>
      <tr>
        <th>Kolom 1</th>
        <th>Kolom 2</th>
        <th>Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
    </tbody>
  </table>
</TableWithExport>
```

### 3. Properties

- **title**: Nama file saat di-export (opsional, default: "data")
- **tableId**: ID unik untuk tabel (harus sama dengan id pada element `<table>`)
- **children**: Elemen tabel (`<table>`) yang akan di-wrap

## Format Export yang Tersedia

1. **Copy**: Menyalin data tabel ke clipboard (format TSV - Tab Separated Values)
2. **Excel**: Download file .xls dengan formatting HTML
3. **CSV**: Download file .csv untuk import ke Excel/Google Sheets
4. **Word**: Download file .doc dengan formatting HTML
5. **PDF**: Menggunakan fungsi print browser (Ctrl+P → Save as PDF)

## Contoh Implementasi Lengkap

```javascript
import React from 'react';
import TableWithExport from '../components/TableWithExport';

const MyPage = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Daftar Pasien</h2>
      </div>
      <div className="card-body">
        <TableWithExport title="Daftar Pasien" tableId="table-pasien">
          <table className="table" id="table-pasien">
            <thead>
              <tr>
                <th>No. RM</th>
                <th>Nama</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RM-001</td>
                <td>John Doe</td>
                <td><span className="badge badge-success">Aktif</span></td>
              </tr>
            </tbody>
          </table>
        </TableWithExport>
      </div>
    </div>
  );
};

export default MyPage;
```

## Tips

- Pastikan setiap tabel memiliki `tableId` yang unik dalam satu halaman
- Gunakan nama `title` yang deskriptif untuk memudahkan identifikasi file export
- Badge dan styling HTML akan terexport sebagai text dalam file Excel/Word/CSV
- Untuk PDF yang lebih baik, pertimbangkan menggunakan library seperti jsPDF

## Halaman yang Sudah Menggunakan TableWithExport

✅ Dashboard.js
- Table: Pasien Rawat Inap
- Table: Antrean Poliklinik

## Halaman yang Perlu Diupdate

Silakan implement TableWithExport untuk tabel di halaman-halaman berikut:
- [ ] Registrasi.js (Daftar antrean, Jadwal dokter, Rujukan)
- [ ] RME.js (SOAP notes, IGD, Rawat Inap, Bedah)
- [ ] Farmasi.js (Antrean resep, Detail resep, Stok obat, Narkotika)
- [ ] Laboratorium.js (Order lab, Specimen tracking, Hasil lab)
- [ ] Radiologi.js (Order radiologi, Hasil pemeriksaan)
- [ ] Keperawatan.js (Daftar pasien, Asesmen, eMAR)
- [ ] RawatInap.js (Daftar bed, Pasien rawat inap)
- [ ] Operasional.js (Semua tabel operasional)
- [ ] Keuangan.js (Billing, Klaim, Piutang)
- [ ] SDM.js (Daftar pegawai, Jadwal dinas, Kredensial)
- [ ] Mutu.js (Insiden, Indikator mutu)
- [ ] Telemedis.js (Jadwal konsultasi)
- [ ] Analitik.js (10 besar penyakit, Statistik)
- [ ] AerospaceMedicine.js (Fit-to-fly, Medical readiness, Grounding)
