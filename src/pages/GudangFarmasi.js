import React, { useState } from 'react';
import { Package, TrendingUp, AlertTriangle, Trash2, FileText } from 'lucide-react';

const GudangFarmasi = () => {
  const [activeTab, setActiveTab] = useState('informasi');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'informasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('informasi')}
        >
          Informasi Obat & Alkes
        </button>
        <button 
          className={`tab ${activeTab === 'pemesanan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemesanan')}
        >
          Pemesanan
        </button>
        <button 
          className={`tab ${activeTab === 'penerimaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penerimaan')}
        >
          Penerimaan
        </button>
        <button 
          className={`tab ${activeTab === 'pemusnahan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemusnahan')}
        >
          Pemusnahan
        </button>
        <button 
          className={`tab ${activeTab === 'mutasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('mutasi')}
        >
          Mutasi
        </button>
        <button 
          className={`tab ${activeTab === 'stokopname' ? 'active' : ''}`}
          onClick={() => setActiveTab('stokopname')}
        >
          Stok Opname
        </button>
      </div>

      {activeTab === 'informasi' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Item Obat</h3>
                <p>1,245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Item Alkes</h3>
                <p>456</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <AlertTriangle size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Minimum</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <AlertTriangle size={30} />
              </div>
              <div className="stat-content">
                <h3>Mendekati Expired</h3>
                <p>15</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Obat & Alat Kesehatan</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari obat/alkes (nama, kode)..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Kategori</option>
                  <option value="obat">Obat</option>
                  <option value="alkes">Alat Kesehatan</option>
                </select>
                <button className="btn btn-primary">Tambah Item Baru</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Item</th>
                    <th>Kategori</th>
                    <th>Satuan</th>
                    <th>Stok</th>
                    <th>Min. Stok</th>
                    <th>Nilai Stok</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OBT-001</td>
                    <td>Paracetamol 500mg</td>
                    <td>Obat</td>
                    <td>Tablet</td>
                    <td>5,000</td>
                    <td>1,000</td>
                    <td>Rp 2.500.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>OBT-002</td>
                    <td>Amoxicillin 500mg</td>
                    <td>Obat</td>
                    <td>Kapsul</td>
                    <td>800</td>
                    <td>1,000</td>
                    <td>Rp 1.600.000</td>
                    <td><span className="badge badge-warning">Stok Minimum</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>OBT-003</td>
                    <td>Metformin 500mg</td>
                    <td>Obat</td>
                    <td>Tablet</td>
                    <td>3,500</td>
                    <td>1,000</td>
                    <td>Rp 3.150.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ALK-001</td>
                    <td>Sarung Tangan Steril</td>
                    <td>Alkes</td>
                    <td>Pasang</td>
                    <td>150</td>
                    <td>200</td>
                    <td>Rp 750.000</td>
                    <td><span className="badge badge-warning">Stok Minimum</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ALK-002</td>
                    <td>Infus Set Disposable</td>
                    <td>Alkes</td>
                    <td>Pcs</td>
                    <td>500</td>
                    <td>200</td>
                    <td>Rp 2.500.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pemesanan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemesanan Obat & Alkes</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <TrendingUp size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Sistem merekomendasikan pemesanan otomatis berdasarkan stok minimum dan rata-rata penggunaan
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>Buat Pesanan Baru</button>
              <button className="btn btn-secondary">Rekomendasi Pemesanan</button>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Item yang Perlu Dipesan (Rekomendasi)</h3>
            <table className="table" style={{ marginBottom: '30px' }}>
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Item</th>
                  <th>Stok Saat Ini</th>
                  <th>Min. Stok</th>
                  <th>Rata-rata Penggunaan/Bulan</th>
                  <th>Rekomendasi Pesan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OBT-002</td>
                  <td>Amoxicillin 500mg</td>
                  <td>800</td>
                  <td>1,000</td>
                  <td>2,500</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>3,000</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pesan</button>
                  </td>
                </tr>
                <tr>
                  <td>ALK-001</td>
                  <td>Sarung Tangan Steril</td>
                  <td>150</td>
                  <td>200</td>
                  <td>500</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>600</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pesan</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginBottom: '15px' }}>Riwayat Pemesanan</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>No. PO</th>
                  <th>Tanggal</th>
                  <th>Supplier</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PO-2024-001</td>
                  <td>15/01/2024</td>
                  <td>PT. Kimia Farma</td>
                  <td>25</td>
                  <td>Rp 45.000.000</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>PO-2024-002</td>
                  <td>12/01/2024</td>
                  <td>PT. Indofarma</td>
                  <td>18</td>
                  <td>Rp 32.000.000</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'penerimaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Penerimaan Obat & Alkes</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Terima Barang Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Penerimaan</th>
                  <th>Tanggal</th>
                  <th>No. PO</th>
                  <th>Supplier</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Penerima</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TRM-2024-010</td>
                  <td>18/01/2024</td>
                  <td>PO-2024-001</td>
                  <td>PT. Kimia Farma</td>
                  <td>25</td>
                  <td>Rp 45.000.000</td>
                  <td>Siti Rahmawati</td>
                  <td><span className="badge badge-warning">Verifikasi</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Verifikasi</button>
                  </td>
                </tr>
                <tr>
                  <td>TRM-2024-009</td>
                  <td>17/01/2024</td>
                  <td>PO-2024-002</td>
                  <td>PT. Indofarma</td>
                  <td>18</td>
                  <td>Rp 32.000.000</td>
                  <td>Dewi Lestari</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TRM-2024-008</td>
                  <td>15/01/2024</td>
                  <td>PO-2023-125</td>
                  <td>PT. Enseval</td>
                  <td>32</td>
                  <td>Rp 58.000.000</td>
                  <td>Ahmad Fauzi</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pemusnahan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemusnahan Obat Expired</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-danger">
              <Trash2 size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Proses pemusnahan memerlukan persetujuan dan dokumentasi sesuai peraturan
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-danger">Buat Berita Acara Pemusnahan</button>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Obat yang Mendekati/Sudah Expired</h3>
            <table className="table" style={{ marginBottom: '30px' }}>
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Obat</th>
                  <th>Batch</th>
                  <th>Tanggal Expired</th>
                  <th>Jumlah</th>
                  <th>Nilai</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OBT-045</td>
                  <td>Cefadroxil 500mg</td>
                  <td>B2023-045</td>
                  <td>28/01/2024</td>
                  <td>150 kapsul</td>
                  <td>Rp 450.000</td>
                  <td><span className="badge badge-danger">Expired Soon</span></td>
                  <td>
                    <button className="btn btn-danger btn-sm">Musnahkan</button>
                  </td>
                </tr>
                <tr>
                  <td>OBT-067</td>
                  <td>Ambroxol Syrup</td>
                  <td>B2023-089</td>
                  <td>15/02/2024</td>
                  <td>25 botol</td>
                  <td>Rp 375.000</td>
                  <td><span className="badge badge-warning">30 Hari Lagi</span></td>
                  <td>
                    <button className="btn btn-danger btn-sm">Musnahkan</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginBottom: '15px' }}>Riwayat Pemusnahan</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>No. BA</th>
                  <th>Tanggal</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Penanggung Jawab</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BA-MSH-2024-001</td>
                  <td>10/01/2024</td>
                  <td>12</td>
                  <td>Rp 2.500.000</td>
                  <td>dr. Budi Santoso</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat BA</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'mutasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Mutasi Obat & Alkes</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Buat Mutasi Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Mutasi</th>
                  <th>Tanggal</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Pembuat</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MUT-2024-015</td>
                  <td>18/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Depo Farmasi Rawat Jalan</td>
                  <td>35</td>
                  <td>Rp 8.500.000</td>
                  <td>Siti Rahmawati</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Terima</button>
                  </td>
                </tr>
                <tr>
                  <td>MUT-2024-014</td>
                  <td>17/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Depo Farmasi IGD</td>
                  <td>28</td>
                  <td>Rp 6.750.000</td>
                  <td>Ahmad Fauzi</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>MUT-2024-013</td>
                  <td>16/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Depo Farmasi Rawat Inap</td>
                  <td>42</td>
                  <td>Rp 12.300.000</td>
                  <td>Dewi Lestari</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'stokopname' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Stok Opname</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <FileText size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Stok opname dilakukan untuk memastikan kesesuaian antara stok fisik dengan stok sistem
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>Mulai Stok Opname Baru</button>
              <button className="btn btn-secondary">Import dari Excel</button>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Stok Opname Aktif</h3>
            <table className="table" style={{ marginBottom: '30px' }}>
              <thead>
                <tr>
                  <th>No. SO</th>
                  <th>Tanggal Mulai</th>
                  <th>Lokasi</th>
                  <th>Total Item</th>
                  <th>Diperiksa</th>
                  <th>Progress</th>
                  <th>Penanggung Jawab</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SO-2024-001</td>
                  <td>18/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>1,245</td>
                  <td>856</td>
                  <td>
                    <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '4px', height: '20px' }}>
                      <div style={{ width: '69%', background: '#003d82', borderRadius: '4px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8em' }}>
                        69%
                      </div>
                    </div>
                  </td>
                  <td>Tim Farmasi</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Lanjutkan</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginBottom: '15px' }}>Riwayat Stok Opname</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>No. SO</th>
                  <th>Tanggal</th>
                  <th>Lokasi</th>
                  <th>Total Item</th>
                  <th>Selisih (+)</th>
                  <th>Selisih (-)</th>
                  <th>Nilai Selisih</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SO-2023-012</td>
                  <td>31/12/2023</td>
                  <td>Gudang Utama</td>
                  <td>1,230</td>
                  <td>8</td>
                  <td>15</td>
                  <td>-Rp 850.000</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat Laporan</button>
                  </td>
                </tr>
                <tr>
                  <td>SO-2023-011</td>
                  <td>30/11/2023</td>
                  <td>Depo Farmasi Rawat Jalan</td>
                  <td>456</td>
                  <td>3</td>
                  <td>5</td>
                  <td>-Rp 120.000</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat Laporan</button>
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

export default GudangFarmasi;
