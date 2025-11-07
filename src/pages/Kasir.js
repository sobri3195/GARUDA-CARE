import React, { useState } from 'react';
import { DollarSign, Users, CreditCard, Receipt, FileText, RotateCcw } from 'lucide-react';

const Kasir = () => {
  const [activeTab, setActiveTab] = useState('pasien');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          Pasien Pulang
        </button>
        <button 
          className={`tab ${activeTab === 'pembayaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pembayaran')}
        >
          Pembayaran
        </button>
        <button 
          className={`tab ${activeTab === 'uangmuka' ? 'active' : ''}`}
          onClick={() => setActiveTab('uangmuka')}
        >
          Uang Muka
        </button>
        <button 
          className={`tab ${activeTab === 'retur' ? 'active' : ''}`}
          onClick={() => setActiveTab('retur')}
        >
          Retur Tagihan
        </button>
        <button 
          className={`tab ${activeTab === 'closing' ? 'active' : ''}`}
          onClick={() => setActiveTab('closing')}
        >
          Closing Kasir
        </button>
        <button 
          className={`tab ${activeTab === 'jasadokter' ? 'active' : ''}`}
          onClick={() => setActiveTab('jasadokter')}
        >
          Jasa Dokter
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
                <h3>Pasien Pulang Hari Ini</h3>
                <p>87</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Belum Bayar</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <CreditCard size={30} />
              </div>
              <div className="stat-content">
                <h3>Sudah Bayar</h3>
                <p>64</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pembayaran</h3>
                <p>Rp 45.750.000</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Pasien Pulang</h2>
            </div>
            <div className="card-body">
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
                    <th>Pangkat</th>
                    <th>Jenis Layanan</th>
                    <th>Penjamin</th>
                    <th>Total Tagihan</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-001234</td>
                    <td>Letkol Budi Santoso</td>
                    <td>Letkol</td>
                    <td>Rawat Jalan</td>
                    <td><span className="badge badge-primary">TNI</span></td>
                    <td>Rp 530.000</td>
                    <td><span className="badge badge-warning">Belum Bayar</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Bayar</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-002456</td>
                    <td>Mayor Ahmad Fauzi</td>
                    <td>Mayor</td>
                    <td>Rawat Inap</td>
                    <td><span className="badge badge-info">BPJS</span></td>
                    <td>Rp 2.500.000</td>
                    <td><span className="badge badge-warning">Belum Bayar</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Bayar</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-003789</td>
                    <td>Kapten Dewi Lestari</td>
                    <td>Kapten</td>
                    <td>IGD</td>
                    <td><span className="badge badge-primary">TNI</span></td>
                    <td>Rp 1.025.000</td>
                    <td><span className="badge badge-success">Sudah Bayar</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Cetak</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-004567</td>
                    <td>Serda Hendra Wijaya</td>
                    <td>Serda</td>
                    <td>Rawat Jalan</td>
                    <td><span className="badge badge-secondary">Umum</span></td>
                    <td>Rp 450.000</td>
                    <td><span className="badge badge-warning">Belum Bayar</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Bayar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pembayaran' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pembayaran Pelayanan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Penjamin:</strong> TNI | <strong>Tanggal:</strong> 18 Januari 2024
            </div>

            <h3 style={{ marginBottom: '15px' }}>Rincian Tagihan</h3>
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
                  <td>Konsultasi</td>
                  <td>Konsultasi Spesialis Jantung</td>
                  <td>1</td>
                  <td>Rp 150.000</td>
                  <td>Rp 150.000</td>
                </tr>
                <tr>
                  <td>Tindakan</td>
                  <td>EKG 12 Lead</td>
                  <td>1</td>
                  <td>Rp 100.000</td>
                  <td>Rp 100.000</td>
                </tr>
                <tr>
                  <td>Obat</td>
                  <td>Bisoprolol 5mg - 30 tablet</td>
                  <td>1</td>
                  <td>Rp 45.000</td>
                  <td>Rp 45.000</td>
                </tr>
                <tr>
                  <td>Obat</td>
                  <td>Simvastatin 20mg - 30 tablet</td>
                  <td>1</td>
                  <td>Rp 35.000</td>
                  <td>Rp 35.000</td>
                </tr>
                <tr>
                  <td>Lab</td>
                  <td>Lipid Profile</td>
                  <td>1</td>
                  <td>Rp 200.000</td>
                  <td>Rp 200.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Total Tagihan</td>
                  <td>Rp 530.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI (100%)</td>
                  <td>Rp 530.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', color: '#d4af37', fontSize: '1.1em' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Bayar Pasien</td>
                  <td>Rp 0</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #003d82', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px' }}>Form Pembayaran</h3>
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">Total yang Harus Dibayar</label>
                  <input type="text" className="form-input" value="Rp 0" readOnly style={{ fontWeight: 'bold', fontSize: '1.2em' }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Metode Pembayaran</label>
                  <select className="form-select">
                    <option value="tunai">Tunai</option>
                    <option value="debit">Kartu Debit</option>
                    <option value="kredit">Kartu Kredit</option>
                    <option value="transfer">Transfer Bank</option>
                    <option value="jaminan">Jaminan Instansi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Jumlah Dibayar</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Kembalian</label>
                  <input type="text" className="form-input" value="Rp 0" readOnly style={{ fontWeight: 'bold' }} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Catatan</label>
                <textarea className="form-textarea" rows="2" placeholder="Catatan pembayaran (opsional)"></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">
                  <CreditCard size={16} />
                  Proses Pembayaran
                </button>
                <button className="btn btn-secondary">
                  <Receipt size={16} />
                  Cetak Kwitansi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'uangmuka' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Uang Muka</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary">Tambah Uang Muka Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Kwitansi</th>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Jenis Layanan</th>
                  <th>Jumlah UM</th>
                  <th>Terpakai</th>
                  <th>Sisa</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UM-2024-001</td>
                  <td>15/01/2024</td>
                  <td>RM-002456</td>
                  <td>Mayor Ahmad Fauzi</td>
                  <td>Rawat Inap</td>
                  <td>Rp 3.000.000</td>
                  <td>Rp 2.500.000</td>
                  <td>Rp 500.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>UM-2024-002</td>
                  <td>16/01/2024</td>
                  <td>RM-003456</td>
                  <td>Kolonel Siti Nurhaliza</td>
                  <td>Rawat Inap</td>
                  <td>Rp 5.000.000</td>
                  <td>Rp 4.200.000</td>
                  <td>Rp 800.000</td>
                  <td><span className="badge badge-success">Aktif</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>UM-2024-003</td>
                  <td>17/01/2024</td>
                  <td>RM-004567</td>
                  <td>Kapten Hendra Wijaya</td>
                  <td>Operasi</td>
                  <td>Rp 10.000.000</td>
                  <td>Rp 11.600.000</td>
                  <td>-Rp 1.600.000</td>
                  <td><span className="badge badge-warning">Kurang Bayar</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pelunasan</button>
                  </td>
                </tr>
                <tr>
                  <td>UM-2024-004</td>
                  <td>18/01/2024</td>
                  <td>RM-005678</td>
                  <td>Mayor Dewi Lestari</td>
                  <td>Rawat Inap</td>
                  <td>Rp 2.000.000</td>
                  <td>Rp 1.800.000</td>
                  <td>Rp 200.000</td>
                  <td><span className="badge badge-secondary">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Cetak</button>
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
            <h2 className="card-title">Retur Tagihan Pasien</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              <RotateCcw size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Retur tagihan memerlukan persetujuan kepala kasir atau supervisor
            </div>

            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari kwitansi atau pasien..."
                style={{ maxWidth: '400px' }}
              />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Kwitansi</th>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Total Tagihan</th>
                  <th>Alasan Retur</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KW-2024-123</td>
                  <td>17/01/2024</td>
                  <td>RM-004321</td>
                  <td>Kapten Budi Santoso</td>
                  <td>Rp 350.000</td>
                  <td>Kesalahan tarif obat</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Proses</button>
                  </td>
                </tr>
                <tr>
                  <td>KW-2024-115</td>
                  <td>16/01/2024</td>
                  <td>RM-003987</td>
                  <td>Mayor Ahmad Fauzi</td>
                  <td>Rp 150.000</td>
                  <td>Tindakan tidak dilakukan</td>
                  <td><span className="badge badge-success">Approved</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'closing' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Closing Kasir</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Kasir:</strong> Loket 1 - Siti Rahmawati | <strong>Tanggal:</strong> 18 Januari 2024 | <strong>Shift:</strong> Pagi (08:00-16:00)
            </div>

            <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
              <div className="stat-card">
                <div className="stat-icon info">
                  <Receipt size={30} />
                </div>
                <div className="stat-content">
                  <h3>Total Transaksi</h3>
                  <p>87</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon success">
                  <DollarSign size={30} />
                </div>
                <div className="stat-content">
                  <h3>Total Penerimaan</h3>
                  <p>Rp 45.750.000</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon warning">
                  <CreditCard size={30} />
                </div>
                <div className="stat-content">
                  <h3>Tunai</h3>
                  <p>Rp 12.500.000</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon secondary">
                  <CreditCard size={30} />
                </div>
                <div className="stat-content">
                  <h3>Non Tunai</h3>
                  <p>Rp 33.250.000</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginBottom: '15px' }}>Rincian Metode Pembayaran</h3>
            <table className="table" style={{ marginBottom: '30px' }}>
              <thead>
                <tr>
                  <th>Metode Pembayaran</th>
                  <th>Jumlah Transaksi</th>
                  <th>Total Nominal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tunai</td>
                  <td>35</td>
                  <td>Rp 12.500.000</td>
                </tr>
                <tr>
                  <td>Kartu Debit</td>
                  <td>28</td>
                  <td>Rp 18.750.000</td>
                </tr>
                <tr>
                  <td>Kartu Kredit</td>
                  <td>12</td>
                  <td>Rp 8.500.000</td>
                </tr>
                <tr>
                  <td>Transfer Bank</td>
                  <td>8</td>
                  <td>Rp 4.000.000</td>
                </tr>
                <tr>
                  <td>Jaminan Instansi</td>
                  <td>4</td>
                  <td>Rp 2.000.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82' }}>
                  <td>Total</td>
                  <td>87</td>
                  <td>Rp 45.750.000</td>
                </tr>
              </tbody>
            </table>

            <div style={{ padding: '20px', border: '2px solid #003d82', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px' }}>Verifikasi Closing</h3>
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">Uang Tunai Fisik</label>
                  <input type="number" className="form-input" placeholder="Masukkan jumlah uang tunai fisik" />
                </div>
                <div className="form-group">
                  <label className="form-label">Selisih</label>
                  <input type="text" className="form-input" value="Rp 0" readOnly style={{ fontWeight: 'bold' }} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Catatan Closing</label>
                <textarea className="form-textarea" rows="3" placeholder="Catatan atau kendala selama shift..."></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">
                  <FileText size={16} />
                  Closing Kasir
                </button>
                <button className="btn btn-secondary">
                  <Receipt size={16} />
                  Cetak Laporan Closing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'jasadokter' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rekapitulasi Jasa Dokter</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
              <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
                <label className="form-label">Dari Tanggal</label>
                <input type="date" className="form-input" defaultValue="2024-01-01" />
              </div>
              <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
                <label className="form-label">Sampai Tanggal</label>
                <input type="date" className="form-input" defaultValue="2024-01-18" />
              </div>
              <button className="btn btn-primary">Filter</button>
              <button className="btn btn-secondary">Export Excel</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Nama Dokter</th>
                  <th>Spesialisasi</th>
                  <th>Jumlah Layanan</th>
                  <th>Jasa Konsultasi</th>
                  <th>Jasa Tindakan</th>
                  <th>Jasa Operasi</th>
                  <th>Total Jasa</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Penyakit Dalam</td>
                  <td>45</td>
                  <td>Rp 6.750.000</td>
                  <td>Rp 2.500.000</td>
                  <td>-</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 9.250.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Jantung</td>
                  <td>32</td>
                  <td>Rp 4.800.000</td>
                  <td>Rp 3.200.000</td>
                  <td>-</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 8.000.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Budi Santoso, Sp.B</td>
                  <td>Bedah</td>
                  <td>28</td>
                  <td>Rp 4.200.000</td>
                  <td>Rp 2.800.000</td>
                  <td>Rp 12.500.000</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 19.500.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Dewi Lestari, Sp.A</td>
                  <td>Anak</td>
                  <td>38</td>
                  <td>Rp 5.700.000</td>
                  <td>Rp 1.900.000</td>
                  <td>-</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 7.600.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>dr. Ahmad Fauzi, Sp.OG</td>
                  <td>Kandungan</td>
                  <td>25</td>
                  <td>Rp 3.750.000</td>
                  <td>Rp 2.500.000</td>
                  <td>Rp 8.000.000</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 14.250.000</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82', background: '#f3f4f6' }}>
                  <td colSpan="2">Total</td>
                  <td>168</td>
                  <td>Rp 25.200.000</td>
                  <td>Rp 12.900.000</td>
                  <td>Rp 20.500.000</td>
                  <td>Rp 58.600.000</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kasir;
