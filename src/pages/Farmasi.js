import React, { useState } from 'react';
import { Pill, Package, AlertTriangle, FileText } from 'lucide-react';

const Farmasi = () => {
  const [activeTab, setActiveTab] = useState('resep');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'resep' ? 'active' : ''}`}
          onClick={() => setActiveTab('resep')}
        >
          E-Resep & Verifikasi
        </button>
        <button 
          className={`tab ${activeTab === 'dispensing' ? 'active' : ''}`}
          onClick={() => setActiveTab('dispensing')}
        >
          Dispensing
        </button>
        <button 
          className={`tab ${activeTab === 'stok' ? 'active' : ''}`}
          onClick={() => setActiveTab('stok')}
        >
          Manajemen Stok
        </button>
        <button 
          className={`tab ${activeTab === 'narkotika' ? 'active' : ''}`}
          onClick={() => setActiveTab('narkotika')}
        >
          Narkotika/Psikotropika
        </button>
      </div>

      {activeTab === 'resep' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Resep Hari Ini</h3>
                <p>145</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <AlertTriangle size={30} />
              </div>
              <div className="stat-content">
                <h3>Menunggu Verifikasi</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon secondary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Sedang Disiapkan</h3>
                <p>18</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Pill size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai</h3>
                <p>104</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Antrean E-Resep</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Resep</th>
                    <th>Pasien</th>
                    <th>Dokter</th>
                    <th>Waktu</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RX-2024-0123</td>
                    <td>Letkol Budi Santoso<br/>RM-001234</td>
                    <td>dr. Siti Nurhaliza, Sp.JP</td>
                    <td>09:30</td>
                    <td><span className="badge badge-warning">Verifikasi</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Review</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RX-2024-0124</td>
                    <td>Mayor Ahmad Fauzi<br/>RM-001235</td>
                    <td>dr. Andi Wijaya, Sp.PD</td>
                    <td>09:45</td>
                    <td><span className="badge badge-info">Siap Dispensing</span></td>
                    <td>
                      <button className="btn btn-secondary btn-sm">Siapkan</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RX-2024-0125</td>
                    <td>Kapten Dewi Lestari<br/>RM-001236</td>
                    <td>dr. Budi Santoso, Sp.B</td>
                    <td>10:00</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Detail Resep - RX-2024-0123</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
                <div>
                  <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234)<br/>
                  <strong>Diagnosa:</strong> I25.1 - Coronary Artery Disease<br/>
                  <strong>Dokter:</strong> dr. Siti Nurhaliza, Sp.JP
                </div>
                <div>
                  <strong>Tanggal:</strong> 18 Januari 2024<br/>
                  <strong>Penjamin:</strong> TNI<br/>
                  <strong>Alergi:</strong> <span className="badge badge-danger">Penisilin</span>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Obat</th>
                    <th>Dosis</th>
                    <th>Rute</th>
                    <th>Frekuensi</th>
                    <th>Durasi</th>
                    <th>Qty</th>
                    <th>Status Verifikasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aspirin 100mg</td>
                    <td>100mg</td>
                    <td>PO</td>
                    <td>1x1</td>
                    <td>30 hari</td>
                    <td>30 tab</td>
                    <td><span className="badge badge-success">OK</span></td>
                  </tr>
                  <tr>
                    <td>Clopidogrel 75mg</td>
                    <td>75mg</td>
                    <td>PO</td>
                    <td>1x1</td>
                    <td>30 hari</td>
                    <td>30 tab</td>
                    <td><span className="badge badge-success">OK</span></td>
                  </tr>
                  <tr>
                    <td>Atorvastatin 20mg</td>
                    <td>20mg</td>
                    <td>PO</td>
                    <td>1x1 (malam)</td>
                    <td>30 hari</td>
                    <td>30 tab</td>
                    <td><span className="badge badge-success">OK</span></td>
                  </tr>
                  <tr>
                    <td>Bisoprolol 5mg</td>
                    <td>5mg</td>
                    <td>PO</td>
                    <td>1x1 (pagi)</td>
                    <td>30 hari</td>
                    <td>30 tab</td>
                    <td><span className="badge badge-warning">Cek Interaksi</span></td>
                  </tr>
                </tbody>
              </table>

              <div className="alert alert-warning" style={{ marginTop: '20px' }}>
                <AlertTriangle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                <strong>Peringatan Interaksi:</strong> Bisoprolol dapat meningkatkan efek hipotensi bila dikombinasikan dengan obat antihipertensi lain. Monitor tekanan darah pasien.
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">Approve & Lanjut Dispensing</button>
                <button className="btn btn-danger">Reject - Konsultasi Dokter</button>
                <button className="btn btn-outline">Substitusi Obat</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dispensing' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Proses Dispensing Unit-Dose</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <strong>Resep:</strong> RX-2024-0124 - Mayor Ahmad Fauzi
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Obat</th>
                  <th>Jumlah</th>
                  <th>Lokasi</th>
                  <th>Batch/Lot</th>
                  <th>Expired</th>
                  <th>Scan Barcode</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amoxicillin 500mg</td>
                  <td>21 kapsul</td>
                  <td>Rak A-12</td>
                  <td>LOT-2023-456</td>
                  <td>12/2025</td>
                  <td><input type="text" className="form-input" placeholder="Scan..." /></td>
                  <td><span className="badge badge-success">Scanned</span></td>
                </tr>
                <tr>
                  <td>Paracetamol 500mg</td>
                  <td>30 tablet</td>
                  <td>Rak B-05</td>
                  <td>LOT-2023-789</td>
                  <td>06/2025</td>
                  <td><input type="text" className="form-input" placeholder="Scan..." /></td>
                  <td><span className="badge badge-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>OBH Syrup 100ml</td>
                  <td>1 botol</td>
                  <td>Rak C-08</td>
                  <td>LOT-2023-123</td>
                  <td>09/2024</td>
                  <td><input type="text" className="form-input" placeholder="Scan..." /></td>
                  <td><span className="badge badge-warning">Pending</span></td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>Five Rights Check:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" checked readOnly /> Right Patient (Nama & No. RM sesuai)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" checked readOnly /> Right Drug (Obat sesuai resep)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" checked readOnly /> Right Dose (Dosis sesuai)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Right Route (Rute pemberian sesuai)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Right Time (Jadwal pemberian sesuai)
                </label>
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">Selesai - Serahkan ke Pasien</button>
              <button className="btn btn-outline">Print Label</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stok' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Monitoring Stok Obat</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari obat..."
                  style={{ maxWidth: '400px' }}
                />
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Nama Obat</th>
                    <th>Satuan</th>
                    <th>Stok Tersedia</th>
                    <th>Stok Minimum</th>
                    <th>Expired Terdekat</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adrenalin 1mg/ml Ampul</td>
                    <td>Ampul</td>
                    <td>2</td>
                    <td>10</td>
                    <td>03/2024</td>
                    <td><span className="badge badge-danger">Kritis</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Order</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Amoxicillin 500mg</td>
                    <td>Kapsul</td>
                    <td>1500</td>
                    <td>500</td>
                    <td>12/2025</td>
                    <td><span className="badge badge-success">Aman</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Paracetamol 500mg</td>
                    <td>Tablet</td>
                    <td>3200</td>
                    <td>1000</td>
                    <td>08/2025</td>
                    <td><span className="badge badge-success">Aman</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Insulin Rapid Acting</td>
                    <td>Vial</td>
                    <td>8</td>
                    <td>15</td>
                    <td>05/2024</td>
                    <td><span className="badge badge-warning">Low Stock</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Order</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ceftriaxone 1g Vial</td>
                    <td>Vial</td>
                    <td>250</td>
                    <td>100</td>
                    <td>02/2025</td>
                    <td><span className="badge badge-success">Aman</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Monitoring Rantai Dingin</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Monitoring suhu otomatis via IoT sensor untuk obat-obatan yang memerlukan penyimpanan khusus
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Lokasi</th>
                    <th>Suhu Saat Ini</th>
                    <th>Range Ideal</th>
                    <th>Status</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kulkas Vaksin - A1</td>
                    <td>4.2°C</td>
                    <td>2-8°C</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>2 menit lalu</td>
                  </tr>
                  <tr>
                    <td>Kulkas Insulin - B2</td>
                    <td>5.8°C</td>
                    <td>2-8°C</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>1 menit lalu</td>
                  </tr>
                  <tr>
                    <td>Freezer Khusus - C3</td>
                    <td>-18.5°C</td>
                    <td>-15 to -25°C</td>
                    <td><span className="badge badge-success">Normal</span></td>
                    <td>3 menit lalu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'narkotika' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Buku Besar Narkotika & Psikotropika</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              <AlertTriangle size={20} style={{ display: 'inline', marginRight: '10px' }} />
              <strong>Perhatian:</strong> Setiap transaksi narkotika/psikotropika memerlukan verifikasi 2 orang (apoteker + petugas)
            </div>

            <div style={{ marginBottom: '20px' }}>
              <strong>Filter:</strong>
              <select className="form-select" style={{ maxWidth: '300px', marginLeft: '10px' }}>
                <option>Semua Jenis</option>
                <option>Narkotika</option>
                <option>Psikotropika</option>
              </select>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Jenis</th>
                  <th>Nama Obat</th>
                  <th>No. Resep</th>
                  <th>Pasien</th>
                  <th>Masuk</th>
                  <th>Keluar</th>
                  <th>Sisa</th>
                  <th>Verifikator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/24 08:00</td>
                  <td><span className="badge badge-danger">Narkotika</span></td>
                  <td>Morphine 10mg/ml Ampul</td>
                  <td>-</td>
                  <td>Penerimaan Stok</td>
                  <td>50</td>
                  <td>-</td>
                  <td>150</td>
                  <td>Apt. Siti & Ani</td>
                </tr>
                <tr>
                  <td>18/01/24 09:30</td>
                  <td><span className="badge badge-danger">Narkotika</span></td>
                  <td>Morphine 10mg/ml Ampul</td>
                  <td>RX-2024-0120</td>
                  <td>Letkol Budi (RM-001234)</td>
                  <td>-</td>
                  <td>3</td>
                  <td>147</td>
                  <td>Apt. Budi & Doni</td>
                </tr>
                <tr>
                  <td>18/01/24 11:00</td>
                  <td><span className="badge badge-warning">Psikotropika</span></td>
                  <td>Diazepam 10mg Tab</td>
                  <td>RX-2024-0122</td>
                  <td>Mayor Dewi (RM-001235)</td>
                  <td>-</td>
                  <td>10</td>
                  <td>240</td>
                  <td>Apt. Siti & Ani</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Stok Narkotika/Psikotropika Saat Ini:</strong>
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                <li>Morphine 10mg/ml Ampul: 147 ampul</li>
                <li>Fentanyl 50mcg/ml Ampul: 82 ampul</li>
                <li>Pethidine 50mg/ml Ampul: 65 ampul</li>
                <li>Diazepam 10mg Tab: 240 tablet</li>
                <li>Midazolam 5mg/ml Ampul: 95 ampul</li>
              </ul>
            </div>

            <button className="btn btn-primary" style={{ marginTop: '20px' }}>
              <FileText size={16} />
              Generate Laporan Periodik
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Farmasi;
