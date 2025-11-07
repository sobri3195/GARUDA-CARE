import React, { useState } from 'react';
import { Brain, TrendingUp, Activity, Package, Users, AlertTriangle, BarChart3 } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const PredictiveAnalytics = () => {
  const [activeTab, setActiveTab] = useState('patient');

  const patientPredictions = [
    { date: '08 Jan 2024', dayOfWeek: 'Senin', predictedVisits: 245, confidence: 92, trend: 'Naik 8%', clinic: 'Poli Penyakit Dalam' },
    { date: '09 Jan 2024', dayOfWeek: 'Selasa', predictedVisits: 198, confidence: 89, trend: 'Normal', clinic: 'Poli Kardiologi' },
    { date: '10 Jan 2024', dayOfWeek: 'Rabu', predictedVisits: 312, confidence: 95, trend: 'Naik 15%', clinic: 'IGD' },
    { date: '11 Jan 2024', dayOfWeek: 'Kamis', predictedVisits: 178, confidence: 87, trend: 'Turun 5%', clinic: 'Poli Anak' },
    { date: '12 Jan 2024', dayOfWeek: 'Jumat', predictedVisits: 289, confidence: 93, trend: 'Naik 12%', clinic: 'Bedah Sentral' }
  ];

  const stockPredictions = [
    { medication: 'Metformin 500mg', currentStock: 1250, predictedUsage: 450, daysRemaining: 8, status: 'Kritis', recommendation: 'Order segera 2000 tablet' },
    { medication: 'Amoxicillin 500mg', currentStock: 3400, predictedUsage: 280, daysRemaining: 12, status: 'Warning', recommendation: 'Order 1500 kapsul dalam 5 hari' },
    { medication: 'Paracetamol 500mg', currentStock: 8900, predictedUsage: 520, daysRemaining: 17, status: 'Aman', recommendation: 'Stok mencukupi' },
    { medication: 'Captopril 25mg', currentStock: 950, predictedUsage: 180, daysRemaining: 5, status: 'Kritis', recommendation: 'Order urgent 1500 tablet' },
    { medication: 'Omeprazole 20mg', currentStock: 2100, predictedUsage: 150, daysRemaining: 14, status: 'Aman', recommendation: 'Order rutin 1000 kapsul' }
  ];

  const borPredictions = [
    { date: '08 Jan 2024', predictedBOR: 78, actualBOR: null, beds: { total: 120, occupied: 94, available: 26 }, trend: 'Stable' },
    { date: '09 Jan 2024', predictedBOR: 82, actualBOR: null, beds: { total: 120, occupied: 98, available: 22 }, trend: 'Increasing' },
    { date: '10 Jan 2024', predictedBOR: 85, actualBOR: null, beds: { total: 120, occupied: 102, available: 18 }, trend: 'Increasing' },
    { date: '11 Jan 2024', predictedBOR: 79, actualBOR: null, beds: { total: 120, occupied: 95, available: 25 }, trend: 'Decreasing' },
    { date: '12 Jan 2024', predictedBOR: 76, actualBOR: null, beds: { total: 120, occupied: 91, available: 29 }, trend: 'Decreasing' }
  ];

  const diseaseOutbreaks = [
    { disease: 'Dengue Fever', currentCases: 23, predictedIncrease: 35, riskLevel: 'Tinggi', location: 'Jakarta Pusat', recommendation: 'Tingkatkan stok cairan infus dan trombosit' },
    { disease: 'Influenza', currentCases: 45, predictedIncrease: 15, riskLevel: 'Sedang', location: 'Multi-area', recommendation: 'Siapkan antiviral dan APD' },
    { disease: 'COVID-19', currentCases: 8, predictedIncrease: 5, riskLevel: 'Rendah', location: 'Sporadis', recommendation: 'Monitoring rutin' },
    { disease: 'Pneumonia', currentCases: 12, predictedIncrease: 10, riskLevel: 'Sedang', location: 'Jakarta Selatan', recommendation: 'Stok antibiotik broad-spectrum' }
  ];

  const statistics = [
    { label: 'Akurasi Prediksi', value: '91.5%', subtext: 'Rata-rata model', icon: Brain, color: '#003d82' },
    { label: 'Prediksi Real-time', value: '24/7', subtext: 'Continuous monitoring', icon: Activity, color: '#27ae60' },
    { label: 'Data Points', value: '2.4M', subtext: 'Historical records', icon: BarChart3, color: '#d4af37' },
    { label: 'Alert Aktif', value: '8', subtext: '3 urgent', icon: AlertTriangle, color: '#e74c3c' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Brain size={32} /> Predictive Analytics</h1>
        <p>Sistem analitik prediktif berbasis AI untuk forecasting dan optimasi operasional rumah sakit</p>
      </div>

      <div className="alert alert-info" style={{ marginBottom: '20px' }}>
        <Brain size={20} />
        <span>
          <strong>AI-Powered Insights:</strong> Model machine learning kami menganalisis data historis 3 tahun terakhir 
          untuk memberikan prediksi yang akurat dan actionable recommendations.
        </span>
      </div>

      <div className="stats-grid">
        {statistics.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div className="stat-info">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <div className="stat-value">{stat.value}</div>
                <div style={{ fontSize: '14px', color: '#666' }}>{stat.subtext}</div>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'patient' ? 'active' : ''}`}
          onClick={() => setActiveTab('patient')}
        >
          <Users size={18} />
          Prediksi Lonjakan Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'stock' ? 'active' : ''}`}
          onClick={() => setActiveTab('stock')}
        >
          <Package size={18} />
          Stok Obat Kritis
        </button>
        <button 
          className={`tab ${activeTab === 'bor' ? 'active' : ''}`}
          onClick={() => setActiveTab('bor')}
        >
          <Activity size={18} />
          BOR Harian
        </button>
        <button 
          className={`tab ${activeTab === 'outbreak' ? 'active' : ''}`}
          onClick={() => setActiveTab('outbreak')}
        >
          <AlertTriangle size={18} />
          Deteksi Outbreak
        </button>
      </div>

      {activeTab === 'patient' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Prediksi Kunjungan Pasien 7 Hari ke Depan</h3>
            
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #e0e0e0' }}>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>Tanggal</span>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>Prediksi Kunjungan</span>
              </div>
              {patientPredictions.map((pred, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ minWidth: '180px' }}>
                    <div style={{ fontWeight: '600' }}>{pred.date}</div>
                    <div style={{ fontSize: '13px', color: '#666' }}>{pred.dayOfWeek} • {pred.clinic}</div>
                  </div>
                  <div style={{ flex: 1, marginLeft: '20px', marginRight: '20px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '6px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        backgroundColor: pred.trend.includes('Naik') ? '#e74c3c' : pred.trend.includes('Turun') ? '#27ae60' : '#003d82',
                        width: `${(pred.predictedVisits / 350) * 100}%`,
                        transition: 'width 0.5s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '10px',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}
                    >
                      {pred.predictedVisits}
                    </div>
                  </div>
                  <div style={{ minWidth: '150px', textAlign: 'right' }}>
                    <span className={`badge ${
                      pred.trend.includes('Naik') ? 'badge-danger' :
                      pred.trend.includes('Turun') ? 'badge-success' :
                      'badge-info'
                    }`}>
                      {pred.trend}
                    </span>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                      Confidence: {pred.confidence}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="alert alert-warning">
              <AlertTriangle size={20} />
              <span>
                <strong>Alert:</strong> Prediksi lonjakan kunjungan 15% pada Rabu, 10 Jan 2024 di IGD. 
                Pertimbangkan tambahan staf dan resources.
              </span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Rekomendasi Aksi</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {[
                { title: 'Staffing', desc: 'Tambah 3 perawat IGD untuk shift Rabu', icon: Users, color: '#003d82' },
                { title: 'Resources', desc: 'Siapkan 15 bed tambahan di unit emergensi', icon: Activity, color: '#e74c3c' },
                { title: 'Supplies', desc: 'Stok supplies IGD ditingkatkan 25%', icon: Package, color: '#d4af37' }
              ].map((item, index) => (
                <div key={index} className="card" style={{ border: `2px solid ${item.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '8px', 
                      backgroundColor: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <item.icon size={24} color={item.color} />
                    </div>
                    <h4>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stock' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Prediksi Stok Obat Kritis</h3>
          <TableWithExport filename="prediksi_stok_obat">
            <table>
              <thead>
                <tr>
                  <th>Nama Obat</th>
                  <th style={{ textAlign: 'center' }}>Stok Saat Ini</th>
                  <th style={{ textAlign: 'center' }}>Prediksi Penggunaan/Hari</th>
                  <th style={{ textAlign: 'center' }}>Sisa Hari</th>
                  <th>Status</th>
                  <th>Rekomendasi</th>
                </tr>
              </thead>
              <tbody>
                {stockPredictions.map((stock, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '600' }}>{stock.medication}</td>
                    <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '16px' }}>
                      {stock.currentStock.toLocaleString()}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <TrendingUp size={16} style={{ display: 'inline', marginRight: '4px' }} />
                      {stock.predictedUsage}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ 
                        fontWeight: '700',
                        fontSize: '16px',
                        color: stock.daysRemaining <= 7 ? '#e74c3c' : stock.daysRemaining <= 10 ? '#f39c12' : '#27ae60'
                      }}>
                        {stock.daysRemaining} hari
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        stock.status === 'Kritis' ? 'badge-danger' :
                        stock.status === 'Warning' ? 'badge-warning' :
                        'badge-success'
                      }`}>
                        {stock.status}
                      </span>
                    </td>
                    <td style={{ fontSize: '14px' }}>{stock.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>

          <div className="alert alert-danger" style={{ marginTop: '20px' }}>
            <AlertTriangle size={20} />
            <span>
              <strong>Urgent Alert:</strong> 2 obat dengan stok kritis (≤8 hari). Order segera untuk menghindari stockout.
            </span>
          </div>
        </div>
      )}

      {activeTab === 'bor' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Prediksi Bed Occupancy Rate (BOR) Harian</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '30px' }}>
            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-value">78%</div>
                <div className="stat-label">BOR Hari Ini</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-value" style={{ color: '#e74c3c' }}>85%</div>
                <div className="stat-label">Prediksi Puncak (10 Jan)</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-info">
                <div className="stat-value" style={{ color: '#27ae60' }}>29</div>
                <div className="stat-label">Bed Tersedia (12 Jan)</div>
              </div>
            </div>
          </div>

          <TableWithExport filename="prediksi_bor">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th style={{ textAlign: 'center' }}>Prediksi BOR (%)</th>
                  <th style={{ textAlign: 'center' }}>Total Bed</th>
                  <th style={{ textAlign: 'center' }}>Terisi</th>
                  <th style={{ textAlign: 'center' }}>Tersedia</th>
                  <th>Trend</th>
                  <th>Visualisasi</th>
                </tr>
              </thead>
              <tbody>
                {borPredictions.map((bor, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '600' }}>{bor.date}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ 
                        fontWeight: '700',
                        fontSize: '18px',
                        color: bor.predictedBOR >= 85 ? '#e74c3c' : bor.predictedBOR >= 70 ? '#f39c12' : '#27ae60'
                      }}>
                        {bor.predictedBOR}%
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>{bor.beds.total}</td>
                    <td style={{ textAlign: 'center', fontWeight: '600' }}>{bor.beds.occupied}</td>
                    <td style={{ textAlign: 'center', fontWeight: '600', color: '#27ae60' }}>{bor.beds.available}</td>
                    <td>
                      <span className={`badge ${
                        bor.trend === 'Increasing' ? 'badge-warning' :
                        bor.trend === 'Decreasing' ? 'badge-success' :
                        'badge-info'
                      }`}>
                        {bor.trend}
                      </span>
                    </td>
                    <td>
                      <div style={{ height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            height: '100%', 
                            backgroundColor: bor.predictedBOR >= 85 ? '#e74c3c' : bor.predictedBOR >= 70 ? '#f39c12' : '#27ae60',
                            width: `${bor.predictedBOR}%`,
                            transition: 'width 0.5s'
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'outbreak' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Deteksi & Prediksi Outbreak Penyakit</h3>
          
          <div className="alert alert-warning" style={{ marginBottom: '20px' }}>
            <AlertTriangle size={20} />
            <span>
              <strong>High Risk Alert:</strong> Model mendeteksi potensi outbreak Dengue Fever dengan peningkatan 35% 
              dalam 7 hari ke depan berdasarkan pola musiman dan data epidemiologi.
            </span>
          </div>

          <TableWithExport filename="prediksi_outbreak">
            <table>
              <thead>
                <tr>
                  <th>Penyakit</th>
                  <th style={{ textAlign: 'center' }}>Kasus Saat Ini</th>
                  <th style={{ textAlign: 'center' }}>Prediksi Peningkatan (%)</th>
                  <th>Risk Level</th>
                  <th>Lokasi</th>
                  <th>Rekomendasi Aksi</th>
                </tr>
              </thead>
              <tbody>
                {diseaseOutbreaks.map((outbreak, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '600', fontSize: '15px' }}>{outbreak.disease}</td>
                    <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '18px' }}>
                      {outbreak.currentCases}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <TrendingUp size={18} color="#e74c3c" />
                        <span style={{ fontWeight: '700', fontSize: '16px', color: '#e74c3c' }}>
                          +{outbreak.predictedIncrease}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                        outbreak.riskLevel === 'Tinggi' ? 'badge-danger' :
                        outbreak.riskLevel === 'Sedang' ? 'badge-warning' :
                        'badge-success'
                      }`}>
                        {outbreak.riskLevel}
                      </span>
                    </td>
                    <td>{outbreak.location}</td>
                    <td style={{ fontSize: '14px' }}>{outbreak.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>

          <div className="card" style={{ marginTop: '20px', backgroundColor: '#f8f9fa' }}>
            <h4 style={{ marginBottom: '15px' }}>Rekomendasi Preparedness</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { action: 'Tingkatkan stok cairan infus dan trombosit untuk antisipasi DBD', priority: 'High' },
                { action: 'Aktifkan protokol isolasi untuk suspected cases', priority: 'High' },
                { action: 'Koordinasi dengan Dinas Kesehatan untuk program fogging', priority: 'Medium' },
                { action: 'Edukasi masyarakat tentang 3M Plus (Menguras, Menutup, Mengubur)', priority: 'Medium' }
              ].map((rec, index) => (
                <div key={index} style={{
                  padding: '12px 15px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${rec.priority === 'High' ? '#e74c3c' : '#f39c12'}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '14px' }}>{rec.action}</span>
                  <span className={`badge ${rec.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                    {rec.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictiveAnalytics;
