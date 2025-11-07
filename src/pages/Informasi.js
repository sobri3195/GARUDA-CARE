import React, { useState } from 'react';
import { Users, Stethoscope, Bed, Ambulance, DollarSign, Clock, TestTube, Activity, Scissors, RefreshCw, Search } from 'lucide-react';

const Informasi = () => {
  const [activeTab, setActiveTab] = useState('antrianPoliklinik');

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'antrianPoliklinik' ? 'active' : ''}`}
          onClick={() => setActiveTab('antrianPoliklinik')}
        >
          <Clock size={18} />
          Antrian Poliklinik
        </button>
        <button
          className={`tab ${activeTab === 'rawatJalan' ? 'active' : ''}`}
          onClick={() => setActiveTab('rawatJalan')}
        >
          <Stethoscope size={18} />
          Rawat Jalan
        </button>
        <button
          className={`tab ${activeTab === 'rawatInap' ? 'active' : ''}`}
          onClick={() => setActiveTab('rawatInap')}
        >
          <Bed size={18} />
          Rawat Inap
        </button>
        <button
          className={`tab ${activeTab === 'igd' ? 'active' : ''}`}
          onClick={() => setActiveTab('igd')}
        >
          <Ambulance size={18} />
          IGD
        </button>
        <button
          className={`tab ${activeTab === 'tarifTindakan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tarifTindakan')}
        >
          <DollarSign size={18} />
          Tarif & Tindakan
        </button>
        <button
          className={`tab ${activeTab === 'ketersediaanKamar' ? 'active' : ''}`}
          onClick={() => setActiveTab('ketersediaanKamar')}
        >
          <Bed size={18} />
          Ketersediaan Kamar
        </button>
        <button
          className={`tab ${activeTab === 'laboratorium' ? 'active' : ''}`}
          onClick={() => setActiveTab('laboratorium')}
        >
          <TestTube size={18} />
          Laboratorium
        </button>
        <button
          className={`tab ${activeTab === 'radiologi' ? 'active' : ''}`}
          onClick={() => setActiveTab('radiologi')}
        >
          <Activity size={18} />
          Radiologi
        </button>
        <button
          className={`tab ${activeTab === 'bedahSentral' ? 'active' : ''}`}
          onClick={() => setActiveTab('bedahSentral')}
        >
          <Scissors size={18} />
          Bedah Sentral
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'antrianPoliklinik' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Antrian Poliklinik</h2>
              <button className="btn btn-primary">
                <RefreshCw size={18} />
                Refresh
              </button>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Poli Umum</h3>
                    <p className="text-2xl">12</p>
                    <small>Antrian saat ini</small>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon secondary">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Poli Gigi</h3>
                    <p className="text-2xl">8</p>
                    <small>Antrian saat ini</small>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Poli Anak</h3>
                    <p className="text-2xl">15</p>
                    <small>Antrian saat ini</small>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Users size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Poli Jantung</h3>
                    <p className="text-2xl">6</p>
                    <small>Antrian saat ini</small>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Poliklinik</th>
                      <th>Antrian Saat Ini</th>
                      <th>Sedang Dilayani</th>
                      <th>Waktu Tunggu Estimasi</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Poli Umum</td>
                      <td><span className="badge badge-primary">A012</span></td>
                      <td>A010</td>
                      <td>15 menit</td>
                      <td><span className="badge badge-success">Aktif</span></td>
                    </tr>
                    <tr>
                      <td>Poli Gigi</td>
                      <td><span className="badge badge-primary">B008</span></td>
                      <td>B007</td>
                      <td>10 menit</td>
                      <td><span className="badge badge-success">Aktif</span></td>
                    </tr>
                    <tr>
                      <td>Poli Anak</td>
                      <td><span className="badge badge-primary">C015</span></td>
                      <td>C014</td>
                      <td>20 menit</td>
                      <td><span className="badge badge-success">Aktif</span></td>
                    </tr>
                    <tr>
                      <td>Poli Jantung</td>
                      <td><span className="badge badge-primary">D006</span></td>
                      <td>D005</td>
                      <td>12 menit</td>
                      <td><span className="badge badge-success">Aktif</span></td>
                    </tr>
                    <tr>
                      <td>Poli Mata</td>
                      <td><span className="badge badge-primary">E004</span></td>
                      <td>E003</td>
                      <td>8 menit</td>
                      <td><span className="badge badge-success">Aktif</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rawatJalan' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Rawat Jalan</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Cari Pasien</label>
                <div className="input-group">
                  <input type="text" placeholder="No. RM atau Nama Pasien" />
                  <button className="btn btn-primary">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Poliklinik</th>
                      <th>Dokter</th>
                      <th>Tanggal Kunjungan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Letkol / 531234</td>
                      <td>Poli Umum</td>
                      <td>dr. Ahmad Fadli, Sp.PD</td>
                      <td>15 Mei 2024 08:30</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>RM-001245</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>Mayor / 621245</td>
                      <td>Poli Anak</td>
                      <td>dr. Siti Rahayu, Sp.A</td>
                      <td>15 Mei 2024 09:00</td>
                      <td><span className="badge badge-warning">Dalam Pemeriksaan</span></td>
                    </tr>
                    <tr>
                      <td>RM-001267</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>Kapten / 721356</td>
                      <td>Poli Jantung</td>
                      <td>dr. Eko Prasetyo, Sp.JP</td>
                      <td>15 Mei 2024 10:15</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rawatInap' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Rawat Inap</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Pasien</h3>
                    <p className="text-2xl">45</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kamar Tersedia</h3>
                    <p className="text-2xl">12</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kamar Terisi</h3>
                    <p className="text-2xl">45</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>BOR</h3>
                    <p className="text-2xl">78%</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Ruangan</th>
                      <th>Kelas</th>
                      <th>Tanggal Masuk</th>
                      <th>Lama Rawat</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Letkol / 531234</td>
                      <td>VIP A - 201</td>
                      <td>VIP</td>
                      <td>12 Mei 2024</td>
                      <td>3 hari</td>
                      <td><span className="badge badge-success">Stabil</span></td>
                    </tr>
                    <tr>
                      <td>RM-001235</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>Mayor / 621245</td>
                      <td>ICU - 102</td>
                      <td>ICU</td>
                      <td>14 Mei 2024</td>
                      <td>1 hari</td>
                      <td><span className="badge badge-warning">Monitoring</span></td>
                    </tr>
                    <tr>
                      <td>RM-001236</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>Kapten / 721356</td>
                      <td>Kelas I - 305</td>
                      <td>Kelas I</td>
                      <td>13 Mei 2024</td>
                      <td>2 hari</td>
                      <td><span className="badge badge-success">Stabil</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'igd' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi IGD</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon danger">
                    <Ambulance size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pasien IGD</h3>
                    <p className="text-2xl">8</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Menunggu</h3>
                    <p className="text-2xl">3</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Dalam Tindakan</h3>
                    <p className="text-2xl">5</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Bed Tersedia</h3>
                    <p className="text-2xl">4</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Registrasi</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Triase</th>
                      <th>Keluhan</th>
                      <th>Waktu Kedatangan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IGD-20240515-001</td>
                      <td>Mayor Agus Salim</td>
                      <td>Mayor / 541234</td>
                      <td><span className="badge badge-danger">Merah - Emergency</span></td>
                      <td>Nyeri dada akut</td>
                      <td>15 Mei 2024 07:15</td>
                      <td><span className="badge badge-warning">Dalam Tindakan</span></td>
                    </tr>
                    <tr>
                      <td>IGD-20240515-002</td>
                      <td>Kapten Dewi Lestari</td>
                      <td>Kapten / 631245</td>
                      <td><span className="badge badge-warning">Kuning - Urgent</span></td>
                      <td>Fraktur tangan</td>
                      <td>15 Mei 2024 08:30</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                    </tr>
                    <tr>
                      <td>IGD-20240515-003</td>
                      <td>Serda Ahmad Yani</td>
                      <td>Serda / 721356</td>
                      <td><span className="badge badge-success">Hijau - Non Urgent</span></td>
                      <td>Demam ringan</td>
                      <td>15 Mei 2024 09:00</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tarifTindakan' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Tarif dan Tindakan</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Cari Tindakan atau Tarif</label>
                <div className="input-group">
                  <input type="text" placeholder="Nama tindakan atau kode" />
                  <button className="btn btn-primary">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Nama Tindakan</th>
                      <th>Kategori</th>
                      <th>Tarif TNI</th>
                      <th>Tarif BPJS</th>
                      <th>Tarif Umum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TND-001</td>
                      <td>Konsultasi Dokter Umum</td>
                      <td>Konsultasi</td>
                      <td>Rp 0</td>
                      <td>Rp 0</td>
                      <td>Rp 50.000</td>
                    </tr>
                    <tr>
                      <td>TND-002</td>
                      <td>Konsultasi Dokter Spesialis</td>
                      <td>Konsultasi</td>
                      <td>Rp 0</td>
                      <td>Rp 0</td>
                      <td>Rp 150.000</td>
                    </tr>
                    <tr>
                      <td>TND-101</td>
                      <td>Rontgen Thorax</td>
                      <td>Radiologi</td>
                      <td>Rp 50.000</td>
                      <td>Rp 75.000</td>
                      <td>Rp 150.000</td>
                    </tr>
                    <tr>
                      <td>TND-201</td>
                      <td>Pemeriksaan Darah Lengkap</td>
                      <td>Laboratorium</td>
                      <td>Rp 30.000</td>
                      <td>Rp 50.000</td>
                      <td>Rp 75.000</td>
                    </tr>
                    <tr>
                      <td>TND-301</td>
                      <td>Rawat Inap VIP (per hari)</td>
                      <td>Rawat Inap</td>
                      <td>Rp 200.000</td>
                      <td>-</td>
                      <td>Rp 500.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ketersediaanKamar' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Ketersediaan Kamar</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-3">
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kamar Kosong</h3>
                    <p className="text-2xl">12</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Kamar Terisi</h3>
                    <p className="text-2xl">45</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Bed size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Kamar</h3>
                    <p className="text-2xl">57</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Kelas</th>
                      <th>Ruangan</th>
                      <th>Total Bed</th>
                      <th>Bed Terisi</th>
                      <th>Bed Tersedia</th>
                      <th>BOR</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VIP</td>
                      <td>VIP A (Lt. 2)</td>
                      <td>10</td>
                      <td>8</td>
                      <td>2</td>
                      <td>80%</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                    <tr>
                      <td>Kelas I</td>
                      <td>Kelas I (Lt. 3)</td>
                      <td>15</td>
                      <td>12</td>
                      <td>3</td>
                      <td>80%</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                    <tr>
                      <td>Kelas II</td>
                      <td>Kelas II (Lt. 4)</td>
                      <td>20</td>
                      <td>18</td>
                      <td>2</td>
                      <td>90%</td>
                      <td><span className="badge badge-warning">Hampir Penuh</span></td>
                    </tr>
                    <tr>
                      <td>ICU</td>
                      <td>ICU (Lt. 1)</td>
                      <td>8</td>
                      <td>5</td>
                      <td>3</td>
                      <td>62.5%</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                    <tr>
                      <td>HCU</td>
                      <td>HCU (Lt. 1)</td>
                      <td>4</td>
                      <td>2</td>
                      <td>2</td>
                      <td>50%</td>
                      <td><span className="badge badge-success">Tersedia</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'laboratorium' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Laboratorium</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <TestTube size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pemeriksaan Hari Ini</h3>
                    <p className="text-2xl">45</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Menunggu</h3>
                    <p className="text-2xl">12</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Dalam Proses</h3>
                    <p className="text-2xl">8</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <TestTube size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Selesai</h3>
                    <p className="text-2xl">25</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Lab</th>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Jenis Pemeriksaan</th>
                      <th>Waktu Ambil Sampel</th>
                      <th>Estimasi Selesai</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LAB-20240515-001</td>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Darah Lengkap</td>
                      <td>15 Mei 2024 08:00</td>
                      <td>15 Mei 2024 10:00</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>LAB-20240515-002</td>
                      <td>RM-001245</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>Kimia Darah</td>
                      <td>15 Mei 2024 09:00</td>
                      <td>15 Mei 2024 12:00</td>
                      <td><span className="badge badge-warning">Dalam Proses</span></td>
                    </tr>
                    <tr>
                      <td>LAB-20240515-003</td>
                      <td>RM-001267</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>Urine Lengkap</td>
                      <td>15 Mei 2024 10:00</td>
                      <td>15 Mei 2024 11:00</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'radiologi' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Radiologi</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Pemeriksaan Hari Ini</h3>
                    <p className="text-2xl">28</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Antrian</h3>
                    <p className="text-2xl">5</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Dalam Pemeriksaan</h3>
                    <p className="text-2xl">3</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Selesai</h3>
                    <p className="text-2xl">20</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Radiologi</th>
                      <th>No. RM</th>
                      <th>Nama Pasien</th>
                      <th>Jenis Pemeriksaan</th>
                      <th>Waktu Daftar</th>
                      <th>Estimasi</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RAD-20240515-001</td>
                      <td>RM-001234</td>
                      <td>Letkol Budi Santoso</td>
                      <td>Rontgen Thorax</td>
                      <td>15 Mei 2024 08:00</td>
                      <td>15 Mei 2024 08:30</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>RAD-20240515-002</td>
                      <td>RM-001245</td>
                      <td>Mayor Siti Nurhaliza</td>
                      <td>CT Scan Kepala</td>
                      <td>15 Mei 2024 09:00</td>
                      <td>15 Mei 2024 10:00</td>
                      <td><span className="badge badge-warning">Dalam Pemeriksaan</span></td>
                    </tr>
                    <tr>
                      <td>RAD-20240515-003</td>
                      <td>RM-001267</td>
                      <td>Kapten Ahmad Fauzi</td>
                      <td>USG Abdomen</td>
                      <td>15 Mei 2024 10:00</td>
                      <td>15 Mei 2024 10:30</td>
                      <td><span className="badge badge-info">Menunggu</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bedahSentral' && (
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Informasi Bedah Sentral</h2>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-4">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <Scissors size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Operasi Hari Ini</h3>
                    <p className="text-2xl">6</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Terjadwal</h3>
                    <p className="text-2xl">3</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Activity size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Sedang Operasi</h3>
                    <p className="text-2xl">2</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <Scissors size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>Selesai</h3>
                    <p className="text-2xl">1</p>
                  </div>
                </div>
              </div>

              <div className="table-container" style={{ marginTop: '20px' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No. Operasi</th>
                      <th>Nama Pasien</th>
                      <th>Pangkat/NRP</th>
                      <th>Jenis Operasi</th>
                      <th>Dokter Bedah</th>
                      <th>Ruang OK</th>
                      <th>Jadwal</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>OP-20240515-001</td>
                      <td>Kolonel Hendra Wijaya</td>
                      <td>Kolonel / 431128</td>
                      <td>Appendectomy</td>
                      <td>dr. Budi Santoso, Sp.B</td>
                      <td>OK-1</td>
                      <td>15 Mei 2024 08:00</td>
                      <td><span className="badge badge-success">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>OP-20240515-002</td>
                      <td>Mayor Agus Salim</td>
                      <td>Mayor / 541234</td>
                      <td>Laparotomi</td>
                      <td>dr. Eko Prasetyo, Sp.B</td>
                      <td>OK-2</td>
                      <td>15 Mei 2024 10:00</td>
                      <td><span className="badge badge-warning">Sedang Operasi</span></td>
                    </tr>
                    <tr>
                      <td>OP-20240515-003</td>
                      <td>Kapten Dewi Lestari</td>
                      <td>Kapten / 631245</td>
                      <td>Fraktur Reduksi</td>
                      <td>dr. Ahmad Fadli, Sp.OT</td>
                      <td>OK-1</td>
                      <td>15 Mei 2024 13:00</td>
                      <td><span className="badge badge-info">Terjadwal</span></td>
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

export default Informasi;
