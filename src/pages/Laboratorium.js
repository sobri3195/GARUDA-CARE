import React, { useState } from 'react';
import { TestTube, AlertTriangle, FileText } from 'lucide-react';

const Laboratorium = () => {
  const [activeTab, setActiveTab] = useState('order');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'order' ? 'active' : ''}`}
          onClick={() => setActiveTab('order')}
        >
          Order Lab
        </button>
        <button 
          className={`tab ${activeTab === 'specimen' ? 'active' : ''}`}
          onClick={() => setActiveTab('specimen')}
        >
          Tracking Specimen
        </button>
        <button 
          className={`tab ${activeTab === 'hasil' ? 'active' : ''}`}
          onClick={() => setActiveTab('hasil')}
        >
          Hasil & Validasi
        </button>
      </div>

      {activeTab === 'order' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Order Pemeriksaan Laboratorium</h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-2">
              <div className="form-group">
                <label className="form-label">No. RM / Nama Pasien</label>
                <input type="text" className="form-input" placeholder="Cari pasien..." />
              </div>
              <div className="form-group">
                <label className="form-label">Dokter Pengirim</label>
                <input type="text" className="form-input" defaultValue="dr. Andi Wijaya, Sp.PD" readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Unit/Poli</label>
                <input type="text" className="form-input" defaultValue="Poli Jantung" readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Prioritas</label>
                <select className="form-select">
                  <option value="routine">Routine</option>
                  <option value="urgent">Urgent</option>
                  <option value="stat">STAT (Emergency)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Pilih Pemeriksaan</label>
              <div className="grid grid-cols-3" style={{ marginTop: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Darah Lengkap
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> GDS (Gula Darah Sewaktu)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> HbA1c
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Lipid Profile
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> SGOT/SGPT
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Ureum/Creatinin
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Elektrolit
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Troponin I
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> D-Dimer
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Urine Lengkap
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Kultur Darah
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" /> Rapid Antigen
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Informasi Klinis / Diagnosis</label>
              <textarea className="form-textarea" placeholder="Diagnosis atau informasi klinis yang relevan..."></textarea>
            </div>

            <button className="btn btn-primary">
              <TestTube size={16} />
              Submit Order Lab
            </button>
          </div>
        </div>
      )}

      {activeTab === 'specimen' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Tracking Specimen</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>No. Specimen</th>
                  <th>Pasien</th>
                  <th>Jenis Pemeriksaan</th>
                  <th>Waktu Ambil</th>
                  <th>Status</th>
                  <th>Estimasi Selesai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LAB-20240118-001</td>
                  <td>Letkol Budi Santoso<br/>RM-001234</td>
                  <td>Darah Lengkap, Lipid Profile</td>
                  <td>08:15</td>
                  <td><span className="badge badge-info">Processing</span></td>
                  <td>10:15</td>
                </tr>
                <tr>
                  <td>LAB-20240118-002</td>
                  <td>Mayor Siti Nurhaliza<br/>RM-001235</td>
                  <td>Troponin I (STAT)</td>
                  <td>08:30</td>
                  <td><span className="badge badge-warning">Validasi Pending</span></td>
                  <td>09:00</td>
                </tr>
                <tr>
                  <td>LAB-20240118-003</td>
                  <td>Kapten Ahmad Fauzi<br/>RM-001236</td>
                  <td>Kultur Darah</td>
                  <td>07:45</td>
                  <td><span className="badge badge-info">Inkubasi (24-48 jam)</span></td>
                  <td>20/01/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'hasil' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Hasil Laboratorium - Validasi</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
                <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>No. Lab:</strong> LAB-20240118-001 | <strong>Tanggal:</strong> 18/01/2024 08:15
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Hasil</th>
                    <th>Satuan</th>
                    <th>Nilai Normal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hemoglobin</td>
                    <td><strong>13.8</strong></td>
                    <td>g/dL</td>
                    <td>13.0 - 17.0</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr>
                    <td>Leukosit</td>
                    <td><strong>8,500</strong></td>
                    <td>/μL</td>
                    <td>4,000 - 11,000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr>
                    <td>Trombosit</td>
                    <td><strong>280,000</strong></td>
                    <td>/μL</td>
                    <td>150,000 - 400,000</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr style={{ background: '#fee2e2' }}>
                    <td>Kolesterol Total</td>
                    <td><strong>245</strong></td>
                    <td>mg/dL</td>
                    <td>&lt; 200</td>
                    <td><span className="badge badge-danger">High</span></td>
                  </tr>
                  <tr style={{ background: '#fee2e2' }}>
                    <td>LDL Cholesterol</td>
                    <td><strong>165</strong></td>
                    <td>mg/dL</td>
                    <td>&lt; 130</td>
                    <td><span className="badge badge-danger">High</span></td>
                  </tr>
                  <tr>
                    <td>HDL Cholesterol</td>
                    <td><strong>42</strong></td>
                    <td>mg/dL</td>
                    <td>&gt; 40</td>
                    <td><span className="badge badge-success">Normal</span></td>
                  </tr>
                  <tr style={{ background: '#fee2e2' }}>
                    <td>Trigliserida</td>
                    <td><strong>210</strong></td>
                    <td>mg/dL</td>
                    <td>&lt; 150</td>
                    <td><span className="badge badge-danger">High</span></td>
                  </tr>
                </tbody>
              </table>

              <div className="alert alert-danger" style={{ marginTop: '20px' }}>
                <AlertTriangle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                <strong>Critical Value Alert:</strong> Kolesterol LDL tinggi (165 mg/dL). Dokter sudah diberitahu via sistem.
              </div>

              <div className="form-group">
                <label className="form-label">Catatan/Komentar Analis</label>
                <textarea className="form-textarea" placeholder="Catatan tambahan dari analis..."></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button className="btn btn-primary">
                  <FileText size={16} />
                  Validasi & Release Result
                </button>
                <button className="btn btn-outline">Print Hasil</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laboratorium;
