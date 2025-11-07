import React, { useState } from 'react';
import { Plane, Users, Activity, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import TableWithExport from '../components/TableWithExport';

const TNIAU = () => {
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
                <h3>Total Personel TNI AU</h3>
                <p>1,520</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Fit for Duty</h3>
                <p>1,435 (94.4%)</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Medical Check</h3>
                <p>52</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Under Treatment</h3>
                <p>33</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Statistik Kesehatan TNI AU</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Data kesehatan dan kesiapan medis personel TNI Angkatan Udara
              </div>
              
              <div className="grid grid-cols-2" style={{ marginTop: '20px' }}>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Status Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Sehat dan Fit for Duty: <strong>1,435 (94.4%)</strong></li>
                    <li>Limited Duty: <strong>42 (2.8%)</strong></li>
                    <li>Under Treatment: <strong>33 (2.2%)</strong></li>
                    <li>Medical Leave: <strong>10 (0.6%)</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Pemeriksaan Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Medical Check Up Valid: <strong>1,395 (91.8%)</strong></li>
                    <li>Medical Check Up Expired: <strong>73 (4.8%)</strong></li>
                    <li>Pending Jadwal: <strong>52 (3.4%)</strong></li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4 style={{ marginBottom: '15px', fontWeight: 'bold', color: '#003d82' }}>
                  <Plane size={24} style={{ display: 'inline', marginRight: '10px' }} />
                  Modul Khusus TNI AU
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                  <Link to="/tni-au/aerospace" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                    <Plane size={20} />
                    <span>Aerospace Medicine</span>
                  </Link>
                  <Link to="/tni-au/rikkes" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                    <Activity size={20} />
                    <span>Rikkes (Pemeriksaan Kesehatan)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'personel' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Data Personel TNI AU</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Personel TNI AU" tableId="tni-au-personel">
              <table className="table" id="tni-au-personel">
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
                    <td>531001</td>
                    <td>Kolonel Pnb Arif Budiman</td>
                    <td>Kolonel</td>
                    <td>Lanud Halim Perdanakusuma</td>
                    <td>Danlanud</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>531002</td>
                    <td>Letkol Pnb Hendra Gunawan</td>
                    <td>Letkol</td>
                    <td>Skadron Udara 1</td>
                    <td>Dansakud</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>531003</td>
                    <td>Mayor Pnb Budi Santoso</td>
                    <td>Mayor</td>
                    <td>Skadron Udara 1</td>
                    <td>Pilot F-16</td>
                    <td><span className="badge badge-warning">Limited Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>531004</td>
                    <td>Kapten Pnb Agus Prasetyo</td>
                    <td>Kapten</td>
                    <td>Skadron Udara 1</td>
                    <td>Pilot F-16</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-warning">Mendekati Expired</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>531005</td>
                    <td>Lettu Pnb Rudi Hartono</td>
                    <td>Lettu</td>
                    <td>Skadron Udara 2</td>
                    <td>Pilot Hawk</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>621006</td>
                    <td>Mayor Tek Siti Rahayu</td>
                    <td>Mayor</td>
                    <td>Skadron Teknik</td>
                    <td>Kadep Avionic</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>721007</td>
                    <td>Serka Dwi Cahyono</td>
                    <td>Serka</td>
                    <td>Skadron Teknik</td>
                    <td>Teknisi Pesawat</td>
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
            <h2 className="card-title">Data Kesehatan Personel TNI AU</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Kesehatan TNI AU" tableId="tni-au-kesehatan">
              <table className="table" id="tni-au-kesehatan">
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
                    <td>531001</td>
                    <td>Kolonel Pnb Arif Budiman</td>
                    <td>O+</td>
                    <td>172/74</td>
                    <td>120/80</td>
                    <td>-</td>
                    <td>20/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>531002</td>
                    <td>Letkol Pnb Hendra Gunawan</td>
                    <td>A+</td>
                    <td>168/70</td>
                    <td>125/82</td>
                    <td>-</td>
                    <td>18/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>531003</td>
                    <td>Mayor Pnb Budi Santoso</td>
                    <td>B+</td>
                    <td>170/72</td>
                    <td>130/85</td>
                    <td>Minor Vision Defect</td>
                    <td>22/12/2023</td>
                    <td><span className="badge badge-warning">Limited</span></td>
                  </tr>
                  <tr>
                    <td>621006</td>
                    <td>Mayor Tek Siti Rahayu</td>
                    <td>AB+</td>
                    <td>158/55</td>
                    <td>120/80</td>
                    <td>Vertigo</td>
                    <td>15/01/2024</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                  </tr>
                  <tr>
                    <td>721007</td>
                    <td>Serka Dwi Cahyono</td>
                    <td>O+</td>
                    <td>168/67</td>
                    <td>115/75</td>
                    <td>-</td>
                    <td>15/07/2023</td>
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
            <h2 className="card-title">Kesiapan Medis per Satuan TNI AU</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Kesiapan Medis TNI AU" tableId="tni-au-kesiapan">
              <table className="table" id="tni-au-kesiapan">
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
                    <td>Lanud Halim Perdanakusuma</td>
                    <td>420</td>
                    <td>395</td>
                    <td>15</td>
                    <td>10</td>
                    <td>385</td>
                    <td><span className="badge badge-success">94.0%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Udara 1</td>
                    <td>180</td>
                    <td>170</td>
                    <td>6</td>
                    <td>4</td>
                    <td>168</td>
                    <td><span className="badge badge-success">94.4%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Udara 2</td>
                    <td>175</td>
                    <td>165</td>
                    <td>7</td>
                    <td>3</td>
                    <td>162</td>
                    <td><span className="badge badge-success">94.3%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Udara 3</td>
                    <td>165</td>
                    <td>155</td>
                    <td>6</td>
                    <td>4</td>
                    <td>150</td>
                    <td><span className="badge badge-success">93.9%</span></td>
                  </tr>
                  <tr>
                    <td>Skadron Teknik</td>
                    <td>320</td>
                    <td>300</td>
                    <td>12</td>
                    <td>8</td>
                    <td>295</td>
                    <td><span className="badge badge-success">93.8%</span></td>
                  </tr>
                  <tr>
                    <td>Wing Udara 1</td>
                    <td>260</td>
                    <td>250</td>
                    <td>6</td>
                    <td>4</td>
                    <td>235</td>
                    <td><span className="badge badge-success">96.2%</span></td>
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

export default TNIAU;
