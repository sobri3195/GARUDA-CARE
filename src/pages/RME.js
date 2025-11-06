import React, { useState } from 'react';
import { Plus, Eye } from 'lucide-react';

const RME = () => {
  const [activeTab, setActiveTab] = useState('riwayat');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'riwayat' ? 'active' : ''}`}
          onClick={() => setActiveTab('riwayat')}
        >
          Riwayat Kunjungan
        </button>
        <button 
          className={`tab ${activeTab === 'soap' ? 'active' : ''}`}
          onClick={() => setActiveTab('soap')}
        >
          SOAP Notes
        </button>
        <button 
          className={`tab ${activeTab === 'igd' ? 'active' : ''}`}
          onClick={() => setActiveTab('igd')}
        >
          IGD
        </button>
        <button 
          className={`tab ${activeTab === 'rawatinap' ? 'active' : ''}`}
          onClick={() => setActiveTab('rawatinap')}
        >
          Rawat Inap
        </button>
        <button 
          className={`tab ${activeTab === 'ok' ? 'active' : ''}`}
          onClick={() => setActiveTab('ok')}
        >
          Bedah/OK
        </button>
      </div>

      {activeTab === 'riwayat' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Riwayat Kunjungan Pasien</h2>
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
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Unit/Poli</th>
                  <th>Dokter</th>
                  <th>Diagnosa</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/2024</td>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Poli Jantung</td>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>I25.1 - Coronary Artery Disease</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <Eye size={14} />
                      Lihat
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>15/01/2024</td>
                  <td>RM-001234</td>
                  <td>Letkol Budi Santoso</td>
                  <td>Poli Umum</td>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>I10 - Essential Hypertension</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <Eye size={14} />
                      Lihat
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>10/01/2024</td>
                  <td>RM-001235</td>
                  <td>Mayor Siti Nurhaliza</td>
                  <td>IGD</td>
                  <td>dr. Ahmad Fauzi, Sp.B</td>
                  <td>S06.0 - Concussion</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <Eye size={14} />
                      Lihat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'soap' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">SOAP Notes - Catatan Klinis</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Tanggal:</strong> 18 Januari 2024
            </div>

            <div className="form-group">
              <label className="form-label">Subjective (Keluhan Pasien)</label>
              <textarea 
                className="form-textarea"
                placeholder="Keluhan pasien, anamnesis..."
                defaultValue="Pasien mengeluh nyeri dada sebelah kiri sejak 2 hari yang lalu. Nyeri menjalar ke lengan kiri. Sesak nafas (+), keringat dingin (+). Riwayat hipertensi 5 tahun."
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Objective (Pemeriksaan Fisik & Penunjang)</label>
              <div className="grid grid-cols-4" style={{ marginBottom: '15px' }}>
                <div className="form-group">
                  <label className="form-label">TD (mmHg)</label>
                  <input type="text" className="form-input" defaultValue="160/100" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nadi (x/mnt)</label>
                  <input type="text" className="form-input" defaultValue="88" />
                </div>
                <div className="form-group">
                  <label className="form-label">RR (x/mnt)</label>
                  <input type="text" className="form-input" defaultValue="22" />
                </div>
                <div className="form-group">
                  <label className="form-label">Suhu (°C)</label>
                  <input type="text" className="form-input" defaultValue="36.8" />
                </div>
              </div>
              <textarea 
                className="form-textarea"
                placeholder="Hasil pemeriksaan fisik dan penunjang..."
                defaultValue="Pemeriksaan fisik: Kesadaran compos mentis, konjungtiva tidak anemis, JVP tidak meningkat. Thorax: Cor S1S2 reguler, murmur (-), gallop (-). Pulmo: vesikuler, ronkhi (-), wheezing (-). Abdomen: supel, bising usus normal. Ekstremitas: akral hangat, edema (-).&#10;&#10;EKG: ST elevasi di lead II, III, aVF.&#10;Troponin I: 2.5 ng/mL (elevated)"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Assessment (Diagnosa)</label>
              <input type="text" className="form-input" placeholder="Cari ICD-10..." />
              <div style={{ marginTop: '10px' }}>
                <span className="badge badge-primary" style={{ marginRight: '5px' }}>I21.1 - Acute ST Elevation MI</span>
                <span className="badge badge-primary">I10 - Essential Hypertension</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Plan (Rencana Terapi)</label>
              <textarea 
                className="form-textarea"
                placeholder="Rencana tindakan, terapi, edukasi..."
                defaultValue="1. Rujuk ke Poli Jantung / kardiologi intervensi&#10;2. Perawatan ICU&#10;3. Oksigen 3 lpm via nasal kanul&#10;4. IVFD NaCl 0.9% 500cc/24jam&#10;5. Inj. Morphine 5mg IV (nyeri)&#10;6. Loading Aspirin 320mg, Clopidogrel 300mg&#10;7. Monitor TTV, saturasi O2, EKG serial&#10;8. Konsul Sp.JP on call&#10;9. Edukasi pasien & keluarga tentang kondisi"
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">
                <Plus size={16} />
                Simpan SOAP
              </button>
              <button className="btn btn-secondary">Order Lab/Radiologi</button>
              <button className="btn btn-outline">E-Resep</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'igd' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Triase IGD</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">Sistem Triase</label>
                  <select className="form-select">
                    <option>ESI (Emergency Severity Index)</option>
                    <option>START (Simple Triage and Rapid Treatment)</option>
                    <option>Australian Triage Scale</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Kategori</label>
                  <select className="form-select">
                    <option value="1">Level 1 - Resusitasi (Merah)</option>
                    <option value="2">Level 2 - Emergensi (Kuning)</option>
                    <option value="3">Level 3 - Urgent (Hijau)</option>
                    <option value="4">Level 4 - Semi Urgent (Biru)</option>
                    <option value="5">Level 5 - Non Urgent (Putih)</option>
                  </select>
                </div>
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
                <label className="form-label">Keluhan Utama</label>
                <input type="text" className="form-input" placeholder="Keluhan utama pasien" />
              </div>

              <div className="grid grid-cols-4">
                <div className="form-group">
                  <label className="form-label">GCS</label>
                  <input type="text" className="form-input" placeholder="E4V5M6" />
                </div>
                <div className="form-group">
                  <label className="form-label">TD</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nadi</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">SpO2</label>
                  <input type="text" className="form-input" />
                </div>
              </div>

              <button className="btn btn-primary">Simpan Triase</button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Fast Order IGD</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-3">
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set Trauma</button>
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set ACS/STEMI</button>
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set Stroke</button>
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set Sepsis</button>
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set Asma Akut</button>
                <button className="btn btn-outline" style={{ marginBottom: '10px' }}>Set Keracunan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rawatinap' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Progress Note Rawat Inap</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
              <strong>Pasien:</strong> Kolonel Hendra Wijaya (RM-001238) | <strong>Ruangan:</strong> HCU - 203 | <strong>Hari Rawat:</strong> 3
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Jam</th>
                  <th>DPJP</th>
                  <th>Subjective</th>
                  <th>Objective</th>
                  <th>Assessment</th>
                  <th>Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/24<br/>08:00</td>
                  <td>dr. Andi<br/>Sp.PD</td>
                  <td>Sesak berkurang, batuk (+)</td>
                  <td>TD: 130/80<br/>N: 88<br/>RR: 20<br/>SpO2: 95%</td>
                  <td>Pneumonia improvement</td>
                  <td>Lanjut antibiotik<br/>Oksigen 2 lpm<br/>Nebulizer 3x</td>
                </tr>
                <tr>
                  <td>17/01/24<br/>08:00</td>
                  <td>dr. Andi<br/>Sp.PD</td>
                  <td>Sesak masih ada, demam (+)</td>
                  <td>TD: 140/90<br/>N: 96<br/>RR: 24<br/>SpO2: 92%</td>
                  <td>Pneumonia + Sepsis</td>
                  <td>IV Ceftriaxone<br/>Oksigen 4 lpm<br/>Monitor ketat</td>
                </tr>
              </tbody>
            </table>

            <button className="btn btn-primary" style={{ marginTop: '20px' }}>
              <Plus size={16} />
              Tambah Progress Note Baru
            </button>
          </div>
        </div>
      )}

      {activeTab === 'ok' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Jadwal Operasi</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Pasien</th>
                    <th>Diagnosa</th>
                    <th>Jenis Operasi</th>
                    <th>Operator</th>
                    <th>OK</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18/01/24<br/>09:00</td>
                    <td>Kapten Ahmad Fauzi<br/>RM-001236</td>
                    <td>Appendicitis Acute</td>
                    <td>Appendectomy</td>
                    <td>dr. Budi Santoso, Sp.B</td>
                    <td>OK-1</td>
                    <td><span className="badge badge-info">Sedang Berlangsung</span></td>
                  </tr>
                  <tr>
                    <td>18/01/24<br/>13:00</td>
                    <td>Mayor Dewi Lestari<br/>RM-001239</td>
                    <td>Cholelithiasis</td>
                    <td>Laparoscopic Cholecystectomy</td>
                    <td>dr. Budi Santoso, Sp.B</td>
                    <td>OK-2</td>
                    <td><span className="badge badge-warning">Terjadwal</span></td>
                  </tr>
                  <tr>
                    <td>17/01/24<br/>10:00</td>
                    <td>Letkol Hendra Wijaya<br/>RM-001240</td>
                    <td>Hernia Inguinalis</td>
                    <td>Herniorrhaphy</td>
                    <td>dr. Ahmad Fauzi, Sp.B</td>
                    <td>OK-1</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Surgical Safety Checklist</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Checklist untuk operasi: Appendectomy - Kapten Ahmad Fauzi
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Sign In (Sebelum Induksi Anestesi)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Identitas pasien dikonfirmasi
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Site/side/prosedur dikonfirmasi
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Informed consent ditandatangani
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Pulse oximeter terpasang dan berfungsi
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Time Out (Sebelum Insisi)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Semua tim memperkenalkan diri
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Konfirmasi nama, prosedur, dan lokasi insisi
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" checked readOnly /> Antibiotik profilaksis diberikan (&lt; 60 menit)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" /> Antisipasi kejadian kritis
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Sign Out (Sebelum Pasien Keluar OK)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" /> Nama prosedur yang dilakukan dicatat
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" /> Jumlah instrumen, kasa, dan jarum benar
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" /> Spesimen diberi label dengan benar
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" /> Rencana perawatan pasca operasi didiskusikan
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RME;
