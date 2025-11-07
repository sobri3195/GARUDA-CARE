import React, { useState } from 'react';
import { Package, TrendingUp } from 'lucide-react';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('obat');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'obat' ? 'active' : ''}`}
          onClick={() => setActiveTab('obat')}
        >
          Stok Obat & Alkes
        </button>
        <button 
          className={`tab ${activeTab === 'barang' ? 'active' : ''}`}
          onClick={() => setActiveTab('barang')}
        >
          Stok Barang
        </button>
        <button 
          className={`tab ${activeTab === 'kartustok-obat' ? 'active' : ''}`}
          onClick={() => setActiveTab('kartustok-obat')}
        >
          Kartu Stok Obat
        </button>
        <button 
          className={`tab ${activeTab === 'kartustok-barang' ? 'active' : ''}`}
          onClick={() => setActiveTab('kartustok-barang')}
        >
          Kartu Stok Barang
        </button>
      </div>

      {activeTab === 'obat' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Item Obat & Alkes</h3>
                <p>1,701</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Nilai Stok</h3>
                <p>Rp 2.5 Miliar</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Minimum</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Kosong</h3>
                <p>5</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Stok Obat & Alat Kesehatan</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari obat/alkes..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Lokasi</option>
                  <option value="gudang">Gudang Utama</option>
                  <option value="depo-rj">Depo Rawat Jalan</option>
                  <option value="depo-ri">Depo Rawat Inap</option>
                  <option value="depo-igd">Depo IGD</option>
                </select>
                <button className="btn btn-secondary">Export Excel</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Item</th>
                    <th>Kategori</th>
                    <th>Lokasi</th>
                    <th>Stok</th>
                    <th>Satuan</th>
                    <th>Min. Stok</th>
                    <th>Nilai (Rp)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OBT-001</td>
                    <td>Paracetamol 500mg</td>
                    <td>Obat</td>
                    <td>Gudang Utama</td>
                    <td>5,000</td>
                    <td>Tablet</td>
                    <td>1,000</td>
                    <td>2.500.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr>
                    <td>OBT-002</td>
                    <td>Amoxicillin 500mg</td>
                    <td>Obat</td>
                    <td>Gudang Utama</td>
                    <td>800</td>
                    <td>Kapsul</td>
                    <td>1,000</td>
                    <td>1.600.000</td>
                    <td><span className="badge badge-warning">Minimum</span></td>
                  </tr>
                  <tr>
                    <td>ALK-001</td>
                    <td>Sarung Tangan Steril</td>
                    <td>Alkes</td>
                    <td>Gudang Utama</td>
                    <td>150</td>
                    <td>Pasang</td>
                    <td>200</td>
                    <td>750.000</td>
                    <td><span className="badge badge-warning">Minimum</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'barang' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Item Barang</h3>
                <p>345</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Nilai Stok</h3>
                <p>Rp 850 Juta</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Minimum</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Kosong</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Stok Barang</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari barang..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Kategori</option>
                  <option value="atk">ATK</option>
                  <option value="linen">Linen</option>
                  <option value="elektronik">Elektronik</option>
                  <option value="housekeeping">Housekeeping</option>
                </select>
                <button className="btn btn-secondary">Export Excel</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Barang</th>
                    <th>Kategori</th>
                    <th>Stok</th>
                    <th>Satuan</th>
                    <th>Min. Stok</th>
                    <th>Nilai (Rp)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BRG-001</td>
                    <td>Kertas A4</td>
                    <td>ATK</td>
                    <td>150</td>
                    <td>Rim</td>
                    <td>50</td>
                    <td>5.250.000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr>
                    <td>BRG-002</td>
                    <td>Sprei Tempat Tidur</td>
                    <td>Linen</td>
                    <td>45</td>
                    <td>Pcs</td>
                    <td>50</td>
                    <td>6.750.000</td>
                    <td><span className="badge badge-warning">Minimum</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kartustok-obat' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Kartu Stok Obat & Alkes</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari obat/alkes..."
                style={{ maxWidth: '400px' }}
              />
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Item:</strong> Paracetamol 500mg | <strong>Kode:</strong> OBT-001 | <strong>Stok Saat Ini:</strong> 5,000 tablet
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Dokumen</th>
                  <th>Keterangan</th>
                  <th>Masuk</th>
                  <th>Keluar</th>
                  <th>Saldo</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/2024</td>
                  <td>PNJ-2024-156</td>
                  <td>Penjualan Resep</td>
                  <td>-</td>
                  <td>50</td>
                  <td>5,000</td>
                  <td>Siti R.</td>
                </tr>
                <tr>
                  <td>17/01/2024</td>
                  <td>TRM-2024-009</td>
                  <td>Penerimaan dari Supplier</td>
                  <td>2,000</td>
                  <td>-</td>
                  <td>5,050</td>
                  <td>Ahmad F.</td>
                </tr>
                <tr>
                  <td>17/01/2024</td>
                  <td>PNJ-2024-145</td>
                  <td>Penjualan Resep</td>
                  <td>-</td>
                  <td>30</td>
                  <td>3,050</td>
                  <td>Dewi L.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'kartustok-barang' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Kartu Stok Barang</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari barang..."
                style={{ maxWidth: '400px' }}
              />
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Item:</strong> Kertas A4 | <strong>Kode:</strong> BRG-001 | <strong>Stok Saat Ini:</strong> 150 rim
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Dokumen</th>
                  <th>Keterangan</th>
                  <th>Masuk</th>
                  <th>Keluar</th>
                  <th>Saldo</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/2024</td>
                  <td>PRM-2024-012</td>
                  <td>Permintaan Unit Administrasi</td>
                  <td>-</td>
                  <td>10</td>
                  <td>150</td>
                  <td>Budi S.</td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>TRM-2024-008</td>
                  <td>Penerimaan dari Supplier</td>
                  <td>50</td>
                  <td>-</td>
                  <td>160</td>
                  <td>Ahmad F.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
