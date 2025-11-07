import React, { useState } from 'react';
import { Package, TrendingUp, AlertTriangle, Trash2, ClipboardCheck } from 'lucide-react';

const GudangUmum = () => {
  const [activeTab, setActiveTab] = useState('informasi');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'informasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('informasi')}
        >
          Informasi Barang
        </button>
        <button 
          className={`tab ${activeTab === 'pemesanan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemesanan')}
        >
          Rekomendasi Pemesanan
        </button>
        <button 
          className={`tab ${activeTab === 'penerimaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penerimaan')}
        >
          Penerimaan Barang
        </button>
        <button 
          className={`tab ${activeTab === 'pemusnahan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemusnahan')}
        >
          Pemusnahan Barang
        </button>
        <button 
          className={`tab ${activeTab === 'mutasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('mutasi')}
        >
          Mutasi Barang
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
                <h3>Total Item Barang</h3>
                <p>2,456</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Nilai Total Stok</h3>
                <p>Rp 8.5 Miliar</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <AlertTriangle size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Minimum</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <AlertTriangle size={30} />
              </div>
              <div className="stat-content">
                <h3>Perlu Pemusnahan</h3>
                <p>8</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Barang Gudang Umum</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari barang (nama, kode)..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Kategori</option>
                  <option value="atk">ATK</option>
                  <option value="elektronik">Elektronik</option>
                  <option value="furniture">Furniture</option>
                  <option value="kebersihan">Kebersihan</option>
                  <option value="konsumsi">Konsumsi</option>
                </select>
                <button className="btn btn-primary">Tambah Barang Baru</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Barang</th>
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
                    <td>BRG-ATK-001</td>
                    <td>Kertas A4 70gr</td>
                    <td>ATK</td>
                    <td>Rim</td>
                    <td>250</td>
                    <td>100</td>
                    <td>Rp 12.500.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>BRG-ELK-001</td>
                    <td>Komputer Desktop</td>
                    <td>Elektronik</td>
                    <td>Unit</td>
                    <td>15</td>
                    <td>10</td>
                    <td>Rp 105.000.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>BRG-FUR-001</td>
                    <td>Kursi Kantor Ergonomis</td>
                    <td>Furniture</td>
                    <td>Unit</td>
                    <td>25</td>
                    <td>20</td>
                    <td>Rp 37.500.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>BRG-KBR-001</td>
                    <td>Cairan Pembersih Lantai</td>
                    <td>Kebersihan</td>
                    <td>Liter</td>
                    <td>80</td>
                    <td>100</td>
                    <td>Rp 2.400.000</td>
                    <td><span className="badge badge-warning">Stok Minimum</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>BRG-KNS-001</td>
                    <td>Air Mineral Galon</td>
                    <td>Konsumsi</td>
                    <td>Galon</td>
                    <td>150</td>
                    <td>200</td>
                    <td>Rp 3.000.000</td>
                    <td><span className="badge badge-warning">Stok Minimum</span></td>
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
            <h2 className="card-title">Rekomendasi Pemesanan Barang</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <TrendingUp size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Sistem merekomendasikan pemesanan otomatis berdasarkan stok minimum dan rata-rata penggunaan
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>Generate Rekomendasi</button>
              <button className="btn btn-secondary">Buat PO dari Rekomendasi</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Barang</th>
                  <th>Kategori</th>
                  <th>Stok Saat Ini</th>
                  <th>Min. Stok</th>
                  <th>Rata-rata Pakai/Bulan</th>
                  <th>Rekomendasi Pesan</th>
                  <th>Estimasi Nilai</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BRG-KBR-001</td>
                  <td>Cairan Pembersih Lantai</td>
                  <td>Kebersihan</td>
                  <td>80</td>
                  <td>100</td>
                  <td>150</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>200 Liter</td>
                  <td>Rp 6.000.000</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pesan</button>
                  </td>
                </tr>
                <tr>
                  <td>BRG-KNS-001</td>
                  <td>Air Mineral Galon</td>
                  <td>Konsumsi</td>
                  <td>150</td>
                  <td>200</td>
                  <td>300</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>350 Galon</td>
                  <td>Rp 7.000.000</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pesan</button>
                  </td>
                </tr>
                <tr>
                  <td>BRG-ATK-002</td>
                  <td>Tinta Printer HP</td>
                  <td>ATK</td>
                  <td>15</td>
                  <td>20</td>
                  <td>35</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>50 Cartridge</td>
                  <td>Rp 15.000.000</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pesan</button>
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
            <h2 className="card-title">Penerimaan Barang</h2>
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
                  <td>TRM-GU-2024-015</td>
                  <td>18/01/2024</td>
                  <td>PO-GU-2024-008</td>
                  <td>PT. Sinar Jaya</td>
                  <td>15</td>
                  <td>Rp 25.000.000</td>
                  <td>Ahmad Fauzi</td>
                  <td><span className="badge badge-warning">Verifikasi</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Verifikasi</button>
                  </td>
                </tr>
                <tr>
                  <td>TRM-GU-2024-014</td>
                  <td>17/01/2024</td>
                  <td>PO-GU-2024-007</td>
                  <td>PT. Maju Bersama</td>
                  <td>25</td>
                  <td>Rp 45.000.000</td>
                  <td>Dewi Lestari</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TRM-GU-2024-013</td>
                  <td>15/01/2024</td>
                  <td>PO-GU-2024-006</td>
                  <td>CV. Berkah Sejahtera</td>
                  <td>18</td>
                  <td>Rp 32.000.000</td>
                  <td>Siti Rahmawati</td>
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
            <h2 className="card-title">Pemusnahan Barang</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-danger">
              <Trash2 size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Proses pemusnahan memerlukan persetujuan dan dokumentasi sesuai peraturan
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-danger">Buat Berita Acara Pemusnahan</button>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Barang yang Perlu Dimusnahkan</h3>
            <table className="table" style={{ marginBottom: '30px' }}>
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Barang</th>
                  <th>Kategori</th>
                  <th>Jumlah</th>
                  <th>Alasan</th>
                  <th>Nilai</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BRG-ELK-025</td>
                  <td>Monitor LCD 19"</td>
                  <td>Elektronik</td>
                  <td>5 Unit</td>
                  <td>Rusak Berat</td>
                  <td>Rp 2.500.000</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Musnahkan</button>
                  </td>
                </tr>
                <tr>
                  <td>BRG-FUR-018</td>
                  <td>Kursi Lipat</td>
                  <td>Furniture</td>
                  <td>15 Unit</td>
                  <td>Rusak, Tidak Ekonomis</td>
                  <td>Rp 3.750.000</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Musnahkan</button>
                  </td>
                </tr>
                <tr>
                  <td>BRG-ATK-056</td>
                  <td>Kertas Rusak/Basah</td>
                  <td>ATK</td>
                  <td>50 Rim</td>
                  <td>Kerusakan Air</td>
                  <td>Rp 2.500.000</td>
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
                  <td>BA-MSH-GU-2024-001</td>
                  <td>10/01/2024</td>
                  <td>8</td>
                  <td>Rp 5.200.000</td>
                  <td>Mayor Budi Santoso</td>
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
            <h2 className="card-title">Mutasi Barang</h2>
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
                  <td>MUT-GU-2024-020</td>
                  <td>18/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Ruang Administrasi</td>
                  <td>15</td>
                  <td>Rp 8.500.000</td>
                  <td>Ahmad Fauzi</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Terima</button>
                  </td>
                </tr>
                <tr>
                  <td>MUT-GU-2024-019</td>
                  <td>17/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Ruang Keuangan</td>
                  <td>8</td>
                  <td>Rp 3.200.000</td>
                  <td>Dewi Lestari</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>MUT-GU-2024-018</td>
                  <td>15/01/2024</td>
                  <td>Gudang Utama</td>
                  <td>Ruang IT</td>
                  <td>12</td>
                  <td>Rp 45.000.000</td>
                  <td>Siti Rahmawati</td>
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
              <ClipboardCheck size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Lakukan stok opname secara berkala untuk memastikan akurasi data inventori
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Mulai Stok Opname Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. SO</th>
                  <th>Tanggal</th>
                  <th>Periode</th>
                  <th>Total Item</th>
                  <th>Selisih Nilai</th>
                  <th>Penanggung Jawab</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SO-GU-2024-001</td>
                  <td>18/01/2024</td>
                  <td>Januari 2024</td>
                  <td>2,456</td>
                  <td>-Rp 125.000</td>
                  <td>Tim Inventori</td>
                  <td><span className="badge badge-warning">Progress</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Lanjutkan</button>
                  </td>
                </tr>
                <tr>
                  <td>SO-GU-2023-012</td>
                  <td>15/12/2023</td>
                  <td>Desember 2023</td>
                  <td>2,389</td>
                  <td>-Rp 85.000</td>
                  <td>Tim Inventori</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Laporan</button>
                  </td>
                </tr>
                <tr>
                  <td>SO-GU-2023-011</td>
                  <td>15/11/2023</td>
                  <td>November 2023</td>
                  <td>2,345</td>
                  <td>+Rp 45.000</td>
                  <td>Tim Inventori</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Laporan</button>
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

export default GudangUmum;
