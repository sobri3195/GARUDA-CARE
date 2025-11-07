import React, { useState } from 'react';
import { Archive, BarChart } from 'lucide-react';

const RekamMedik = () => {
  const [activeTab, setActiveTab] = useState('pencatatan');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pencatatan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pencatatan')}
        >
          Pencatatan
        </button>
        <button 
          className={`tab ${activeTab === 'penyimpanan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penyimpanan')}
        >
          Penyimpanan
        </button>
        <button 
          className={`tab ${activeTab === 'distribusi' ? 'active' : ''}`}
          onClick={() => setActiveTab('distribusi')}
        >
          Distribusi
        </button>
        <button 
          className={`tab ${activeTab === 'klaim' ? 'active' : ''}`}
          onClick={() => setActiveTab('klaim')}
        >
          Pengajuan Klaim
        </button>
        <button 
          className={`tab ${activeTab === 'sirs' ? 'active' : ''}`}
          onClick={() => setActiveTab('sirs')}
        >
          Laporan SIRS
        </button>
      </div>

      {activeTab === 'pencatatan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pencatatan Dokumen Rekam Medik</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari pasien (No. RM / NIK / NRP / Nama)"
                style={{ maxWidth: '400px' }}
              />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Tanggal Kunjungan</th>
                  <th>Unit Layanan</th>
                  <th>Dokumen</th>
                  <th>Status Kelengkapan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>18/01/2024</td>
                  <td>Rawat Jalan - Poli Jantung</td>
                  <td>SOAP, Lab, Resep</td>
                  <td><span className="badge badge-success">Lengkap</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-002456</td>
                  <td>Mayor Ahmad Fauzi</td>
                  <td>17/01/2024</td>
                  <td>Rawat Inap - HCU</td>
                  <td>CPPT, Resume, Lab, Radiologi</td>
                  <td><span className="badge badge-warning">Belum Lengkap</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'penyimpanan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Penyimpanan Dokumen Rekam Medik</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <Archive size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Dokumen rekam medik disimpan selama 5 tahun sesuai peraturan perundangan
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Pilih Tahun</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <button className="btn btn-primary">Filter</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Total Kunjungan</th>
                  <th>Lokasi Penyimpanan</th>
                  <th>Status Dokumen</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>15 kunjungan</td>
                  <td>Rak A-12, Box 45</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'distribusi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Distribusi Dokumen Rekam Medik</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Tujuan</th>
                  <th>Tanggal Keluar</th>
                  <th>Peminjam</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Poli Jantung</td>
                  <td>18/01/2024</td>
                  <td>dr. Siti Nurhaliza</td>
                  <td><span className="badge badge-info">Dipinjam</span></td>
                  <td>
                    <button className="btn btn-secondary btn-sm">Kembalikan</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'klaim' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pengajuan Klaim BPJS/Asuransi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Ajukan Klaim Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Klaim</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Penjamin</th>
                  <th>Nilai Klaim</th>
                  <th>Tanggal Ajuan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KLM-2024-045</td>
                  <td>RM-002456</td>
                  <td>Mayor Ahmad Fauzi</td>
                  <td>BPJS</td>
                  <td>Rp 2.500.000</td>
                  <td>18/01/2024</td>
                  <td><span className="badge badge-warning">Verifikasi</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'sirs' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rekapitulasi Laporan SIRS</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <BarChart size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Sistem Informasi Rumah Sakit (SIRS) - Laporan ke Kemenkes
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '150px' }}>
                <option value="">Pilih Bulan</option>
                <option value="1">Januari</option>
                <option value="12">Desember 2023</option>
              </select>
              <select className="form-select" style={{ maxWidth: '150px' }}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <button className="btn btn-primary">Generate Laporan</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Jenis Laporan</th>
                  <th>Periode</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RL 1 - Data Kegiatan Rumah Sakit</td>
                  <td>Desember 2023</td>
                  <td><span className="badge badge-success">Terkirim</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>RL 2 - Data Ketenagaan RS</td>
                  <td>Desember 2023</td>
                  <td><span className="badge badge-success">Terkirim</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>RL 3 - Morbiditas Pasien</td>
                  <td>Desember 2023</td>
                  <td><span className="badge badge-success">Terkirim</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RekamMedik;
