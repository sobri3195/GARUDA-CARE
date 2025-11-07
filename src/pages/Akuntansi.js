import React, { useState } from 'react';
import { FileText, Receipt, TrendingUp, BookOpen, DollarSign, BarChart3 } from 'lucide-react';

const Akuntansi = () => {
  const [activeTab, setActiveTab] = useState('invoice');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'invoice' ? 'active' : ''}`}
          onClick={() => setActiveTab('invoice')}
        >
          Invoice
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          Tagihan
        </button>
        <button 
          className={`tab ${activeTab === 'piutang' ? 'active' : ''}`}
          onClick={() => setActiveTab('piutang')}
        >
          Kartu Piutang
        </button>
        <button 
          className={`tab ${activeTab === 'agingpiutang' ? 'active' : ''}`}
          onClick={() => setActiveTab('agingpiutang')}
        >
          Aging Piutang
        </button>
        <button 
          className={`tab ${activeTab === 'hutang' ? 'active' : ''}`}
          onClick={() => setActiveTab('hutang')}
        >
          Kartu Hutang
        </button>
        <button 
          className={`tab ${activeTab === 'aginghutang' ? 'active' : ''}`}
          onClick={() => setActiveTab('aginghutang')}
        >
          Aging Hutang
        </button>
        <button 
          className={`tab ${activeTab === 'jurnal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jurnal')}
        >
          Jurnal
        </button>
        <button 
          className={`tab ${activeTab === 'bukubesar' ? 'active' : ''}`}
          onClick={() => setActiveTab('bukubesar')}
        >
          Buku Besar
        </button>
        <button 
          className={`tab ${activeTab === 'labarugi' ? 'active' : ''}`}
          onClick={() => setActiveTab('labarugi')}
        >
          Laba Rugi
        </button>
        <button 
          className={`tab ${activeTab === 'neraca' ? 'active' : ''}`}
          onClick={() => setActiveTab('neraca')}
        >
          Neraca
        </button>
        <button 
          className={`tab ${activeTab === 'laporan' ? 'active' : ''}`}
          onClick={() => setActiveTab('laporan')}
        >
          Laporan Lainnya
        </button>
      </div>

      {activeTab === 'invoice' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Invoice Bulan Ini</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Nilai</h3>
                <p>Rp 2.5 Miliar</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Receipt size={30} />
              </div>
              <div className="stat-content">
                <h3>Belum Lunas</h3>
                <p>25</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Lunas</h3>
                <p>131</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Invoice</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari invoice (No. Invoice, Nama Pasien)..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-select" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Status</option>
                  <option value="unpaid">Belum Lunas</option>
                  <option value="partial">Bayar Sebagian</option>
                  <option value="paid">Lunas</option>
                </select>
                <button className="btn btn-primary">Buat Invoice Baru</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>No. Invoice</th>
                    <th>Tanggal</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Penjamin</th>
                    <th>Total</th>
                    <th>Dibayar</th>
                    <th>Sisa</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>INV-2024-0156</td>
                    <td>18/01/2024</td>
                    <td>RM-2024-0123</td>
                    <td>Mayor Budiman</td>
                    <td>BPJS</td>
                    <td>Rp 8.500.000</td>
                    <td>Rp 8.500.000</td>
                    <td>Rp 0</td>
                    <td><span className="badge badge-success">Lunas</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>INV-2024-0155</td>
                    <td>18/01/2024</td>
                    <td>RM-2024-0124</td>
                    <td>Serda Hartono</td>
                    <td>Umum</td>
                    <td>Rp 2.500.000</td>
                    <td>Rp 1.000.000</td>
                    <td>Rp 1.500.000</td>
                    <td><span className="badge badge-warning">Bayar Sebagian</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>INV-2024-0154</td>
                    <td>17/01/2024</td>
                    <td>RM-2024-0125</td>
                    <td>Kopda Suryanto</td>
                    <td>Prudential</td>
                    <td>Rp 12.000.000</td>
                    <td>Rp 0</td>
                    <td>Rp 12.000.000</td>
                    <td><span className="badge badge-danger">Belum Lunas</span></td>
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

      {activeTab === 'tagihan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Tagihan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari tagihan..."
                style={{ flex: 1, maxWidth: '400px' }}
              />
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="">Semua Penjamin</option>
                <option value="bpjs">BPJS</option>
                <option value="asuransi">Asuransi</option>
                <option value="umum">Umum</option>
              </select>
              <button className="btn btn-primary">Buat Tagihan Baru</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Tagihan</th>
                  <th>Tanggal</th>
                  <th>Penjamin</th>
                  <th>Periode</th>
                  <th>Jumlah Invoice</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Jatuh Tempo</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TAG-2024-010</td>
                  <td>18/01/2024</td>
                  <td>BPJS Kesehatan</td>
                  <td>Januari 2024</td>
                  <td>45</td>
                  <td>Rp 450.000.000</td>
                  <td><span className="badge badge-warning">Dikirim</span></td>
                  <td>28/02/2024</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>TAG-2024-009</td>
                  <td>15/01/2024</td>
                  <td>Prudential</td>
                  <td>Desember 2023</td>
                  <td>12</td>
                  <td>Rp 125.000.000</td>
                  <td><span className="badge badge-success">Lunas</span></td>
                  <td>31/01/2024</td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'piutang' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Kartu Piutang</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '300px' }}>
                <option value="">Pilih Debitur</option>
                <option value="bpjs">BPJS Kesehatan</option>
                <option value="prudential">Prudential</option>
                <option value="allianz">Allianz</option>
                <option value="axa">AXA Mandiri</option>
              </select>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                placeholder="Dari Tanggal"
              />
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                placeholder="Sampai Tanggal"
              />
              <button className="btn btn-primary">Tampilkan</button>
              <button className="btn btn-secondary">Export</button>
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '10px' }}>BPJS Kesehatan</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Awal</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Rp 250.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Total Tagihan</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#d4af37' }}>Rp 450.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Akhir</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#003d82' }}>Rp 700.000.000</p>
                </div>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Transaksi</th>
                  <th>Keterangan</th>
                  <th>Debit</th>
                  <th>Kredit</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2024</td>
                  <td>-</td>
                  <td>Saldo Awal</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Rp 250.000.000</td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>TAG-2024-008</td>
                  <td>Tagihan Desember 2023</td>
                  <td>Rp 350.000.000</td>
                  <td>-</td>
                  <td>Rp 600.000.000</td>
                </tr>
                <tr>
                  <td>17/01/2024</td>
                  <td>PAY-2024-015</td>
                  <td>Pembayaran Tagihan</td>
                  <td>-</td>
                  <td>Rp 150.000.000</td>
                  <td>Rp 450.000.000</td>
                </tr>
                <tr>
                  <td>18/01/2024</td>
                  <td>TAG-2024-010</td>
                  <td>Tagihan Januari 2024</td>
                  <td>Rp 450.000.000</td>
                  <td>-</td>
                  <td>Rp 900.000.000</td>
                </tr>
                <tr>
                  <td>18/01/2024</td>
                  <td>PAY-2024-018</td>
                  <td>Pembayaran Tagihan</td>
                  <td>-</td>
                  <td>Rp 200.000.000</td>
                  <td>Rp 700.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'agingpiutang' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Aging Piutang</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                defaultValue="2024-01-18"
              />
              <button className="btn btn-primary">Generate Laporan</button>
              <button className="btn btn-secondary">Export</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Debitur</th>
                  <th>Total Piutang</th>
                  <th>0-30 Hari</th>
                  <th>31-60 Hari</th>
                  <th>61-90 Hari</th>
                  <th>&gt;90 Hari</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BPJS Kesehatan</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 700.000.000</td>
                  <td>Rp 450.000.000</td>
                  <td>Rp 200.000.000</td>
                  <td>Rp 50.000.000</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-success">Lancar</span></td>
                </tr>
                <tr>
                  <td>Prudential</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 125.000.000</td>
                  <td>Rp 85.000.000</td>
                  <td>Rp 40.000.000</td>
                  <td>Rp 0</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-success">Lancar</span></td>
                </tr>
                <tr>
                  <td>Allianz</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 95.000.000</td>
                  <td>Rp 45.000.000</td>
                  <td>Rp 30.000.000</td>
                  <td>Rp 20.000.000</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-warning">Perhatian</span></td>
                </tr>
                <tr>
                  <td>AXA Mandiri</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 75.000.000</td>
                  <td>Rp 25.000.000</td>
                  <td>Rp 20.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td><span className="badge badge-danger">Bermasalah</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
                  <td>Total</td>
                  <td>Rp 995.000.000</td>
                  <td>Rp 605.000.000</td>
                  <td>Rp 290.000.000</td>
                  <td>Rp 85.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td>-</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'hutang' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Kartu Hutang</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '300px' }}>
                <option value="">Pilih Kreditur</option>
                <option value="kimiafarma">PT. Kimia Farma</option>
                <option value="indofarma">PT. Indofarma</option>
                <option value="sinarjaya">PT. Sinar Jaya</option>
              </select>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <button className="btn btn-primary">Tampilkan</button>
              <button className="btn btn-secondary">Export</button>
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '10px' }}>PT. Kimia Farma</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Awal</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Rp 125.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Total Pembelian</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#d4af37' }}>Rp 145.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Akhir</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#dc3545' }}>Rp 195.000.000</p>
                </div>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Transaksi</th>
                  <th>Keterangan</th>
                  <th>Debit</th>
                  <th>Kredit</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2024</td>
                  <td>-</td>
                  <td>Saldo Awal</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Rp 125.000.000</td>
                </tr>
                <tr>
                  <td>10/01/2024</td>
                  <td>PAY-2024-005</td>
                  <td>Pembayaran PO-2024-015</td>
                  <td>Rp 75.000.000</td>
                  <td>-</td>
                  <td>Rp 50.000.000</td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>PO-2024-020</td>
                  <td>Pembelian Obat</td>
                  <td>-</td>
                  <td>Rp 95.000.000</td>
                  <td>Rp 145.000.000</td>
                </tr>
                <tr>
                  <td>18/01/2024</td>
                  <td>PO-2024-025</td>
                  <td>Pembelian Obat</td>
                  <td>-</td>
                  <td>Rp 50.000.000</td>
                  <td>Rp 195.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'aginghutang' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Aging Hutang</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                defaultValue="2024-01-18"
              />
              <button className="btn btn-primary">Generate Laporan</button>
              <button className="btn btn-secondary">Export</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Kreditur</th>
                  <th>Total Hutang</th>
                  <th>0-30 Hari</th>
                  <th>31-60 Hari</th>
                  <th>61-90 Hari</th>
                  <th>&gt;90 Hari</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PT. Kimia Farma</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 195.000.000</td>
                  <td>Rp 145.000.000</td>
                  <td>Rp 50.000.000</td>
                  <td>Rp 0</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-success">Lancar</span></td>
                </tr>
                <tr>
                  <td>PT. Indofarma</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 85.000.000</td>
                  <td>Rp 65.000.000</td>
                  <td>Rp 20.000.000</td>
                  <td>Rp 0</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-success">Lancar</span></td>
                </tr>
                <tr>
                  <td>PT. Sinar Jaya</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 65.000.000</td>
                  <td>Rp 35.000.000</td>
                  <td>Rp 20.000.000</td>
                  <td>Rp 10.000.000</td>
                  <td>Rp 0</td>
                  <td><span className="badge badge-warning">Perhatian</span></td>
                </tr>
                <tr>
                  <td>CV. Berkah Sejahtera</td>
                  <td style={{ fontWeight: 'bold' }}>Rp 45.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td>Rp 15.000.000</td>
                  <td>Rp 10.000.000</td>
                  <td>Rp 5.000.000</td>
                  <td><span className="badge badge-danger">Bermasalah</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
                  <td>Total</td>
                  <td>Rp 390.000.000</td>
                  <td>Rp 260.000.000</td>
                  <td>Rp 105.000.000</td>
                  <td>Rp 20.000.000</td>
                  <td>Rp 5.000.000</td>
                  <td>-</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'jurnal' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Jurnal Umum</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <button className="btn btn-primary">Tampilkan</button>
              <button className="btn btn-secondary">Buat Jurnal Manual</button>
              <button className="btn btn-outline">Export</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Jurnal</th>
                  <th>Keterangan</th>
                  <th>Akun</th>
                  <th>Debit</th>
                  <th>Kredit</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <td rowSpan="2">18/01/2024</td>
                  <td rowSpan="2">JU-2024-0150</td>
                  <td rowSpan="2">Penerimaan Kas dari Pasien</td>
                  <td>1-1001 Kas</td>
                  <td>Rp 8.500.000</td>
                  <td>-</td>
                </tr>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <td>4-1001 Pendapatan Rawat Inap</td>
                  <td>-</td>
                  <td>Rp 8.500.000</td>
                </tr>
                <tr>
                  <td rowSpan="2">18/01/2024</td>
                  <td rowSpan="2">JU-2024-0151</td>
                  <td rowSpan="2">Pembelian Obat</td>
                  <td>1-3001 Persediaan Obat</td>
                  <td>Rp 45.000.000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2-1001 Hutang Usaha</td>
                  <td>-</td>
                  <td>Rp 45.000.000</td>
                </tr>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <td rowSpan="2">18/01/2024</td>
                  <td rowSpan="2">JU-2024-0152</td>
                  <td rowSpan="2">Bayar Hutang Supplier</td>
                  <td>2-1001 Hutang Usaha</td>
                  <td>Rp 75.000.000</td>
                  <td>-</td>
                </tr>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <td>1-1101 Bank</td>
                  <td>-</td>
                  <td>Rp 75.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'bukubesar' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Buku Besar</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '300px' }}>
                <option value="">Pilih Akun</option>
                <option value="1-1001">1-1001 Kas</option>
                <option value="1-1101">1-1101 Bank</option>
                <option value="1-2001">1-2001 Piutang Usaha</option>
                <option value="2-1001">2-1001 Hutang Usaha</option>
                <option value="4-1001">4-1001 Pendapatan Rawat Inap</option>
              </select>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
              />
              <button className="btn btn-primary">Tampilkan</button>
              <button className="btn btn-secondary">Export</button>
            </div>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '10px' }}>1-1001 Kas</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Awal</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Rp 500.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Total Debit</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#28a745' }}>Rp 250.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Total Kredit</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#dc3545' }}>Rp 150.000.000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>Saldo Akhir</p>
                  <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#003d82' }}>Rp 600.000.000</p>
                </div>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Jurnal</th>
                  <th>Keterangan</th>
                  <th>Debit</th>
                  <th>Kredit</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2024</td>
                  <td>-</td>
                  <td>Saldo Awal</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Rp 500.000.000</td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>JU-2024-0145</td>
                  <td>Penerimaan Kas dari Pasien</td>
                  <td>Rp 125.000.000</td>
                  <td>-</td>
                  <td>Rp 625.000.000</td>
                </tr>
                <tr>
                  <td>16/01/2024</td>
                  <td>JU-2024-0147</td>
                  <td>Pembayaran Gaji</td>
                  <td>-</td>
                  <td>Rp 85.000.000</td>
                  <td>Rp 540.000.000</td>
                </tr>
                <tr>
                  <td>17/01/2024</td>
                  <td>JU-2024-0148</td>
                  <td>Penerimaan Kas dari Pasien</td>
                  <td>Rp 95.000.000</td>
                  <td>-</td>
                  <td>Rp 635.000.000</td>
                </tr>
                <tr>
                  <td>18/01/2024</td>
                  <td>JU-2024-0150</td>
                  <td>Penerimaan Kas dari Pasien</td>
                  <td>Rp 30.000.000</td>
                  <td>-</td>
                  <td>Rp 665.000.000</td>
                </tr>
                <tr>
                  <td>18/01/2024</td>
                  <td>JU-2024-0153</td>
                  <td>Pembayaran Operasional</td>
                  <td>-</td>
                  <td>Rp 65.000.000</td>
                  <td>Rp 600.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'labarugi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Laporan Laba Rugi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <select className="form-select" style={{ maxWidth: '200px' }}>
                <option value="month">Bulanan</option>
                <option value="quarter">Quarterly</option>
                <option value="year">Tahunan</option>
              </select>
              <input 
                type="month" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                defaultValue="2024-01"
              />
              <button className="btn btn-primary">Generate</button>
              <button className="btn btn-secondary">Export PDF</button>
            </div>

            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2>RS TRIMATRA</h2>
                <h3>Laporan Laba Rugi</h3>
                <p>Periode: Januari 2024</p>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ borderBottom: '2px solid #003d82' }}>
                    <td style={{ padding: '10px 0', fontWeight: 'bold' }}>PENDAPATAN</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Pendapatan Rawat Jalan</td>
                    <td style={{ textAlign: 'right' }}>Rp 850.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Pendapatan Rawat Inap</td>
                    <td style={{ textAlign: 'right' }}>Rp 1.250.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Pendapatan IGD</td>
                    <td style={{ textAlign: 'right' }}>Rp 450.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Pendapatan Penunjang</td>
                    <td style={{ textAlign: 'right' }}>Rp 350.000.000</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                    <td style={{ padding: '10px 20px' }}>Total Pendapatan</td>
                    <td style={{ textAlign: 'right', color: '#003d82' }}>Rp 2.900.000.000</td>
                  </tr>

                  <tr style={{ borderBottom: '2px solid #003d82' }}>
                    <td style={{ padding: '20px 0 10px 0', fontWeight: 'bold' }}>BEBAN OPERASIONAL</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Gaji dan Tunjangan</td>
                    <td style={{ textAlign: 'right' }}>Rp 850.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Obat dan Alkes</td>
                    <td style={{ textAlign: 'right' }}>Rp 650.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Listrik dan Air</td>
                    <td style={{ textAlign: 'right' }}>Rp 125.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Pemeliharaan</td>
                    <td style={{ textAlign: 'right' }}>Rp 85.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Penyusutan</td>
                    <td style={{ textAlign: 'right' }}>Rp 95.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Lain-lain</td>
                    <td style={{ textAlign: 'right' }}>Rp 145.000.000</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                    <td style={{ padding: '10px 20px' }}>Total Beban Operasional</td>
                    <td style={{ textAlign: 'right', color: '#dc3545' }}>Rp 1.950.000.000</td>
                  </tr>

                  <tr style={{ borderTop: '2px solid #003d82', backgroundColor: '#f8f9fa' }}>
                    <td style={{ padding: '15px 0', fontSize: '1.1em', fontWeight: 'bold' }}>LABA OPERASIONAL</td>
                    <td style={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 'bold', color: '#28a745' }}>Rp 950.000.000</td>
                  </tr>

                  <tr style={{ borderBottom: '2px solid #003d82' }}>
                    <td style={{ padding: '20px 0 10px 0', fontWeight: 'bold' }}>PENDAPATAN/BEBAN LAIN-LAIN</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Pendapatan Bunga</td>
                    <td style={{ textAlign: 'right' }}>Rp 15.000.000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 20px' }}>Beban Bunga</td>
                    <td style={{ textAlign: 'right' }}>(Rp 8.000.000)</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                    <td style={{ padding: '10px 20px' }}>Total Pendapatan/Beban Lain</td>
                    <td style={{ textAlign: 'right' }}>Rp 7.000.000</td>
                  </tr>

                  <tr style={{ borderTop: '3px double #003d82', backgroundColor: '#d4af37' }}>
                    <td style={{ padding: '15px 0', fontSize: '1.2em', fontWeight: 'bold' }}>LABA BERSIH</td>
                    <td style={{ textAlign: 'right', fontSize: '1.2em', fontWeight: 'bold', color: '#fff' }}>Rp 957.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'neraca' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Laporan Neraca</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <input 
                type="date" 
                className="form-input" 
                style={{ maxWidth: '200px' }}
                defaultValue="2024-01-31"
              />
              <button className="btn btn-primary">Generate</button>
              <button className="btn btn-secondary">Export PDF</button>
            </div>

            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2>RS TRIMATRA</h2>
                <h3>Laporan Neraca</h3>
                <p>Per 31 Januari 2024</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr style={{ borderBottom: '2px solid #003d82' }}>
                        <td style={{ padding: '10px 0', fontWeight: 'bold' }}>AKTIVA</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', fontWeight: 'bold' }}>Aktiva Lancar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Kas</td>
                        <td style={{ textAlign: 'right' }}>Rp 600.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Bank</td>
                        <td style={{ textAlign: 'right' }}>Rp 1.500.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Piutang Usaha</td>
                        <td style={{ textAlign: 'right' }}>Rp 995.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Persediaan</td>
                        <td style={{ textAlign: 'right' }}>Rp 850.000.000</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                        <td style={{ padding: '10px 20px' }}>Total Aktiva Lancar</td>
                        <td style={{ textAlign: 'right' }}>Rp 3.945.000.000</td>
                      </tr>

                      <tr>
                        <td style={{ padding: '15px 0 10px 0', fontWeight: 'bold' }}>Aktiva Tetap</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Tanah</td>
                        <td style={{ textAlign: 'right' }}>Rp 5.000.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Bangunan</td>
                        <td style={{ textAlign: 'right' }}>Rp 15.000.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Peralatan Medis</td>
                        <td style={{ textAlign: 'right' }}>Rp 3.500.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Akumulasi Penyusutan</td>
                        <td style={{ textAlign: 'right' }}>(Rp 2.800.000.000)</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                        <td style={{ padding: '10px 20px' }}>Total Aktiva Tetap</td>
                        <td style={{ textAlign: 'right' }}>Rp 20.700.000.000</td>
                      </tr>

                      <tr style={{ borderTop: '2px solid #003d82', backgroundColor: '#f8f9fa' }}>
                        <td style={{ padding: '15px 0', fontSize: '1.1em', fontWeight: 'bold' }}>TOTAL AKTIVA</td>
                        <td style={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 'bold', color: '#003d82' }}>Rp 24.645.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr style={{ borderBottom: '2px solid #003d82' }}>
                        <td style={{ padding: '10px 0', fontWeight: 'bold' }}>PASSIVA</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 0', fontWeight: 'bold' }}>Kewajiban Lancar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Hutang Usaha</td>
                        <td style={{ textAlign: 'right' }}>Rp 390.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Hutang Gaji</td>
                        <td style={{ textAlign: 'right' }}>Rp 125.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Hutang Pajak</td>
                        <td style={{ textAlign: 'right' }}>Rp 85.000.000</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                        <td style={{ padding: '10px 20px' }}>Total Kewajiban Lancar</td>
                        <td style={{ textAlign: 'right' }}>Rp 600.000.000</td>
                      </tr>

                      <tr>
                        <td style={{ padding: '15px 0 10px 0', fontWeight: 'bold' }}>Kewajiban Jangka Panjang</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Hutang Bank</td>
                        <td style={{ textAlign: 'right' }}>Rp 2.500.000.000</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                        <td style={{ padding: '10px 20px' }}>Total Kewajiban Jk. Panjang</td>
                        <td style={{ textAlign: 'right' }}>Rp 2.500.000.000</td>
                      </tr>

                      <tr style={{ borderTop: '2px solid #003d82' }}>
                        <td style={{ padding: '15px 0 10px 0', fontSize: '1.1em', fontWeight: 'bold' }}>TOTAL KEWAJIBAN</td>
                        <td style={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 'bold' }}>Rp 3.100.000.000</td>
                      </tr>

                      <tr>
                        <td style={{ padding: '20px 0 10px 0', fontWeight: 'bold' }}>Ekuitas</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Modal</td>
                        <td style={{ textAlign: 'right' }}>Rp 15.000.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Laba Ditahan</td>
                        <td style={{ textAlign: 'right' }}>Rp 5.588.000.000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>Laba Tahun Berjalan</td>
                        <td style={{ textAlign: 'right' }}>Rp 957.000.000</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid #ddd', fontWeight: 'bold' }}>
                        <td style={{ padding: '10px 20px' }}>Total Ekuitas</td>
                        <td style={{ textAlign: 'right' }}>Rp 21.545.000.000</td>
                      </tr>

                      <tr style={{ borderTop: '2px solid #003d82', backgroundColor: '#f8f9fa' }}>
                        <td style={{ padding: '15px 0', fontSize: '1.1em', fontWeight: 'bold' }}>TOTAL PASSIVA</td>
                        <td style={{ textAlign: 'right', fontSize: '1.1em', fontWeight: 'bold', color: '#003d82' }}>Rp 24.645.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'laporan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Laporan Keuangan Lainnya</h2>
          </div>
          <div className="card-body">
            <div className="dashboard-grid">
              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <BarChart3 size={40} style={{ color: '#003d82', margin: '0 auto 15px' }} />
                  <h3>Laporan Arus Kas</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Cash flow statement</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>

              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <TrendingUp size={40} style={{ color: '#28a745', margin: '0 auto 15px' }} />
                  <h3>Laporan Perubahan Modal</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Statement of changes in equity</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>

              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <BookOpen size={40} style={{ color: '#d4af37', margin: '0 auto 15px' }} />
                  <h3>Neraca Saldo</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Trial balance</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>

              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <FileText size={40} style={{ color: '#6c757d', margin: '0 auto 15px' }} />
                  <h3>Catatan Atas Laporan Keuangan</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Notes to financial statements</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>

              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <DollarSign size={40} style={{ color: '#17a2b8', margin: '0 auto 15px' }} />
                  <h3>Laporan Biaya Operasional</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Operating expenses report</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>

              <div className="card" style={{ cursor: 'pointer' }} onClick={() => {}}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <Receipt size={40} style={{ color: '#ffc107', margin: '0 auto 15px' }} />
                  <h3>Analisis Rasio Keuangan</h3>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>Financial ratio analysis</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '10px' }}>Generate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Akuntansi;
