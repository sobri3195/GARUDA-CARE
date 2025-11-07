import React, { useState } from 'react';
import { User, History, DollarSign, Calendar, FileText, Bed, Ambulance, Building2, Download, QrCode } from 'lucide-react';

const MobilePatients = () => {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div>
      <div className="alert alert-info" style={{ marginBottom: '20px' }}>
        <strong>Mobile Patients App:</strong> Aplikasi mobile untuk pasien mengakses informasi medis, jadwal dokter, dan layanan RS Trimatra.
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'profil' ? 'active' : ''}`}
          onClick={() => setActiveTab('profil')}
        >
          <User size={18} />
          Profil Pasien
        </button>
        <button
          className={`tab ${activeTab === 'riwayat' ? 'active' : ''}`}
          onClick={() => setActiveTab('riwayat')}
        >
          <History size={18} />
          Riwayat Pasien
        </button>
        <button
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          <DollarSign size={18} />
          Tagihan Pasien
        </button>
        <button
          className={`tab ${activeTab === 'jadwalDokter' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwalDokter')}
        >
          <Calendar size={18} />
          Jadwal Dokter
        </button>
        <button
          className={`tab ${activeTab === 'pendaftaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendaftaran')}
        >
          <FileText size={18} />
          Pendaftaran Online
        </button>
        <button
          className={`tab ${activeTab === 'kamar' ? 'active' : ''}`}
          onClick={() => setActiveTab('kamar')}
        >
          <Bed size={18} />
          Pemesanan Kamar
        </button>
        <button
          className={`tab ${activeTab === 'ambulans' ? 'active' : ''}`}
          onClick={() => setActiveTab('ambulans')}
        >
          <Ambulance size={18} />
          Pemesanan Ambulans
        </button>
        <button
          className={`tab ${activeTab === 'rs' ? 'active' : ''}`}
          onClick={() => setActiveTab('rs')}
        >
          <Building2 size={18} />
          Profile Rumah Sakit
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'profil' && (
          <div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Profil Pasien</h2>
                <div>
                  <button className="btn btn-secondary" style={{ marginRight: '10px' }}>
                    <QrCode size={18} />
                    QR Code
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
                    <label>No. Rekam Medis</label>
                    <input type="text" value="RM-001234" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Status Akun</label>
                    <span className="badge badge-success">Aktif</span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" value="Letkol Budi Santoso" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Pangkat/NRP</label>
                    <input type="text" value="Letkol / 531234" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Tempat, Tanggal Lahir</label>
                    <input type="text" value="Jakarta, 15 Mei 1980" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <input type="text" value="Laki-laki" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>No. Telepon</label>
                    <input type="text" value="08123456789" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" value="budi.santoso@tni.mil.id" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Alamat</label>
                  <textarea rows="3" readOnly>Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta</textarea>
                </div>

                <div className="grid grid-cols-2">
                  <div className="form-group">
                    <label>Golongan Darah</label>
                    <input type="text" value="A+" readOnly />
                  </div>
                  <div className="form-group">
                    <label>Alergi</label>
                    <input type="text" value="Tidak ada" readOnly />
                  </div>
                </div>

                <div className="form-group">
                  <label>Kontak Darurat</label>
                  <input type="text" value="Ibu Ani Santoso - 08198765432" readOnly />
                </div>

                <div className="alert alert-warning">
                  <strong>Notifikasi Mobile App:</strong> Aktif - Pasien akan menerima notifikasi push untuk jadwal kontrol, hasil lab, dan tagihan.
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary">Update Data</button>
                  <button className="btn btn-secondary">Reset Password</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'riwayat' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Riwayat Kunjungan Pasien</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <FileText size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Kunjungan</h3>
                    <p className="text-2xl">24</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon secondary">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kunjungan Tahun Ini</h3>
                    <p className="text-2xl">8</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <History size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Terakhir Kontrol</h3>
                    <p className="text-sm">15 Mei 2024</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kontrol Berikutnya</h3>
                    <p className="text-sm">20 Mei 2024</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>No. Registrasi</th>
                      <th>Jenis Layanan</th>
                      <th>Poliklinik/Ruangan</th>
                      <th>Dokter</th>
                      <th>Diagnosa</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>15 Mei 2024</td>
                      <td>RJ-20240515-001</td>
                      <td>Rawat Jalan</td>
                      <td>Poli Jantung</td>
                      <td>dr. Eko Prasetyo, Sp.JP</td>
                      <td>Hipertensi</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat Detail</button>
                      </td>
                    </tr>
                    <tr>
                      <td>10 Mei 2024</td>
                      <td>LAB-20240510-012</td>
                      <td>Laboratorium</td>
                      <td>-</td>
                      <td>-</td>
                      <td>Pemeriksaan Rutin</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat Hasil</button>
                      </td>
                    </tr>
                    <tr>
                      <td>5 Mei 2024</td>
                      <td>RJ-20240505-023</td>
                      <td>Rawat Jalan</td>
                      <td>Poli Umum</td>
                      <td>dr. Ahmad Fadli, Sp.PD</td>
                      <td>Diabetes Mellitus</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Lihat Detail</button>
                      </td>
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
              <h2 className="card-title">Tagihan Pasien</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-3">
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <DollarSign size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Tagihan Belum Dibayar</h3>
                    <p className="text-2xl">Rp 350.000</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <DollarSign size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Tagihan Lunas</h3>
                    <p className="text-2xl">Rp 2.450.000</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Tagihan Bulan Ini</h3>
                    <p className="text-2xl">Rp 450.000</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Invoice</th>
                      <th>Tanggal</th>
                      <th>Jenis Layanan</th>
                      <th>Total Tagihan</th>
                      <th>Dibayar</th>
                      <th>Sisa</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>INV-20240515-001</td>
                      <td>15 Mei 2024</td>
                      <td>Rawat Jalan</td>
                      <td>Rp 150.000</td>
                      <td>Rp 0</td>
                      <td>Rp 150.000</td>
                      <td><span className="badge badge-warning">Belum Dibayar</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Bayar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>INV-20240510-012</td>
                      <td>10 Mei 2024</td>
                      <td>Laboratorium</td>
                      <td>Rp 200.000</td>
                      <td>Rp 0</td>
                      <td>Rp 200.000</td>
                      <td><span className="badge badge-warning">Belum Dibayar</span></td>
                      <td>
                        <button className="btn btn-sm btn-primary">Bayar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>INV-20240505-023</td>
                      <td>5 Mei 2024</td>
                      <td>Rawat Jalan</td>
                      <td>Rp 100.000</td>
                      <td>Rp 100.000</td>
                      <td>Rp 0</td>
                      <td><span className="badge badge-success">Lunas</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Download</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info" style={{ marginTop: '20px' }}>
                <strong>Metode Pembayaran:</strong> Transfer Bank, Virtual Account, E-Wallet, atau Tunai di Kasir
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jadwalDokter' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Jadwal Dokter</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Filter Poliklinik</label>
                <select>
                  <option>Semua Poliklinik</option>
                  <option>Poli Umum</option>
                  <option>Poli Jantung</option>
                  <option>Poli Anak</option>
                  <option>Poli Gigi</option>
                  <option>Poli Mata</option>
                </select>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nama Dokter</th>
                      <th>Spesialisasi</th>
                      <th>Poliklinik</th>
                      <th>Hari</th>
                      <th>Jam Praktek</th>
                      <th>Kuota</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dr. Eko Prasetyo, Sp.JP</td>
                      <td>Spesialis Jantung</td>
                      <td>Poli Jantung</td>
                      <td>Senin, Rabu, Jumat</td>
                      <td>08:00 - 12:00</td>
                      <td>15 pasien</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                    <tr>
                      <td>dr. Ahmad Fadli, Sp.PD</td>
                      <td>Spesialis Penyakit Dalam</td>
                      <td>Poli Umum</td>
                      <td>Selasa, Kamis</td>
                      <td>13:00 - 16:00</td>
                      <td>20 pasien</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                    <tr>
                      <td>dr. Siti Rahayu, Sp.A</td>
                      <td>Spesialis Anak</td>
                      <td>Poli Anak</td>
                      <td>Senin - Sabtu</td>
                      <td>08:00 - 14:00</td>
                      <td>25 pasien</td>
                      <td><span className="badge badge-warning">Hampir Penuh</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pendaftaran' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pendaftaran Online</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <strong>Pendaftaran Online:</strong> Pasien dapat mendaftar rawat jalan melalui aplikasi mobile tanpa perlu datang ke rumah sakit.
              </div>

              <div className="form-group">
                <label>No. Rekam Medis</label>
                <input type="text" value="RM-001234" readOnly />
              </div>

              <div className="form-group">
                <label>Nama Pasien</label>
                <input type="text" value="Letkol Budi Santoso" readOnly />
              </div>

              <div className="form-group">
                <label>Jenis Layanan</label>
                <select>
                  <option>Rawat Jalan</option>
                  <option>Pemeriksaan Laboratorium</option>
                  <option>Pemeriksaan Radiologi</option>
                </select>
              </div>

              <div className="form-group">
                <label>Poliklinik</label>
                <select>
                  <option>Pilih Poliklinik</option>
                  <option>Poli Umum</option>
                  <option>Poli Jantung</option>
                  <option>Poli Anak</option>
                  <option>Poli Gigi</option>
                  <option>Poli Mata</option>
                </select>
              </div>

              <div className="form-group">
                <label>Dokter</label>
                <select>
                  <option>Pilih Dokter</option>
                  <option>dr. Eko Prasetyo, Sp.JP</option>
                  <option>dr. Ahmad Fadli, Sp.PD</option>
                  <option>dr. Siti Rahayu, Sp.A</option>
                </select>
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label>Tanggal Kunjungan</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Jam Kunjungan</label>
                  <select>
                    <option>Pilih Jam</option>
                    <option>08:00 - 09:00</option>
                    <option>09:00 - 10:00</option>
                    <option>10:00 - 11:00</option>
                    <option>11:00 - 12:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Cara Bayar</label>
                <select>
                  <option>TNI (Gratis)</option>
                  <option>BPJS</option>
                  <option>Asuransi Swasta</option>
                  <option>Umum</option>
                </select>
              </div>

              <div className="form-group">
                <label>Keluhan</label>
                <textarea rows="3" placeholder="Deskripsikan keluhan Anda (opsional)"></textarea>
              </div>

              <div className="form-actions">
                <button className="btn btn-primary">Daftar Sekarang</button>
                <button className="btn btn-secondary">Reset</button>
              </div>

              <div className="table-container" style={{ marginTop: '30px' }}>
                <h3>Riwayat Pendaftaran Online</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Pendaftaran</th>
                      <th>Tanggal</th>
                      <th>Poliklinik</th>
                      <th>Dokter</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ONLINE-20240515-001</td>
                      <td>15 Mei 2024 08:00</td>
                      <td>Poli Jantung</td>
                      <td>dr. Eko Prasetyo, Sp.JP</td>
                      <td><span className="badge badge-success">Terkonfirmasi</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Lihat</button>
                      </td>
                    </tr>
                    <tr>
                      <td>ONLINE-20240510-012</td>
                      <td>10 Mei 2024 09:00</td>
                      <td>Poli Umum</td>
                      <td>dr. Ahmad Fadli, Sp.PD</td>
                      <td><span className="badge badge-info">Selesai</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Lihat</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kamar' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pemesanan Kamar</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-warning">
                <strong>Perhatian:</strong> Pemesanan kamar harus dikonfirmasi oleh petugas admisi. Ketersediaan kamar dapat berubah sewaktu-waktu.
              </div>

              <div className="form-group">
                <label>Kelas Kamar</label>
                <select>
                  <option>Pilih Kelas</option>
                  <option>VIP</option>
                  <option>Kelas I</option>
                  <option>Kelas II</option>
                  <option>Kelas III</option>
                </select>
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label>Tanggal Masuk</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Estimasi Lama Rawat</label>
                  <input type="number" placeholder="Jumlah hari" />
                </div>
              </div>

              <div className="form-group">
                <label>Dokter yang Merawat</label>
                <select>
                  <option>Pilih Dokter</option>
                  <option>dr. Eko Prasetyo, Sp.JP</option>
                  <option>dr. Ahmad Fadli, Sp.PD</option>
                  <option>dr. Budi Santoso, Sp.B</option>
                </select>
              </div>

              <div className="form-group">
                <label>Keterangan/Alasan Rawat Inap</label>
                <textarea rows="3" placeholder="Jelaskan alasan rawat inap"></textarea>
              </div>

              <div className="form-actions">
                <button className="btn btn-primary">Pesan Kamar</button>
                <button className="btn btn-secondary">Reset</button>
              </div>

              <div className="table-container" style={{ marginTop: '30px' }}>
                <h3>Riwayat Pemesanan Kamar</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Booking</th>
                      <th>Tanggal Booking</th>
                      <th>Kelas</th>
                      <th>Tanggal Masuk</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BOOK-20240515-001</td>
                      <td>15 Mei 2024 08:00</td>
                      <td>VIP</td>
                      <td>16 Mei 2024</td>
                      <td><span className="badge badge-success">Dikonfirmasi</span></td>
                      <td>
                        <button className="btn btn-sm btn-secondary">Lihat</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ambulans' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Pemesanan Ambulans</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-danger">
                <strong>Emergency:</strong> Untuk keadaan darurat, hubungi 118 atau 021-XXXXXX
              </div>

              <div className="form-group">
                <label>Jenis Layanan</label>
                <select>
                  <option>Pilih Jenis</option>
                  <option>Emergency (Darurat)</option>
                  <option>Transfer Pasien Antar RS</option>
                  <option>Antar Jemput Pasien</option>
                  <option>Medical Escort</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nama Pasien</label>
                <input type="text" value="Letkol Budi Santoso" readOnly />
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label>Tanggal</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Jam</label>
                  <input type="time" />
                </div>
              </div>

              <div className="form-group">
                <label>Lokasi Penjemputan</label>
                <textarea rows="2" placeholder="Alamat lengkap lokasi penjemputan"></textarea>
              </div>

              <div className="form-group">
                <label>Tujuan</label>
                <textarea rows="2" placeholder="Alamat lengkap tujuan"></textarea>
              </div>

              <div className="form-group">
                <label>No. Telepon yang Dapat Dihubungi</label>
                <input type="tel" placeholder="08xxxxxxxxxx" />
              </div>

              <div className="form-group">
                <label>Kondisi Pasien</label>
                <select>
                  <option>Stabil - Tidak memerlukan peralatan khusus</option>
                  <option>Kritis - Memerlukan peralatan lengkap</option>
                  <option>Jenazah</option>
                </select>
              </div>

              <div className="form-group">
                <label>Keterangan Tambahan</label>
                <textarea rows="3" placeholder="Informasi tambahan yang perlu diketahui"></textarea>
              </div>

              <div className="form-actions">
                <button className="btn btn-primary">Pesan Ambulans</button>
                <button className="btn btn-secondary">Reset</button>
              </div>

              <div className="table-container" style={{ marginTop: '30px' }}>
                <h3>Riwayat Pemesanan Ambulans</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Booking</th>
                      <th>Tanggal</th>
                      <th>Jenis Layanan</th>
                      <th>Lokasi</th>
                      <th>Tujuan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AMB-20240510-001</td>
                      <td>10 Mei 2024 14:00</td>
                      <td>Antar Jemput</td>
                      <td>Jl. Sudirman No. 45</td>
                      <td>RS Trimatra</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rs' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Profile Rumah Sakit Trimatra</h2>
            </div>
            <div className="card-body">
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Building2 size={80} style={{ color: '#003d82', marginBottom: '20px' }} />
                <h2>RS TRIMATRA</h2>
                <p style={{ fontSize: '16px', color: '#666' }}>Rumah Sakit Angkatan Bersenjata</p>
              </div>

              <div className="form-group">
                <label><strong>Alamat</strong></label>
                <p>Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta 10110</p>
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label><strong>Telepon</strong></label>
                  <p>021-12345678</p>
                </div>
                <div className="form-group">
                  <label><strong>Emergency</strong></label>
                  <p>118 / 021-87654321</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label><strong>Email</strong></label>
                  <p>info@rstrimatra.mil.id</p>
                </div>
                <div className="form-group">
                  <label><strong>Website</strong></label>
                  <p>www.rstrimatra.mil.id</p>
                </div>
              </div>

              <div className="form-group">
                <label><strong>Jam Operasional</strong></label>
                <p>Senin - Minggu: 24 Jam (IGD)</p>
                <p>Poliklinik: Senin - Sabtu, 08:00 - 16:00</p>
              </div>

              <div className="form-group">
                <label><strong>Fasilitas</strong></label>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Instalasi Gawat Darurat (IGD) 24 jam</li>
                  <li>14 Poliklinik Spesialis</li>
                  <li>Ruang Rawat Inap VIP, Kelas I, II, III</li>
                  <li>Intensive Care Unit (ICU) & High Care Unit (HCU)</li>
                  <li>Kamar Operasi & Bedah Sentral</li>
                  <li>Laboratorium Lengkap</li>
                  <li>Radiologi (Rontgen, CT Scan, MRI, USG)</li>
                  <li>Apotek 24 jam</li>
                  <li>Ambulans & Medical Escort</li>
                  <li>Aerospace Medicine (Khusus TNI AU)</li>
                </ul>
              </div>

              <div className="form-group">
                <label><strong>Layanan Unggulan</strong></label>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Pelayanan Kesehatan TNI (AD, AL, AU) dan Keluarga</li>
                  <li>Kerja Sama dengan BPJS Kesehatan</li>
                  <li>Pelayanan Umum (Non TNI)</li>
                  <li>Medical Check Up</li>
                  <li>Telemedicine</li>
                  <li>Home Care</li>
                </ul>
              </div>

              <div className="alert alert-info">
                <strong>Download Aplikasi Mobile:</strong> Akses layanan RS Trimatra lebih mudah melalui aplikasi mobile. Tersedia di Google Play Store dan Apple App Store.
              </div>

              <div className="form-actions">
                <button className="btn btn-primary">
                  <Download size={18} />
                  Download App Android
                </button>
                <button className="btn btn-primary">
                  <Download size={18} />
                  Download App iOS
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePatients;
