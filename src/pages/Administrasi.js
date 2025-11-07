import React, { useState } from 'react';
import { Bed, Activity } from 'lucide-react';

const Administrasi = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard Kamar
        </button>
        <button 
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          Jadwal Dokter
        </button>
        <button 
          className={`tab ${activeTab === 'kuota' ? 'active' : ''}`}
          onClick={() => setActiveTab('kuota')}
        >
          Kuota Dokter
        </button>
        <button 
          className={`tab ${activeTab === 'ruangan' ? 'active' : ''}`}
          onClick={() => setActiveTab('ruangan')}
        >
          Manajemen Ruangan
        </button>
        <button 
          className={`tab ${activeTab === 'tarif' ? 'active' : ''}`}
          onClick={() => setActiveTab('tarif')}
        >
          Manajemen Tarif
        </button>
        <button 
          className={`tab ${activeTab === 'tindakan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tindakan')}
        >
          Manajemen Tindakan
        </button>
        <button 
          className={`tab ${activeTab === 'pegawai' ? 'active' : ''}`}
          onClick={() => setActiveTab('pegawai')}
        >
          Manajemen Pegawai
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Bed size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Bed</h3>
                <p>120</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon secondary">
                <Bed size={30} />
              </div>
              <div className="stat-content">
                <h3>Terisi</h3>
                <p>94</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Bed size={30} />
              </div>
              <div className="stat-content">
                <h3>Tersedia</h3>
                <p>26</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>BOR</h3>
                <p>78%</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Dashboard Manajemen Kamar</h2>
            </div>
            <div className="card-body">
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Status Kamar Real-time:</h4>
                <div className="grid grid-cols-3">
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>VIP A</h5>
                    <p>Kapasitas: 10 bed</p>
                    <p>Terisi: 8 bed</p>
                    <p>BOR: <span className="badge badge-warning">80%</span></p>
                  </div>
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Kelas I</h5>
                    <p>Kapasitas: 30 bed</p>
                    <p>Terisi: 24 bed</p>
                    <p>BOR: <span className="badge badge-warning">80%</span></p>
                  </div>
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Kelas II</h5>
                    <p>Kapasitas: 40 bed</p>
                    <p>Terisi: 32 bed</p>
                    <p>BOR: <span className="badge badge-warning">80%</span></p>
                  </div>
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>ICU</h5>
                    <p>Kapasitas: 12 bed</p>
                    <p>Terisi: 10 bed</p>
                    <p>BOR: <span className="badge badge-danger">83%</span></p>
                  </div>
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>HCU</h5>
                    <p>Kapasitas: 8 bed</p>
                    <p>Terisi: 6 bed</p>
                    <p>BOR: <span className="badge badge-success">75%</span></p>
                  </div>
                  <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Isolasi</h5>
                    <p>Kapasitas: 6 bed</p>
                    <p>Terisi: 2 bed</p>
                    <p>BOR: <span className="badge badge-success">33%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'jadwal' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Jadwal Dokter</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Tambah Jadwal Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Nama Dokter</th>
                  <th>Spesialisasi</th>
                  <th>Senin</th>
                  <th>Selasa</th>
                  <th>Rabu</th>
                  <th>Kamis</th>
                  <th>Jumat</th>
                  <th>Sabtu</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Penyakit Dalam</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Jantung</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'kuota' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Kuota Dokter</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Nama Dokter</th>
                  <th>Poliklinik</th>
                  <th>Hari</th>
                  <th>Waktu</th>
                  <th>Kuota</th>
                  <th>Terpakai</th>
                  <th>Sisa</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Poli Umum</td>
                  <td>Senin</td>
                  <td>08:00-12:00</td>
                  <td>20</td>
                  <td>15</td>
                  <td>5</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Poli Jantung</td>
                  <td>Selasa</td>
                  <td>08:00-14:00</td>
                  <td>15</td>
                  <td>12</td>
                  <td>3</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'ruangan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Ruangan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Tambah Ruangan Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Ruangan</th>
                  <th>Kelas</th>
                  <th>Kapasitas</th>
                  <th>Tarif/Hari</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VIP-01</td>
                  <td>VIP A - 101</td>
                  <td>VIP</td>
                  <td>1 bed</td>
                  <td>Rp 500.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>KLS1-01</td>
                  <td>Kelas I - Ruang 201</td>
                  <td>Kelas I</td>
                  <td>4 bed</td>
                  <td>Rp 250.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'tarif' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Tarif</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Kategori</option>
                <option value="konsultasi">Konsultasi</option>
                <option value="tindakan">Tindakan</option>
                <option value="kamar">Kamar</option>
                <option value="lab">Laboratorium</option>
                <option value="radiologi">Radiologi</option>
              </select>
              <button className="btn btn-primary">Tambah Tarif Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Layanan</th>
                  <th>Kategori</th>
                  <th>Tarif TNI</th>
                  <th>Tarif BPJS</th>
                  <th>Tarif Umum</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TRF-001</td>
                  <td>Konsultasi Dokter Umum</td>
                  <td>Konsultasi</td>
                  <td>Gratis</td>
                  <td>Rp 100.000</td>
                  <td>Rp 150.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>TRF-002</td>
                  <td>Konsultasi Spesialis</td>
                  <td>Konsultasi</td>
                  <td>Gratis</td>
                  <td>Rp 150.000</td>
                  <td>Rp 200.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'tindakan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Tindakan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Tambah Tindakan Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Tindakan</th>
                  <th>Kategori</th>
                  <th>Durasi (menit)</th>
                  <th>Tarif</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TDK-001</td>
                  <td>EKG 12 Lead</td>
                  <td>Pemeriksaan Jantung</td>
                  <td>15</td>
                  <td>Rp 100.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>TDK-002</td>
                  <td>Nebulizer</td>
                  <td>Terapi Pernafasan</td>
                  <td>20</td>
                  <td>Rp 50.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pegawai' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Pegawai</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari pegawai..."
                style={{ flex: 1, maxWidth: '400px' }}
              />
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Jabatan</option>
                <option value="dokter">Dokter</option>
                <option value="perawat">Perawat</option>
                <option value="farmasi">Farmasi</option>
                <option value="admin">Admin</option>
              </select>
              <button className="btn btn-primary">Tambah Pegawai</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>NIP</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Unit Kerja</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NIP-001234</td>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Dokter Spesialis</td>
                  <td>Poli Umum</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>NIP-002456</td>
                  <td>Ns. Siti Rahmawati, S.Kep</td>
                  <td>Perawat</td>
                  <td>Rawat Inap</td>
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
    </div>
  );
};

export default Administrasi;
