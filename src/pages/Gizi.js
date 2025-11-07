import React, { useState } from 'react';
import { Utensils, MessageSquare } from 'lucide-react';

const Gizi = () => {
  const [activeTab, setActiveTab] = useState('manajemen');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'manajemen' ? 'active' : ''}`}
          onClick={() => setActiveTab('manajemen')}
        >
          Manajemen Makanan
        </button>
        <button 
          className={`tab ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          Menu Diet
        </button>
        <button 
          className={`tab ${activeTab === 'konsultasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('konsultasi')}
        >
          Konsultasi Gizi
        </button>
      </div>

      {activeTab === 'manajemen' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Utensils size={30} />
              </div>
              <div className="stat-content">
                <h3>Pasien Diet Hari Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Utensils size={30} />
              </div>
              <div className="stat-content">
                <h3>Porsi Terlayani</h3>
                <p>135</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Utensils size={30} />
              </div>
              <div className="stat-content">
                <h3>Porsi Pending</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Utensils size={30} />
              </div>
              <div className="stat-content">
                <h3>Permintaan Khusus</h3>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Distribusi Makanan Pasien</h2>
              <button className="btn btn-primary">+ Tambah Distribusi</button>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Waktu Makan</option>
                  <option value="pagi">Pagi</option>
                  <option value="siang">Siang</option>
                  <option value="malam">Malam</option>
                  <option value="snack">Snack</option>
                </select>
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Ruangan</option>
                  <option value="vip">VIP</option>
                  <option value="kelas1">Kelas 1</option>
                  <option value="kelas2">Kelas 2</option>
                  <option value="kelas3">Kelas 3</option>
                </select>
                <button className="btn btn-primary">Filter</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Ruangan</th>
                    <th>Waktu Makan</th>
                    <th>Jenis Diet</th>
                    <th>Menu</th>
                    <th>Status</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-123456</td>
                    <td>Mayor Sudirman</td>
                    <td>VIP A - 201</td>
                    <td>Siang</td>
                    <td>Diet Rendah Garam</td>
                    <td>Nasi putih, Ayam panggang, Sayur bayam, Buah</td>
                    <td><span className="badge badge-success">Terlayani</span></td>
                    <td>Tidak ada keluhan</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-234567</td>
                    <td>Kolonel Hartono</td>
                    <td>VIP B - 202</td>
                    <td>Siang</td>
                    <td>Diet Diabetes</td>
                    <td>Nasi merah, Ikan kukus, Sayur bening, Buah</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>Pasien sedang pemeriksaan</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>RM-345678</td>
                    <td>Kapten Wijaya</td>
                    <td>Kelas 1 - 301</td>
                    <td>Siang</td>
                    <td>Diet Lunak</td>
                    <td>Bubur, Telur rebus, Sayur sop, Jus</td>
                    <td><span className="badge badge-success">Terlayani</span></td>
                    <td>-</td>
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

      {activeTab === 'menu' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Master Menu Diet</h2>
              <button className="btn btn-primary">+ Tambah Menu</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Diet</th>
                    <th>Deskripsi</th>
                    <th>Indikasi</th>
                    <th>Kalori (kkal)</th>
                    <th>Protein (g)</th>
                    <th>Karbohidrat (g)</th>
                    <th>Lemak (g)</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DIET-001</td>
                    <td>Diet Biasa</td>
                    <td>Menu makanan standar tanpa pembatasan</td>
                    <td>Pasien tanpa diet khusus</td>
                    <td>2000</td>
                    <td>60</td>
                    <td>280</td>
                    <td>67</td>
                    <td><span className="badge badge-success">Aktif</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>DIET-002</td>
                    <td>Diet Diabetes Mellitus</td>
                    <td>Diet rendah gula dan karbohidrat kompleks</td>
                    <td>Pasien DM</td>
                    <td>1800</td>
                    <td>70</td>
                    <td>200</td>
                    <td>60</td>
                    <td><span className="badge badge-success">Aktif</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>DIET-003</td>
                    <td>Diet Rendah Garam</td>
                    <td>Diet dengan pembatasan natrium</td>
                    <td>Hipertensi, Gagal Jantung</td>
                    <td>1900</td>
                    <td>65</td>
                    <td>270</td>
                    <td>63</td>
                    <td><span className="badge badge-success">Aktif</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>DIET-004</td>
                    <td>Diet Lunak</td>
                    <td>Makanan dengan tekstur lembut</td>
                    <td>Pasca operasi, Gangguan pencernaan</td>
                    <td>1600</td>
                    <td>55</td>
                    <td>230</td>
                    <td>53</td>
                    <td><span className="badge badge-success">Aktif</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>DIET-005</td>
                    <td>Diet Cair</td>
                    <td>Makanan berbentuk cair</td>
                    <td>Pre/post op, Disfagia</td>
                    <td>1200</td>
                    <td>40</td>
                    <td>180</td>
                    <td>40</td>
                    <td><span className="badge badge-success">Aktif</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Menu Harian</h2>
              <button className="btn btn-primary">+ Tambah Menu Harian</button>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input type="date" className="form-input" style={{ maxWidth: '200px' }} />
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Jenis Diet</option>
                  <option value="biasa">Diet Biasa</option>
                  <option value="dm">Diet DM</option>
                  <option value="rendah_garam">Diet Rendah Garam</option>
                  <option value="lunak">Diet Lunak</option>
                </select>
                <button className="btn btn-primary">Tampilkan</button>
              </div>
              <h3 style={{ marginBottom: '15px' }}>Menu Hari Ini - 15 Desember 2024</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div className="card" style={{ background: '#fff3cd' }}>
                  <div className="card-header">
                    <h3>Pagi (07:00)</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Diet Biasa:</strong></p>
                    <ul>
                      <li>Nasi putih</li>
                      <li>Telur dadar</li>
                      <li>Tempe goreng</li>
                      <li>Sayur sop</li>
                      <li>Buah pisang</li>
                    </ul>
                  </div>
                </div>
                <div className="card" style={{ background: '#d1ecf1' }}>
                  <div className="card-header">
                    <h3>Siang (12:00)</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Diet Biasa:</strong></p>
                    <ul>
                      <li>Nasi putih</li>
                      <li>Ayam goreng</li>
                      <li>Tahu bacem</li>
                      <li>Sayur asem</li>
                      <li>Buah jeruk</li>
                    </ul>
                  </div>
                </div>
                <div className="card" style={{ background: '#d4edda' }}>
                  <div className="card-header">
                    <h3>Malam (18:00)</h3>
                  </div>
                  <div className="card-body">
                    <p><strong>Diet Biasa:</strong></p>
                    <ul>
                      <li>Nasi putih</li>
                      <li>Ikan goreng</li>
                      <li>Tahu tempe</li>
                      <li>Sayur bayam</li>
                      <li>Buah pepaya</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'konsultasi' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <MessageSquare size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Konsultasi Bulan Ini</h3>
                <p>78</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <MessageSquare size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending</h3>
                <p>5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <MessageSquare size={30} />
              </div>
              <div className="stat-content">
                <h3>Selesai</h3>
                <p>73</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <MessageSquare size={30} />
              </div>
              <div className="stat-content">
                <h3>Hari Ini</h3>
                <p>8</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Konsultasi Gizi</h2>
              <button className="btn btn-primary">+ Tambah Konsultasi</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Diagnosa</th>
                    <th>BB (kg)</th>
                    <th>TB (cm)</th>
                    <th>IMT</th>
                    <th>Rekomendasi Diet</th>
                    <th>Ahli Gizi</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-123456</td>
                    <td>Mayor Sudirman</td>
                    <td>Hipertensi</td>
                    <td>75</td>
                    <td>170</td>
                    <td>25.95</td>
                    <td>Diet Rendah Garam, DASH Diet</td>
                    <td>Ns. Lina, S.Gz</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024</td>
                    <td>RM-234567</td>
                    <td>Kolonel Hartono</td>
                    <td>Diabetes Mellitus Tipe 2</td>
                    <td>85</td>
                    <td>168</td>
                    <td>30.12</td>
                    <td>Diet DM, Penurunan BB</td>
                    <td>Ns. Lina, S.Gz</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>14 Des 2024</td>
                    <td>RM-345678</td>
                    <td>Kapten Wijaya</td>
                    <td>Post Operasi Apendisitis</td>
                    <td>68</td>
                    <td>172</td>
                    <td>22.99</td>
                    <td>Diet Lunak, TKTP</td>
                    <td>Ns. Dewi, S.Gz</td>
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
    </div>
  );
};

export default Gizi;
