import React, { useState } from 'react';
import { Activity, Users, FileText, DollarSign, Image } from 'lucide-react';

const Radiologi = () => {
  const [activeTab, setActiveTab] = useState('pasien');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          Informasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          Tagihan
        </button>
      </div>

      {activeTab === 'pasien' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon info">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Pasien Hari Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Sedang Diperiksa</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai</h3>
                <p>32</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon secondary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Menunggu</h3>
                <p>5</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Pasien Radiologi</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <Activity size={20} style={{ display: 'inline', marginRight: '10px' }} />
                Modul Radiologi meliputi: Order radiologi, PACS viewer, structured report, dan dose tracking
              </div>

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
                    <th>Jenis Pemeriksaan</th>
                    <th>Asal</th>
                    <th>Dokter Perujuk</th>
                    <th>Waktu Order</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-001234</td>
                    <td>Letkol Budi Santoso</td>
                    <td>CT Scan Thorax</td>
                    <td>Poli Paru</td>
                    <td>dr. Siti, Sp.P</td>
                    <td>08:30</td>
                    <td><span className="badge badge-info">Sedang Diperiksa</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-002456</td>
                    <td>Mayor Ahmad Fauzi</td>
                    <td>Rontgen Thorax</td>
                    <td>IGD</td>
                    <td>dr. Budi, Sp.B</td>
                    <td>09:00</td>
                    <td><span className="badge badge-warning">Menunggu</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Panggil</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-003789</td>
                    <td>Kapten Dewi Lestari</td>
                    <td>USG Abdomen</td>
                    <td>Poli Kandungan</td>
                    <td>dr. Ahmad, Sp.OG</td>
                    <td>07:45</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Lihat</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pemeriksaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemeriksaan Radiologi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Pemeriksaan:</strong> CT Scan Thorax
            </div>

            <div className="form-group">
              <label className="form-label">Indikasi Klinis</label>
              <textarea className="form-textarea" rows="2" defaultValue="Suspek pneumonia, batuk 2 minggu" readOnly></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Jenis Pemeriksaan</label>
              <input type="text" className="form-input" defaultValue="CT Scan Thorax dengan kontras" readOnly />
            </div>

            <div className="form-group">
              <label className="form-label">Teknik Pemeriksaan</label>
              <textarea className="form-textarea" rows="2" placeholder="Deskripsi teknik pemeriksaan yang dilakukan..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Hasil Pemeriksaan</label>
              <textarea className="form-textarea" rows="6" placeholder="Deskripsi hasil pemeriksaan radiologi..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Kesan</label>
              <textarea className="form-textarea" rows="3" placeholder="Kesan/kesimpulan hasil pemeriksaan..."></textarea>
            </div>

            <div className="grid grid-cols-2">
              <div className="form-group">
                <label className="form-label">Radiografer</label>
                <select className="form-select">
                  <option value="">Pilih Radiografer</option>
                  <option value="rad1">Ahmad Radiografer, AMd.Rad</option>
                  <option value="rad2">Siti Radiografer, AMd.Rad</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Dokter Radiologi</label>
                <select className="form-select">
                  <option value="">Pilih Dokter</option>
                  <option value="dr1">dr. Hendra Wijaya, Sp.Rad</option>
                  <option value="dr2">dr. Dewi Lestari, Sp.Rad</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">
                <FileText size={16} />
                Simpan Hasil
              </button>
              <button className="btn btn-secondary">
                <Image size={16} />
                Upload Gambar DICOM
              </button>
              <button className="btn btn-outline">Cetak Hasil</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tagihan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rincian Tagihan Radiologi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Penjamin:</strong> TNI
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Item</th>
                  <th>Jumlah</th>
                  <th>Harga Satuan</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pemeriksaan</td>
                  <td>CT Scan Thorax dengan Kontras</td>
                  <td>1</td>
                  <td>Rp 1.500.000</td>
                  <td>Rp 1.500.000</td>
                </tr>
                <tr>
                  <td>BMHP</td>
                  <td>Kontras Media</td>
                  <td>1</td>
                  <td>Rp 300.000</td>
                  <td>Rp 300.000</td>
                </tr>
                <tr>
                  <td>Jasa</td>
                  <td>Jasa Radiografer</td>
                  <td>1</td>
                  <td>Rp 100.000</td>
                  <td>Rp 100.000</td>
                </tr>
                <tr>
                  <td>Jasa</td>
                  <td>Jasa Dokter Radiologi</td>
                  <td>1</td>
                  <td>Rp 200.000</td>
                  <td>Rp 200.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Total</td>
                  <td>Rp 2.100.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI (100%)</td>
                  <td>Rp 2.100.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', color: '#d4af37' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Bayar Pasien</td>
                  <td>Rp 0</td>
                </tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button className="btn btn-primary">
                <DollarSign size={16} />
                Cetak Billing
              </button>
              <button className="btn btn-secondary">Kirim ke Kasir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Radiologi;
