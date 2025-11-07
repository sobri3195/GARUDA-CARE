import React, { useState } from 'react';
import { Baby, Heart } from 'lucide-react';

const Persalinan = () => {
  const [activeTab, setActiveTab] = useState('abortus');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'abortus' ? 'active' : ''}`}
          onClick={() => setActiveTab('abortus')}
        >
          Abortus
        </button>
        <button 
          className={`tab ${activeTab === 'persalinan' ? 'active' : ''}`}
          onClick={() => setActiveTab('persalinan')}
        >
          Persalinan
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'perawatan' ? 'active' : ''}`}
          onClick={() => setActiveTab('perawatan')}
        >
          Perawatan Bayi
        </button>
      </div>

      {activeTab === 'abortus' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon warning">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Kasus Abortus Bulan Ini</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Abortus Spontan</h3>
                <p>5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Abortus Medis</h3>
                <p>2</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Dalam Perawatan</h3>
                <p>1</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Data Kasus Abortus</h2>
              <button className="btn btn-primary">+ Tambah Data</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Usia</th>
                    <th>Tanggal Masuk</th>
                    <th>Usia Kehamilan</th>
                    <th>Jenis Abortus</th>
                    <th>Tindakan</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-123456</td>
                    <td>Ny. Siti Aminah</td>
                    <td>28 tahun</td>
                    <td>15 Des 2024</td>
                    <td>8 minggu</td>
                    <td>Abortus Spontan</td>
                    <td>Kuretase</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-234567</td>
                    <td>Ny. Rina Wati</td>
                    <td>32 tahun</td>
                    <td>14 Des 2024</td>
                    <td>10 minggu</td>
                    <td>Abortus Inkompletus</td>
                    <td>Kuretase</td>
                    <td><span className="badge badge-warning">Dalam Perawatan</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-345678</td>
                    <td>Ny. Dewi Sartika</td>
                    <td>25 tahun</td>
                    <td>13 Des 2024</td>
                    <td>6 minggu</td>
                    <td>Abortus Medis (Indikasi)</td>
                    <td>Medikamentosa</td>
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

      {activeTab === 'persalinan' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Persalinan Bulan Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Persalinan Normal</h3>
                <p>28</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Sectio Caesarea</h3>
                <p>15</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Persalinan Dengan Tindakan</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Data Persalinan</h2>
              <button className="btn btn-primary">+ Tambah Data Persalinan</button>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input 
                  type="date" 
                  className="form-input"
                  placeholder="Tanggal Mulai"
                />
                <input 
                  type="date" 
                  className="form-input"
                  placeholder="Tanggal Akhir"
                />
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Jenis Persalinan</option>
                  <option value="normal">Normal</option>
                  <option value="sc">Sectio Caesarea</option>
                  <option value="vacum">Vacum</option>
                  <option value="forceps">Forceps</option>
                </select>
                <button className="btn btn-primary">Filter</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Ibu</th>
                    <th>Usia</th>
                    <th>Tanggal Persalinan</th>
                    <th>Usia Kehamilan</th>
                    <th>Jenis Persalinan</th>
                    <th>Jenis Kelamin Bayi</th>
                    <th>BB Bayi (gram)</th>
                    <th>APGAR Score</th>
                    <th>Status Ibu</th>
                    <th>Status Bayi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-111222</td>
                    <td>Ny. Sarah Wijaya</td>
                    <td>29 tahun</td>
                    <td>15 Des 2024 08:30</td>
                    <td>39 minggu</td>
                    <td>Normal</td>
                    <td>Laki-laki</td>
                    <td>3200</td>
                    <td>8/9</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-222333</td>
                    <td>Ny. Kartika Sari</td>
                    <td>33 tahun</td>
                    <td>14 Des 2024 22:15</td>
                    <td>38 minggu</td>
                    <td>Sectio Caesarea</td>
                    <td>Perempuan</td>
                    <td>2900</td>
                    <td>9/9</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-333444</td>
                    <td>Ny. Ani Lestari</td>
                    <td>26 tahun</td>
                    <td>14 Des 2024 14:20</td>
                    <td>40 minggu</td>
                    <td>Normal dengan Episiotomi</td>
                    <td>Laki-laki</td>
                    <td>3500</td>
                    <td>8/9</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td><span className="badge badge-success">Sehat</span></td>
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

      {activeTab === 'pemeriksaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemeriksaan Pasien Persalinan</h2>
            <button className="btn btn-primary">+ Tambah Pemeriksaan</button>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari No. RM atau Nama Pasien..."
                style={{ maxWidth: '400px' }}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Waktu</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Usia Kehamilan</th>
                  <th>Tekanan Darah</th>
                  <th>Nadi</th>
                  <th>DJJ</th>
                  <th>Pembukaan</th>
                  <th>His</th>
                  <th>Pemeriksa</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024 06:00</td>
                  <td>RM-111222</td>
                  <td>Ny. Sarah Wijaya</td>
                  <td>39 minggu</td>
                  <td>120/80 mmHg</td>
                  <td>82 x/mnt</td>
                  <td>140 x/mnt</td>
                  <td>4 cm</td>
                  <td>3x/10 menit</td>
                  <td>Bidan Siti</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024 07:30</td>
                  <td>RM-111222</td>
                  <td>Ny. Sarah Wijaya</td>
                  <td>39 minggu</td>
                  <td>125/82 mmHg</td>
                  <td>85 x/mnt</td>
                  <td>142 x/mnt</td>
                  <td>8 cm</td>
                  <td>4x/10 menit</td>
                  <td>Bidan Siti</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>14 Des 2024 20:00</td>
                  <td>RM-222333</td>
                  <td>Ny. Kartika Sari</td>
                  <td>38 minggu</td>
                  <td>140/90 mmHg</td>
                  <td>92 x/mnt</td>
                  <td>138 x/mnt</td>
                  <td>3 cm (Stagnan)</td>
                  <td>2x/10 menit</td>
                  <td>dr. Amalia, Sp.OG</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'perawatan' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Bayi Dalam Perawatan</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Rawat Gabung</h3>
                <p>10</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>Perinatologi</h3>
                <p>2</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Baby size={30} />
              </div>
              <div className="stat-content">
                <h3>NICU</h3>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Data Perawatan Bayi</h2>
              <button className="btn btn-primary">+ Tambah Data</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM Bayi</th>
                    <th>Nama Bayi</th>
                    <th>Nama Ibu</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>BB Lahir (gram)</th>
                    <th>PB (cm)</th>
                    <th>BB Sekarang (gram)</th>
                    <th>Ruang Perawatan</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-B-001</td>
                    <td>By. Ny. Sarah</td>
                    <td>Ny. Sarah Wijaya</td>
                    <td>15 Des 2024</td>
                    <td>Laki-laki</td>
                    <td>3200</td>
                    <td>50</td>
                    <td>3150</td>
                    <td>Rawat Gabung - VIP A</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-B-002</td>
                    <td>By. Ny. Kartika</td>
                    <td>Ny. Kartika Sari</td>
                    <td>14 Des 2024</td>
                    <td>Perempuan</td>
                    <td>2900</td>
                    <td>48</td>
                    <td>2850</td>
                    <td>Rawat Gabung - Kelas 1</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-B-003</td>
                    <td>By. Ny. Ani</td>
                    <td>Ny. Ani Lestari</td>
                    <td>14 Des 2024</td>
                    <td>Laki-laki</td>
                    <td>3500</td>
                    <td>52</td>
                    <td>3450</td>
                    <td>Rawat Gabung - Kelas 2</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-B-004</td>
                    <td>By. Ny. Lina</td>
                    <td>Ny. Lina Kusuma</td>
                    <td>13 Des 2024</td>
                    <td>Perempuan</td>
                    <td>2100</td>
                    <td>45</td>
                    <td>2050</td>
                    <td>Perinatologi</td>
                    <td><span className="badge badge-warning">BBLR - Observasi</span></td>
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

export default Persalinan;
