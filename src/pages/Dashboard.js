import React from 'react';
import { Users, Activity, Bed, Clock, AlertCircle, TrendingUp, TrendingDown, Heart, Stethoscope, TestTube } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';
import PatientFlowDiagram from '../components/PatientFlowDiagram';

const Dashboard = () => {
  const chartData = {
    kunjunganMingguan: [45, 52, 48, 61, 55, 67, 58],
    pendapatanBulanan: [450, 520, 480, 610, 550, 670, 580, 720, 650, 780, 820, 950],
    pasienPerPoliklinik: [
      { name: 'Poli Umum', value: 120, color: '#003d82' },
      { name: 'Poli Jantung', value: 45, color: '#d4af37' },
      { name: 'Poli Gigi', value: 38, color: '#0066cc' },
      { name: 'Aerospace Med', value: 25, color: '#ff9800' },
      { name: 'IGD', value: 18, color: '#f44336' }
    ],
    bedOccupancy: [
      { name: 'VIP', occupied: 8, total: 10 },
      { name: 'Kelas I', occupied: 25, total: 30 },
      { name: 'Kelas II', occupied: 40, total: 50 },
      { name: 'ICU', occupied: 6, total: 8 }
    ],
    tindakanMedis: [
      { name: 'Lab', count: 156 },
      { name: 'Radiologi', count: 89 },
      { name: 'Operasi', count: 12 },
      { name: 'Fisioterapi', count: 45 }
    ]
  };

  const maxKunjungan = Math.max(...chartData.kunjunganMingguan);
  const maxPendapatan = Math.max(...chartData.pendapatanBulanan);
  const totalPasienPoli = chartData.pasienPerPoliklinik.reduce((sum, item) => sum + item.value, 0);

  return (
    <div>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <Users size={30} />
          </div>
          <div className="stat-content">
            <h3>Pasien Hari Ini</h3>
            <p>243</p>
            <span style={{ fontSize: '12px', color: '#10b981' }}>
              <TrendingUp size={14} style={{ display: 'inline', marginRight: '4px' }} />
              +12% dari kemarin
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon secondary">
            <Activity size={30} />
          </div>
          <div className="stat-content">
            <h3>Pasien IGD</h3>
            <p>18</p>
            <span style={{ fontSize: '12px', color: '#ef4444' }}>
              <TrendingDown size={14} style={{ display: 'inline', marginRight: '4px' }} />
              -8% dari kemarin
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Bed Occupancy Rate</h3>
            <p>78%</p>
            <span style={{ fontSize: '12px', color: '#f59e0b' }}>
              79/101 bed terisi
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon info">
            <Clock size={30} />
          </div>
          <div className="stat-content">
            <h3>Antrean Aktif</h3>
            <p>42</p>
            <span style={{ fontSize: '12px', color: '#6b7280' }}>
              Estimasi 2-3 jam
            </span>
          </div>
        </div>
      </div>

      <PatientFlowDiagram />

      <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">📊 Grafik 1: Kunjungan Pasien Mingguan</h2>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '200px', gap: '8px' }}>
              {chartData.kunjunganMingguan.map((value, index) => {
                const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
                const height = (value / maxKunjungan) * 150;
                return (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '5px', color: '#003d82' }}>{value}</div>
                    <div style={{
                      width: '100%',
                      height: `${height}px`,
                      backgroundColor: index === 6 ? '#d4af37' : '#003d82',
                      borderRadius: '4px 4px 0 0',
                      transition: 'all 0.3s',
                      cursor: 'pointer'
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    ></div>
                    <div style={{ fontSize: '11px', marginTop: '5px', color: '#666' }}>{days[index]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">💰 Grafik 2: Pendapatan Bulanan (juta Rp)</h2>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '200px', gap: '4px' }}>
              {chartData.pendapatanBulanan.map((value, index) => {
                const height = (value / maxPendapatan) * 150;
                return (
                  <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '5px', color: '#10b981' }}>{value}</div>
                    <div style={{
                      width: '100%',
                      height: `${height}px`,
                      background: 'linear-gradient(to top, #10b981, #34d399)',
                      borderRadius: '4px 4px 0 0',
                      transition: 'all 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scaleY(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scaleY(1)'}
                    ></div>
                    <div style={{ fontSize: '9px', marginTop: '5px', color: '#666' }}>M{index + 1}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">🏥 Grafik 3: Distribusi Pasien per Poliklinik</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '10px 0' }}>
              {chartData.pasienPerPoliklinik.map((item, index) => {
                const percentage = (item.value / totalPasienPoli * 100).toFixed(1);
                return (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>{item.name}</span>
                      <span style={{ fontSize: '13px', color: '#666' }}>{item.value} ({percentage}%)</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: item.color,
                        transition: 'width 1s ease-in-out'
                      }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">🛏️ Grafik 4: Bed Occupancy Rate per Kelas</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '10px 0' }}>
              {chartData.bedOccupancy.map((item, index) => {
                const percentage = ((item.occupied / item.total) * 100).toFixed(0);
                const color = percentage >= 80 ? '#ef4444' : percentage >= 60 ? '#f59e0b' : '#10b981';
                return (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600' }}>{item.name}</span>
                      <span style={{ fontSize: '14px', color: color, fontWeight: 'bold' }}>{percentage}%</span>
                    </div>
                    <div style={{ position: 'relative', width: '100%', height: '24px', backgroundColor: '#f3f4f6', borderRadius: '12px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: color,
                        transition: 'width 1s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        {item.occupied}/{item.total} bed
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">⚕️ Grafik 5: Tindakan Medis Hari Ini</h2>
          </div>
          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '10px 0' }}>
              {chartData.tindakanMedis.map((item, index) => {
                const icons = [<TestTube size={32} />, <Stethoscope size={32} />, <Heart size={32} />, <Activity size={32} />];
                const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                return (
                  <div key={index} style={{
                    padding: '20px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = colors[index];
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{ color: colors[index], marginBottom: '10px' }}>{icons[index]}</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors[index] }}>{item.count}</div>
                    <div style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">📈 Grafik 6: Trend Kunjungan vs Target</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '20px' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Target Bulanan</span>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#003d82' }}>5,000 pasien</span>
                </div>
                <div style={{ width: '100%', height: '30px', backgroundColor: '#e5e7eb', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    width: '85%',
                    height: '100%',
                    background: 'linear-gradient(to right, #003d82, #0066cc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    transition: 'width 1.5s ease-in-out'
                  }}>
                    4,250 (85%)
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#003d82' }}>243</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Hari Ini</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#d4af37' }}>1,680</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Minggu Ini</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">💊 Grafik 7: Status Farmasi & Stok Obat</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '15px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    border: '10px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    position: 'relative'
                  }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>87%</div>
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>Stok Normal</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    border: '10px solid #f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>8%</div>
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>Stok Rendah</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    border: '10px solid #ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5%</div>
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>Stok Habis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">🎯 Grafik 8: Kepuasan Pasien (Survey)</h2>
          </div>
          <div className="card-body">
            <div style={{ padding: '15px 0' }}>
              <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#10b981' }}>4.7</div>
                <div style={{ fontSize: '14px', color: '#666' }}>dari 5.0 ⭐⭐⭐⭐⭐</div>
                <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>Berdasarkan 1,234 survey bulan ini</div>
              </div>
              
              <div style={{ padding: '0 20px' }}>
                {[5, 4, 3, 2, 1].map((star) => {
                  const values = [68, 22, 7, 2, 1];
                  const percentage = values[5 - star];
                  return (
                    <div key={star} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ width: '60px', fontSize: '13px' }}>{star} ⭐</div>
                      <div style={{ flex: 1, height: '12px', backgroundColor: '#e5e7eb', borderRadius: '6px', overflow: 'hidden', marginRight: '10px' }}>
                        <div style={{
                          width: `${percentage}%`,
                          height: '100%',
                          backgroundColor: star >= 4 ? '#10b981' : star === 3 ? '#f59e0b' : '#ef4444',
                          transition: 'width 1s ease-in-out'
                        }}></div>
                      </div>
                      <div style={{ width: '50px', fontSize: '13px', textAlign: 'right' }}>{percentage}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pasien Rawat Inap</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Pasien Rawat Inap" tableId="table-rawat-inap">
              <table className="table" id="table-rawat-inap">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Pangkat/NRP</th>
                    <th>Ruangan</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-001234</td>
                    <td>Letkol Budi Santoso</td>
                    <td>Letkol / 531234</td>
                    <td>VIP A - 201</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001235</td>
                    <td>Mayor Siti Nurhaliza</td>
                    <td>Mayor / 621245</td>
                    <td>ICU - 102</td>
                    <td><span className="badge badge-warning">Monitoring</span></td>
                  </tr>
                  <tr>
                    <td>RM-001236</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td>Kapten / 721356</td>
                    <td>Kelas I - 305</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001237</td>
                    <td>Serka Dewi Lestari</td>
                    <td>Serka / 821467</td>
                    <td>Kelas II - 408</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001238</td>
                    <td>Kolonel Hendra Wijaya</td>
                    <td>Kolonel / 431128</td>
                    <td>HCU - 203</td>
                    <td><span className="badge badge-danger">Kritis</span></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Antrean Poliklinik</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Antrean Poliklinik" tableId="table-antrean-poli">
              <table className="table" id="table-antrean-poli">
                <thead>
                  <tr>
                    <th>No. Antrean</th>
                    <th>Poliklinik</th>
                    <th>Pasien Menunggu</th>
                    <th>Estimasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-012</td>
                    <td>Poli Umum</td>
                    <td>8 pasien</td>
                    <td>45 menit</td>
                  </tr>
                  <tr>
                    <td>B-008</td>
                    <td>Poli Jantung</td>
                    <td>5 pasien</td>
                    <td>30 menit</td>
                  </tr>
                  <tr>
                    <td>C-015</td>
                    <td>Poli Gigi</td>
                    <td>12 pasien</td>
                    <td>60 menit</td>
                  </tr>
                  <tr>
                    <td>D-004</td>
                    <td>Poli Mata</td>
                    <td>3 pasien</td>
                    <td>15 menit</td>
                  </tr>
                  <tr>
                    <td>E-009</td>
                    <td>Aerospace Medicine</td>
                    <td>6 pasien</td>
                    <td>40 menit</td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Notifikasi & Alert</h2>
        </div>
        <div className="card-body">
          <div className="alert alert-danger">
            <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Critical Alert:</strong> Stok obat Adrenalin di ICU tinggal 2 ampul
          </div>
          <div className="alert alert-warning">
            <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Warning:</strong> BOR mencapai 78%, pertimbangkan untuk mengaktifkan bed cadangan
          </div>
          <div className="alert alert-info">
            <TrendingUp size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Info:</strong> Pemeriksaan Fit-to-Fly untuk 5 awak pesawat dijadwalkan besok pagi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
