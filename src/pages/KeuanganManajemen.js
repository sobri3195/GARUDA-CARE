import React, { useState } from 'react';
import { Wallet, Building2, ArrowRightLeft } from 'lucide-react';

const KeuanganManajemen = () => {
  const [activeTab, setActiveTab] = useState('kas');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'kas' ? 'active' : ''}`}
          onClick={() => setActiveTab('kas')}
        >
          Manajemen Kas
        </button>
        <button 
          className={`tab ${activeTab === 'bank' ? 'active' : ''}`}
          onClick={() => setActiveTab('bank')}
        >
          Manajemen Bank
        </button>
        <button 
          className={`tab ${activeTab === 'transfer' ? 'active' : ''}`}
          onClick={() => setActiveTab('transfer')}
        >
          Transfer
        </button>
      </div>

      {activeTab === 'kas' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Wallet size={30} />
              </div>
              <div className="stat-content">
                <h3>Saldo Kas</h3>
                <p>Rp 600.000.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <ArrowRightLeft size={30} />
              </div>
              <div className="stat-content">
                <h3>Penerimaan Hari Ini</h3>
                <p>Rp 45.000.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <ArrowRightLeft size={30} />
              </div>
              <div className="stat-content">
                <h3>Pengeluaran Hari Ini</h3>
                <p>Rp 28.000.000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Wallet size={30} />
              </div>
              <div className="stat-content">
                <h3>Selisih Hari Ini</h3>
                <p>Rp 17.000.000</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Manajemen Kas</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="date" 
                  className="form-input" 
                  style={{ maxWidth: '200px' }}
                  defaultValue="2024-01-18"
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Transaksi</option>
                  <option value="in">Penerimaan</option>
                  <option value="out">Pengeluaran</option>
                </select>
                <button className="btn btn-primary">Filter</button>
                <button className="btn btn-success">Kas Masuk</button>
                <button className="btn btn-danger">Kas Keluar</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Waktu</th>
                    <th>No. Transaksi</th>
                    <th>Jenis</th>
                    <th>Keterangan</th>
                    <th>Penerimaan</th>
                    <th>Pengeluaran</th>
                    <th>Saldo</th>
                    <th>Petugas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>08:00</td>
                    <td>-</td>
                    <td>Saldo Awal</td>
                    <td>Saldo Awal Hari Ini</td>
                    <td>-</td>
                    <td>-</td>
                    <td>Rp 583.000.000</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>09:15</td>
                    <td>KAS-IN-001</td>
                    <td><span className="badge badge-success">Penerimaan</span></td>
                    <td>Pembayaran Pasien RM-2024-0123</td>
                    <td>Rp 8.500.000</td>
                    <td>-</td>
                    <td>Rp 591.500.000</td>
                    <td>Siti Aisyah</td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>10:30</td>
                    <td>KAS-IN-002</td>
                    <td><span className="badge badge-success">Penerimaan</span></td>
                    <td>Pembayaran Pasien RM-2024-0125</td>
                    <td>Rp 2.500.000</td>
                    <td>-</td>
                    <td>Rp 594.000.000</td>
                    <td>Ahmad Rifai</td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>11:00</td>
                    <td>KAS-OUT-001</td>
                    <td><span className="badge badge-danger">Pengeluaran</span></td>
                    <td>Pembelian ATK</td>
                    <td>-</td>
                    <td>Rp 1.500.000</td>
                    <td>Rp 592.500.000</td>
                    <td>Dewi Lestari</td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>13:45</td>
                    <td>KAS-IN-003</td>
                    <td><span className="badge badge-success">Penerimaan</span></td>
                    <td>Pembayaran Pasien RM-2024-0128</td>
                    <td>Rp 12.000.000</td>
                    <td>-</td>
                    <td>Rp 604.500.000</td>
                    <td>Siti Aisyah</td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>14:30</td>
                    <td>KAS-OUT-002</td>
                    <td><span className="badge badge-danger">Pengeluaran</span></td>
                    <td>Biaya Operasional</td>
                    <td>-</td>
                    <td>Rp 4.500.000</td>
                    <td>Rp 600.000.000</td>
                    <td>Ahmad Rifai</td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
                    <td colSpan="4">Total Hari Ini</td>
                    <td style={{ color: '#28a745' }}>Rp 23.000.000</td>
                    <td style={{ color: '#dc3545' }}>Rp 6.000.000</td>
                    <td style={{ color: '#003d82' }}>Rp 600.000.000</td>
                    <td colSpan="2"></td>
                  </tr>
                </tfoot>
              </table>

              <div style={{ marginTop: '20px' }}>
                <button className="btn btn-primary">Tutup Kas Harian</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bank' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Building2 size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Saldo Bank</h3>
                <p>Rp 1.5 Miliar</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Building2 size={30} />
              </div>
              <div className="stat-content">
                <h3>Rekening Aktif</h3>
                <p>4</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <ArrowRightLeft size={30} />
              </div>
              <div className="stat-content">
                <h3>Transaksi Bulan Ini</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Wallet size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Reconciliation</h3>
                <p>8</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Rekening Bank</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px' }}>
                <button className="btn btn-primary">Tambah Rekening Baru</button>
              </div>

              <div className="dashboard-grid">
                <div className="card" style={{ border: '2px solid #003d82' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h3 style={{ color: '#003d82', marginBottom: '10px' }}>Bank Mandiri</h3>
                        <p style={{ color: '#666', fontSize: '0.9em' }}>1234567890</p>
                        <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>RS Trimatra - Operasional</p>
                      </div>
                      <span className="badge badge-success">Aktif</span>
                    </div>
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                      <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo</p>
                      <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#003d82' }}>Rp 750.000.000</p>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      <button className="btn btn-outline btn-sm">Detail</button>
                      <button className="btn btn-outline btn-sm">Mutasi</button>
                      <button className="btn btn-outline btn-sm">Rekonsiliasi</button>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ border: '2px solid #28a745' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h3 style={{ color: '#28a745', marginBottom: '10px' }}>BNI</h3>
                        <p style={{ color: '#666', fontSize: '0.9em' }}>0987654321</p>
                        <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>RS Trimatra - Payroll</p>
                      </div>
                      <span className="badge badge-success">Aktif</span>
                    </div>
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                      <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo</p>
                      <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#28a745' }}>Rp 450.000.000</p>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      <button className="btn btn-outline btn-sm">Detail</button>
                      <button className="btn btn-outline btn-sm">Mutasi</button>
                      <button className="btn btn-outline btn-sm">Rekonsiliasi</button>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ border: '2px solid #17a2b8' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h3 style={{ color: '#17a2b8', marginBottom: '10px' }}>BRI</h3>
                        <p style={{ color: '#666', fontSize: '0.9em' }}>5678901234</p>
                        <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>RS Trimatra - Investasi</p>
                      </div>
                      <span className="badge badge-success">Aktif</span>
                    </div>
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                      <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo</p>
                      <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#17a2b8' }}>Rp 250.000.000</p>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      <button className="btn btn-outline btn-sm">Detail</button>
                      <button className="btn btn-outline btn-sm">Mutasi</button>
                      <button className="btn btn-outline btn-sm">Rekonsiliasi</button>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ border: '2px solid #ffc107' }}>
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h3 style={{ color: '#ffc107', marginBottom: '10px' }}>BCA</h3>
                        <p style={{ color: '#666', fontSize: '0.9em' }}>4321098765</p>
                        <p style={{ fontSize: '0.85em', color: '#666', marginTop: '5px' }}>RS Trimatra - Cadangan</p>
                      </div>
                      <span className="badge badge-success">Aktif</span>
                    </div>
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
                      <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo</p>
                      <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#ffc107' }}>Rp 50.000.000</p>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      <button className="btn btn-outline btn-sm">Detail</button>
                      <button className="btn btn-outline btn-sm">Mutasi</button>
                      <button className="btn btn-outline btn-sm">Rekonsiliasi</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Mutasi Bank Terkini</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Rekening</option>
                  <option value="1">Bank Mandiri - 1234567890</option>
                  <option value="2">BNI - 0987654321</option>
                  <option value="3">BRI - 5678901234</option>
                  <option value="4">BCA - 4321098765</option>
                </select>
                <input 
                  type="date" 
                  className="form-input" 
                  style={{ maxWidth: '200px' }}
                />
                <button className="btn btn-primary">Filter</button>
                <button className="btn btn-secondary">Import Mutasi</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Bank</th>
                    <th>No. Transaksi</th>
                    <th>Keterangan</th>
                    <th>Debit</th>
                    <th>Kredit</th>
                    <th>Saldo</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18/01/2024</td>
                    <td>Bank Mandiri</td>
                    <td>TRF-2024-0025</td>
                    <td>Transfer dari BPJS</td>
                    <td>Rp 150.000.000</td>
                    <td>-</td>
                    <td>Rp 750.000.000</td>
                    <td><span className="badge badge-success">Reconciled</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>17/01/2024</td>
                    <td>BNI</td>
                    <td>PAY-2024-0120</td>
                    <td>Pembayaran Gaji</td>
                    <td>-</td>
                    <td>Rp 85.000.000</td>
                    <td>Rp 450.000.000</td>
                    <td><span className="badge badge-success">Reconciled</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>16/01/2024</td>
                    <td>Bank Mandiri</td>
                    <td>PAY-2024-0118</td>
                    <td>Bayar Supplier PT. Kimia Farma</td>
                    <td>-</td>
                    <td>Rp 75.000.000</td>
                    <td>Rp 600.000.000</td>
                    <td><span className="badge badge-success">Reconciled</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15/01/2024</td>
                    <td>BRI</td>
                    <td>INT-2024-005</td>
                    <td>Bunga Bank</td>
                    <td>Rp 5.000.000</td>
                    <td>-</td>
                    <td>Rp 250.000.000</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Reconcile</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'transfer' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Transfer Dana</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px' }}>Buat Transfer Baru</h3>
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Dari Rekening</label>
                    <select className="form-select">
                      <option value="">Pilih Rekening</option>
                      <option value="1">Bank Mandiri - 1234567890 (Rp 750.000.000)</option>
                      <option value="2">BNI - 0987654321 (Rp 450.000.000)</option>
                      <option value="3">BRI - 5678901234 (Rp 250.000.000)</option>
                      <option value="4">BCA - 4321098765 (Rp 50.000.000)</option>
                      <option value="kas">Kas (Rp 600.000.000)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ke Rekening</label>
                    <select className="form-select">
                      <option value="">Pilih Rekening</option>
                      <option value="1">Bank Mandiri - 1234567890</option>
                      <option value="2">BNI - 0987654321</option>
                      <option value="3">BRI - 5678901234</option>
                      <option value="4">BCA - 4321098765</option>
                      <option value="kas">Kas</option>
                      <option value="eksternal">Rekening Eksternal</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Jumlah Transfer</label>
                    <input type="number" className="form-input" placeholder="0" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tanggal Transfer</label>
                    <input type="date" className="form-input" defaultValue="2024-01-18" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Keterangan</label>
                  <textarea className="form-textarea" rows="3" placeholder="Keterangan transfer..."></textarea>
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                  <button type="submit" className="btn btn-primary">Proses Transfer</button>
                  <button type="button" className="btn btn-outline">Batal</button>
                </div>
              </form>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Riwayat Transfer</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>No. Transfer</th>
                  <th>Tanggal</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TRF-2024-0028</td>
                  <td>18/01/2024</td>
                  <td>Kas</td>
                  <td>Bank Mandiri</td>
                  <td>Rp 100.000.000</td>
                  <td>Setoran Kas ke Bank</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TRF-2024-0027</td>
                  <td>17/01/2024</td>
                  <td>Bank Mandiri</td>
                  <td>BNI</td>
                  <td>Rp 50.000.000</td>
                  <td>Transfer Antar Rekening</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TRF-2024-0026</td>
                  <td>15/01/2024</td>
                  <td>Bank Mandiri</td>
                  <td>PT. Kimia Farma (Eksternal)</td>
                  <td>Rp 75.000.000</td>
                  <td>Pembayaran Supplier</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TRF-2024-0025</td>
                  <td>12/01/2024</td>
                  <td>BNI</td>
                  <td>Kas</td>
                  <td>Rp 25.000.000</td>
                  <td>Pengambilan Kas untuk Operasional</td>
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

export default KeuanganManajemen;
