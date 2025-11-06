import React, { useState } from 'react';
import { Plane, FileText, Activity, AlertCircle } from 'lucide-react';

const AerospaceMedicine = () => {
  const [activeTab, setActiveTab] = useState('fittofly');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'fittofly' ? 'active' : ''}`}
          onClick={() => setActiveTab('fittofly')}
        >
          Fit-to-Fly Assessment
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan Awak
        </button>
        <button 
          className={`tab ${activeTab === 'readiness' ? 'active' : ''}`}
          onClick={() => setActiveTab('readiness')}
        >
          Medical Readiness
        </button>
        <button 
          className={`tab ${activeTab === 'grounding' ? 'active' : ''}`}
          onClick={() => setActiveTab('grounding')}
        >
          Grounding/Waiver
        </button>
      </div>

      {activeTab === 'fittofly' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Plane size={30} />
              </div>
              <div className="stat-content">
                <h3>Awak Fit-to-Fly</h3>
                <p>142</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <AlertCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Assessment</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <AlertCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Temporary Grounding</h3>
                <p>5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Jadwal Hari Ini</h3>
                <p>12</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Fit-to-Fly Assessment Form</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Assessment untuk awak pesawat sebelum melaksanakan tugas penerbangan
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">NRP</label>
                  <input type="text" className="form-input" placeholder="Masukkan NRP" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Pangkat</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Satuan</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jabatan/Posisi Awak</label>
                  <select className="form-select">
                    <option value="">Pilih Posisi</option>
                    <option value="pilot">Pilot</option>
                    <option value="copilot">Co-Pilot</option>
                    <option value="navigator">Navigator</option>
                    <option value="engineer">Flight Engineer</option>
                    <option value="loadmaster">Loadmaster</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Misi</label>
                  <select className="form-select">
                    <option value="">Pilih Jenis Misi</option>
                    <option value="training">Training Flight</option>
                    <option value="transport">Transport</option>
                    <option value="patrol">Patrol</option>
                    <option value="medevac">Medical Evacuation</option>
                    <option value="combat">Combat Support</option>
                  </select>
                </div>
              </div>

              <h4 style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>Anamnesis</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Keluhan sakit kepala/pusing
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Gangguan penglihatan
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Gangguan pendengaran
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Nyeri dada/sesak nafas
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Gangguan pencernaan
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Kelelahan berlebihan
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Konsumsi alkohol &lt; 8 jam
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Obat-obatan yang mempengaruhi kesadaran
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Kurang tidur (&lt; 6 jam dalam 24 jam terakhir)
                </label>
              </div>

              <h4 style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>Vital Signs</h4>
              <div className="grid grid-cols-4">
                <div className="form-group">
                  <label className="form-label">TD (mmHg)</label>
                  <input type="text" className="form-input" placeholder="120/80" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nadi (x/mnt)</label>
                  <input type="text" className="form-input" placeholder="72" />
                </div>
                <div className="form-group">
                  <label className="form-label">RR (x/mnt)</label>
                  <input type="text" className="form-input" placeholder="16" />
                </div>
                <div className="form-group">
                  <label className="form-label">SpO2 (%)</label>
                  <input type="text" className="form-input" placeholder="98" />
                </div>
              </div>

              <h4 style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>Quick Assessment</h4>
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">Visus OD</label>
                  <input type="text" className="form-input" placeholder="6/6" />
                </div>
                <div className="form-group">
                  <label className="form-label">Visus OS</label>
                  <input type="text" className="form-input" placeholder="6/6" />
                </div>
                <div className="form-group">
                  <label className="form-label">Color Vision</label>
                  <select className="form-select">
                    <option>Normal</option>
                    <option>Abnormal</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Hearing Test</label>
                  <select className="form-select">
                    <option>Normal</option>
                    <option>Abnormal</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Catatan Tambahan</label>
                <textarea className="form-textarea" placeholder="Catatan dokter..."></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Kesimpulan</label>
                <select className="form-select">
                  <option value="">Pilih Kesimpulan</option>
                  <option value="fit">FIT TO FLY - Layak Terbang</option>
                  <option value="fit-limitation">FIT WITH LIMITATION - Layak dengan Pembatasan</option>
                  <option value="unfit-temporary">TEMPORARILY UNFIT - Tidak Layak Sementara</option>
                  <option value="unfit">UNFIT TO FLY - Tidak Layak Terbang</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button className="btn btn-primary">
                  <FileText size={16} />
                  Generate Sertifikat Fit-to-Fly
                </button>
                <button className="btn btn-outline">Simpan Draft</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pemeriksaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemeriksaan Berkala Awak Pesawat</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              Pemeriksaan kesehatan berkala sesuai standar aviation medicine
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>NRP</th>
                  <th>Nama</th>
                  <th>Posisi</th>
                  <th>Terakhir Periksa</th>
                  <th>Jatuh Tempo</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>531234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Pilot</td>
                  <td>15/07/2023</td>
                  <td>15/01/2024</td>
                  <td><span className="badge badge-danger">Overdue</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Jadwalkan</button>
                  </td>
                </tr>
                <tr>
                  <td>621245</td>
                  <td>Mayor Siti Nurhaliza</td>
                  <td>Co-Pilot</td>
                  <td>20/09/2023</td>
                  <td>20/03/2024</td>
                  <td><span className="badge badge-success">Valid</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat Rekam</button>
                  </td>
                </tr>
                <tr>
                  <td>721356</td>
                  <td>Kapten Ahmad Fauzi</td>
                  <td>Navigator</td>
                  <td>10/12/2023</td>
                  <td>10/06/2024</td>
                  <td><span className="badge badge-success">Valid</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Lihat Rekam</button>
                  </td>
                </tr>
                <tr>
                  <td>821467</td>
                  <td>Lettu Dewi Lestari</td>
                  <td>Flight Engineer</td>
                  <td>05/11/2023</td>
                  <td>05/02/2024</td>
                  <td><span className="badge badge-warning">Mendekati</span></td>
                  <td>
                    <button className="btn btn-primary btn-sm">Jadwalkan</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '30px' }}>
              <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Komponen Pemeriksaan Berkala:</h4>
              <div className="grid grid-cols-2">
                <div>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Pemeriksaan Fisik Lengkap</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />EKG 12 Lead</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Spirometri</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Audiometri</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Visus & Color Vision</li>
                  </ul>
                </div>
                <div>
                  <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Lab: Darah Lengkap, GDS, Lipid Profile</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Urine Rutin</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Rontgen Thorax</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Tes Psikologi (sesuai kebutuhan)</li>
                    <li><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Drug/Alcohol Screening</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'readiness' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Medical Readiness Status</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Status kesiapan medis individual dan unit untuk deployment
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Satuan</th>
                    <th>Total Personnel</th>
                    <th>Fully Ready</th>
                    <th>Limited Ready</th>
                    <th>Not Ready</th>
                    <th>Readiness %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Skadron Udara 1</td>
                    <td>120</td>
                    <td>102</td>
                    <td>12</td>
                    <td>6</td>
                    <td><span className="badge badge-success">85%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Udara 2</td>
                    <td>115</td>
                    <td>98</td>
                    <td>10</td>
                    <td>7</td>
                    <td><span className="badge badge-success">85%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Udara 3</td>
                    <td>108</td>
                    <td>85</td>
                    <td>15</td>
                    <td>8</td>
                    <td><span className="badge badge-warning">79%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Individual Deployability Status</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>NRP</th>
                    <th>Nama</th>
                    <th>Medical Check</th>
                    <th>Dental</th>
                    <th>Vaksinasi</th>
                    <th>Mental Health</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>531234</td>
                    <td>Letkol Budi Santoso</td>
                    <td><span className="badge badge-danger">Expired</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-danger">Not Ready</span></td>
                  </tr>
                  <tr>
                    <td>621245</td>
                    <td>Mayor Siti Nurhaliza</td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">Fully Ready</span></td>
                  </tr>
                  <tr>
                    <td>721356</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-success">OK</span></td>
                    <td><span className="badge badge-warning">Limited Ready</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'grounding' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Grounding & Waiver Management</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-warning">
              <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
              <strong>Perhatian:</strong> Grounding dan waiver memerlukan persetujuan dari Medical Authority
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Grounding</th>
                  <th>NRP</th>
                  <th>Nama</th>
                  <th>Alasan</th>
                  <th>Tanggal Mulai</th>
                  <th>Perkiraan Selesai</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GRD-2024-001</td>
                  <td>531234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Hypertension - Medical Check Expired</td>
                  <td>16/01/2024</td>
                  <td>30/01/2024</td>
                  <td><span className="badge badge-danger">Active Grounding</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>GRD-2024-002</td>
                  <td>821467</td>
                  <td>Lettu Dewi Lestari</td>
                  <td>Post-Surgical Recovery (Appendectomy)</td>
                  <td>10/01/2024</td>
                  <td>25/01/2024</td>
                  <td><span className="badge badge-warning">Under Review</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>WAV-2024-001</td>
                  <td>921578</td>
                  <td>Kapten Hendra Wijaya</td>
                  <td>Waiver for Minor Vision Defect</td>
                  <td>05/01/2024</td>
                  <td>05/07/2024</td>
                  <td><span className="badge badge-success">Waiver Approved</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="btn btn-primary" style={{ marginTop: '20px' }}>
              Tambah Grounding/Waiver Baru
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AerospaceMedicine;
