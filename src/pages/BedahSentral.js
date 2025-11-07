import React, { useState } from 'react';
import { Scissors, Calendar, FileText, DollarSign, Clock } from 'lucide-react';

const BedahSentral = () => {
  const [activeTab, setActiveTab] = useState('jadwal');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          Jadwal Operasi
        </button>
        <button 
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          Informasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'intraoperasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('intraoperasi')}
        >
          Intraoperasi
        </button>
        <button 
          className={`tab ${activeTab === 'postoperasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('postoperasi')}
        >
          Post Operasi
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          Tagihan
        </button>
      </div>

      {activeTab === 'jadwal' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon info">
                <Calendar size={30} />
              </div>
              <div className="stat-content">
                <h3>Operasi Hari Ini</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Clock size={30} />
              </div>
              <div className="stat-content">
                <h3>Sedang Berlangsung</h3>
                <p>2</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Scissors size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai</h3>
                <p>3</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon secondary">
                <Calendar size={30} />
              </div>
              <div className="stat-content">
                <h3>Terjadwal</h3>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Manajemen Jadwal Operasi</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">Tambah Jadwal Operasi</button>
                <button className="btn btn-outline">Filter Tanggal</button>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal/Jam</th>
                    <th>No. RM</th>
                    <th>Pasien</th>
                    <th>Diagnosa</th>
                    <th>Jenis Operasi</th>
                    <th>Operator</th>
                    <th>Anestesi</th>
                    <th>Ruang OK</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18/01/24<br/>09:00</td>
                    <td>RM-001236</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td>Appendicitis Acute</td>
                    <td>Appendectomy</td>
                    <td>dr. Budi Santoso, Sp.B</td>
                    <td>dr. Hendra, Sp.An</td>
                    <td>OK-1</td>
                    <td><span className="badge badge-info">Sedang Berlangsung</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>18/01/24<br/>10:30</td>
                    <td>RM-001237</td>
                    <td>Mayor Siti Nurhaliza</td>
                    <td>Hernia Inguinalis</td>
                    <td>Herniorrhaphy</td>
                    <td>dr. Ahmad Fauzi, Sp.B</td>
                    <td>dr. Dewi, Sp.An</td>
                    <td>OK-2</td>
                    <td><span className="badge badge-info">Sedang Berlangsung</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>18/01/24<br/>13:00</td>
                    <td>RM-001239</td>
                    <td>Mayor Dewi Lestari</td>
                    <td>Cholelithiasis</td>
                    <td>Laparoscopic Cholecystectomy</td>
                    <td>dr. Budi Santoso, Sp.B</td>
                    <td>dr. Hendra, Sp.An</td>
                    <td>OK-1</td>
                    <td><span className="badge badge-warning">Terjadwal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>18/01/24<br/>15:00</td>
                    <td>RM-001240</td>
                    <td>Kolonel Budi Wijaya</td>
                    <td>BPH (Benign Prostatic Hyperplasia)</td>
                    <td>TURP</td>
                    <td>dr. Ahmad Fauzi, Sp.U</td>
                    <td>dr. Dewi, Sp.An</td>
                    <td>OK-2</td>
                    <td><span className="badge badge-warning">Terjadwal</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>17/01/24<br/>10:00</td>
                    <td>RM-001235</td>
                    <td>Letkol Hendra Wijaya</td>
                    <td>Fraktur Femur</td>
                    <td>ORIF Femur</td>
                    <td>dr. Budi Santoso, Sp.OT</td>
                    <td>dr. Hendra, Sp.An</td>
                    <td>OK-1</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-outline btn-sm">Lihat</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pasien' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Informasi Pasien Bedah Sentral</h2>
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
                  <th>Jenis Operasi</th>
                  <th>Tanggal Operasi</th>
                  <th>Operator</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-001236</td>
                  <td>Kapten Ahmad Fauzi</td>
                  <td>Kapten</td>
                  <td>Appendectomy</td>
                  <td>18/01/2024</td>
                  <td>dr. Budi Santoso, Sp.B</td>
                  <td><span className="badge badge-info">Intraoperasi</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-001239</td>
                  <td>Mayor Dewi Lestari</td>
                  <td>Mayor</td>
                  <td>Laparoscopic Cholecystectomy</td>
                  <td>18/01/2024</td>
                  <td>dr. Budi Santoso, Sp.B</td>
                  <td><span className="badge badge-warning">Persiapan</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'intraoperasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Laporan Intraoperasi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-001236) | <strong>Operasi:</strong> Appendectomy | <strong>Ruang:</strong> OK-1
            </div>

            <div className="alert alert-info">
              <FileText size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Catat semua kejadian penting selama operasi berlangsung
            </div>

            <div className="grid grid-cols-2">
              <div className="form-group">
                <label className="form-label">Waktu Mulai Operasi</label>
                <input type="time" className="form-input" defaultValue="09:15" />
              </div>
              <div className="form-group">
                <label className="form-label">Waktu Selesai Operasi</label>
                <input type="time" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Operator Utama</label>
                <input type="text" className="form-input" defaultValue="dr. Budi Santoso, Sp.B" readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Asisten Operator</label>
                <select className="form-select">
                  <option value="">Pilih Asisten</option>
                  <option value="dr1">dr. Ahmad Fauzi, Sp.B</option>
                  <option value="dr2">dr. Hendra Wijaya, Sp.B</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Dokter Anestesi</label>
                <input type="text" className="form-input" defaultValue="dr. Hendra, Sp.An" readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Perawat Instrumen</label>
                <select className="form-select">
                  <option value="">Pilih Perawat</option>
                  <option value="ns1">Ns. Siti Rahmawati</option>
                  <option value="ns2">Ns. Dewi Lestari</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Jenis Anestesi</label>
              <select className="form-select">
                <option value="">Pilih Jenis Anestesi</option>
                <option value="umum">Anestesi Umum</option>
                <option value="spinal">Spinal Anestesi</option>
                <option value="epidural">Epidural</option>
                <option value="lokal">Lokal Anestesi</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Diagnosa Pre-Operatif</label>
              <input type="text" className="form-input" defaultValue="Appendicitis Acute" />
            </div>

            <div className="form-group">
              <label className="form-label">Diagnosa Post-Operatif</label>
              <input type="text" className="form-input" placeholder="Diagnosa setelah operasi..." />
            </div>

            <div className="form-group">
              <label className="form-label">Tindakan Operasi</label>
              <textarea className="form-textarea" rows="4" placeholder="Uraian tindakan operasi yang dilakukan..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Temuan Operasi</label>
              <textarea className="form-textarea" rows="4" placeholder="Temuan selama operasi..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Komplikasi</label>
              <textarea className="form-textarea" rows="2" placeholder="Komplikasi yang terjadi (jika ada)..."></textarea>
            </div>

            <div className="grid grid-cols-3">
              <div className="form-group">
                <label className="form-label">Jumlah Perdarahan (ml)</label>
                <input type="number" className="form-input" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">Transfusi Darah (ml)</label>
                <input type="number" className="form-input" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">Cairan Infus (ml)</label>
                <input type="number" className="form-input" placeholder="0" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Instruksi Post-Operasi</label>
              <textarea className="form-textarea" rows="3" placeholder="Instruksi perawatan setelah operasi..."></textarea>
            </div>

            <button className="btn btn-primary">
              <FileText size={16} />
              Simpan Laporan Operasi
            </button>
          </div>
        </div>
      )}

      {activeTab === 'postoperasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Monitoring Post Operasi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-001236) | <strong>Operasi:</strong> Appendectomy | <strong>Waktu Selesai:</strong> 10:45
            </div>

            <div className="alert alert-warning">
              <Clock size={20} style={{ display: 'inline', marginRight: '10px' }} />
              Pasien di Recovery Room - Monitor tanda vital setiap 15 menit
            </div>

            <h3 style={{ marginBottom: '15px', marginTop: '20px' }}>Tanda Vital Post Operasi</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>TD (mmHg)</th>
                  <th>Nadi (x/mnt)</th>
                  <th>RR (x/mnt)</th>
                  <th>SpO2 (%)</th>
                  <th>Suhu (°C)</th>
                  <th>Kesadaran</th>
                  <th>Nyeri</th>
                  <th>Perawat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:45</td>
                  <td>120/80</td>
                  <td>85</td>
                  <td>18</td>
                  <td>98</td>
                  <td>36.5</td>
                  <td>Sadar</td>
                  <td>3/10</td>
                  <td>Ns. Siti</td>
                </tr>
                <tr>
                  <td>11:00</td>
                  <td>125/82</td>
                  <td>88</td>
                  <td>19</td>
                  <td>97</td>
                  <td>36.7</td>
                  <td>Sadar</td>
                  <td>4/10</td>
                  <td>Ns. Siti</td>
                </tr>
                <tr>
                  <td>11:15</td>
                  <td>120/78</td>
                  <td>82</td>
                  <td>18</td>
                  <td>98</td>
                  <td>36.5</td>
                  <td>Sadar</td>
                  <td>2/10</td>
                  <td>Ns. Siti</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
              <button className="btn btn-primary">Tambah Monitoring</button>
              <button className="btn btn-secondary" style={{ marginLeft: '10px' }}>Pindah ke Ruang Rawat</button>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h3 style={{ marginBottom: '15px' }}>Catatan Post Operasi</h3>
              <div className="form-group">
                <textarea className="form-textarea" rows="3" placeholder="Catatan kondisi pasien post operasi..."></textarea>
              </div>
              <button className="btn btn-outline">Simpan Catatan</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tagihan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rincian Tagihan Operasi</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-001236) | <strong>Penjamin:</strong> TNI | <strong>Tanggal:</strong> 18 Januari 2024
            </div>

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
                  <td>Jasa Operasi</td>
                  <td>Appendectomy</td>
                  <td>1</td>
                  <td>Rp 5.000.000</td>
                  <td>Rp 5.000.000</td>
                </tr>
                <tr>
                  <td>Jasa Dokter</td>
                  <td>Operator Utama (dr. Budi Santoso, Sp.B)</td>
                  <td>1</td>
                  <td>Rp 2.500.000</td>
                  <td>Rp 2.500.000</td>
                </tr>
                <tr>
                  <td>Jasa Dokter</td>
                  <td>Dokter Anestesi (dr. Hendra, Sp.An)</td>
                  <td>1</td>
                  <td>Rp 1.500.000</td>
                  <td>Rp 1.500.000</td>
                </tr>
                <tr>
                  <td>Akomodasi</td>
                  <td>Ruang Operasi (OK-1) - 1.5 jam</td>
                  <td>1</td>
                  <td>Rp 1.000.000</td>
                  <td>Rp 1.000.000</td>
                </tr>
                <tr>
                  <td>Anestesi</td>
                  <td>Anestesi Umum</td>
                  <td>1</td>
                  <td>Rp 800.000</td>
                  <td>Rp 800.000</td>
                </tr>
                <tr>
                  <td>BMHP</td>
                  <td>Alat Kesehatan Habis Pakai</td>
                  <td>1</td>
                  <td>Rp 500.000</td>
                  <td>Rp 500.000</td>
                </tr>
                <tr>
                  <td>Obat</td>
                  <td>Obat-obatan Operasi</td>
                  <td>1</td>
                  <td>Rp 300.000</td>
                  <td>Rp 300.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Total</td>
                  <td>Rp 11.600.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI (100%)</td>
                  <td>Rp 11.600.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', color: '#d4af37' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Bayar Pasien</td>
                  <td>Rp 0</td>
                </tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button className="btn btn-primary">
                <DollarSign size={16} />
                Cetak Billing
              </button>
              <button className="btn btn-secondary">Kirim ke Kasir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedahSentral;
