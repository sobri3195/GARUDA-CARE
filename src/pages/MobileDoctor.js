import React, { useState } from 'react';
import { User, Calendar, Users, FileText, Clock, Stethoscope, Download, Bell, TrendingUp } from 'lucide-react';

const MobileDoctor = () => {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div>
      <div className="alert alert-info" style={{ marginBottom: '20px' }}>
        <strong>Mobile Doctor App:</strong> Aplikasi mobile untuk dokter mengakses jadwal praktek, daftar pasien, dan data medis pasien.
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'profil' ? 'active' : ''}`}
          onClick={() => setActiveTab('profil')}
        >
          <User size={18} />
          Profil Dokter
        </button>
        <button
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          <Calendar size={18} />
          Jadwal Dokter
        </button>
        <button
          className={`tab ${activeTab === 'pendaftaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendaftaran')}
        >
          <FileText size={18} />
          List Pendaftaran
        </button>
        <button
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          <Users size={18} />
          List Pasien Dokter
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'profil' && (
          <div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Profil Dokter</h2>
                <div>
                  <button className="btn btn-secondary" style={{ marginRight: '10px' }}>
                    <Bell size={18} />
                    Notifikasi
                  </button>
                  <button className="btn btn-primary">
                    <Download size={18} />
                    Download App
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>NIP</label>
                    <input type="text" value="DOK-001234" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <span className="badge badge-success">Aktif</span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" value="dr. Eko Prasetyo, Sp.JP" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Pangkat/NRP</label>
                    <input type="text" value="Kolonel / 431128" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Spesialisasi</label>
                    <input type="text" value="Spesialis Jantung dan Pembuluh Darah" readOnly />
                  </div>
                  <div className="form-group">
                    <label>No. STR</label>
                    <input type="text" value="STR-12345678901234" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>No. SIP</label>
                    <input type="text" value="SIP-12345/2024" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Masa Berlaku SIP</label>
                    <input type="text" value="31 Desember 2025" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>No. Telepon</label>
                    <input type="tel" value="08123456789" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" value="eko.prasetyo@tni.mil.id" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Poliklinik</label>
                  <input type="text" value="Poli Jantung" readOnly />
                </div>

                <div className="form-group">
                  <label>Pendidikan</label>
                  <textarea rows="3" readOnly>
S1 Kedokteran - Universitas Indonesia (2005)
Sp-1 Kardiologi - FKUI (2012)
Fellowship Interventional Cardiology - National Heart Centre Singapore (2015)
                  </textarea>
                </div>

                <div className="grid grid-cols-4">
                  <div className="stat-card">
                    <div className="stat-icon primary">
                      <Users size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Pasien Hari Ini</h3>
                      <p className="text-2xl">12</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon secondary">
                      <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Jadwal Minggu Ini</h3>
                      <p className="text-2xl">3 hari</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon success">
                      <TrendingUp size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Pasien Bulan Ini</h3>
                      <p className="text-2xl">245</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon info">
                      <Stethoscope size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Total Pasien</h3>
                      <p className="text-2xl">2,543</p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning" style={{ marginTop: '20px' }}>
                  <strong>Notifikasi Mobile App:</strong> Aktif - Anda akan menerima notifikasi untuk pasien baru, hasil lab, dan perubahan jadwal.
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary">Update Data</button>
                  <button className="btn btn-secondary">Ubah Password</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jadwal' && (
          <div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Jadwal Praktek Dokter</h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-4">
                  <div className="stat-card">
                    <div className="stat-icon primary">
                      <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Jadwal Hari Ini</h3>
                      <p className="text-2xl">1</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon secondary">
                      <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Jadwal Minggu Ini</h3>
                      <p className="text-2xl">3</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon warning">
                      <Clock size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Jam Praktek</h3>
                      <p className="text-sm">08:00 - 12:00</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon info">
                      <Users size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Kuota Pasien</h3>
                      <p className="text-2xl">15</p>
                    </div>
                  </div>
                </div>

                <div className="table-container" style={{ marginTop: '20px' }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Hari</th>
                        <th>Tanggal</th>
                        <th>Poliklinik</th>
                        <th>Jam Praktek</th>
                        <th>Kuota</th>
                        <th>Terdaftar</th>
                        <th>Sisa</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Senin</td>
                        <td>15 Mei 2024</td>
                        <td>Poli Jantung</td>
                        <td>08:00 - 12:00</td>
                        <td>15</td>
                        <td>12</td>
                        <td>3</td>
                        <td><span className="badge badge-success">Aktif</span></td>
                      </tr>
                      <tr>
                        <td>Rabu</td>
                        <td>17 Mei 2024</td>
                        <td>Poli Jantung</td>
                        <td>08:00 - 12:00</td>
                        <td>15</td>
                        <td>8</td>
                        <td>7</td>
                        <td><span className="badge badge-info">Terjadwal</span></td>
                      </tr>
                      <tr>
                        <td>Jumat</td>
                        <td>19 Mei 2024</td>
                        <td>Poli Jantung</td>
                        <td>08:00 - 12:00</td>
                        <td>15</td>
                        <td>5</td>
                        <td>10</td>
                        <td><span className="badge badge-info">Terjadwal</span></td>
                      </tr>
                      <tr>
                        <td>Senin</td>
                        <td>22 Mei 2024</td>
                        <td>Poli Jantung</td>
                        <td>08:00 - 12:00</td>
                        <td>15</td>
                        <td>0</td>
                        <td>15</td>
                        <td><span className="badge badge-secondary">Belum Dibuka</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="alert alert-info" style={{ marginTop: '20px' }}>
                  <strong>Info:</strong> Jadwal praktek dapat berubah sewaktu-waktu. Perubahan jadwal akan dikirimkan melalui notifikasi mobile app.
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <div className="card-header">
                <h2 className="card-title">Pengajuan Cuti/Izin</h2>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Tanggal Mulai</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Selesai</label>
                    <input type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Jenis</label>
                  <select>
                    <option>Cuti</option>
                    <option>Izin</option>
                    <option>Sakit</option>
                    <option>Dinas Luar</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Keterangan</label>
                  <textarea rows="3" placeholder="Alasan cuti/izin"></textarea>
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary">Ajukan</button>
                  <button className="btn btn-secondary">Reset</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pendaftaran' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">List Pendaftaran Pasien</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Menunggu</h3>
                    <p className="text-2xl">5</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Stethoscope size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Sedang Diperiksa</h3>
                    <p className="text-2xl">1</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <FileText size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Selesai</h3>
                    <p className="text-2xl">6</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Hari Ini</h3>
                    <p className="text-2xl">12</p>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '20px' }}>
                <label>Filter Tanggal</label>
                <input type="date" />
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Antrian</th>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Keluhan</th>
                      <th>Waktu Daftar</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="badge badge-primary">A001</span></td>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Letkol / 531234</td>
                      <td>Kontrol jantung rutin</td>
                      <td>15 Mei 2024 08:00</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Lihat</button>
                      </td>
                    </tr>
                    <tr>
                      <td><span className="badge badge-primary">A002</span></td>
                      <td>RM-001245</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>Mayor / 621245</td>
                      <td>Nyeri dada</td>
                      <td>15 Mei 2024 08:15</td>
                      <td><span className="badge badge-warning">Sedang Diperiksa</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Buka RME</button>
                      </td>
                    </tr>
                    <tr>
                      <td><span className="badge badge-primary">A003</span></td>
                      <td>RM-001267</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>Kapten / 721356</td>
                      <td>Hasil lab follow up</td>
                      <td>15 Mei 2024 08:30</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Panggil</button>
                      </td>
                    </tr>
                    <tr>
                      <td><span className="badge badge-primary">A004</span></td>
                      <td>RM-001289</td>
                      <td>Letda Dewi Lestari</td>
                      <td>Letda / 731467</td>
                      <td>Sesak napas</td>
                      <td>15 Mei 2024 08:45</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Panggil</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info" style={{ marginTop: '20px' }}>
                <strong>Notifikasi:</strong> Anda akan menerima notifikasi push ketika ada pasien baru yang mendaftar.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pasien' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">List Pasien Dokter</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Pasien</h3>
                    <p className="text-2xl">2,543</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon secondary">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pasien Bulan Ini</h3>
                    <p className="text-2xl">245</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pasien Kontrol</h3>
                    <p className="text-2xl">32</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Stethoscope size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pasien Aktif</h3>
                    <p className="text-2xl">156</p>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '20px' }}>
                <label>Cari Pasien</label>
                <input type="text" placeholder="No. RM, Nama, atau NRP" />
              </div>

              <div className="form-group">
                <label>Filter Status</label>
                <select>
                  <option>Semua Pasien</option>
                  <option>Pasien Aktif</option>
                  <option>Pasien Kontrol</option>
                  <option>Pasien Lama</option>
                </select>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Diagnosa Terakhir</th>
                      <th>Kunjungan Terakhir</th>
                      <th>Total Kunjungan</th>
                      <th>Kontrol Berikutnya</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Letkol / 531234</td>
                      <td>Hipertensi</td>
                      <td>15 Mei 2024</td>
                      <td>24</td>
                      <td>20 Mei 2024</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat RME</button>
                      </td>
                    </tr>
                    <tr>
                      <td>RM-001245</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>Mayor / 621245</td>
                      <td>Penyakit Jantung Koroner</td>
                      <td>10 Mei 2024</td>
                      <td>18</td>
                      <td>25 Mei 2024</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat RME</button>
                      </td>
                    </tr>
                    <tr>
                      <td>RM-001267</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>Kapten / 721356</td>
                      <td>Aritmia</td>
                      <td>5 Mei 2024</td>
                      <td>12</td>
                      <td>19 Mei 2024</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat RME</button>
                      </td>
                    </tr>
                    <tr>
                      <td>RM-001289</td>
                      <td>Letda Dewi Lestari</td>
                      <td>Letda / 731467</td>
                      <td>Gagal Jantung</td>
                      <td>1 Mei 2024</td>
                      <td>8</td>
                      <td>15 Mei 2024</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat RME</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info" style={{ marginTop: '20px' }}>
                <strong>Info:</strong> Klik "Lihat RME" untuk membuka rekam medis elektronik lengkap pasien.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDoctor;
