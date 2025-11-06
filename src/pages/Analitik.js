import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Analitik = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Dashboard Analitik & Pelaporan</h2>
        </div>
        <div className="card-body">
          <div className="alert alert-info">
            <BarChart3 size={20} style={{ display: 'inline', marginRight: '10px' }} />
            Modul Analitik meliputi: Pelaporan wajib (SIRS, IFRS), Dashboard eksekutif, Data warehouse, Penelitian & etik
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <TrendingUp size={30} />
          </div>
          <div className="stat-content">
            <h3>Kunjungan Bulan Ini</h3>
            <p>5,432</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon secondary">
            <TrendingUp size={30} />
          </div>
          <div className="stat-content">
            <h3>Average LOS</h3>
            <p>4.2 hari</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">
            <TrendingUp size={30} />
          </div>
          <div className="stat-content">
            <h3>TOI (Turn Over Interval)</h3>
            <p>1.8 hari</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <TrendingUp size={30} />
          </div>
          <div className="stat-content">
            <h3>Pendapatan Bulan Ini</h3>
            <p>Rp 2.5M</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">10 Besar Penyakit (ICD-10)</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Kode ICD-10</th>
                <th>Diagnosa</th>
                <th>Jumlah Kasus</th>
                <th>Persentase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>I10</td>
                <td>Essential (primary) Hypertension</td>
                <td>342</td>
                <td>15.2%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>E11</td>
                <td>Type 2 Diabetes Mellitus</td>
                <td>287</td>
                <td>12.8%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>J06.9</td>
                <td>Acute upper respiratory infection, unspecified</td>
                <td>245</td>
                <td>10.9%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>M54.5</td>
                <td>Low back pain</td>
                <td>198</td>
                <td>8.8%</td>
              </tr>
              <tr>
                <td>5</td>
                <td>K29.9</td>
                <td>Gastritis, unspecified</td>
                <td>176</td>
                <td>7.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analitik;
