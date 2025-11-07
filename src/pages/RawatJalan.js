import React, { useState } from 'react';
import { Users, FileText, DollarSign, History, ArrowRight } from 'lucide-react';

const RawatJalan = () => {
  const [activeTab, setActiveTab] = useState('daftar');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'daftar' ? 'active' : ''}`}
          onClick={() => setActiveTab('daftar')}
        >
          Daftar Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          Tagihan
        </button>
        <button 
          className={`tab ${activeTab === 'konsultasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('konsultasi')}
        >
          Konsultasi
        </button>
        <button 
          className={`tab ${activeTab === 'riwayat' ? 'active' : ''}`}
          onClick={() => setActiveTab('riwayat')}
        >
          Riwayat Pasien
        </button>
      </div>

      {activeTab === 'daftar' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Informasi Pasien Rawat Jalan Hari Ini</h2>
          </div>
          <div className="card-body">
            <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
              <div className="stat-card">
                <div className="stat-icon info">
                  <Users size={30} />
                </div>
                <div className="stat-content">
                  <h3>Total Pasien</h3>
                  <p>156</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon warning">
                  <Users size={30} />
                </div>
                <div className="stat-content">
                  <h3>Sedang Diperiksa</h3>
                  <p>23</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon success">
                  <Users size={30} />
                </div>
                <div className="stat-content">
                  <h3>Selesai</h3>
                  <p>91</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon secondary">
                  <Users size={30} />
                </div>
                <div className="stat-content">
                  <h3>Menunggu</h3>
                  <p>42</p>
                </div>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Pangkat</th>
                  <th>Poliklinik</th>
                  <th>Dokter</th>
                  <th>Penjamin</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Letkol</td>
                  <td>Poli Jantung</td>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td><span className="badge badge-primary">TNI</span></td>
                  <td><span className="badge badge-info">Diperiksa</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-002456</td>
                  <td>Mayor Ahmad Fauzi</td>
                  <td>Mayor</td>
                  <td>Poli Umum</td>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td><span className="badge badge-info">BPJS</span></td>
                  <td><span className="badge badge-warning">Menunggu</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Panggil</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-003789</td>
                  <td>Kapten Dewi Lestari</td>
                  <td>Kapten</td>
                  <td>Poli Mata</td>
                  <td>dr. Hendra Wijaya, Sp.M</td>
                  <td><span className="badge badge-primary">TNI</span></td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pemeriksaan' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pemeriksaan Pasien</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
                <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Poli:</strong> Jantung | <strong>Dokter:</strong> dr. Siti Nurhaliza, Sp.JP
              </div>

              <div className="tabs" style={{ marginBottom: '20px' }}>
                <button className="tab active">Assessment Awal</button>
                <button className="tab">SOAP</button>
                <button className="tab">Tindakan & BMHP</button>
                <button className="tab">Reseptur</button>
                <button className="tab">CPPT</button>
                <button className="tab">Verbal Order</button>
              </div>

              <div className="form-group">
                <label className="form-label">Assessment Awal Keperawatan</label>
                <div className="grid grid-cols-4" style={{ marginBottom: '15px' }}>
                  <div className="form-group">
                    <label className="form-label">TD (mmHg)</label>
                    <input type="text" className="form-input" placeholder="120/80" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nadi (x/mnt)</label>
                    <input type="text" className="form-input" placeholder="80" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">RR (x/mnt)</label>
                    <input type="text" className="form-input" placeholder="20" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Suhu (°C)</label>
                    <input type="text" className="form-input" placeholder="36.5" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">BB (kg)</label>
                    <input type="text" className="form-input" placeholder="70" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">TB (cm)</label>
                    <input type="text" className="form-input" placeholder="170" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SpO2 (%)</label>
                    <input type="text" className="form-input" placeholder="98" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Lingkar Perut (cm)</label>
                    <input type="text" className="form-input" placeholder="85" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Keluhan Utama</label>
                <textarea className="form-textarea" rows="3" placeholder="Keluhan pasien..."></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Riwayat Penyakit Sekarang</label>
                <textarea className="form-textarea" rows="3" placeholder="Anamnesis..."></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Riwayat Penyakit Dahulu</label>
                <textarea className="form-textarea" rows="2" placeholder="Riwayat penyakit terdahulu..."></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Riwayat Alergi</label>
                <input type="text" className="form-input" placeholder="Obat, makanan, dll..." />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">
                  <FileText size={16} />
                  Simpan Assessment
                </button>
                <button className="btn btn-secondary">Lanjut ke SOAP</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tagihan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rincian Tagihan Pasien</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Penjamin:</strong> TNI | <strong>Tanggal:</strong> 18 Januari 2024
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
                  <td colSpan="4" style={{ textAlign: 'right' }}>Total</td>
                  <td>Rp 530.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI (100%)</td>
                  <td>Rp 530.000</td>
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

      {activeTab === 'konsultasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Konsultasi ke Poliklinik Lain</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Poli Asal:</strong> Poli Jantung
            </div>

            <div className="form-group">
              <label className="form-label">Poliklinik Tujuan *</label>
              <select className="form-select">
                <option value="">Pilih Poliklinik</option>
                <option value="umum">Poli Umum</option>
                <option value="gigi">Poli Gigi</option>
                <option value="mata">Poli Mata</option>
                <option value="tht">Poli THT</option>
                <option value="paru">Poli Paru</option>
                <option value="bedah">Poli Bedah</option>
                <option value="obgyn">Poli Kandungan</option>
                <option value="anak">Poli Anak</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Dokter Tujuan</label>
              <select className="form-select">
                <option value="">Pilih Dokter (Opsional)</option>
                <option value="dr1">dr. Andi Wijaya, Sp.PD</option>
                <option value="dr2">dr. Budi Santoso, Sp.B</option>
                <option value="dr3">dr. Dewi Lestari, Sp.A</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Indikasi Konsultasi *</label>
              <textarea className="form-textarea" rows="4" placeholder="Alasan konsultasi dan informasi klinis yang relevan..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Prioritas</label>
              <select className="form-select">
                <option value="rutin">Rutin</option>
                <option value="cito">Cito (Segera)</option>
                <option value="elektif">Elektif (Terjadwal)</option>
              </select>
            </div>

            <button className="btn btn-primary">
              <ArrowRight size={16} />
              Kirim Konsultasi
            </button>

            <div style={{ marginTop: '30px' }}>
              <h3 style={{ marginBottom: '15px' }}>Riwayat Konsultasi</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Dari</th>
                    <th>Ke</th>
                    <th>Indikasi</th>
                    <th>Status</th>
                    <th>Jawaban</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/01/2024</td>
                    <td>Poli Umum</td>
                    <td>Poli Jantung</td>
                    <td>Suspek CAD, nyeri dada</td>
                    <td><span className="badge badge-success">Dijawab</span></td>
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

      {activeTab === 'riwayat' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Riwayat Pasien</h2>
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

            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso | <strong>No. RM:</strong> RM-001234 | <strong>NIK:</strong> 3175012345670001 | <strong>NRP:</strong> 531234
            </div>

            <div className="tabs" style={{ marginBottom: '20px' }}>
              <button className="tab active">Kunjungan</button>
              <button className="tab">Diagnosa</button>
              <button className="tab">Obat</button>
              <button className="tab">Lab</button>
              <button className="tab">Radiologi</button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Poliklinik</th>
                  <th>Dokter</th>
                  <th>Keluhan</th>
                  <th>Diagnosa</th>
                  <th>Terapi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/2024</td>
                  <td>Poli Jantung</td>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Nyeri dada</td>
                  <td>I25.1 - CAD</td>
                  <td>Bisoprolol, Simvastatin</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <History size={14} />
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>Poli Umum</td>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Kontrol rutin</td>
                  <td>I10 - Hipertensi</td>
                  <td>Amlodipine, Candesartan</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <History size={14} />
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>10/01/2024</td>
                  <td>Poli Umum</td>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Pusing, lemas</td>
                  <td>I10 - Hipertensi</td>
                  <td>Amlodipine 5mg</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <History size={14} />
                      Detail
                    </button>
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

export default RawatJalan;
