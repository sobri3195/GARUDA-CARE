import React, { useState } from 'react';
import { Users, Activity, FileText, TrendingUp } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const TNIAL = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab ${activeTab === 'personel' ? 'active' : ''}`}
          onClick={() => setActiveTab('personel')}
        >
          Data Personel
        </button>
        <button 
          className={`tab ${activeTab === 'kesehatan' ? 'active' : ''}`}
          onClick={() => setActiveTab('kesehatan')}
        >
          Kesehatan
        </button>
        <button 
          className={`tab ${activeTab === 'kesiapan' ? 'active' : ''}`}
          onClick={() => setActiveTab('kesiapan')}
        >
          Kesiapan Medis
        </button>
      </div>

      {activeTab === 'overview' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Personel TNI AL</h3>
                <p>1,850</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Fit for Duty</h3>
                <p>1,745 (94.3%)</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Medical Check</h3>
                <p>62</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Under Treatment</h3>
                <p>43</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Statistik Kesehatan TNI AL</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Data kesehatan dan kesiapan medis personel TNI Angkatan Laut
              </div>
              
              <div className="grid grid-cols-2" style={{ marginTop: '20px' }}>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Status Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Sehat dan Fit for Duty: <strong>1,745 (94.3%)</strong></li>
                    <li>Limited Duty: <strong>48 (2.6%)</strong></li>
                    <li>Under Treatment: <strong>43 (2.3%)</strong></li>
                    <li>Medical Leave: <strong>14 (0.8%)</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Pemeriksaan Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Medical Check Up Valid: <strong>1,688 (91.2%)</strong></li>
                    <li>Medical Check Up Expired: <strong>100 (5.4%)</strong></li>
                    <li>Pending Jadwal: <strong>62 (3.4%)</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'personel' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Data Personel TNI AL</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Personel TNI AL" tableId="tni-al-personel">
              <table className="table" id="tni-al-personel">
                <thead>
                  <tr>
                    <th>NRP</th>
                    <th>Nama</th>
                    <th>Pangkat</th>
                    <th>Satuan</th>
                    <th>Jabatan</th>
                    <th>Status Kesehatan</th>
                    <th>Medical Check</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>65010001</td>
                    <td>Kolonel Laut (P) Hadi Sulistyo</td>
                    <td>Kolonel</td>
                    <td>Lantamal V</td>
                    <td>Danlantamal</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010002</td>
                    <td>Letkol Laut (P) Agung Nugroho</td>
                    <td>Letkol</td>
                    <td>KRI Surabaya-591</td>
                    <td>Komandan KRI</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010003</td>
                    <td>Mayor Laut (T) Indra Wijaya</td>
                    <td>Mayor</td>
                    <td>KRI Surabaya-591</td>
                    <td>Wakil Komandan</td>
                    <td><span className="badge badge-warning">Limited Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010004</td>
                    <td>Kapten Laut (E) Rudi Pramono</td>
                    <td>Kapten</td>
                    <td>KRI Surabaya-591</td>
                    <td>Kepala KKM</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-warning">Mendekati Expired</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010005</td>
                    <td>Lettu Laut (P) Budi Hartono</td>
                    <td>Lettu</td>
                    <td>KRI Surabaya-591</td>
                    <td>Perwira Navigasi</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010006</td>
                    <td>Serma Ahmad Yani</td>
                    <td>Serma</td>
                    <td>KRI Surabaya-591</td>
                    <td>Kelasi Mesin</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>65010007</td>
                    <td>Kelasi Dua Dwi Saputra</td>
                    <td>Kelasi Dua</td>
                    <td>KRI Surabaya-591</td>
                    <td>ABK</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-danger">Expired</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      )}

      {activeTab === 'kesehatan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Data Kesehatan Personel TNI AL</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Kesehatan TNI AL" tableId="tni-al-kesehatan">
              <table className="table" id="tni-al-kesehatan">
                <thead>
                  <tr>
                    <th>NRP</th>
                    <th>Nama</th>
                    <th>Golongan Darah</th>
                    <th>TB/BB</th>
                    <th>Tekanan Darah</th>
                    <th>Riwayat Penyakit</th>
                    <th>Tanggal Periksa</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>65010001</td>
                    <td>Kolonel Laut (P) Hadi Sulistyo</td>
                    <td>A+</td>
                    <td>170/72</td>
                    <td>125/80</td>
                    <td>-</td>
                    <td>18/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>65010002</td>
                    <td>Letkol Laut (P) Agung Nugroho</td>
                    <td>O+</td>
                    <td>168/68</td>
                    <td>120/80</td>
                    <td>-</td>
                    <td>22/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>65010003</td>
                    <td>Mayor Laut (T) Indra Wijaya</td>
                    <td>B+</td>
                    <td>172/76</td>
                    <td>130/85</td>
                    <td>Motion Sickness</td>
                    <td>20/12/2023</td>
                    <td><span className="badge badge-warning">Limited</span></td>
                  </tr>
                  <tr>
                    <td>65010006</td>
                    <td>Serma Ahmad Yani</td>
                    <td>AB+</td>
                    <td>165/70</td>
                    <td>120/80</td>
                    <td>Gastritis</td>
                    <td>12/01/2024</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                  </tr>
                  <tr>
                    <td>65010007</td>
                    <td>Kelasi Dua Dwi Saputra</td>
                    <td>O+</td>
                    <td>170/68</td>
                    <td>115/75</td>
                    <td>-</td>
                    <td>10/07/2023</td>
                    <td><span className="badge badge-danger">Perlu MCU</span></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      )}

      {activeTab === 'kesiapan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Kesiapan Medis per Satuan TNI AL</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Kesiapan Medis TNI AL" tableId="tni-al-kesiapan">
              <table className="table" id="tni-al-kesiapan">
                <thead>
                  <tr>
                    <th>Satuan</th>
                    <th>Total Personel</th>
                    <th>Fit for Duty</th>
                    <th>Limited Duty</th>
                    <th>Not Ready</th>
                    <th>Medical Check Valid</th>
                    <th>Kesiapan (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lantamal V</td>
                    <td>520</td>
                    <td>490</td>
                    <td>18</td>
                    <td>12</td>
                    <td>475</td>
                    <td><span className="badge badge-success">94.2%</span></td>
                  </tr>
                  <tr>
                    <td>KRI Surabaya-591</td>
                    <td>180</td>
                    <td>168</td>
                    <td>8</td>
                    <td>4</td>
                    <td>165</td>
                    <td><span className="badge badge-success">93.3%</span></td>
                  </tr>
                  <tr>
                    <td>KRI Makassar-590</td>
                    <td>185</td>
                    <td>172</td>
                    <td>9</td>
                    <td>4</td>
                    <td>168</td>
                    <td><span className="badge badge-success">93.0%</span></td>
                  </tr>
                  <tr>
                    <td>KRI Bung Tomo-357</td>
                    <td>145</td>
                    <td>135</td>
                    <td>6</td>
                    <td>4</td>
                    <td>132</td>
                    <td><span className="badge badge-success">93.1%</span></td>
                  </tr>
                  <tr>
                    <td>Satdik AAL</td>
                    <td>320</td>
                    <td>305</td>
                    <td>10</td>
                    <td>5</td>
                    <td>298</td>
                    <td><span className="badge badge-success">95.3%</span></td>
                  </tr>
                  <tr>
                    <td>Batalyon Armed AL</td>
                    <td>280</td>
                    <td>260</td>
                    <td>12</td>
                    <td>8</td>
                    <td>252</td>
                    <td><span className="badge badge-success">92.9%</span></td>
                  </tr>
                  <tr>
                    <td>Dislambair</td>
                    <td>220</td>
                    <td>215</td>
                    <td>3</td>
                    <td>2</td>
                    <td>198</td>
                    <td><span className="badge badge-success">97.7%</span></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      )}
    </div>
  );
};

export default TNIAL;
