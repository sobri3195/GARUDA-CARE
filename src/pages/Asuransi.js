import React, { useState } from 'react';
import { Shield, Users, FileText, CheckCircle, DollarSign } from 'lucide-react';

const Asuransi = () => {
  const [activeTab, setActiveTab] = useState('bpjs');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'bpjs' ? 'active' : ''}`}
          onClick={() => setActiveTab('bpjs')}
        >
          Pasien BPJS
        </button>
        <button 
          className={`tab ${activeTab === 'nonbpjs' ? 'active' : ''}`}
          onClick={() => setActiveTab('nonbpjs')}
        >
          Pasien Non-BPJS
        </button>
        <button 
          className={`tab ${activeTab === 'pengajuan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pengajuan')}
        >
          Pengajuan Claim
        </button>
        <button 
          className={`tab ${activeTab === 'manajemen' ? 'active' : ''}`}
          onClick={() => setActiveTab('manajemen')}
        >
          Manajemen Claim
        </button>
        <button 
          className={`tab ${activeTab === 'pembayaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pembayaran')}
        >
          Penerimaan Pembayaran
        </button>
      </div>

      {activeTab === 'bpjs' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pasien BPJS</h3>
                <p>1,245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <CheckCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Claim Disetujui</h3>
                <p>1,180</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Verifikasi</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Nilai Claim</h3>
                <p>Rp 825.000.000</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Pasien Jaminan BPJS</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari pasien (No. RM, No. BPJS, Nama)..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Status</option>
                  <option value="aktif">Aktif</option>
                  <option value="pending">Pending</option>
                  <option value="selesai">Selesai</option>
                </select>
                <button className="btn btn-primary">Cari</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>No. BPJS</th>
                    <th>Nama Pasien</th>
                    <th>Jenis Rawat</th>
                    <th>Tanggal Masuk</th>
                    <th>Diagnosa</th>
                    <th>Tarif INA-CBG</th>
                    <th>Status SEP</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-2024-0123</td>
                    <td>0001234567890</td>
                    <td>Mayor Budiman</td>
                    <td>Rawat Inap</td>
                    <td>15/01/2024</td>
                    <td>J18.9 - Pneumonia</td>
                    <td>Rp 8.500.000</td>
                    <td><span className="badge badge-success">Terbit</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-2024-0124</td>
                    <td>0001234567891</td>
                    <td>Serda Hartono</td>
                    <td>Rawat Jalan</td>
                    <td>18/01/2024</td>
                    <td>K29.0 - Gastritis</td>
                    <td>Rp 250.000</td>
                    <td><span className="badge badge-success">Terbit</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-2024-0125</td>
                    <td>0001234567892</td>
                    <td>Kopda Suryanto</td>
                    <td>Rawat Inap</td>
                    <td>18/01/2024</td>
                    <td>E11.9 - Diabetes Mellitus</td>
                    <td>Rp 12.000.000</td>
                    <td><span className="badge badge-warning">Pending</span></td>
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

      {activeTab === 'nonbpjs' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pasien Asuransi</h3>
                <p>356</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Shield size={30} />
              </div>
              <div className="stat-content">
                <h3>Perusahaan Asuransi</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Claim Pending</h3>
                <p>28</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Nilai Claim</h3>
                <p>Rp 245.000.000</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Pasien Jaminan Non-BPJS</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari pasien (No. RM, No. Polis, Nama)..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Asuransi</option>
                  <option value="prudential">Prudential</option>
                  <option value="allianz">Allianz</option>
                  <option value="manulife">Manulife</option>
                  <option value="axa">AXA Mandiri</option>
                </select>
                <button className="btn btn-primary">Cari</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>No. Polis</th>
                    <th>Nama Pasien</th>
                    <th>Asuransi</th>
                    <th>Jenis Rawat</th>
                    <th>Tanggal</th>
                    <th>Diagnosa</th>
                    <th>Nilai Claim</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-2024-0126</td>
                    <td>PRU-12345678</td>
                    <td>Letkol Hermawan</td>
                    <td>Prudential</td>
                    <td>Rawat Inap</td>
                    <td>16/01/2024</td>
                    <td>I21.9 - Acute MI</td>
                    <td>Rp 45.000.000</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-2024-0127</td>
                    <td>AXA-87654321</td>
                    <td>Mayor Sulistyo</td>
                    <td>AXA Mandiri</td>
                    <td>Rawat Jalan</td>
                    <td>17/01/2024</td>
                    <td>M79.3 - Myalgia</td>
                    <td>Rp 1.500.000</td>
                    <td><span className="badge badge-success">Disetujui</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-2024-0128</td>
                    <td>ALZ-11223344</td>
                    <td>Kapten Wibowo</td>
                    <td>Allianz</td>
                    <td>Rawat Inap</td>
                    <td>18/01/2024</td>
                    <td>K80.2 - Cholelithiasis</td>
                    <td>Rp 28.000.000</td>
                    <td><span className="badge badge-info">Verifikasi</span></td>
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

      {activeTab === 'pengajuan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pengajuan Claim Asuransi</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <FileText size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Pastikan semua dokumen kelengkapan sudah lengkap sebelum mengajukan claim
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Buat Pengajuan Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Claim</th>
                  <th>Tanggal Pengajuan</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Penjamin</th>
                  <th>Nilai Claim</th>
                  <th>Status</th>
                  <th>Petugas</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CLM-2024-0045</td>
                  <td>18/01/2024 14:30</td>
                  <td>RM-2024-0123</td>
                  <td>Mayor Budiman</td>
                  <td>BPJS Kesehatan</td>
                  <td>Rp 8.500.000</td>
                  <td><span className="badge badge-warning">Draft</span></td>
                  <td>Siti Aisyah</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Ajukan</button>
                  </td>
                </tr>
                <tr>
                  <td>CLM-2024-0046</td>
                  <td>18/01/2024 15:00</td>
                  <td>RM-2024-0126</td>
                  <td>Letkol Hermawan</td>
                  <td>Prudential</td>
                  <td>Rp 45.000.000</td>
                  <td><span className="badge badge-info">Submitted</span></td>
                  <td>Ahmad Rifai</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>CLM-2024-0047</td>
                  <td>18/01/2024 15:30</td>
                  <td>RM-2024-0127</td>
                  <td>Mayor Sulistyo</td>
                  <td>AXA Mandiri</td>
                  <td>Rp 1.500.000</td>
                  <td><span className="badge badge-success">Disetujui</span></td>
                  <td>Dewi Lestari</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'manajemen' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Claim Asuransi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari claim (No. Claim, Nama Pasien)..."
                style={{ flex: 1, maxWidth: '400px' }}
              />
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Status</option>
                <option value="submitted">Submitted</option>
                <option value="verifikasi">Verifikasi</option>
                <option value="approved">Disetujui</option>
                <option value="rejected">Ditolak</option>
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
                  <th>No. Claim</th>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Penjamin</th>
                  <th>Nilai Claim</th>
                  <th>Nilai Disetujui</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CLM-2024-0040</td>
                  <td>15/01/2024</td>
                  <td>RM-2024-0120</td>
                  <td>Kolonel Setiono</td>
                  <td>BPJS Kesehatan</td>
                  <td>Rp 15.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td><span className="badge badge-success">Disetujui</span></td>
                  <td>Sesuai INA-CBG</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>CLM-2024-0041</td>
                  <td>16/01/2024</td>
                  <td>RM-2024-0121</td>
                  <td>Mayor Wijaya</td>
                  <td>Allianz</td>
                  <td>Rp 35.000.000</td>
                  <td>Rp 30.000.000</td>
                  <td><span className="badge badge-warning">Partial</span></td>
                  <td>Excess limit</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>CLM-2024-0042</td>
                  <td>17/01/2024</td>
                  <td>RM-2024-0122</td>
                  <td>Kapten Hadi</td>
                  <td>Prudential</td>
                  <td>Rp 8.500.000</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-danger">Ditolak</span></td>
                  <td>Pre-existing condition</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>CLM-2024-0043</td>
                  <td>17/01/2024</td>
                  <td>RM-2024-0123</td>
                  <td>Mayor Budiman</td>
                  <td>BPJS Kesehatan</td>
                  <td>Rp 8.500.000</td>
                  <td>-</td>
                  <td><span className="badge badge-info">Verifikasi</span></td>
                  <td>Menunggu verifikasi</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Verifikasi</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pembayaran' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Penerimaan Pembayaran Claim</h2>
          </div>
          <div className="card-body">
            <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
              <div className="stat-card">
                <div className="stat-icon success">
                  <DollarSign size={30} />
                </div>
                <div className="stat-content">
                  <h3>Pembayaran Bulan Ini</h3>
                  <p>Rp 450.000.000</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon warning">
                  <FileText size={30} />
                </div>
                <div className="stat-content">
                  <h3>Menunggu Pembayaran</h3>
                  <p>Rp 125.000.000</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon info">
                  <CheckCircle size={30} />
                </div>
                <div className="stat-content">
                  <h3>Lunas Bulan Ini</h3>
                  <p>45 Claim</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon primary">
                  <Shield size={30} />
                </div>
                <div className="stat-content">
                  <h3>Outstanding Total</h3>
                  <p>Rp 385.000.000</p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Rekam Penerimaan Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Penerimaan</th>
                  <th>Tanggal</th>
                  <th>Penjamin</th>
                  <th>No. Claim</th>
                  <th>Periode</th>
                  <th>Jumlah Pembayaran</th>
                  <th>No. Rekening</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PAY-2024-0020</td>
                  <td>18/01/2024</td>
                  <td>BPJS Kesehatan</td>
                  <td>CLM-2024-0040</td>
                  <td>Januari 2024</td>
                  <td>Rp 15.000.000</td>
                  <td>1234567890</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>PAY-2024-0021</td>
                  <td>18/01/2024</td>
                  <td>Allianz</td>
                  <td>CLM-2024-0041</td>
                  <td>Januari 2024</td>
                  <td>Rp 30.000.000</td>
                  <td>1234567890</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>PAY-2024-0019</td>
                  <td>17/01/2024</td>
                  <td>Prudential</td>
                  <td>CLM-2024-0038</td>
                  <td>Desember 2023</td>
                  <td>Rp 25.000.000</td>
                  <td>1234567890</td>
                  <td><span className="badge badge-success">Diterima</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>AXA Mandiri</td>
                  <td>CLM-2024-0047</td>
                  <td>Januari 2024</td>
                  <td>Rp 1.500.000</td>
                  <td>-</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Rekam</button>
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

export default Asuransi;
