import React, { useState } from 'react';
import { Users, Activity, FileText, TrendingUp } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const TNIAD = () => {
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
                <h3>Total Personel TNI AD</h3>
                <p>2,450</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>Fit for Duty</h3>
                <p>2,315 (94.5%)</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <FileText size={30} />
              </div>
              <div className="stat-content">
                <h3>Pending Medical Check</h3>
                <p>85</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <TrendingUp size={30} />
              </div>
              <div className="stat-content">
                <h3>Under Treatment</h3>
                <p>50</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Statistik Kesehatan TNI AD</h2>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                Data kesehatan dan kesiapan medis personel TNI Angkatan Darat
              </div>
              
              <div className="grid grid-cols-2" style={{ marginTop: '20px' }}>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Status Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Sehat dan Fit for Duty: <strong>2,315 (94.5%)</strong></li>
                    <li>Limited Duty: <strong>60 (2.4%)</strong></li>
                    <li>Under Treatment: <strong>50 (2.0%)</strong></li>
                    <li>Medical Leave: <strong>25 (1.0%)</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Pemeriksaan Kesehatan</h4>
                  <ul style={{ lineHeight: '2' }}>
                    <li>Medical Check Up Valid: <strong>2,245 (91.6%)</strong></li>
                    <li>Medical Check Up Expired: <strong>120 (4.9%)</strong></li>
                    <li>Pending Jadwal: <strong>85 (3.5%)</strong></li>
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
            <h2 className="card-title">Data Personel TNI AD</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Personel TNI AD" tableId="tni-ad-personel">
              <table className="table" id="tni-ad-personel">
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
                    <td>21010001</td>
                    <td>Kolonel Inf. Bambang Sutrisno</td>
                    <td>Kolonel</td>
                    <td>Korem 051/Wijayakarta</td>
                    <td>Danrem</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010002</td>
                    <td>Letkol Inf. Agus Widodo</td>
                    <td>Letkol</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Danyonif</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010003</td>
                    <td>Mayor Inf. Eko Prasetyo</td>
                    <td>Mayor</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Danki</td>
                    <td><span className="badge badge-warning">Limited Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010004</td>
                    <td>Kapten Inf. Rudi Hartono</td>
                    <td>Kapten</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Danton</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-warning">Mendekati Expired</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010005</td>
                    <td>Lettu Inf. Ahmad Fauzi</td>
                    <td>Lettu</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Danton</td>
                    <td><span className="badge badge-success">Fit for Duty</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010006</td>
                    <td>Serka Budi Santoso</td>
                    <td>Serka</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Komandan Regu</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                    <td><span className="badge badge-success">Valid</span></td>
                    <td><button className="btn btn-outline btn-sm">Detail</button></td>
                  </tr>
                  <tr>
                    <td>21010007</td>
                    <td>Pratu Dwi Prasetyo</td>
                    <td>Pratu</td>
                    <td>Yonif 315/Garuda</td>
                    <td>Prajurit</td>
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
            <h2 className="card-title">Data Kesehatan Personel TNI AD</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Data Kesehatan TNI AD" tableId="tni-ad-kesehatan">
              <table className="table" id="tni-ad-kesehatan">
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
                    <td>21010001</td>
                    <td>Kolonel Inf. Bambang Sutrisno</td>
                    <td>O+</td>
                    <td>172/75</td>
                    <td>120/80</td>
                    <td>-</td>
                    <td>15/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>21010002</td>
                    <td>Letkol Inf. Agus Widodo</td>
                    <td>A+</td>
                    <td>168/70</td>
                    <td>125/85</td>
                    <td>Hipertensi Terkontrol</td>
                    <td>20/12/2023</td>
                    <td><span className="badge badge-success">Sehat</span></td>
                  </tr>
                  <tr>
                    <td>21010003</td>
                    <td>Mayor Inf. Eko Prasetyo</td>
                    <td>B+</td>
                    <td>165/68</td>
                    <td>130/85</td>
                    <td>Cedera Lutut</td>
                    <td>18/12/2023</td>
                    <td><span className="badge badge-warning">Limited</span></td>
                  </tr>
                  <tr>
                    <td>21010006</td>
                    <td>Serka Budi Santoso</td>
                    <td>AB+</td>
                    <td>170/73</td>
                    <td>120/80</td>
                    <td>Post-Op Appendectomy</td>
                    <td>10/01/2024</td>
                    <td><span className="badge badge-danger">Under Treatment</span></td>
                  </tr>
                  <tr>
                    <td>21010007</td>
                    <td>Pratu Dwi Prasetyo</td>
                    <td>O+</td>
                    <td>168/65</td>
                    <td>115/75</td>
                    <td>-</td>
                    <td>05/08/2023</td>
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
            <h2 className="card-title">Kesiapan Medis per Satuan TNI AD</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Kesiapan Medis TNI AD" tableId="tni-ad-kesiapan">
              <table className="table" id="tni-ad-kesiapan">
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
                    <td>Korem 051/Wijayakarta</td>
                    <td>650</td>
                    <td>615</td>
                    <td>20</td>
                    <td>15</td>
                    <td>600</td>
                    <td><span className="badge badge-success">94.6%</span></td>
                  </tr>
                  <tr>
                    <td>Yonif 315/Garuda</td>
                    <td>420</td>
                    <td>395</td>
                    <td>15</td>
                    <td>10</td>
                    <td>385</td>
                    <td><span className="badge badge-success">94.0%</span></td>
                  </tr>
                  <tr>
                    <td>Yonif 316/Nusantara</td>
                    <td>410</td>
                    <td>380</td>
                    <td>18</td>
                    <td>12</td>
                    <td>375</td>
                    <td><span className="badge badge-success">92.7%</span></td>
                  </tr>
                  <tr>
                    <td>Yon Arhanud 11/WBY</td>
                    <td>320</td>
                    <td>295</td>
                    <td>12</td>
                    <td>13</td>
                    <td>285</td>
                    <td><span className="badge badge-success">92.2%</span></td>
                  </tr>
                  <tr>
                    <td>Yon Armed 1/105 GS</td>
                    <td>280</td>
                    <td>265</td>
                    <td>8</td>
                    <td>7</td>
                    <td>260</td>
                    <td><span className="badge badge-success">94.6%</span></td>
                  </tr>
                  <tr>
                    <td>Yon Kav 1/Serbu Kavaleri</td>
                    <td>370</td>
                    <td>340</td>
                    <td>20</td>
                    <td>10</td>
                    <td>335</td>
                    <td><span className="badge badge-success">91.9%</span></td>
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

export default TNIAD;
