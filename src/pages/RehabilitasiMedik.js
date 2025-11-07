import React, { useState } from 'react';
import { Users, Activity } from 'lucide-react';

const RehabilitasiMedik = () => {
  const [activeTab, setActiveTab] = useState('informasi');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'informasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('informasi')}
        >
          Informasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pendaftaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendaftaran')}
        >
          Pendaftaran
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan & Tindakan
        </button>
        <button 
          className={`tab ${activeTab === 'bmhp' ? 'active' : ''}`}
          onClick={() => setActiveTab('bmhp')}
        >
          Pemakaian BMHP
        </button>
      </div>

      {activeTab === 'informasi' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pasien Bulan Ini</h3>
                <p>234</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Pasien Hari Ini</h3>
                <p>18</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Dalam Terapi</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai Terapi</h3>
                <p>189</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Pasien Rehabilitasi Medik</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari No. RM atau Nama Pasien..."
                  style={{ flex: 1, maxWidth: '400px' }}
                />
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Status</option>
                  <option value="aktif">Dalam Terapi</option>
                  <option value="selesai">Selesai</option>
                </select>
                <button className="btn btn-primary">Filter</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Pangkat/NRP</th>
                    <th>Diagnosa</th>
                    <th>Jenis Terapi</th>
                    <th>Tanggal Mulai</th>
                    <th>Total Sesi</th>
                    <th>Sesi Selesai</th>
                    <th>Fisioterapis</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-123456</td>
                    <td>Mayor Sudirman</td>
                    <td>Mayor/456789</td>
                    <td>Post Stroke</td>
                    <td>Fisioterapi Neuro</td>
                    <td>10 Des 2024</td>
                    <td>12</td>
                    <td>5</td>
                    <td>Ns. Andi, Ft</td>
                    <td><span className="badge badge-warning">Dalam Terapi</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-234567</td>
                    <td>Letda Hartono</td>
                    <td>Letda/234567</td>
                    <td>Post Fraktur Femur</td>
                    <td>Fisioterapi Muskuloskeletal</td>
                    <td>08 Des 2024</td>
                    <td>10</td>
                    <td>7</td>
                    <td>Ns. Budi, Ft</td>
                    <td><span className="badge badge-warning">Dalam Terapi</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-345678</td>
                    <td>Serda Wijaya</td>
                    <td>Serda/345678</td>
                    <td>Low Back Pain</td>
                    <td>Fisioterapi Tulang Belakang</td>
                    <td>01 Des 2024</td>
                    <td>8</td>
                    <td>8</td>
                    <td>Ns. Citra, Ft</td>
                    <td><span className="badge badge-success">Selesai</span></td>
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

      {activeTab === 'pendaftaran' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Form Pendaftaran Rehabilitasi Medik</h2>
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
                  <label className="form-label">Tanggal Pendaftaran</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Pasien</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Pangkat/NRP</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Asal Rujukan</label>
                  <select className="form-input">
                    <option value="">Pilih Asal Rujukan</option>
                    <option value="rawat_jalan">Rawat Jalan</option>
                    <option value="rawat_inap">Rawat Inap</option>
                    <option value="igd">IGD</option>
                    <option value="luar">Rujukan Luar RS</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Dokter Perujuk</label>
                  <input type="text" className="form-input" placeholder="Nama dokter" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Diagnosa Medis</label>
                  <textarea className="form-input" rows="2" placeholder="Diagnosa dari dokter perujuk"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Keluhan Utama</label>
                  <textarea className="form-input" rows="3" placeholder="Keluhan pasien saat ini"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Terapi yang Dibutuhkan</label>
                  <select className="form-input">
                    <option value="">Pilih Jenis Terapi</option>
                    <option value="fisioterapi">Fisioterapi</option>
                    <option value="okupasi">Terapi Okupasi</option>
                    <option value="wicara">Terapi Wicara</option>
                    <option value="ortotik">Ortotik Prostetik</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Fisioterapis</label>
                  <select className="form-input">
                    <option value="">Pilih Fisioterapis</option>
                    <option value="1">Ns. Andi, Ft</option>
                    <option value="2">Ns. Budi, Ft</option>
                    <option value="3">Ns. Citra, Ft</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan Pendaftaran</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Pendaftaran Hari Ini</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Registrasi</th>
                    <th>Waktu</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Diagnosa</th>
                    <th>Jenis Terapi</th>
                    <th>Fisioterapis</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RHB-20241215-001</td>
                    <td>08:30</td>
                    <td>RM-456789</td>
                    <td>Kapten Bambang</td>
                    <td>Frozen Shoulder</td>
                    <td>Fisioterapi</td>
                    <td>Ns. Andi, Ft</td>
                    <td><span className="badge badge-warning">Menunggu</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Proses</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RHB-20241215-002</td>
                    <td>09:15</td>
                    <td>RM-567890</td>
                    <td>Sertu Dedi</td>
                    <td>Post Op ACL</td>
                    <td>Fisioterapi</td>
                    <td>Ns. Budi, Ft</td>
                    <td><span className="badge badge-success">Dalam Terapi</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Proses</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pemeriksaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemeriksaan & Tindakan Rehabilitasi</h2>
            <button className="btn btn-primary">+ Tambah Catatan</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Sesi Ke-</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Modalitas/Teknik</th>
                  <th>Durasi</th>
                  <th>ROM</th>
                  <th>MMT</th>
                  <th>Skala Nyeri</th>
                  <th>Evaluasi</th>
                  <th>Fisioterapis</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>5</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>PNF, Gait Training, ADL Training</td>
                  <td>45 menit</td>
                  <td>Shoulder: 90°<br/>Elbow: 120°</td>
                  <td>Upper ext: 3<br/>Lower ext: 2</td>
                  <td>2/10</td>
                  <td>Progress baik, ROM meningkat</td>
                  <td>Ns. Andi, Ft</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>7</td>
                  <td>RM-234567</td>
                  <td>Letda Hartono</td>
                  <td>MWD, Strengthening Exercise, Gait Re-education</td>
                  <td>40 menit</td>
                  <td>Hip: 100°<br/>Knee: 130°</td>
                  <td>Hip flex: 4<br/>Knee ext: 4</td>
                  <td>3/10</td>
                  <td>Kemampuan berjalan membaik</td>
                  <td>Ns. Budi, Ft</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'bmhp' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemakaian BMHP Rehabilitasi Medik</h2>
            <button className="btn btn-primary">+ Catat Pemakaian</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Nama BMHP</th>
                  <th>Jumlah</th>
                  <th>Satuan</th>
                  <th>Harga Satuan (Rp)</th>
                  <th>Total (Rp)</th>
                  <th>Keterangan</th>
                  <th>Fisioterapis</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Elastic Bandage 4"</td>
                  <td>1</td>
                  <td>Roll</td>
                  <td>25.000</td>
                  <td>25.000</td>
                  <td>Untuk latihan</td>
                  <td>Ns. Andi, Ft</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>RM-234567</td>
                  <td>Letda Hartono</td>
                  <td>Hot Pack</td>
                  <td>1</td>
                  <td>Pcs</td>
                  <td>15.000</td>
                  <td>15.000</td>
                  <td>Terapi panas</td>
                  <td>Ns. Budi, Ft</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>RM-345678</td>
                  <td>Serda Wijaya</td>
                  <td>Gel Ultrasonik</td>
                  <td>2</td>
                  <td>Sachet</td>
                  <td>5.000</td>
                  <td>10.000</td>
                  <td>Untuk US therapy</td>
                  <td>Ns. Citra, Ft</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
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

export default RehabilitasiMedik;
