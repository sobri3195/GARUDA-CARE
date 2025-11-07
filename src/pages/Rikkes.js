import React, { useState } from 'react';
import { Activity, FileText, Calendar, UserCheck, AlertCircle } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const Rikkes = () => {
  const [activeTab, setActiveTab] = useState('jadwal');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          Jadwal Rikkes
        </button>
        <button 
          className={`tab ${activeTab === 'pendaftaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendaftaran')}
        >
          Pendaftaran
        </button>
        <button 
          className={`tab ${activeTab === 'hasil' ? 'active' : ''}`}
          onClick={() => setActiveTab('hasil')}
        >
          Hasil Pemeriksaan
        </button>
        <button 
          className={`tab ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          Status Rikkes
        </button>
      </div>

      {activeTab === 'jadwal' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Calendar size={30} />
              </div>
              <div className="stat-content">
                <h3>Jadwal Hari Ini</h3>
                <p>25 Personel</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <UserCheck size={30} />
              </div>
              <div className="stat-content">
                <h3>Sudah Diperiksa</h3>
                <p>12 Personel</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Sedang Proses</h3>
                <p>5 Personel</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <AlertCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Belum Hadir</h3>
                <p>8 Personel</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Jadwal Rikkes Hari Ini</h2>
            </div>
            <div className="card-body">
              <TableWithExport title="Jadwal Rikkes Hari Ini" tableId="jadwal-rikkes">
                <table className="table" id="jadwal-rikkes">
                  <thead>
                    <tr>
                      <th>No. Antrian</th>
                      <th>Waktu</th>
                      <th>NRP</th>
                      <th>Nama</th>
                      <th>Pangkat</th>
                      <th>Satuan</th>
                      <th>Jenis Rikkes</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>08:00</td>
                      <td>531234</td>
                      <td>Mayor Pnb Budi Santoso</td>
                      <td>Mayor</td>
                      <td>Skadron Udara 1</td>
                      <td>Rikkes Berkala</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                      <td><button className="btn btn-outline btn-sm">Lihat Hasil</button></td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>08:30</td>
                      <td>531245</td>
                      <td>Kapten Pnb Agus Prasetyo</td>
                      <td>Kapten</td>
                      <td>Skadron Udara 1</td>
                      <td>Rikkes Penerbang</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                      <td><button className="btn btn-outline btn-sm">Lihat Hasil</button></td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>09:00</td>
                      <td>531256</td>
                      <td>Lettu Pnb Rudi Hartono</td>
                      <td>Lettu</td>
                      <td>Skadron Udara 2</td>
                      <td>Rikkes Penerbang</td>
                      <td><span className="badge badge-warning">Sedang Proses</span></td>
                      <td><button className="btn btn-primary btn-sm">Mulai Periksa</button></td>
                    </tr>
                    <tr>
                      <td>004</td>
                      <td>09:30</td>
                      <td>621267</td>
                      <td>Mayor Tek Siti Rahayu</td>
                      <td>Mayor</td>
                      <td>Skadron Teknik</td>
                      <td>Rikkes Berkala</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                      <td><button className="btn btn-outline btn-sm">Detail</button></td>
                    </tr>
                    <tr>
                      <td>005</td>
                      <td>10:00</td>
                      <td>721278</td>
                      <td>Serka Dwi Cahyono</td>
                      <td>Serka</td>
                      <td>Skadron Teknik</td>
                      <td>Rikkes Berkala</td>
                      <td><span className="badge badge-danger">Belum Hadir</span></td>
                      <td><button className="btn btn-outline btn-sm">Detail</button></td>
                    </tr>
                  </tbody>
                </table>
              </TableWithExport>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pendaftaran' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Form Pendaftaran Rikkes</h2>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              Formulir pendaftaran untuk Pemeriksaan Kesehatan (Rikkes) personel TNI AU
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
                <select className="form-select">
                  <option value="">Pilih Pangkat</option>
                  <option value="marskal">Marsekal</option>
                  <option value="kolonel">Kolonel</option>
                  <option value="letkol">Letkol</option>
                  <option value="mayor">Mayor</option>
                  <option value="kapten">Kapten</option>
                  <option value="lettu">Lettu</option>
                  <option value="letda">Letda</option>
                  <option value="serma">Serma</option>
                  <option value="serka">Serka</option>
                  <option value="sertu">Sertu</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Satuan</label>
                <input type="text" className="form-input" placeholder="Contoh: Skadron Udara 1" />
              </div>
              <div className="form-group">
                <label className="form-label">Jabatan</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">No. Telepon</label>
                <input type="tel" className="form-input" placeholder="08xx-xxxx-xxxx" />
              </div>
              <div className="form-group">
                <label className="form-label">Jenis Rikkes</label>
                <select className="form-select">
                  <option value="">Pilih Jenis Rikkes</option>
                  <option value="berkala">Rikkes Berkala</option>
                  <option value="penerbang">Rikkes Penerbang</option>
                  <option value="khusus">Rikkes Khusus</option>
                  <option value="pratugas">Rikkes Pra-Tugas</option>
                  <option value="paskatugas">Rikkes Paska-Tugas</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Tanggal Rikkes</label>
                <input type="date" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Keluhan/Catatan Khusus</label>
              <textarea className="form-textarea" placeholder="Keluhan atau catatan khusus (opsional)"></textarea>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button className="btn btn-primary">
                <FileText size={16} />
                Daftar Rikkes
              </button>
              <button className="btn btn-outline">Reset</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'hasil' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Hasil Pemeriksaan Kesehatan</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Hasil Rikkes" tableId="hasil-rikkes">
              <table className="table" id="hasil-rikkes">
                <thead>
                  <tr>
                    <th>No. Rikkes</th>
                    <th>Tanggal</th>
                    <th>NRP</th>
                    <th>Nama</th>
                    <th>Jenis Rikkes</th>
                    <th>TD</th>
                    <th>Nadi</th>
                    <th>Visus</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RIKKES-2024-001</td>
                    <td>16/01/2024</td>
                    <td>531234</td>
                    <td>Mayor Pnb Budi Santoso</td>
                    <td>Berkala</td>
                    <td>120/80</td>
                    <td>72</td>
                    <td>6/6</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>RIKKES-2024-002</td>
                    <td>16/01/2024</td>
                    <td>531245</td>
                    <td>Kapten Pnb Agus Prasetyo</td>
                    <td>Penerbang</td>
                    <td>125/82</td>
                    <td>68</td>
                    <td>6/6</td>
                    <td><span className="badge badge-success">Fit to Fly</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>RIKKES-2024-003</td>
                    <td>15/01/2024</td>
                    <td>621267</td>
                    <td>Mayor Tek Siti Rahayu</td>
                    <td>Berkala</td>
                    <td>130/85</td>
                    <td>78</td>
                    <td>6/6</td>
                    <td><span className="badge badge-warning">Perlu Observasi</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>RIKKES-2024-004</td>
                    <td>15/01/2024</td>
                    <td>721278</td>
                    <td>Serka Dwi Cahyono</td>
                    <td>Berkala</td>
                    <td>115/75</td>
                    <td>70</td>
                    <td>6/6</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      )}

      {activeTab === 'status' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Status Rikkes Personel TNI AU</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-warning">
                <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                <strong>Reminder:</strong> Rikkes wajib dilakukan setiap 6 bulan untuk personel penerbang dan setiap 1 tahun untuk personel non-penerbang
              </div>

              <TableWithExport title="Status Rikkes Personel" tableId="status-rikkes">
                <table className="table" id="status-rikkes">
                  <thead>
                    <tr>
                      <th>NRP</th>
                      <th>Nama</th>
                      <th>Pangkat</th>
                      <th>Satuan</th>
                      <th>Kategori</th>
                      <th>Terakhir Rikkes</th>
                      <th>Jatuh Tempo</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>531234</td>
                      <td>Mayor Pnb Budi Santoso</td>
                      <td>Mayor</td>
                      <td>Skadron Udara 1</td>
                      <td>Penerbang</td>
                      <td>16/01/2024</td>
                      <td>16/07/2024</td>
                      <td><span className="badge badge-success">Valid</span></td>
                      <td><button className="btn btn-outline btn-sm">Lihat</button></td>
                    </tr>
                    <tr>
                      <td>531245</td>
                      <td>Kapten Pnb Agus Prasetyo</td>
                      <td>Kapten</td>
                      <td>Skadron Udara 1</td>
                      <td>Penerbang</td>
                      <td>16/01/2024</td>
                      <td>16/07/2024</td>
                      <td><span className="badge badge-success">Valid</span></td>
                      <td><button className="btn btn-outline btn-sm">Lihat</button></td>
                    </tr>
                    <tr>
                      <td>531256</td>
                      <td>Lettu Pnb Rudi Hartono</td>
                      <td>Lettu</td>
                      <td>Skadron Udara 2</td>
                      <td>Penerbang</td>
                      <td>10/08/2023</td>
                      <td>10/02/2024</td>
                      <td><span className="badge badge-warning">Mendekati Expired</span></td>
                      <td><button className="btn btn-primary btn-sm">Jadwalkan</button></td>
                    </tr>
                    <tr>
                      <td>621267</td>
                      <td>Mayor Tek Siti Rahayu</td>
                      <td>Mayor</td>
                      <td>Skadron Teknik</td>
                      <td>Non-Penerbang</td>
                      <td>15/01/2023</td>
                      <td>15/01/2024</td>
                      <td><span className="badge badge-danger">Expired</span></td>
                      <td><button className="btn btn-primary btn-sm">Jadwalkan</button></td>
                    </tr>
                    <tr>
                      <td>721278</td>
                      <td>Serka Dwi Cahyono</td>
                      <td>Serka</td>
                      <td>Skadron Teknik</td>
                      <td>Non-Penerbang</td>
                      <td>15/01/2024</td>
                      <td>15/01/2025</td>
                      <td><span className="badge badge-success">Valid</span></td>
                      <td><button className="btn btn-outline btn-sm">Lihat</button></td>
                    </tr>
                  </tbody>
                </table>
              </TableWithExport>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Jenis-jenis Rikkes</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2">
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Rikkes Rutin</h4>
                  <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
                    <li><strong>Rikkes Berkala</strong> - Setiap 1 tahun untuk non-penerbang</li>
                    <li><strong>Rikkes Penerbang</strong> - Setiap 6 bulan untuk awak pesawat</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Rikkes Khusus</h4>
                  <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
                    <li><strong>Rikkes Pra-Tugas</strong> - Sebelum melaksanakan tugas khusus</li>
                    <li><strong>Rikkes Paska-Tugas</strong> - Setelah tugas operasi/misi</li>
                    <li><strong>Rikkes Khusus</strong> - Evaluasi kondisi medis tertentu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rikkes;
