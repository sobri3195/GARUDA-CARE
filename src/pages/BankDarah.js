import React, { useState } from 'react';
import { Droplet } from 'lucide-react';

const BankDarah = () => {
  const [activeTab, setActiveTab] = useState('donor');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'donor' ? 'active' : ''}`}
          onClick={() => setActiveTab('donor')}
        >
          Donor Darah
        </button>
        <button 
          className={`tab ${activeTab === 'distribusi' ? 'active' : ''}`}
          onClick={() => setActiveTab('distribusi')}
        >
          Distribusi Darah
        </button>
        <button 
          className={`tab ${activeTab === 'penyimpanan' ? 'active' : ''}`}
          onClick={() => setActiveTab('penyimpanan')}
        >
          Penyimpanan Darah
        </button>
        <button 
          className={`tab ${activeTab === 'stok' ? 'active' : ''}`}
          onClick={() => setActiveTab('stok')}
        >
          Stok Darah
        </button>
        <button 
          className={`tab ${activeTab === 'bmhp' ? 'active' : ''}`}
          onClick={() => setActiveTab('bmhp')}
        >
          Pemakaian BMHP
        </button>
      </div>

      {activeTab === 'donor' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Donor Bulan Ini</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Donor Hari Ini</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Volume Terkumpul (ml)</h3>
                <p>69,750</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Donor Ditolak</h3>
                <p>12</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Registrasi Donor Darah</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Tanggal Donor</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Donor</label>
                  <input type="text" className="form-input" placeholder="Nama lengkap" />
                </div>
                <div className="form-group">
                  <label className="form-label">NIK</label>
                  <input type="text" className="form-input" placeholder="NIK" />
                </div>
                <div className="form-group">
                  <label className="form-label">Pangkat/NRP (jika TNI)</label>
                  <input type="text" className="form-input" placeholder="Letda/123456" />
                </div>
                <div className="form-group">
                  <label className="form-label">Golongan Darah</label>
                  <select className="form-input">
                    <option value="">Pilih Golongan Darah</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Berat Badan (kg)</label>
                  <input type="number" className="form-input" placeholder="50" />
                </div>
                <div className="form-group">
                  <label className="form-label">Hemoglobin (g/dL)</label>
                  <input type="number" className="form-input" placeholder="12.5" step="0.1" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tekanan Darah</label>
                  <input type="text" className="form-input" placeholder="120/80" />
                </div>
                <div className="form-group">
                  <label className="form-label">Volume Donor (ml)</label>
                  <select className="form-input">
                    <option value="350">350 ml</option>
                    <option value="450">450 ml</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Petugas</label>
                  <input type="text" className="form-input" placeholder="Nama petugas" />
                </div>
              </div>
              <button className="btn btn-primary">Simpan Donor</button>
            </div>
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Riwayat Donor Darah</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Kantong</th>
                    <th>Tanggal</th>
                    <th>Nama Donor</th>
                    <th>Pangkat/NRP</th>
                    <th>Gol. Darah</th>
                    <th>Volume (ml)</th>
                    <th>HB (g/dL)</th>
                    <th>Status</th>
                    <th>Petugas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BD-20241215-001</td>
                    <td>15 Des 2024</td>
                    <td>Mayor Sudirman</td>
                    <td>Mayor/456789</td>
                    <td>O+</td>
                    <td>450</td>
                    <td>14.5</td>
                    <td><span className="badge badge-success">Layak</span></td>
                    <td>Ns. Ani</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>BD-20241215-002</td>
                    <td>15 Des 2024</td>
                    <td>Letda Hartono</td>
                    <td>Letda/234567</td>
                    <td>A+</td>
                    <td>450</td>
                    <td>13.8</td>
                    <td><span className="badge badge-success">Layak</span></td>
                    <td>Ns. Ani</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>15 Des 2024</td>
                    <td>Sertu Bambang</td>
                    <td>Sertu/345678</td>
                    <td>B+</td>
                    <td>-</td>
                    <td>11.5</td>
                    <td><span className="badge badge-danger">Ditolak (HB Rendah)</span></td>
                    <td>Ns. Ani</td>
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

      {activeTab === 'distribusi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Distribusi/Pengeluaran Darah</h2>
            <button className="btn btn-primary">+ Tambah Distribusi</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Permintaan</th>
                  <th>No. Kantong</th>
                  <th>Gol. Darah</th>
                  <th>Komponen</th>
                  <th>Volume (ml)</th>
                  <th>Untuk Pasien</th>
                  <th>No. RM</th>
                  <th>Ruangan</th>
                  <th>Dokter</th>
                  <th>Petugas</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>DTR-20241215-001</td>
                  <td>BD-20241210-015</td>
                  <td>O+</td>
                  <td>WB (Whole Blood)</td>
                  <td>450</td>
                  <td>Kolonel Wijaya</td>
                  <td>RM-123456</td>
                  <td>ICU</td>
                  <td>dr. Ahmad</td>
                  <td>Tn. Budi</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>DTR-20241215-002</td>
                  <td>BD-20241211-023</td>
                  <td>A+</td>
                  <td>PRC (Packed Red Cell)</td>
                  <td>350</td>
                  <td>Letda Susanto</td>
                  <td>RM-234567</td>
                  <td>Kamar Operasi</td>
                  <td>dr. Citra</td>
                  <td>Tn. Budi</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'penyimpanan' && (
        <div>
          <div className="alert alert-info" style={{ marginBottom: '20px' }}>
            <strong>Info Penyimpanan:</strong>
            <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
              <li>Whole Blood (WB): 2-6°C, masa simpan 35 hari</li>
              <li>Packed Red Cell (PRC): 2-6°C, masa simpan 35 hari</li>
              <li>Fresh Frozen Plasma (FFP): -18°C atau lebih rendah, masa simpan 1 tahun</li>
              <li>Thrombocyte Concentrate (TC): 20-24°C dengan agitasi, masa simpan 5 hari</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Monitoring Penyimpanan Darah</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                <div className="card">
                  <div className="card-header">
                    <h3>Blood Refrigerator 1</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Suhu:</strong> 4.2°C</p>
                    <p><strong>Status:</strong> <span className="badge badge-success">Normal</span></p>
                    <p><strong>Isi:</strong> 45 kantong</p>
                    <p><strong>Kapasitas:</strong> 60 kantong</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3>Blood Refrigerator 2</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Suhu:</strong> 3.8°C</p>
                    <p><strong>Status:</strong> <span className="badge badge-success">Normal</span></p>
                    <p><strong>Isi:</strong> 32 kantong</p>
                    <p><strong>Kapasitas:</strong> 60 kantong</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3>Plasma Freezer</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Suhu:</strong> -22°C</p>
                    <p><strong>Status:</strong> <span className="badge badge-success">Normal</span></p>
                    <p><strong>Isi:</strong> 28 kantong</p>
                    <p><strong>Kapasitas:</strong> 50 kantong</p>
                  </div>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>No. Kantong</th>
                    <th>Gol. Darah</th>
                    <th>Komponen</th>
                    <th>Volume (ml)</th>
                    <th>Tanggal Donor</th>
                    <th>Expired</th>
                    <th>Lokasi Simpan</th>
                    <th>Suhu (°C)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BD-20241210-015</td>
                    <td>O+</td>
                    <td>WB</td>
                    <td>450</td>
                    <td>10 Des 2024</td>
                    <td>14 Jan 2025</td>
                    <td>Refrigerator 1 - Rak A1</td>
                    <td>4.2</td>
                    <td><span className="badge badge-success">Layak</span></td>
                  </tr>
                  <tr>
                    <td>BD-20241211-023</td>
                    <td>A+</td>
                    <td>PRC</td>
                    <td>350</td>
                    <td>11 Des 2024</td>
                    <td>15 Jan 2025</td>
                    <td>Refrigerator 1 - Rak A2</td>
                    <td>4.2</td>
                    <td><span className="badge badge-success">Layak</span></td>
                  </tr>
                  <tr>
                    <td>BD-20241105-045</td>
                    <td>B+</td>
                    <td>WB</td>
                    <td>450</td>
                    <td>05 Nov 2024</td>
                    <td>10 Des 2024</td>
                    <td>Refrigerator 2 - Rak B1</td>
                    <td>3.8</td>
                    <td><span className="badge badge-danger">Expired</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stok' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Stok (Kantong)</h3>
                <p>105</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Layak Pakai</h3>
                <p>98</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Mendekati Expired</h3>
                <p>5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Droplet size={30} />
              </div>
              <div className="stat-content">
                <h3>Expired</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Stok Darah Per Golongan</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Golongan Darah</th>
                    <th>WB (Whole Blood)</th>
                    <th>PRC (Packed Red Cell)</th>
                    <th>FFP (Fresh Frozen Plasma)</th>
                    <th>TC (Thrombocyte Concentrate)</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A+</strong></td>
                    <td>8</td>
                    <td>12</td>
                    <td>5</td>
                    <td>2</td>
                    <td>27</td>
                    <td><span className="badge badge-success">Cukup</span></td>
                  </tr>
                  <tr>
                    <td><strong>A-</strong></td>
                    <td>2</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>6</td>
                    <td><span className="badge badge-warning">Terbatas</span></td>
                  </tr>
                  <tr>
                    <td><strong>B+</strong></td>
                    <td>6</td>
                    <td>9</td>
                    <td>4</td>
                    <td>1</td>
                    <td>20</td>
                    <td><span className="badge badge-success">Cukup</span></td>
                  </tr>
                  <tr>
                    <td><strong>B-</strong></td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td><span className="badge badge-danger">Kurang</span></td>
                  </tr>
                  <tr>
                    <td><strong>AB+</strong></td>
                    <td>3</td>
                    <td>5</td>
                    <td>2</td>
                    <td>1</td>
                    <td>11</td>
                    <td><span className="badge badge-warning">Terbatas</span></td>
                  </tr>
                  <tr>
                    <td><strong>AB-</strong></td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                    <td><span className="badge badge-danger">Kurang</span></td>
                  </tr>
                  <tr>
                    <td><strong>O+</strong></td>
                    <td>10</td>
                    <td>15</td>
                    <td>6</td>
                    <td>2</td>
                    <td>33</td>
                    <td><span className="badge badge-success">Cukup</span></td>
                  </tr>
                  <tr>
                    <td><strong>O-</strong></td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>3</td>
                    <td><span className="badge badge-danger">Kurang</span></td>
                  </tr>
                  <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
                    <td>TOTAL</td>
                    <td>33</td>
                    <td>48</td>
                    <td>18</td>
                    <td>6</td>
                    <td>105</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bmhp' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemakaian BMHP Bank Darah</h2>
            <button className="btn btn-primary">+ Catat Pemakaian</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Donor/Distribusi</th>
                  <th>Nama BMHP</th>
                  <th>Jumlah</th>
                  <th>Satuan</th>
                  <th>Harga Satuan (Rp)</th>
                  <th>Total (Rp)</th>
                  <th>Keterangan</th>
                  <th>Petugas</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>BD-20241215-001</td>
                  <td>Blood Bag 450ml</td>
                  <td>1</td>
                  <td>Pcs</td>
                  <td>50.000</td>
                  <td>50.000</td>
                  <td>Donor darah</td>
                  <td>Ns. Ani</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>BD-20241215-001</td>
                  <td>Lancet</td>
                  <td>1</td>
                  <td>Pcs</td>
                  <td>1.000</td>
                  <td>1.000</td>
                  <td>Cek HB donor</td>
                  <td>Ns. Ani</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>DTR-20241215-001</td>
                  <td>Blood Transfusion Set</td>
                  <td>1</td>
                  <td>Set</td>
                  <td>15.000</td>
                  <td>15.000</td>
                  <td>Distribusi ke ICU</td>
                  <td>Tn. Budi</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
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

export default BankDarah;
