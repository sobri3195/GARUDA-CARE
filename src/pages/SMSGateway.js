import React, { useState } from 'react';
import { Send, Inbox, CheckCircle, Mail, Search, Filter, Plus, MessageSquare } from 'lucide-react';

const SMSGateway = () => {
  const [activeTab, setActiveTab] = useState('pesan');
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'pesan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pesan')}
        >
          <MessageSquare size={18} />
          Pesan Keluar
        </button>
        <button
          className={`tab ${activeTab === 'terkirim' ? 'active' : ''}`}
          onClick={() => setActiveTab('terkirim')}
        >
          <CheckCircle size={18} />
          Pesan Terkirim
        </button>
        <button
          className={`tab ${activeTab === 'masuk' ? 'active' : ''}`}
          onClick={() => setActiveTab('masuk')}
        >
          <Inbox size={18} />
          Pesan Masuk
        </button>
        <button
          className={`tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          <Mail size={18} />
          Email
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'pesan' && (
          <div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Pesan Keluar (Antrian)</h2>
                <button className="btn btn-primary" onClick={() => setShowCompose(true)}>
                  <Plus size={18} />
                  Kirim Pesan Baru
                </button>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-4">
                  <div className="stat-card">
                    <div className="stat-icon warning">
                      <Send size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Dalam Antrian</h3>
                      <p className="text-2xl">24</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon info">
                      <MessageSquare size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Dalam Proses</h3>
                      <p className="text-2xl">8</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon danger">
                      <MessageSquare size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Gagal</h3>
                      <p className="text-2xl">2</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon success">
                      <CheckCircle size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>Terkirim Hari Ini</h3>
                      <p className="text-2xl">156</p>
                    </div>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label>Filter Pesan</label>
                  <div className="input-group">
                    <input type="text" placeholder="Cari penerima atau konten pesan" />
                    <button className="btn btn-secondary">
                      <Search size={18} />
                    </button>
                    <button className="btn btn-secondary">
                      <Filter size={18} />
                    </button>
                  </div>
                </div>

                <div className="table-container" style={{ marginTop: '20px' }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID Pesan</th>
                        <th>Tujuan</th>
                        <th>No. Telepon</th>
                        <th>Isi Pesan</th>
                        <th>Tipe</th>
                        <th>Waktu Antrian</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SMS-20240515-001</td>
                        <td>Letkol Budi Santoso</td>
                        <td>08123456789</td>
                        <td>Jadwal kontrol Anda: 20 Mei 2024, Poli Jantung...</td>
                        <td><span className="badge badge-info">Reminder</span></td>
                        <td>15 Mei 2024 09:00</td>
                        <td><span className="badge badge-warning">Dalam Antrian</span></td>
                        <td>
                          <button className="btn btn-sm btn-secondary">Batalkan</button>
                        </td>
                      </tr>
                      <tr>
                        <td>SMS-20240515-002</td>
                        <td>Mayor Siti Nurhaliza</td>
                        <td>08198765432</td>
                        <td>Hasil laboratorium Anda sudah tersedia. Dapat...</td>
                        <td><span className="badge badge-primary">Notifikasi</span></td>
                        <td>15 Mei 2024 09:15</td>
                        <td><span className="badge badge-info">Dalam Proses</span></td>
                        <td>
                          <button className="btn btn-sm btn-secondary">Batalkan</button>
                        </td>
                      </tr>
                      <tr>
                        <td>SMS-20240515-003</td>
                        <td>Kapten Ahmad Fauzi</td>
                        <td>08156789012</td>
                        <td>Tagihan rawat inap Anda: Rp 5.450.000...</td>
                        <td><span className="badge badge-warning">Billing</span></td>
                        <td>15 Mei 2024 09:30</td>
                        <td><span className="badge badge-danger">Gagal</span></td>
                        <td>
                          <button className="btn btn-sm btn-primary">Kirim Ulang</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {showCompose && (
              <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                  <h2 className="card-title">Kirim Pesan Baru</h2>
                  <button className="btn btn-secondary" onClick={() => setShowCompose(false)}>
                    Tutup
                  </button>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Tipe Pesan</label>
                    <select>
                      <option>SMS</option>
                      <option>Email</option>
                      <option>SMS & Email</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tujuan</label>
                    <select>
                      <option>Pilih Pasien</option>
                      <option>Semua Pasien Rawat Jalan Hari Ini</option>
                      <option>Pasien dengan Jadwal Kontrol</option>
                      <option>Pasien dengan Tagihan Pending</option>
                      <option>Custom List</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>No. Telepon / Email</label>
                    <input type="text" placeholder="Masukkan nomor telepon atau email (pisahkan dengan koma)" />
                  </div>

                  <div className="form-group">
                    <label>Kategori Pesan</label>
                    <select>
                      <option>Reminder Kontrol</option>
                      <option>Notifikasi Hasil Lab</option>
                      <option>Notifikasi Billing</option>
                      <option>Informasi Umum</option>
                      <option>Emergency Alert</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Isi Pesan</label>
                    <textarea rows="5" placeholder="Masukkan isi pesan (maksimal 160 karakter untuk SMS)"></textarea>
                    <small>0 / 160 karakter</small>
                  </div>

                  <div className="form-group">
                    <label>Jadwal Pengiriman</label>
                    <div className="grid grid-cols-2">
                      <div>
                        <input type="date" />
                      </div>
                      <div>
                        <input type="time" />
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="btn btn-primary">
                      <Send size={18} />
                      Kirim Sekarang
                    </button>
                    <button className="btn btn-secondary">
                      <MessageSquare size={18} />
                      Jadwalkan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'terkirim' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pesan Terkirim</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Filter Tanggal</label>
                <div className="grid grid-cols-2">
                  <input type="date" />
                  <input type="date" />
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID Pesan</th>
                      <th>Penerima</th>
                      <th>No. Telepon</th>
                      <th>Isi Pesan</th>
                      <th>Tipe</th>
                      <th>Waktu Kirim</th>
                      <th>Waktu Terkirim</th>
                      <th>Status Dibaca</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SMS-20240515-101</td>
                      <td>Letkol Budi Santoso</td>
                      <td>08123456789</td>
                      <td>Resep Anda sudah tersedia di Apotek RS Trimatra...</td>
                      <td><span className="badge badge-primary">Notifikasi</span></td>
                      <td>15 Mei 2024 08:00</td>
                      <td>15 Mei 2024 08:01</td>
                      <td><span className="badge badge-success">Dibaca</span></td>
                    </tr>
                    <tr>
                      <td>SMS-20240515-102</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>08198765432</td>
                      <td>Terima kasih telah berkunjung ke RS Trimatra...</td>
                      <td><span className="badge badge-info">Reminder</span></td>
                      <td>15 Mei 2024 07:30</td>
                      <td>15 Mei 2024 07:31</td>
                      <td><span className="badge badge-secondary">Belum Dibaca</span></td>
                    </tr>
                    <tr>
                      <td>SMS-20240515-103</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>08156789012</td>
                      <td>Jadwal operasi Anda: 16 Mei 2024, 10:00 WIB...</td>
                      <td><span className="badge badge-warning">Penting</span></td>
                      <td>15 Mei 2024 07:00</td>
                      <td>15 Mei 2024 07:01</td>
                      <td><span className="badge badge-success">Dibaca</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'masuk' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pesan Masuk</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <strong>Info:</strong> Pesan masuk dari pasien atau keluarga pasien akan ditampilkan di sini.
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID Pesan</th>
                      <th>Pengirim</th>
                      <th>No. Telepon</th>
                      <th>Isi Pesan</th>
                      <th>Waktu Terima</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IN-20240515-001</td>
                      <td>08123456789</td>
                      <td>08123456789</td>
                      <td>Mohon info jadwal dokter spesialis jantung</td>
                      <td>15 Mei 2024 08:30</td>
                      <td><span className="badge badge-warning">Belum Dibalas</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Balas</button>
                      </td>
                    </tr>
                    <tr>
                      <td>IN-20240515-002</td>
                      <td>08198765432</td>
                      <td>08198765432</td>
                      <td>Terima kasih atas pelayanannya</td>
                      <td>15 Mei 2024 09:00</td>
                      <td><span className="badge badge-success">Sudah Dibalas</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Lihat</button>
                      </td>
                    </tr>
                    <tr>
                      <td>IN-20240515-003</td>
                      <td>08156789012</td>
                      <td>08156789012</td>
                      <td>Apakah hasil lab saya sudah keluar?</td>
                      <td>15 Mei 2024 09:45</td>
                      <td><span className="badge badge-warning">Belum Dibalas</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Balas</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Email Gateway</h2>
              <button className="btn btn-primary" onClick={() => setShowCompose(true)}>
                <Plus size={18} />
                Kirim Email Baru
              </button>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-3">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Mail size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Email Terkirim</h3>
                    <p className="text-2xl">342</p>
                    <small>Bulan ini</small>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Mail size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Email Pending</h3>
                    <p className="text-2xl">8</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon danger">
                    <Mail size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Email Gagal</h3>
                    <p className="text-2xl">3</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID Email</th>
                      <th>Penerima</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Tipe</th>
                      <th>Waktu Kirim</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EMAIL-20240515-001</td>
                      <td>Letkol Budi Santoso</td>
                      <td>budi.santoso@tni.mil.id</td>
                      <td>Hasil Pemeriksaan Laboratorium</td>
                      <td><span className="badge badge-primary">Lab Report</span></td>
                      <td>15 Mei 2024 08:00</td>
                      <td><span className="badge badge-success">Terkirim</span></td>
                    </tr>
                    <tr>
                      <td>EMAIL-20240515-002</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>siti.nurhaliza@tni.mil.id</td>
                      <td>Invoice Pembayaran Rawat Inap</td>
                      <td><span className="badge badge-warning">Invoice</span></td>
                      <td>15 Mei 2024 09:00</td>
                      <td><span className="badge badge-success">Terkirim</span></td>
                    </tr>
                    <tr>
                      <td>EMAIL-20240515-003</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>ahmad.fauzi@tni.mil.id</td>
                      <td>Jadwal Kontrol Pasca Operasi</td>
                      <td><span className="badge badge-info">Reminder</span></td>
                      <td>15 Mei 2024 10:00</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SMSGateway;
