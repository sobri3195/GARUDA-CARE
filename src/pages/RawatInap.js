import React from 'react';
import { Bed, AlertCircle } from 'lucide-react';

const RawatInap = () => {
  return (
    <div>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Total Bed</h3>
            <p>120</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon secondary">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Terisi</h3>
            <p>94</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Tersedia</h3>
            <p>26</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <AlertCircle size={30} />
          </div>
          <div className="stat-content">
            <h3>BOR</h3>
            <p>78%</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Peta Bed Real-time</h2>
        </div>
        <div className="card-body">
          <div className="alert alert-info">
            <Bed size={20} style={{ display: 'inline', marginRight: '10px' }} />
            Manajemen bed meliputi: Peta bed real-time, BOR/LOS/TOI, cleaning/turnover workflow, isolasi tagging
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Ruangan:</h4>
            <div className="grid grid-cols-3">
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>VIP A</h5>
                <p>Kapasitas: 10 bed</p>
                <p>Terisi: 8 bed</p>
                <p>BOR: <span className="badge badge-warning">80%</span></p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Kelas I</h5>
                <p>Kapasitas: 30 bed</p>
                <p>Terisi: 24 bed</p>
                <p>BOR: <span className="badge badge-warning">80%</span></p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Kelas II</h5>
                <p>Kapasitas: 40 bed</p>
                <p>Terisi: 32 bed</p>
                <p>BOR: <span className="badge badge-warning">80%</span></p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>ICU</h5>
                <p>Kapasitas: 12 bed</p>
                <p>Terisi: 10 bed</p>
                <p>BOR: <span className="badge badge-danger">83%</span></p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>HCU</h5>
                <p>Kapasitas: 8 bed</p>
                <p>Terisi: 6 bed</p>
                <p>BOR: <span className="badge badge-success">75%</span></p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Isolasi</h5>
                <p>Kapasitas: 6 bed</p>
                <p>Terisi: 2 bed</p>
                <p>BOR: <span className="badge badge-success">33%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RawatInap;
