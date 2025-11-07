import React, { useState } from 'react';
import { Users, Activity } from 'lucide-react';

const Anestesi = () => {
  const [activeTab, setActiveTab] = useState('pra');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pra' ? 'active' : ''}`}
          onClick={() => setActiveTab('pra')}
        >
          Pra Anestesi
        </button>
        <button 
          className={`tab ${activeTab === 'intra' ? 'active' : ''}`}
          onClick={() => setActiveTab('intra')}
        >
          Intra Anestesi
        </button>
        <button 
          className={`tab ${activeTab === 'post' ? 'active' : ''}`}
          onClick={() => setActiveTab('post')}
        >
          Post Anestesi
        </button>
        <button 
          className={`tab ${activeTab === 'informasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('informasi')}
        >
          Informasi Pasien
        </button>
      </div>

      {activeTab === 'pra' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Penilaian Pra Anestesi</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">No. RM Pasien</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" className="form-input" placeholder="Cari No. RM" />
                    <button className="btn btn-primary">Cari</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal Pemeriksaan</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Pasien</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Usia</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Berat Badan (kg)</label>
                  <input type="number" className="form-input" placeholder="70" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tinggi Badan (cm)</label>
                  <input type="number" className="form-input" placeholder="170" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Diagnosa Pre-Operatif</label>
                  <textarea className="form-input" rows="2" placeholder="Diagnosa medis"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Rencana Operasi</label>
                  <textarea className="form-input" rows="2" placeholder="Jenis operasi yang akan dilakukan"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Riwayat Penyakit</label>
                  <textarea className="form-input" rows="3" placeholder="Riwayat penyakit dahulu, alergi, dll"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Status Fisik ASA</label>
                  <select className="form-input">
                    <option value="">Pilih ASA</option>
                    <option value="1">ASA I - Pasien sehat normal</option>
                    <option value="2">ASA II - Penyakit sistemik ringan</option>
                    <option value="3">ASA III - Penyakit sistemik berat</option>
                    <option value="4">ASA IV - Penyakit sistemik mengancam nyawa</option>
                    <option value="5">ASA V - Pasien moribund</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Mallampati Score</label>
                  <select className="form-input">
                    <option value="">Pilih Score</option>
                    <option value="1">Class I - Soft palate, fauces, uvula terlihat</option>
                    <option value="2">Class II - Soft palate, fauces terlihat</option>
                    <option value="3">Class III - Soft palate, base uvula terlihat</option>
                    <option value="4">Class IV - Soft palate tidak terlihat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Anestesi yang Direncanakan</label>
                  <select className="form-input">
                    <option value="">Pilih Jenis Anestesi</option>
                    <option value="ga">General Anesthesia</option>
                    <option value="spinal">Spinal Anesthesia</option>
                    <option value="epidural">Epidural Anesthesia</option>
                    <option value="regional">Regional Block</option>
                    <option value="local">Local Anesthesia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Puasa (jam)</label>
                  <input type="number" className="form-input" placeholder="8" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Hasil Pemeriksaan Penunjang</label>
                  <textarea className="form-input" rows="3" placeholder="Lab, EKG, Ro Thorax, dll"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Rencana Anestesi & Persiapan</label>
                  <textarea className="form-input" rows="3" placeholder="Teknik anestesi, obat-obatan, monitoring, dll"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Dokter Anestesi</label>
                  <input type="text" className="form-input" placeholder="Nama dokter" />
                </div>
                <div className="form-group">
                  <label className="form-label">Informed Consent</label>
                  <select className="form-input">
                    <option value="belum">Belum Ditandatangani</option>
                    <option value="sudah">Sudah Ditandatangani</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Penilaian Pra Anestesi</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Diagnosa</th>
                    <th>Rencana Operasi</th>
                    <th>ASA</th>
                    <th>Mallampati</th>
                    <th>Jenis Anestesi</th>
                    <th>Dokter Anestesi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-123456</td>
                    <td>Kolonel Sudirman</td>
                    <td>Appendicitis Acute</td>
                    <td>Appendectomy</td>
                    <td>ASA II</td>
                    <td>Class II</td>
                    <td>General Anesthesia</td>
                    <td>dr. Ahmad, Sp.An</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-234567</td>
                    <td>Kapten Hartono</td>
                    <td>Hernia Inguinalis</td>
                    <td>Herniorrhaphy</td>
                    <td>ASA I</td>
                    <td>Class I</td>
                    <td>Spinal Anesthesia</td>
                    <td>dr. Budi, Sp.An</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'intra' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Catatan Intra Anestesi</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label className="form-label">No. RM Pasien</label>
                  <input type="text" className="form-input" placeholder="RM-123456" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Pasien</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal Operasi</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Operasi</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Induksi</label>
                  <input type="time" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Insisi</label>
                  <input type="time" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Selesai Operasi</label>
                  <input type="time" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Selesai Anestesi</label>
                  <input type="time" className="form-input" />
                </div>
              </div>

              <h3 style={{ marginTop: '20px', marginBottom: '15px' }}>Teknik Anestesi</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Jenis Anestesi</label>
                  <select className="form-input">
                    <option value="ga">General Anesthesia</option>
                    <option value="spinal">Spinal Anesthesia</option>
                    <option value="epidural">Epidural Anesthesia</option>
                    <option value="regional">Regional Block</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Teknik Intubasi</label>
                  <select className="form-input">
                    <option value="">Tidak Ada</option>
                    <option value="ett">ETT (Endotracheal Tube)</option>
                    <option value="lma">LMA (Laryngeal Mask Airway)</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Obat-obatan yang Digunakan</label>
                  <textarea className="form-input" rows="3" placeholder="Propofol 150mg, Fentanyl 100mcg, Rocuronium 50mg, dll"></textarea>
                </div>
              </div>

              <h3 style={{ marginTop: '20px', marginBottom: '15px' }}>Monitoring Intra Operatif</h3>
              <div className="card" style={{ marginBottom: '20px', background: '#f8f9fa' }}>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Waktu</th>
                        <th>TD (mmHg)</th>
                        <th>Nadi (x/mnt)</th>
                        <th>SpO2 (%)</th>
                        <th>RR (x/mnt)</th>
                        <th>ETCO2 (mmHg)</th>
                        <th>Temp (°C)</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>08:00</td>
                        <td>120/80</td>
                        <td>78</td>
                        <td>99</td>
                        <td>16</td>
                        <td>35</td>
                        <td>36.8</td>
                        <td><button className="btn btn-sm btn-danger">Hapus</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-primary btn-sm">+ Tambah Monitoring</button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Total Cairan Masuk (ml)</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Perdarahan (ml)</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Urine Output (ml)</label>
                  <input type="number" className="form-input" placeholder="0" />
                </div>
                <div className="form-group">
                  <label className="form-label">Transfusi</label>
                  <input type="text" className="form-input" placeholder="Jenis dan jumlah transfusi" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Komplikasi/Kejadian Khusus</label>
                  <textarea className="form-input" rows="3" placeholder="Catat jika ada komplikasi atau kejadian khusus"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Dokter Anestesi</label>
                  <input type="text" className="form-input" placeholder="Nama dokter" />
                </div>
                <div className="form-group">
                  <label className="form-label">Asisten Anestesi</label>
                  <input type="text" className="form-input" placeholder="Nama perawat anestesi" />
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'post' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Catatan Post Anestesi (PACU/Recovery Room)</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label className="form-label">No. RM Pasien</label>
                  <input type="text" className="form-input" placeholder="RM-123456" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Pasien</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Masuk Recovery</label>
                  <input type="time" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu Keluar Recovery</label>
                  <input type="time" className="form-input" />
                </div>
              </div>

              <h3 style={{ marginTop: '20px', marginBottom: '15px' }}>Aldrete Score</h3>
              <div className="card" style={{ marginBottom: '20px', background: '#f8f9fa' }}>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Score Masuk</th>
                        <th>Score Keluar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Activity (Gerakan)</td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Dapat menggerakkan 4 ekstremitas</option>
                            <option value="1">1 - Dapat menggerakkan 2 ekstremitas</option>
                            <option value="0">0 - Tidak dapat menggerakkan ekstremitas</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Dapat menggerakkan 4 ekstremitas</option>
                            <option value="1">1 - Dapat menggerakkan 2 ekstremitas</option>
                            <option value="0">0 - Tidak dapat menggerakkan ekstremitas</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Respiration</td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Dapat napas dalam dan batuk</option>
                            <option value="1">1 - Napas terbatas</option>
                            <option value="0">0 - Apnea</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Dapat napas dalam dan batuk</option>
                            <option value="1">1 - Napas terbatas</option>
                            <option value="0">0 - Apnea</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Circulation (TD)</td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - TD ± 20% pre-op</option>
                            <option value="1">1 - TD ± 20-50% pre-op</option>
                            <option value="0">0 - TD ± >50% pre-op</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - TD ± 20% pre-op</option>
                            <option value="1">1 - TD ± 20-50% pre-op</option>
                            <option value="0">0 - TD ± >50% pre-op</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Consciousness</td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Sadar penuh</option>
                            <option value="1">1 - Terbangun jika dipanggil</option>
                            <option value="0">0 - Tidak responsive</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - Sadar penuh</option>
                            <option value="1">1 - Terbangun jika dipanggil</option>
                            <option value="0">0 - Tidak responsive</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Color (SpO2)</td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - SpO2 &gt;92%</option>
                            <option value="1">1 - SpO2 90-92%</option>
                            <option value="0">0 - SpO2 &lt;90%</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-input">
                            <option value="2">2 - SpO2 &gt;92%</option>
                            <option value="1">1 - SpO2 90-92%</option>
                            <option value="0">0 - SpO2 &lt;90%</option>
                          </select>
                        </td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Total Score</td>
                        <td><input type="number" className="form-input" placeholder="0-10" disabled /></td>
                        <td><input type="number" className="form-input" placeholder="0-10" disabled /></td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ marginTop: '10px' }}><em>*Pasien dapat dipindahkan ke ruangan jika Aldrete Score ≥ 9</em></p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Komplikasi di Recovery Room</label>
                  <textarea className="form-input" rows="3" placeholder="Mual muntah, nyeri, menggigil, dll"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Tindakan yang Dilakukan</label>
                  <textarea className="form-input" rows="3" placeholder="Pemberian obat, oksigen, dll"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Kondisi Saat Keluar Recovery</label>
                  <select className="form-input">
                    <option value="baik">Baik - Pindah ke Ruangan</option>
                    <option value="icu">Pindah ke ICU</option>
                    <option value="observasi">Masih Observasi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Perawat Recovery</label>
                  <input type="text" className="form-input" placeholder="Nama perawat" />
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'informasi' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Anestesi Bulan Ini</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>General Anesthesia</h3>
                <p>98</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Regional Anesthesia</h3>
                <p>58</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Di Recovery Room</h3>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Pasien Anestesi</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Jenis Operasi</th>
                    <th>ASA</th>
                    <th>Jenis Anestesi</th>
                    <th>Dokter Anestesi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-123456</td>
                    <td>Kolonel Sudirman</td>
                    <td>Appendectomy</td>
                    <td>ASA II</td>
                    <td>General</td>
                    <td>dr. Ahmad, Sp.An</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-234567</td>
                    <td>Kapten Hartono</td>
                    <td>Herniorrhaphy</td>
                    <td>ASA I</td>
                    <td>Spinal</td>
                    <td>dr. Budi, Sp.An</td>
                    <td><span className="badge badge-warning">Di Recovery</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-345678</td>
                    <td>Letda Wijaya</td>
                    <td>ORIF Femur</td>
                    <td>ASA II</td>
                    <td>General</td>
                    <td>dr. Citra, Sp.An</td>
                    <td><span className="badge badge-info">Intra Operatif</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Anestesi;
