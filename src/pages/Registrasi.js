import React, { useState } from 'react';
import { UserPlus, Search, QrCode, Calendar, ExternalLink, Clock, Users, CheckCircle } from 'lucide-react';

const Registrasi = () => {
  const [activeTab, setActiveTab] = useState('registrasi');
  const [jenisRegistrasi, setJenisRegistrasi] = useState('rawatjalan');
  const [formData, setFormData] = useState({
    nik: '',
    nrp: '',
    nama: '',
    pangkat: '',
    satuan: '',
    jenisKelamin: '',
    tanggalLahir: '',
    alamat: '',
    telepon: '',
    penjamin: '',
    poliklinik: '',
    dokter: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data registrasi berhasil disimpan!');
  };

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'registrasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('registrasi')}
        >
          Registrasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'antrean' ? 'active' : ''}`}
          onClick={() => setActiveTab('antrean')}
        >
          Manajemen Antrean
        </button>
        <button 
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          Jadwal Dokter
        </button>
        <button 
          className={`tab ${activeTab === 'rujukan' ? 'active' : ''}`}
          onClick={() => setActiveTab('rujukan')}
        >
          Rujukan
        </button>
      </div>

      {activeTab === 'registrasi' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Jenis Pendaftaran</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                  className={`btn ${jenisRegistrasi === 'rawatjalan' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('rawatjalan')}
                >
                  Rawat Jalan
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'rawatinap' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('rawatinap')}
                >
                  Rawat Inap
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'igd' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('igd')}
                >
                  Gawat Darurat (IGD)
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'penunjang' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('penunjang')}
                >
                  Penunjang (Lab/Radiologi)
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'bpjs' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('bpjs')}
                >
                  BPJS - SEP Otomatis
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                {jenisRegistrasi === 'rawatjalan' && 'Pendaftaran Rawat Jalan'}
                {jenisRegistrasi === 'rawatinap' && 'Pendaftaran Rawat Inap'}
                {jenisRegistrasi === 'igd' && 'Pendaftaran Gawat Darurat'}
                {jenisRegistrasi === 'penunjang' && 'Pendaftaran Penunjang'}
                {jenisRegistrasi === 'bpjs' && 'Pendaftaran BPJS dengan SEP Otomatis'}
              </h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px' }}>
                <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                  <Search size={16} />
                  Cari Pasien Lama (NIK/NRP)
                </button>
                <button className="btn btn-outline">
                  <QrCode size={16} />
                  Scan QR Code
                </button>
              </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">NIK</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="nik"
                    value={formData.nik}
                    onChange={handleInputChange}
                    placeholder="Masukkan NIK"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">NRP (Jika Prajurit TNI)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="nrp"
                    value={formData.nrp}
                    onChange={handleInputChange}
                    placeholder="Masukkan NRP"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Pangkat</label>
                  <select 
                    className="form-select" 
                    name="pangkat"
                    value={formData.pangkat}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Pangkat</option>
                    <option value="Marsekal">Marsekal</option>
                    <option value="Marsda">Marsda</option>
                    <option value="Marsma">Marsma</option>
                    <option value="Kolonel">Kolonel</option>
                    <option value="Letkol">Letkol</option>
                    <option value="Mayor">Mayor</option>
                    <option value="Kapten">Kapten</option>
                    <option value="Lettu">Lettu</option>
                    <option value="Letda">Letda</option>
                    <option value="Peltu">Peltu</option>
                    <option value="Pelda">Pelda</option>
                    <option value="Serka">Serka</option>
                    <option value="Serda">Serda</option>
                    <option value="Sertu">Sertu</option>
                    <option value="Kopka">Kopka</option>
                    <option value="Kopda">Kopda</option>
                    <option value="Koptu">Koptu</option>
                    <option value="PNS">PNS</option>
                    <option value="Keluarga">Keluarga</option>
                    <option value="Umum">Umum</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Satuan/Unit</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="satuan"
                    value={formData.satuan}
                    onChange={handleInputChange}
                    placeholder="Contoh: Lanud Halim Perdanakusuma"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Jenis Kelamin *</label>
                  <select 
                    className="form-select" 
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Tanggal Lahir *</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">No. Telepon *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Penjamin *</label>
                  <select 
                    className="form-select" 
                    name="penjamin"
                    value={formData.penjamin}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Penjamin</option>
                    <option value="TNI">TNI</option>
                    <option value="BPJS">BPJS Kesehatan</option>
                    <option value="Askes">Askes</option>
                    <option value="Asuransi">Asuransi Swasta</option>
                    <option value="Umum">Umum/Pribadi</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Poliklinik Tujuan *</label>
                  <select 
                    className="form-select" 
                    name="poliklinik"
                    value={formData.poliklinik}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Poliklinik</option>
                    <option value="umum">Poli Umum</option>
                    <option value="gigi">Poli Gigi</option>
                    <option value="mata">Poli Mata</option>
                    <option value="tht">Poli THT</option>
                    <option value="jantung">Poli Jantung</option>
                    <option value="paru">Poli Paru</option>
                    <option value="bedah">Poli Bedah</option>
                    <option value="obgyn">Poli Kandungan</option>
                    <option value="anak">Poli Anak</option>
                    <option value="aerospace">Aerospace Medicine</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Dokter</label>
                  <select 
                    className="form-select" 
                    name="dokter"
                    value={formData.dokter}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Dokter (Opsional)</option>
                    <option value="dr1">dr. Andi Wijaya, Sp.PD</option>
                    <option value="dr2">dr. Siti Nurhaliza, Sp.JP</option>
                    <option value="dr3">dr. Budi Santoso, Sp.B</option>
                    <option value="dr4">dr. Dewi Lestari, Sp.A</option>
                    <option value="dr5">dr. Ahmad Fauzi, Sp.OG</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Alamat Lengkap</label>
                <textarea 
                  className="form-textarea" 
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  placeholder="Masukkan alamat lengkap"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" className="btn btn-primary">
                  <UserPlus size={16} />
                  Daftar Pasien
                </button>
                <button type="button" className="btn btn-outline">
                  Reset
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'antrean' && (
        <div>
          <div className="tabs" style={{ marginBottom: '20px' }}>
            <button className="tab active">Antrean Pendaftaran</button>
            <button className="tab">Antrean Penunjang</button>
            <button className="tab">Antrean Kasir</button>
            <button className="tab">Antrean Apotek</button>
            <button className="tab">Kuota Dokter</button>
          </div>

          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon info">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Antrean Hari Ini</h3>
                <p>156</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Clock size={30} />
              </div>
              <div className="stat-content">
                <h3>Sedang Dilayani</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <CheckCircle size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai</h3>
                <p>91</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Calendar size={30} />
              </div>
              <div className="stat-content">
                <h3>No Show</h3>
                <p>12</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Status Antrean Pendaftaran Real-time</h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary btn-sm">Panggil Antrean Berikutnya</button>
                <button className="btn btn-outline btn-sm">Refresh</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Antrean</th>
                    <th>Nama Pasien</th>
                    <th>Jenis</th>
                    <th>Loket</th>
                    <th>Waktu Daftar</th>
                    <th>Estimasi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ fontSize: '1.2em' }}>A-012</strong></td>
                    <td>Mayor Budi Santoso</td>
                    <td>Rawat Jalan</td>
                    <td>Loket 1</td>
                    <td>08:30</td>
                    <td>5 menit</td>
                    <td><span className="badge badge-warning">Menunggu</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Panggil</button>
                    </td>
                  </tr>
                  <tr style={{ background: '#e8f4f8' }}>
                    <td><strong style={{ fontSize: '1.2em' }}>A-013</strong></td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td>Rawat Jalan</td>
                    <td>Loket 1</td>
                    <td>08:45</td>
                    <td>-</td>
                    <td><span className="badge badge-info">Dilayani</span></td>
                    <td>
                      <button className="btn btn-secondary btn-sm">Selesai</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong style={{ fontSize: '1.2em' }}>A-014</strong></td>
                    <td>Kolonel Siti Nurhaliza</td>
                    <td>BPJS</td>
                    <td>Loket 2</td>
                    <td>09:00</td>
                    <td>15 menit</td>
                    <td><span className="badge badge-warning">Menunggu</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Panggil</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong style={{ fontSize: '1.2em' }}>B-008</strong></td>
                    <td>Serda Hendra Wijaya</td>
                    <td>Rawat Inap</td>
                    <td>Loket 3</td>
                    <td>09:15</td>
                    <td>25 menit</td>
                    <td><span className="badge badge-warning">Menunggu</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Panggil</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'jadwal' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Jadwal Praktek Dokter</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Nama Dokter</th>
                  <th>Spesialisasi</th>
                  <th>Senin</th>
                  <th>Selasa</th>
                  <th>Rabu</th>
                  <th>Kamis</th>
                  <th>Jumat</th>
                  <th>Sabtu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Penyakit Dalam</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Jantung</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                </tr>
                <tr>
                  <td>dr. Budi Santoso, Sp.B</td>
                  <td>Bedah</td>
                  <td>14:00-17:00</td>
                  <td>14:00-17:00</td>
                  <td>-</td>
                  <td>14:00-17:00</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Dewi Lestari, Sp.A</td>
                  <td>Anak</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Ahmad Fauzi, Sp.OG</td>
                  <td>Kandungan</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'rujukan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Rujukan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                Rujukan Internal
              </button>
              <button className="btn btn-secondary">
                <ExternalLink size={16} />
                Rujukan Eksternal (BPJS)
              </button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Rujukan</th>
                  <th>Pasien</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RUJ-2024-001</td>
                  <td>Mayor Budi Santoso</td>
                  <td>Poli Umum</td>
                  <td>Poli Jantung</td>
                  <td>15/01/2024</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RUJ-2024-002</td>
                  <td>Kapten Ahmad Fauzi</td>
                  <td>IGD</td>
                  <td>Rawat Inap</td>
                  <td>16/01/2024</td>
                  <td><span className="badge badge-info">Proses</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RUJ-2024-003</td>
                  <td>Kolonel Siti Nurhaliza</td>
                  <td>RS TNI AU</td>
                  <td>RS Pusat (Eksternal)</td>
                  <td>17/01/2024</td>
                  <td><span className="badge badge-warning">Menunggu</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
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

export default Registrasi;
