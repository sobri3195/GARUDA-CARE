import React, { useState } from 'react';
import { Users, TrendingUp, Activity, Map, Heart, DollarSign, Package } from 'lucide-react';

const SistemInformasiEksekutif = () => {
  const [activeTab, setActiveTab] = useState('pasien');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'pasien' ? 'active' : ''}`}
          onClick={() => setActiveTab('pasien')}
        >
          Laporan Data Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pertambahan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pertambahan')}
        >
          Pertambahan Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'penyakit' ? 'active' : ''}`}
          onClick={() => setActiveTab('penyakit')}
        >
          Jenis Kasus Penyakit
        </button>
        <button 
          className={`tab ${activeTab === 'peta' ? 'active' : ''}`}
          onClick={() => setActiveTab('peta')}
        >
          Peta Penyebaran
        </button>
        <button 
          className={`tab ${activeTab === 'kelahiran' ? 'active' : ''}`}
          onClick={() => setActiveTab('kelahiran')}
        >
          Kelahiran & Kematian
        </button>
        <button 
          className={`tab ${activeTab === 'arus_kas' ? 'active' : ''}`}
          onClick={() => setActiveTab('arus_kas')}
        >
          Arus Kas
        </button>
        <button 
          className={`tab ${activeTab === 'neraca' ? 'active' : ''}`}
          onClick={() => setActiveTab('neraca')}
        >
          Neraca
        </button>
        <button 
          className={`tab ${activeTab === 'obat' ? 'active' : ''}`}
          onClick={() => setActiveTab('obat')}
        >
          Ketersediaan Obat & Alkes
        </button>
      </div>

      {activeTab === 'pasien' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pasien Terdaftar</h3>
                <p>12,458</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Pasien Aktif Bulan Ini</h3>
                <p>1,245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Rawat Inap Saat Ini</h3>
                <p>78</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Rawat Jalan Hari Ini</h3>
                <p>145</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Statistik Pasien Per Unit Layanan</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Unit Layanan</th>
                    <th>Hari Ini</th>
                    <th>Minggu Ini</th>
                    <th>Bulan Ini</th>
                    <th>Tahun Ini</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rawat Jalan</td>
                    <td>145</td>
                    <td>1,024</td>
                    <td>4,567</td>
                    <td>54,890</td>
                    <td><span className="badge badge-success">+12%</span></td>
                  </tr>
                  <tr>
                    <td>Rawat Inap</td>
                    <td>78</td>
                    <td>82</td>
                    <td>345</td>
                    <td>4,234</td>
                    <td><span className="badge badge-warning">-3%</span></td>
                  </tr>
                  <tr>
                    <td>IGD</td>
                    <td>23</td>
                    <td>167</td>
                    <td>689</td>
                    <td>8,456</td>
                    <td><span className="badge badge-success">+8%</span></td>
                  </tr>
                  <tr>
                    <td>Bedah Sentral</td>
                    <td>8</td>
                    <td>56</td>
                    <td>234</td>
                    <td>2,890</td>
                    <td><span className="badge badge-success">+5%</span></td>
                  </tr>
                  <tr>
                    <td>ICU</td>
                    <td>12</td>
                    <td>15</td>
                    <td>67</td>
                    <td>823</td>
                    <td><span className="badge badge-warning">-2%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pertambahan' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Filter Periode</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input type="date" className="form-input" />
                <input type="date" className="form-input" />
                <button className="btn btn-primary">Tampilkan</button>
                <button className="btn btn-success">Export</button>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Pertambahan Bulan Ini</h3>
                <p>+1,245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Rata-rata Per Hari</h3>
                <p>41</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Growth Rate</h3>
                <p>+12.5%</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Proyeksi Akhir Tahun</h3>
                <p>67,890</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Grafik Pertambahan Pasien - 2024</h2>
            </div>
            <div className="card-body">
              <div style={{ height: '400px', display: 'flex', alignItems: 'flex-end', gap: '10px', padding: '20px' }}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map((month, index) => (
                  <div key={month} style={{ flex: 1, textAlign: 'center' }}>
                    <div 
                      style={{ 
                        height: `${Math.random() * 300 + 50}px`, 
                        backgroundColor: '#003d82',
                        borderRadius: '5px 5px 0 0',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        paddingBottom: '10px'
                      }}
                    >
                      {Math.floor(Math.random() * 1000 + 500)}
                    </div>
                    <div>{month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'penyakit' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Top 20 Penyakit - Desember 2024</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ranking</th>
                    <th>Kode ICD-10</th>
                    <th>Nama Penyakit</th>
                    <th>Jumlah Kasus</th>
                    <th>Rawat Jalan</th>
                    <th>Rawat Inap</th>
                    <th>IGD</th>
                    <th>% dari Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>I10</td>
                    <td>Hipertensi Esensial</td>
                    <td>234</td>
                    <td>198</td>
                    <td>28</td>
                    <td>8</td>
                    <td>18.8%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>E11</td>
                    <td>Diabetes Mellitus Tipe 2</td>
                    <td>189</td>
                    <td>156</td>
                    <td>25</td>
                    <td>8</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>J00-J06</td>
                    <td>ISPA</td>
                    <td>145</td>
                    <td>132</td>
                    <td>8</td>
                    <td>5</td>
                    <td>11.6%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>M54</td>
                    <td>Nyeri Punggung</td>
                    <td>112</td>
                    <td>98</td>
                    <td>10</td>
                    <td>4</td>
                    <td>9.0%</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>K30</td>
                    <td>Dispepsia</td>
                    <td>98</td>
                    <td>87</td>
                    <td>7</td>
                    <td>4</td>
                    <td>7.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'peta' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Peta Penyebaran Pasien</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <select className="form-input" style={{ width: '200px' }}>
                  <option value="">Semua Wilayah</option>
                  <option value="jakarta">DKI Jakarta</option>
                  <option value="jabar">Jawa Barat</option>
                  <option value="jateng">Jawa Tengah</option>
                  <option value="jatim">Jawa Timur</option>
                </select>
                <button className="btn btn-success">Export</button>
              </div>
            </div>
            <div className="card-body">
              <div style={{ height: '500px', background: '#f0f0f0', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Map size={100} color="#003d82" />
                  <p style={{ marginTop: '20px', color: '#666' }}>Peta Indonesia dengan marker penyebaran pasien</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="card">
                  <div className="card-header">
                    <h3>Top 5 Provinsi</h3>
                  </div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Provinsi</th>
                          <th>Jumlah</th>
                          <th>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>DKI Jakarta</td>
                          <td>5,678</td>
                          <td>45.6%</td>
                        </tr>
                        <tr>
                          <td>Jawa Barat</td>
                          <td>3,456</td>
                          <td>27.7%</td>
                        </tr>
                        <tr>
                          <td>Banten</td>
                          <td>1,234</td>
                          <td>9.9%</td>
                        </tr>
                        <tr>
                          <td>Jawa Tengah</td>
                          <td>890</td>
                          <td>7.1%</td>
                        </tr>
                        <tr>
                          <td>Jawa Timur</td>
                          <td>678</td>
                          <td>5.4%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3>Top 5 Kota</h3>
                  </div>
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Kota</th>
                          <th>Jumlah</th>
                          <th>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jakarta Pusat</td>
                          <td>2,345</td>
                          <td>18.8%</td>
                        </tr>
                        <tr>
                          <td>Jakarta Selatan</td>
                          <td>1,890</td>
                          <td>15.2%</td>
                        </tr>
                        <tr>
                          <td>Bogor</td>
                          <td>1,234</td>
                          <td>9.9%</td>
                        </tr>
                        <tr>
                          <td>Depok</td>
                          <td>987</td>
                          <td>7.9%</td>
                        </tr>
                        <tr>
                          <td>Bekasi</td>
                          <td>876</td>
                          <td>7.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kelahiran' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Kelahiran Bulan Ini</h3>
                <p>45</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Heart size={30} />
              </div>
              <div className="stat-content">
                <h3>Kematian Bulan Ini</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Crude Birth Rate</h3>
                <p>15.2 per 1000</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Crude Death Rate</h3>
                <p>2.7 per 1000</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '20px' }}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Data Kelahiran</h2>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Laki-laki</th>
                      <th>Perempuan</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Desember 2024</td>
                      <td>25</td>
                      <td>20</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>November 2024</td>
                      <td>22</td>
                      <td>19</td>
                      <td>41</td>
                    </tr>
                    <tr>
                      <td>Oktober 2024</td>
                      <td>28</td>
                      <td>24</td>
                      <td>52</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Data Kematian</h2>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>&lt; 48 jam</th>
                      <th>&gt; 48 jam</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Desember 2024</td>
                      <td>3</td>
                      <td>5</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>November 2024</td>
                      <td>2</td>
                      <td>4</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Oktober 2024</td>
                      <td>4</td>
                      <td>7</td>
                      <td>11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'arus_kas' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon success">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Penerimaan Bulan Ini</h3>
                <p>Rp 5.6 M</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Pengeluaran Bulan Ini</h3>
                <p>Rp 4.2 M</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon primary">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Net Cash Flow</h3>
                <p>Rp 1.4 M</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon info">
                <DollarSign size={30} />
              </div>
              <div className="stat-content">
                <h3>Saldo Kas</h3>
                <p>Rp 8.9 M</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Laporan Arus Kas - 2024</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Bulan</th>
                    <th>Penerimaan (Rp)</th>
                    <th>Pengeluaran (Rp)</th>
                    <th>Net Cash Flow (Rp)</th>
                    <th>Saldo Akhir (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Desember 2024</td>
                    <td>5.600.000.000</td>
                    <td>4.200.000.000</td>
                    <td>1.400.000.000</td>
                    <td>8.900.000.000</td>
                  </tr>
                  <tr>
                    <td>November 2024</td>
                    <td>5.200.000.000</td>
                    <td>3.900.000.000</td>
                    <td>1.300.000.000</td>
                    <td>7.500.000.000</td>
                  </tr>
                  <tr>
                    <td>Oktober 2024</td>
                    <td>5.400.000.000</td>
                    <td>4.100.000.000</td>
                    <td>1.300.000.000</td>
                    <td>6.200.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'neraca' && (
        <div>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Neraca - Per 31 Desember 2024</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <h3 style={{ marginBottom: '15px' }}>AKTIVA</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Akun</th>
                        <th>Jumlah (Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Aktiva Lancar</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Kas dan Bank</td>
                        <td>8.900.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Piutang Usaha</td>
                        <td>2.500.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Persediaan</td>
                        <td>1.800.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Total Aktiva Lancar</td>
                        <td>13.200.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Aktiva Tetap</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Tanah</td>
                        <td>25.000.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Bangunan</td>
                        <td>35.000.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Peralatan Medis</td>
                        <td>15.000.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Total Aktiva Tetap</td>
                        <td>75.000.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold', backgroundColor: '#003d82', color: 'white' }}>
                        <td>TOTAL AKTIVA</td>
                        <td>88.200.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 style={{ marginBottom: '15px' }}>PASSIVA</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Akun</th>
                        <th>Jumlah (Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Kewajiban Jangka Pendek</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Hutang Usaha</td>
                        <td>1.500.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Hutang Jangka Pendek</td>
                        <td>800.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Total Kewajiban Jangka Pendek</td>
                        <td>2.300.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Ekuitas</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Modal</td>
                        <td>70.000.000.000</td>
                      </tr>
                      <tr>
                        <td>&nbsp;&nbsp;Laba Ditahan</td>
                        <td>15.900.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Total Ekuitas</td>
                        <td>85.900.000.000</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold', backgroundColor: '#003d82', color: 'white' }}>
                        <td>TOTAL PASSIVA</td>
                        <td>88.200.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'obat' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Item Obat</h3>
                <p>1,245</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Tersedia</h3>
                <p>1,198</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Minimum</h3>
                <p>23</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Package size={30} />
              </div>
              <div className="stat-content">
                <h3>Stok Habis</h3>
                <p>24</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Ketersediaan Obat & Alat Kesehatan</h2>
              <button className="btn btn-success">Export Excel</button>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Kategori</option>
                  <option value="obat">Obat-obatan</option>
                  <option value="alkes">Alat Kesehatan</option>
                  <option value="bmhp">BMHP</option>
                </select>
                <select className="form-input" style={{ maxWidth: '200px' }}>
                  <option value="">Semua Status</option>
                  <option value="tersedia">Tersedia</option>
                  <option value="minimum">Stok Minimum</option>
                  <option value="habis">Stok Habis</option>
                </select>
                <button className="btn btn-primary">Filter</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Item</th>
                    <th>Kategori</th>
                    <th>Stok Saat Ini</th>
                    <th>Satuan</th>
                    <th>Stok Minimum</th>
                    <th>Status</th>
                    <th>Nilai Persediaan (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OBT-001</td>
                    <td>Paracetamol 500mg</td>
                    <td>Obat</td>
                    <td>15,000</td>
                    <td>Tablet</td>
                    <td>5,000</td>
                    <td><span className="badge badge-success">Tersedia</span></td>
                    <td>7.500.000</td>
                  </tr>
                  <tr>
                    <td>OBT-002</td>
                    <td>Amoxicillin 500mg</td>
                    <td>Obat</td>
                    <td>3,500</td>
                    <td>Kapsul</td>
                    <td>3,000</td>
                    <td><span className="badge badge-warning">Stok Minimum</span></td>
                    <td>10.500.000</td>
                  </tr>
                  <tr>
                    <td>ALK-001</td>
                    <td>Masker N95</td>
                    <td>Alkes</td>
                    <td>0</td>
                    <td>Box</td>
                    <td>50</td>
                    <td><span className="badge badge-danger">Stok Habis</span></td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>BMHP-001</td>
                    <td>Infus Set</td>
                    <td>BMHP</td>
                    <td>2,500</td>
                    <td>Set</td>
                    <td>1,000</td>
                    <td><span className="badge badge-success">Tersedia</span></td>
                    <td>37.500.000</td>
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

export default SistemInformasiEksekutif;
