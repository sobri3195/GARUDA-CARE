import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, Users, ClipboardList, RotateCcw } from 'lucide-react';

const Pengadaan = () => {
  const [activeTab, setActiveTab] = useState('pomanual');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pomanual' ? 'active' : ''}`}
          onClick={() => setActiveTab('pomanual')}
        >
          Purchase Order Manual
        </button>
        <button 
          className={`tab ${activeTab === 'porekomendasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('porekomendasi')}
        >
          PO dari Rekomendasi
        </button>
        <button 
          className={`tab ${activeTab === 'supplier' ? 'active' : ''}`}
          onClick={() => setActiveTab('supplier')}
        >
          Manajemen Supplier
        </button>
        <button 
          className={`tab ${activeTab === 'manajemenpo' ? 'active' : ''}`}
          onClick={() => setActiveTab('manajemenpo')}
        >
          Manajemen PO
        </button>
        <button 
          className={`tab ${activeTab === 'retur' ? 'active' : ''}`}
          onClick={() => setActiveTab('retur')}
        >
          Retur Barang
        </button>
      </div>

      {activeTab === 'pomanual' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <ShoppingCart size={30} />
              </div>
              <div className="stat-content">
                <h3>PO Bulan Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <ClipboardList size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Nilai PO</h3>
                <p>Rp 850.000.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <ShoppingCart size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Approval</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Supplier Aktif</h3>
                <p>35</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Buat Purchase Order Manual</h2>
            </div>
            <div className="card-body">
              <form style={{ marginBottom: '30px' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Supplier</label>
                    <select className="form-select">
                      <option value="">Pilih Supplier</option>
                      <option value="1">PT. Kimia Farma</option>
                      <option value="2">PT. Indofarma</option>
                      <option value="3">PT. Sinar Jaya</option>
                      <option value="4">CV. Berkah Sejahtera</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tanggal PO</label>
                    <input type="date" className="form-input" defaultValue="2024-01-18" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Jenis Barang</label>
                    <select className="form-select">
                      <option value="">Pilih Jenis</option>
                      <option value="farmasi">Obat & Alkes</option>
                      <option value="umum">Barang Umum</option>
                      <option value="atk">ATK</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Prioritas</label>
                    <select className="form-select">
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <h3 style={{ marginBottom: '15px' }}>Item Pesanan</h3>
                  <button type="button" className="btn btn-secondary" style={{ marginBottom: '15px' }}>
                    Tambah Item
                  </button>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Kode Barang</th>
                        <th>Nama Barang</th>
                        <th>Satuan</th>
                        <th>Jumlah</th>
                        <th>Harga Satuan</th>
                        <th>Diskon (%)</th>
                        <th>Total</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" className="form-input" placeholder="Kode" />
                        </td>
                        <td>
                          <input type="text" className="form-input" placeholder="Nama Barang" />
                        </td>
                        <td>
                          <input type="text" className="form-input" placeholder="Satuan" />
                        </td>
                        <td>
                          <input type="number" className="form-input" placeholder="0" />
                        </td>
                        <td>
                          <input type="number" className="form-input" placeholder="0" />
                        </td>
                        <td>
                          <input type="number" className="form-input" placeholder="0" />
                        </td>
                        <td>Rp 0</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm">Hapus</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                  <div style={{ display: 'inline-block', textAlign: 'left', marginBottom: '15px' }}>
                    <p><strong>Subtotal:</strong> Rp 0</p>
                    <p><strong>PPN (11%):</strong> Rp 0</p>
                    <p><strong>Total:</strong> <span style={{ fontSize: '1.2em', color: '#003d82' }}>Rp 0</span></p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Catatan</label>
                  <textarea className="form-textarea" rows="3" placeholder="Catatan tambahan..."></textarea>
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <button type="submit" className="btn btn-primary">Simpan Draft</button>
                  <button type="button" className="btn btn-success">Submit untuk Approval</button>
                  <button type="button" className="btn btn-outline">Batal</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'porekomendasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Purchase Order dari Rekomendasi Sistem</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <TrendingUp size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Buat PO otomatis berdasarkan rekomendasi dari sistem gudang
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Gudang</option>
                <option value="farmasi">Gudang Farmasi</option>
                <option value="umum">Gudang Umum</option>
              </select>
              <button className="btn btn-primary">Load Rekomendasi</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Kode</th>
                  <th>Nama Barang</th>
                  <th>Gudang</th>
                  <th>Stok Saat Ini</th>
                  <th>Min. Stok</th>
                  <th>Rekomendasi Pesan</th>
                  <th>Supplier</th>
                  <th>Estimasi Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>OBT-002</td>
                  <td>Amoxicillin 500mg</td>
                  <td>Gudang Farmasi</td>
                  <td>800</td>
                  <td>1,000</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>3,000</td>
                  <td>PT. Kimia Farma</td>
                  <td>Rp 6.000.000</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>ALK-001</td>
                  <td>Sarung Tangan Steril</td>
                  <td>Gudang Farmasi</td>
                  <td>150</td>
                  <td>200</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>600</td>
                  <td>PT. Indofarma</td>
                  <td>Rp 3.000.000</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BRG-KBR-001</td>
                  <td>Cairan Pembersih Lantai</td>
                  <td>Gudang Umum</td>
                  <td>80</td>
                  <td>100</td>
                  <td style={{ fontWeight: 'bold', color: '#d4af37' }}>200</td>
                  <td>PT. Sinar Jaya</td>
                  <td>Rp 6.000.000</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
              <button className="btn btn-success">Buat PO dari Item Terpilih</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'supplier' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Supplier</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari supplier (nama, kode)..."
                style={{ flex: 1, maxWidth: '400px' }}
              />
              <button className="btn btn-primary">Tambah Supplier Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama Supplier</th>
                  <th>Kategori</th>
                  <th>Kontak</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SUP-001</td>
                  <td>PT. Kimia Farma</td>
                  <td>Farmasi</td>
                  <td>021-12345678</td>
                  <td>sales@kimiafarma.co.id</td>
                  <td>Jakarta</td>
                  <td>⭐⭐⭐⭐⭐ (5.0)</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>SUP-002</td>
                  <td>PT. Indofarma</td>
                  <td>Farmasi</td>
                  <td>021-87654321</td>
                  <td>sales@indofarma.co.id</td>
                  <td>Jakarta</td>
                  <td>⭐⭐⭐⭐ (4.5)</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>SUP-003</td>
                  <td>PT. Sinar Jaya</td>
                  <td>Barang Umum</td>
                  <td>021-55556666</td>
                  <td>sales@sinarjaya.co.id</td>
                  <td>Tangerang</td>
                  <td>⭐⭐⭐⭐ (4.0)</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>SUP-004</td>
                  <td>CV. Berkah Sejahtera</td>
                  <td>ATK</td>
                  <td>021-77778888</td>
                  <td>sales@berkah.co.id</td>
                  <td>Bekasi</td>
                  <td>⭐⭐⭐ (3.5)</td>
                  <td><span className="badge badge-warning">Review</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'manajemenpo' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Purchase Order</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari PO (No. PO, Supplier)..."
                style={{ flex: 1, maxWidth: '400px' }}
              />
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Status</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="sent">Sent to Supplier</option>
                <option value="received">Received</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <button className="btn btn-primary">Filter</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. PO</th>
                  <th>Tanggal</th>
                  <th>Supplier</th>
                  <th>Jenis</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Status</th>
                  <th>Prioritas</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PO-2024-0025</td>
                  <td>18/01/2024</td>
                  <td>PT. Kimia Farma</td>
                  <td>Farmasi</td>
                  <td>25</td>
                  <td>Rp 45.000.000</td>
                  <td><span className="badge badge-warning">Pending Approval</span></td>
                  <td><span className="badge badge-danger">Urgent</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Approve</button>
                  </td>
                </tr>
                <tr>
                  <td>PO-2024-0024</td>
                  <td>17/01/2024</td>
                  <td>PT. Indofarma</td>
                  <td>Farmasi</td>
                  <td>18</td>
                  <td>Rp 32.000.000</td>
                  <td><span className="badge badge-success">Approved</span></td>
                  <td><span className="badge badge-info">Normal</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>PO-2024-0023</td>
                  <td>16/01/2024</td>
                  <td>PT. Sinar Jaya</td>
                  <td>Umum</td>
                  <td>32</td>
                  <td>Rp 58.000.000</td>
                  <td><span className="badge badge-info">Sent to Supplier</span></td>
                  <td><span className="badge badge-info">Normal</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>PO-2024-0022</td>
                  <td>15/01/2024</td>
                  <td>CV. Berkah Sejahtera</td>
                  <td>ATK</td>
                  <td>15</td>
                  <td>Rp 12.500.000</td>
                  <td><span className="badge badge-success">Received</span></td>
                  <td><span className="badge badge-info">Normal</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'retur' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Retur Barang</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              <RotateCcw size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Retur barang harus disertai dengan alasan yang jelas dan dokumentasi yang lengkap
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Buat Retur Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Retur</th>
                  <th>Tanggal</th>
                  <th>No. PO</th>
                  <th>Supplier</th>
                  <th>Total Item</th>
                  <th>Nilai</th>
                  <th>Alasan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RET-2024-005</td>
                  <td>18/01/2024</td>
                  <td>PO-2024-0020</td>
                  <td>PT. Kimia Farma</td>
                  <td>5</td>
                  <td>Rp 2.500.000</td>
                  <td>Barang Rusak</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RET-2024-004</td>
                  <td>15/01/2024</td>
                  <td>PO-2024-0018</td>
                  <td>PT. Indofarma</td>
                  <td>3</td>
                  <td>Rp 1.200.000</td>
                  <td>Expired Date Pendek</td>
                  <td><span className="badge badge-info">Diproses</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RET-2024-003</td>
                  <td>12/01/2024</td>
                  <td>PO-2024-0015</td>
                  <td>PT. Sinar Jaya</td>
                  <td>8</td>
                  <td>Rp 4.800.000</td>
                  <td>Salah Kirim</td>
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
    </div>
  );
};

export default Pengadaan;
