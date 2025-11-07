import React, { useState } from 'react';
import { Package, Droplet, Archive, Box } from 'lucide-react';

const Sterilisasi = () => {
  const [activeTab, setActiveTab] = useState('penerimaan');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'penerimaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penerimaan')}
        >
          Penerimaan Alat
        </button>
        <button 
          className={`tab ${activeTab === 'pencucian' ? 'active' : ''}`}
          onClick={() => setActiveTab('pencucian')}
        >
          Pencucian Alat
        </button>
        <button 
          className={`tab ${activeTab === 'penyimpanan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penyimpanan')}
        >
          Penyimpanan Alat
        </button>
        <button 
          className={`tab ${activeTab === 'pengemasan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pengemasan')}
        >
          Pengemasan Alat
        </button>
      </div>

      {activeTab === 'penerimaan' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Alat Diterima Hari Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Menunggu Pencucian</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai Diproses</h3>
                <p>33</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Alat Rusak</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Form Penerimaan Alat</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Tanggal/Waktu Terima</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Asal Ruangan</label>
                  <select className="form-input">
                    <option value="">Pilih Ruangan</option>
                    <option value="ok">Kamar Operasi</option>
                    <option value="igd">IGD</option>
                    <option value="rawat_inap">Rawat Inap</option>
                    <option value="poli">Poliklinik</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Alat</label>
                  <input type="text" className="form-input" placeholder="Nama alat" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jumlah</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Kondisi Alat</label>
                  <select className="form-input">
                    <option value="baik">Baik</option>
                    <option value="rusak_ringan">Rusak Ringan</option>
                    <option value="rusak_berat">Rusak Berat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Tingkat Kontaminasi</label>
                  <select className="form-input">
                    <option value="ringan">Ringan</option>
                    <option value="sedang">Sedang</option>
                    <option value="berat">Berat</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Keterangan</label>
                  <textarea className="form-input" rows="3" placeholder="Catatan tambahan"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Petugas Penerima</label>
                  <input type="text" className="form-input" placeholder="Nama petugas" />
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Daftar Penerimaan Alat</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Terima</th>
                    <th>Tanggal/Waktu</th>
                    <th>Asal Ruangan</th>
                    <th>Jenis Alat</th>
                    <th>Jumlah</th>
                    <th>Kondisi</th>
                    <th>Kontaminasi</th>
                    <th>Petugas</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TRM-20241215-001</td>
                    <td>15 Des 2024 08:30</td>
                    <td>Kamar Operasi</td>
                    <td>Set Laparotomi</td>
                    <td>1 Set</td>
                    <td><span className="badge badge-success">Baik</span></td>
                    <td><span className="badge badge-warning">Sedang</span></td>
                    <td>Tn. Budi</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>TRM-20241215-002</td>
                    <td>15 Des 2024 09:15</td>
                    <td>IGD</td>
                    <td>Set Hecting</td>
                    <td>3 Set</td>
                    <td><span className="badge badge-success">Baik</span></td>
                    <td><span className="badge badge-info">Ringan</span></td>
                    <td>Tn. Budi</td>
                    <td><span className="badge badge-warning">Proses</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pencucian' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Proses Pencucian Alat</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">No. Terima</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" className="form-input" placeholder="Cari No. Terima" />
                    <button className="btn btn-primary">Cari</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal/Waktu Pencucian</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Alat</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Metode Pencucian</label>
                  <select className="form-input">
                    <option value="">Pilih Metode</option>
                    <option value="manual">Manual</option>
                    <option value="ultrasonic">Ultrasonic Cleaner</option>
                    <option value="mesin">Mesin Washer-Disinfector</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Detergent/Desinfektan</label>
                  <input type="text" className="form-input" placeholder="Jenis detergent" />
                </div>
                <div className="form-group">
                  <label className="form-label">Suhu Pencucian (°C)</label>
                  <input type="number" className="form-input" placeholder="80" />
                </div>
                <div className="form-group">
                  <label className="form-label">Durasi (menit)</label>
                  <input type="number" className="form-input" placeholder="15" />
                </div>
                <div className="form-group">
                  <label className="form-label">Hasil Pencucian</label>
                  <select className="form-input">
                    <option value="bersih">Bersih</option>
                    <option value="perlu_pencucian_ulang">Perlu Pencucian Ulang</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Keterangan</label>
                  <textarea className="form-input" rows="3" placeholder="Catatan hasil pencucian"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Petugas Pencucian</label>
                  <input type="text" className="form-input" placeholder="Nama petugas" />
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Riwayat Pencucian</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal/Waktu</th>
                    <th>No. Terima</th>
                    <th>Jenis Alat</th>
                    <th>Metode</th>
                    <th>Detergent</th>
                    <th>Suhu (°C)</th>
                    <th>Durasi</th>
                    <th>Hasil</th>
                    <th>Petugas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024 09:00</td>
                    <td>TRM-20241215-001</td>
                    <td>Set Laparotomi</td>
                    <td>Ultrasonic</td>
                    <td>Enzymatic Detergent</td>
                    <td>80</td>
                    <td>15 menit</td>
                    <td><span className="badge badge-success">Bersih</span></td>
                    <td>Ny. Sari</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024 09:45</td>
                    <td>TRM-20241215-002</td>
                    <td>Set Hecting</td>
                    <td>Manual</td>
                    <td>Detergent Medis</td>
                    <td>60</td>
                    <td>10 menit</td>
                    <td><span className="badge badge-success">Bersih</span></td>
                    <td>Ny. Sari</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'penyimpanan' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Archive size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Alat Tersimpan</h3>
                <p>245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Archive size={30} />
              </div>
              <div className="stat-content">
                <h3>Sterile</h3>
                <p>230</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Archive size={30} />
              </div>
              <div className="stat-content">
                <h3>Mendekati Expired</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Archive size={30} />
              </div>
              <div className="stat-content">
                <h3>Expired</h3>
                <p>7</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Stok Alat Steril</h2>
              <button className="btn btn-primary">+ Tambah Data</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Alat</th>
                    <th>Jumlah</th>
                    <th>Lokasi Penyimpanan</th>
                    <th>Tanggal Sterilisasi</th>
                    <th>Tanggal Expired</th>
                    <th>Metode Sterilisasi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ALT-001</td>
                    <td>Set Laparotomi</td>
                    <td>5 Set</td>
                    <td>Rak A-1</td>
                    <td>15 Des 2024</td>
                    <td>22 Des 2024</td>
                    <td>Autoclave</td>
                    <td><span className="badge badge-success">Sterile</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Keluar</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ALT-002</td>
                    <td>Set Hecting</td>
                    <td>12 Set</td>
                    <td>Rak A-2</td>
                    <td>14 Des 2024</td>
                    <td>21 Des 2024</td>
                    <td>Autoclave</td>
                    <td><span className="badge badge-success">Sterile</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Keluar</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ALT-003</td>
                    <td>Set Debridement</td>
                    <td>3 Set</td>
                    <td>Rak B-1</td>
                    <td>08 Des 2024</td>
                    <td>15 Des 2024</td>
                    <td>Autoclave</td>
                    <td><span className="badge badge-danger">Expired</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}>Re-Sterilisasi</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pengemasan' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Proses Pengemasan & Sterilisasi</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Tanggal/Waktu</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">No. Batch</label>
                  <input type="text" className="form-input" placeholder="Auto-generate" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Alat</label>
                  <input type="text" className="form-input" placeholder="Nama alat" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jumlah</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Kemasan</label>
                  <select className="form-input">
                    <option value="">Pilih Kemasan</option>
                    <option value="paper_plastic">Paper-Plastic Pouch</option>
                    <option value="wrap">Sterilization Wrap</option>
                    <option value="container">Rigid Container</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Indikator Kimia</label>
                  <select className="form-input">
                    <option value="internal">Internal (di dalam kemasan)</option>
                    <option value="external">External (di luar kemasan)</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Metode Sterilisasi</label>
                  <select className="form-input">
                    <option value="">Pilih Metode</option>
                    <option value="autoclave">Autoclave (Steam)</option>
                    <option value="eto">ETO (Ethylene Oxide)</option>
                    <option value="plasma">Plasma Sterilization</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Suhu (°C)</label>
                  <input type="number" className="form-input" placeholder="134" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tekanan (Bar)</label>
                  <input type="number" className="form-input" placeholder="2.1" step="0.1" />
                </div>
                <div className="form-group">
                  <label className="form-label">Durasi (menit)</label>
                  <input type="number" className="form-input" placeholder="30" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal Expired</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Hasil Indikator Biologi</label>
                  <select className="form-input">
                    <option value="">Belum Tersedia</option>
                    <option value="negative">Negative (Sterile)</option>
                    <option value="positive">Positive (Not Sterile)</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Keterangan</label>
                  <textarea className="form-input" rows="3" placeholder="Catatan proses sterilisasi"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Petugas Sterilisasi</label>
                  <input type="text" className="form-input" placeholder="Nama petugas" />
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Riwayat Sterilisasi</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>No. Batch</th>
                    <th>Jenis Alat</th>
                    <th>Jumlah</th>
                    <th>Metode</th>
                    <th>Suhu</th>
                    <th>Durasi</th>
                    <th>Expired</th>
                    <th>Indikator Bio</th>
                    <th>Petugas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>STR-20241215-001</td>
                    <td>Set Laparotomi</td>
                    <td>5 Set</td>
                    <td>Autoclave</td>
                    <td>134°C</td>
                    <td>30 menit</td>
                    <td>22 Des 2024</td>
                    <td><span className="badge badge-success">Negative</span></td>
                    <td>Tn. Ahmad</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-success" style={{ marginLeft: '5px' }}>Cetak Label</button>
                    </td>
                  </tr>
                  <tr>
                    <td>14 Des 2024</td>
                    <td>STR-20241214-002</td>
                    <td>Set Hecting</td>
                    <td>12 Set</td>
                    <td>Autoclave</td>
                    <td>134°C</td>
                    <td>30 menit</td>
                    <td>21 Des 2024</td>
                    <td><span className="badge badge-success">Negative</span></td>
                    <td>Tn. Ahmad</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-success" style={{ marginLeft: '5px' }}>Cetak Label</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sterilisasi;
