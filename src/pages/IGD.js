import React, { useState } from 'react';
import { Ambulance, AlertCircle, Users, FileText, DollarSign, ArrowRight } from 'lucide-react';

const IGD = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard IGD
        </button>
        <button 
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          Informasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan
        </button>
        <button 
          className={`tab ${activeTab === 'rujukan' ? 'active' : ''}`}
          onClick={() => setActiveTab('rujukan')}
        >
          Rujukan
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          Tagihan
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon danger">
                <AlertCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Pasien IGD Hari Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Dalam Perawatan</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Rujuk Rawat Inap</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Pulang</h3>
                <p>25</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Monitoring Pasien IGD</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-danger">
                <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                <strong>Perhatian!</strong> 2 pasien kategori merah (resusitasi) memerlukan perhatian segera
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Triase</th>
                    <th>Keluhan</th>
                    <th>Waktu Tiba</th>
                    <th>DPJP</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-IGD-001</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td><span className="badge badge-danger">Level 1 - Merah</span></td>
                    <td>Nyeri dada, sesak</td>
                    <td>08:15</td>
                    <td>dr. Budi, Sp.JP</td>
                    <td><span className="badge badge-info">Resusitasi</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-IGD-002</td>
                    <td>Serda Hendra Wijaya</td>
                    <td><span className="badge badge-warning">Level 2 - Kuning</span></td>
                    <td>Trauma kepala</td>
                    <td>08:30</td>
                    <td>dr. Ahmad, Sp.B</td>
                    <td><span className="badge badge-warning">Perawatan</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-IGD-003</td>
                    <td>Letkol Dewi Lestari</td>
                    <td><span className="badge badge-success">Level 3 - Hijau</span></td>
                    <td>Demam tinggi</td>
                    <td>09:00</td>
                    <td>dr. Siti, Sp.PD</td>
                    <td><span className="badge badge-success">Observasi</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Detail</button>
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
            <h2 className="card-title">Informasi Pasien IGD</h2>
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
                  <th>Triase</th>
                  <th>Keluhan</th>
                  <th>Waktu Tiba</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-IGD-001</td>
                  <td>Kapten Ahmad Fauzi</td>
                  <td>Kapten</td>
                  <td><span className="badge badge-danger">Level 1</span></td>
                  <td>Nyeri dada, sesak</td>
                  <td>08:15:23</td>
                  <td><span className="badge badge-info">Resusitasi</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-IGD-002</td>
                  <td>Serda Hendra Wijaya</td>
                  <td>Serda</td>
                  <td><span className="badge badge-warning">Level 2</span></td>
                  <td>Trauma kepala</td>
                  <td>08:30:45</td>
                  <td><span className="badge badge-warning">Perawatan</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Detail</button>
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
              <h2 className="card-title">Pemeriksaan Pasien IGD</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
                <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-IGD-001) | <strong>Triase:</strong> <span className="badge badge-danger">Level 1 - Resusitasi</span>
              </div>

              <div className="tabs" style={{ marginBottom: '20px' }}>
                <button className="tab active">Assessment Awal</button>
                <button className="tab">Keperawatan & Medik</button>
                <button className="tab">Discharge Planning</button>
                <button className="tab">CPPT</button>
                <button className="tab">Instruksi & Implementasi</button>
              </div>

              <div className="alert alert-danger">
                <strong>Critical Event Time-stamping:</strong>
                <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                  <li>Waktu tiba: 08:15:23</li>
                  <li>Waktu triase: 08:16:45</li>
                  <li>Waktu dokter melihat: 08:18:12</li>
                  <li>Waktu mulai resusitasi: 08:19:30</li>
                </ul>
              </div>

              <div className="form-group">
                <label className="form-label">Sistem Triase</label>
                <select className="form-select">
                  <option>ESI (Emergency Severity Index)</option>
                  <option>START (Simple Triage and Rapid Treatment)</option>
                  <option>Australian Triage Scale</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Kategori Triase</label>
                <select className="form-select">
                  <option value="1">Level 1 - Resusitasi (Merah)</option>
                  <option value="2">Level 2 - Emergensi (Kuning)</option>
                  <option value="3">Level 3 - Urgent (Hijau)</option>
                  <option value="4">Level 4 - Semi Urgent (Biru)</option>
                  <option value="5">Level 5 - Non Urgent (Putih)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Keluhan Utama</label>
                <input type="text" className="form-input" placeholder="Keluhan utama pasien" />
              </div>

              <div className="grid grid-cols-4">
                <div className="form-group">
                  <label className="form-label">GCS</label>
                  <input type="text" className="form-input" placeholder="E4V5M6" />
                </div>
                <div className="form-group">
                  <label className="form-label">TD (mmHg)</label>
                  <input type="text" className="form-input" placeholder="120/80" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nadi (x/mnt)</label>
                  <input type="text" className="form-input" placeholder="80" />
                </div>
                <div className="form-group">
                  <label className="form-label">SpO2 (%)</label>
                  <input type="text" className="form-input" placeholder="98" />
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
                  <label className="form-label">Skala Nyeri</label>
                  <input type="text" className="form-input" placeholder="0-10" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Pemeriksaan Fisik</label>
                <textarea className="form-textarea" rows="4" placeholder="Hasil pemeriksaan fisik..."></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary">
                  <FileText size={16} />
                  Simpan Assessment
                </button>
                <button className="btn btn-secondary">Order Lab/Radiologi</button>
                <button className="btn btn-outline">E-Resep</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rujukan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rujukan ke Unit Layanan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-IGD-001)
            </div>

            <div className="form-group">
              <label className="form-label">Unit Tujuan *</label>
              <select className="form-select">
                <option value="">Pilih Unit</option>
                <option value="rawatinap">Rawat Inap</option>
                <option value="icu">ICU</option>
                <option value="hcu">HCU</option>
                <option value="lab">Laboratorium</option>
                <option value="radiologi">Radiologi</option>
                <option value="ok">Bedah Sentral (OK)</option>
                <option value="rujukluar">Rujuk ke RS Lain</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Diagnosa Kerja *</label>
              <textarea className="form-textarea" rows="2" placeholder="Diagnosa kerja IGD..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Indikasi Rujukan *</label>
              <textarea className="form-textarea" rows="3" placeholder="Alasan rujukan dan tindakan yang sudah dilakukan di IGD..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Prioritas</label>
              <select className="form-select">
                <option value="cito">Cito (Segera)</option>
                <option value="urgent">Urgent</option>
                <option value="elektif">Elektif</option>
              </select>
            </div>

            <button className="btn btn-primary">
              <ArrowRight size={16} />
              Kirim Rujukan
            </button>

            <div style={{ marginTop: '30px' }}>
              <h3 style={{ marginBottom: '15px' }}>Riwayat Rujukan</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Pasien</th>
                    <th>Unit Tujuan</th>
                    <th>Diagnosa</th>
                    <th>Prioritas</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18/01/2024 08:30</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td>ICU</td>
                    <td>STEMI</td>
                    <td><span className="badge badge-danger">Cito</span></td>
                    <td><span className="badge badge-success">Diterima</span></td>
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
            <h2 className="card-title">Tagihan Pasien IGD</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kapten Ahmad Fauzi (RM-IGD-001) | <strong>Penjamin:</strong> TNI
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
                  <td>Registrasi</td>
                  <td>Pendaftaran IGD</td>
                  <td>1</td>
                  <td>Rp 50.000</td>
                  <td>Rp 50.000</td>
                </tr>
                <tr>
                  <td>Tindakan</td>
                  <td>Resusitasi Jantung Paru</td>
                  <td>1</td>
                  <td>Rp 500.000</td>
                  <td>Rp 500.000</td>
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
                  <td>Inj. Morphine 5mg</td>
                  <td>2</td>
                  <td>Rp 75.000</td>
                  <td>Rp 150.000</td>
                </tr>
                <tr>
                  <td>BMHP</td>
                  <td>Infus Set</td>
                  <td>1</td>
                  <td>Rp 25.000</td>
                  <td>Rp 25.000</td>
                </tr>
                <tr>
                  <td>Lab</td>
                  <td>Troponin I</td>
                  <td>1</td>
                  <td>Rp 200.000</td>
                  <td>Rp 200.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Total</td>
                  <td>Rp 1.025.000</td>
                </tr>
                <tr style={{ fontWeight: 'bold' }}>
                  <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI (100%)</td>
                  <td>Rp 1.025.000</td>
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

export default IGD;
