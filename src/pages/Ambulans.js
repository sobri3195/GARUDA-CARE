import React, { useState } from 'react';
import { Ambulance, DollarSign, Package, FileText } from 'lucide-react';

const Ambulans = () => {
  const [activeTab, setActiveTab] = useState('mobil');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'mobil' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobil')}
        >
          Mobil Ambulans
        </button>
        <button 
          className={`tab ${activeTab === 'tarif' ? 'active' : ''}`}
          onClick={() => setActiveTab('tarif')}
        >
          Tarif Tindakan
        </button>
        <button 
          className={`tab ${activeTab === 'bmhp' ? 'active' : ''}`}
          onClick={() => setActiveTab('bmhp')}
        >
          Pemakaian BMHP
        </button>
        <button 
          className={`tab ${activeTab === 'laporan' ? 'active' : ''}`}
          onClick={() => setActiveTab('laporan')}
        >
          Laporan Pendapatan
        </button>
      </div>

      {activeTab === 'mobil' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Ambulans</h3>
                <p>5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Siap Operasi</h3>
                <p>4</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Dalam Perjalanan</h3>
                <p>1</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Maintenance</h3>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Mobil Ambulans</h2>
              <button className="btn btn-primary">+ Tambah Ambulans</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No Polisi</th>
                    <th>Tipe</th>
                    <th>Merk/Model</th>
                    <th>Tahun</th>
                    <th>Status</th>
                    <th>Pengemudi</th>
                    <th>Lokasi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B 1234 XYZ</td>
                    <td>Ambulans Gawat Darurat</td>
                    <td>Toyota Hiace</td>
                    <td>2022</td>
                    <td><span className="badge badge-success">Siap Operasi</span></td>
                    <td>Sertu Andi Wijaya</td>
                    <td>Pool RS Trimatra</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>B 5678 ABC</td>
                    <td>Ambulans Transport</td>
                    <td>Suzuki APV</td>
                    <td>2021</td>
                    <td><span className="badge badge-warning">Dalam Perjalanan</span></td>
                    <td>Kopda Budi Santoso</td>
                    <td>Menuju RSPAD</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>B 9012 DEF</td>
                    <td>Ambulans Gawat Darurat</td>
                    <td>Toyota Hiace</td>
                    <td>2023</td>
                    <td><span className="badge badge-success">Siap Operasi</span></td>
                    <td>Praka Candra</td>
                    <td>Pool RS Trimatra</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tarif' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Tarif Tindakan Ambulans</h2>
            <button className="btn btn-primary">+ Tambah Tarif</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Jenis Layanan</th>
                  <th>Deskripsi</th>
                  <th>Tarif (Rp)</th>
                  <th>Per Unit</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AMB-001</td>
                  <td>Ambulans Gawat Darurat</td>
                  <td>Ambulans dengan tim medis dan peralatan gawat darurat</td>
                  <td>500.000</td>
                  <td>Per Trip (0-10 km)</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}>Nonaktifkan</button>
                  </td>
                </tr>
                <tr>
                  <td>AMB-002</td>
                  <td>Ambulans Transport</td>
                  <td>Ambulans untuk rujukan antar RS tanpa alat gawat darurat</td>
                  <td>300.000</td>
                  <td>Per Trip (0-10 km)</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}>Nonaktifkan</button>
                  </td>
                </tr>
                <tr>
                  <td>AMB-003</td>
                  <td>Biaya Tambahan Jarak</td>
                  <td>Biaya tambahan per kilometer di atas 10 km</td>
                  <td>25.000</td>
                  <td>Per Km</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm btn-danger" style={{ marginLeft: '5px' }}>Nonaktifkan</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'bmhp' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemakaian BMHP (Bahan Medis Habis Pakai)</h2>
            <button className="btn btn-primary">+ Catat Pemakaian</button>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="date" 
                className="form-input"
                placeholder="Tanggal Mulai"
              />
              <input 
                type="date" 
                className="form-input"
                placeholder="Tanggal Akhir"
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="No Polisi Ambulans"
                style={{ flex: 1, maxWidth: '200px' }}
              />
              <button className="btn btn-primary">Filter</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No Polisi</th>
                  <th>No. Perjalanan</th>
                  <th>Nama BMHP</th>
                  <th>Jumlah</th>
                  <th>Satuan</th>
                  <th>Harga Satuan (Rp)</th>
                  <th>Total (Rp)</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>B 1234 XYZ</td>
                  <td>AMB-20241215-001</td>
                  <td>Oksigen Portabel</td>
                  <td>1</td>
                  <td>Tabung</td>
                  <td>150.000</td>
                  <td>150.000</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>B 1234 XYZ</td>
                  <td>AMB-20241215-001</td>
                  <td>Infus Set</td>
                  <td>2</td>
                  <td>Set</td>
                  <td>15.000</td>
                  <td>30.000</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>14 Des 2024</td>
                  <td>B 5678 ABC</td>
                  <td>AMB-20241214-002</td>
                  <td>Perban Elastis</td>
                  <td>3</td>
                  <td>Roll</td>
                  <td>8.000</td>
                  <td>24.000</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'laporan' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Filter Laporan</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Periode Mulai</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Periode Akhir</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Ambulans</label>
                  <select className="form-input">
                    <option value="">Semua Ambulans</option>
                    <option value="1">B 1234 XYZ - Toyota Hiace</option>
                    <option value="2">B 5678 ABC - Suzuki APV</option>
                    <option value="3">B 9012 DEF - Toyota Hiace</option>
                  </select>
                </div>
                <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button className="btn btn-primary" style={{ width: '100%' }}>Tampilkan</button>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Perjalanan</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pendapatan</h3>
                <p>Rp 18.750.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Biaya BMHP</h3>
                <p>Rp 2.340.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Pendapatan Bersih</h3>
                <p>Rp 16.410.000</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Laporan Pendapatan Ambulans - Desember 2024</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>No. Perjalanan</th>
                    <th>No Polisi</th>
                    <th>Tujuan</th>
                    <th>Jarak (Km)</th>
                    <th>Tarif Dasar (Rp)</th>
                    <th>Biaya Tambahan (Rp)</th>
                    <th>Biaya BMHP (Rp)</th>
                    <th>Total (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>AMB-20241215-001</td>
                    <td>B 1234 XYZ</td>
                    <td>RSPAD Gatot Soebroto</td>
                    <td>15</td>
                    <td>500.000</td>
                    <td>125.000</td>
                    <td>180.000</td>
                    <td>805.000</td>
                  </tr>
                  <tr>
                    <td>14 Des 2024</td>
                    <td>AMB-20241214-002</td>
                    <td>B 5678 ABC</td>
                    <td>RS Mintohardjo</td>
                    <td>8</td>
                    <td>300.000</td>
                    <td>0</td>
                    <td>24.000</td>
                    <td>324.000</td>
                  </tr>
                  <tr>
                    <td>13 Des 2024</td>
                    <td>AMB-20241213-003</td>
                    <td>B 9012 DEF</td>
                    <td>RSAL Mintohardjo</td>
                    <td>25</td>
                    <td>500.000</td>
                    <td>375.000</td>
                    <td>215.000</td>
                    <td>1.090.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
                    <td colSpan="5">Total</td>
                    <td>1.300.000</td>
                    <td>500.000</td>
                    <td>419.000</td>
                    <td>2.219.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ambulans;
