import React, { useState } from 'react';
import { 
  Users, FileText, DollarSign, History, ArrowRight, Phone, 
  MessageSquare, Activity, Clock, CheckCircle, AlertCircle,
  TrendingUp, BarChart3, PieChart, Calendar,
  Pill, TestTube, Scan, Send, Eye, Edit, Printer,
  Download, RefreshCw, Bell
} from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const RawatJalan = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'dr. Siti Nurhaliza', time: '09:30', message: 'Pasien dengan CAD, mohon advice untuk terapi optimal', type: 'received' },
    { id: 2, sender: 'You', time: '09:35', message: 'Hasil EKG menunjukkan ST elevation, saya rekomendasikan rujuk ke ICU', type: 'sent' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // 🔔 Fitur 1: Dashboard Rawat Jalan Interaktif dengan Real-time Monitoring
  const renderDashboard = () => (
    <div>
      {/* Real-time Statistics Cards */}
      <div className="dashboard-grid" style={{ marginBottom: '25px' }}>
        <div className="stat-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon info">
            <Users size={30} />
          </div>
          <div className="stat-content">
            <h3>Total Pasien Hari Ini</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#003d82' }}>156</p>
            <small style={{ color: '#666' }}>
              <TrendingUp size={14} style={{ display: 'inline', marginRight: '5px' }} />
              +12% dari kemarin
            </small>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon warning">
            <Activity size={30} />
          </div>
          <div className="stat-content">
            <h3>Sedang Diperiksa</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>23</p>
            <small style={{ color: '#666' }}>8 poli aktif</small>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon secondary">
            <Clock size={30} />
          </div>
          <div className="stat-content">
            <h3>Menunggu</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#6b7280' }}>42</p>
            <small style={{ color: '#666' }}>Rata-rata tunggu: 15 menit</small>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon success">
            <CheckCircle size={30} />
          </div>
          <div className="stat-content">
            <h3>Selesai</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>91</p>
            <small style={{ color: '#666' }}>58% dari total</small>
          </div>
        </div>
      </div>

      {/* Interactive Charts - Distribusi per Poliklinik */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '20px', marginBottom: '25px' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PieChart size={20} />
              Distribusi Pasien per Poliklinik
            </h3>
          </div>
          <div className="card-body">
            {[
              { name: 'Poli Jantung', count: 28, color: '#003d82', percentage: 18 },
              { name: 'Poli Umum', count: 45, color: '#2563eb', percentage: 29 },
              { name: 'Poli Mata', count: 22, color: '#3b82f6', percentage: 14 },
              { name: 'Poli Gigi', count: 18, color: '#60a5fa', percentage: 12 },
              { name: 'Poli THT', count: 15, color: '#93c5fd', percentage: 10 },
              { name: 'Poli Paru', count: 12, color: '#dbeafe', percentage: 8 },
              { name: 'Lainnya', count: 16, color: '#eff6ff', percentage: 9 }
            ].map((poli, idx) => (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontWeight: '500' }}>{poli.name}</span>
                  <span style={{ fontWeight: 'bold', color: poli.color }}>{poli.count} pasien ({poli.percentage}%)</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '10px', 
                  background: '#e5e7eb', 
                  borderRadius: '5px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{ 
                    width: `${poli.percentage}%`, 
                    height: '100%', 
                    background: poli.color,
                    transition: 'width 1s ease-in-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BarChart3 size={20} />
              Status Pemeriksaan Real-time
            </h3>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  border: '10px solid #6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  margin: '0 auto'
                }}>
                  <span style={{ fontSize: '32px', fontWeight: 'bold' }}>42</span>
                  <span style={{ fontSize: '12px', color: '#666' }}>27%</span>
                </div>
                <p style={{ marginTop: '10px', fontWeight: '500' }}>Menunggu</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  border: '10px solid #f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  margin: '0 auto'
                }}>
                  <span style={{ fontSize: '32px', fontWeight: 'bold' }}>23</span>
                  <span style={{ fontSize: '12px', color: '#666' }}>15%</span>
                </div>
                <p style={{ marginTop: '10px', fontWeight: '500' }}>Diperiksa</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  border: '10px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  margin: '0 auto'
                }}>
                  <span style={{ fontSize: '32px', fontWeight: 'bold' }}>91</span>
                  <span style={{ fontSize: '12px', color: '#666' }}>58%</span>
                </div>
                <p style={{ marginTop: '10px', fontWeight: '500' }}>Selesai</p>
              </div>
            </div>
            <div className="alert alert-info">
              <AlertCircle size={18} />
              <span>Waktu tunggu rata-rata: <strong>15 menit</strong> | Dokter aktif: <strong>12 dari 15</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Statistics by Time */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={20} />
            Kunjungan Pasien per Jam (Hari Ini)
          </h3>
        </div>
        <div className="card-body">
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
            {[
              { hour: '07:00', count: 8 },
              { hour: '08:00', count: 18 },
              { hour: '09:00', count: 24 },
              { hour: '10:00', count: 32 },
              { hour: '11:00', count: 28 },
              { hour: '12:00', count: 15 },
              { hour: '13:00', count: 19 },
              { hour: '14:00', count: 12 }
            ].map((slot, idx) => (
              <div key={idx} style={{ 
                minWidth: '100px', 
                textAlign: 'center',
                padding: '15px',
                background: idx === 3 ? '#003d82' : '#f3f4f6',
                color: idx === 3 ? 'white' : '#333',
                borderRadius: '8px',
                border: idx === 3 ? '2px solid #d4af37' : '1px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>{slot.count}</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>{slot.hour}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // 🔔 Fitur 2 & 3: Daftar Pasien Dinamis dengan Registrasi & Antrean Otomatis
  const renderDaftarPasien = () => (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Informasi Pasien Rawat Jalan Hari Ini</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary">
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="btn btn-secondary">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>
      <div className="card-body">
        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="🔍 Cari pasien (No. RM, Nama, NRP, Poliklinik, Dokter)"
            />
          </div>
          <select className="form-select" style={{ maxWidth: '200px' }}>
            <option value="">Semua Poliklinik</option>
            <option value="jantung">Poli Jantung</option>
            <option value="umum">Poli Umum</option>
            <option value="mata">Poli Mata</option>
            <option value="gigi">Poli Gigi</option>
            <option value="tht">Poli THT</option>
          </select>
          <select className="form-select" style={{ maxWidth: '180px' }}>
            <option value="">Semua Status</option>
            <option value="menunggu">Menunggu</option>
            <option value="diperiksa">Sedang Diperiksa</option>
            <option value="selesai">Selesai</option>
          </select>
        </div>

        {/* Patient Statistics */}
        <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
          <div className="stat-card">
            <div className="stat-icon info">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <h3>Total Pasien</h3>
              <p>156</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon warning">
              <Activity size={24} />
            </div>
            <div className="stat-content">
              <h3>Sedang Diperiksa</h3>
              <p>23</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon success">
              <CheckCircle size={24} />
            </div>
            <div className="stat-content">
              <h3>Selesai</h3>
              <p>91</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon secondary">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <h3>Menunggu</h3>
              <p>42</p>
            </div>
          </div>
        </div>

        {/* Patient Table with Export */}
        <TableWithExport filename="daftar-pasien-rawat-jalan">
          <table className="table">
            <thead>
              <tr>
                <th>No. Antrean</th>
                <th>No. RM</th>
                <th>Nama Pasien</th>
                <th>Pangkat/NRP</th>
                <th>Poliklinik</th>
                <th>Dokter</th>
                <th>Penjamin</th>
                <th>Waktu Daftar</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A-012</strong></td>
                <td>RM-001234</td>
                <td>Letkol Budi Santoso</td>
                <td>Letkol / 531234</td>
                <td>Poli Jantung</td>
                <td>dr. Siti Nurhaliza, Sp.JP</td>
                <td><span className="badge badge-primary">TNI AD</span></td>
                <td>08:30</td>
                <td><span className="badge badge-info">
                  <Activity size={12} style={{ marginRight: '5px' }} />
                  Diperiksa
                </span></td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-primary btn-sm" onClick={() => setActiveTab('pemeriksaan')}>
                      <Edit size={14} />
                      Detail
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>A-013</strong></td>
                <td>RM-002456</td>
                <td>Mayor Ahmad Fauzi</td>
                <td>Mayor / 524567</td>
                <td>Poli Umum</td>
                <td>dr. Andi Wijaya, Sp.PD</td>
                <td><span className="badge badge-info">BPJS</span></td>
                <td>08:45</td>
                <td><span className="badge badge-warning">
                  <Clock size={12} style={{ marginRight: '5px' }} />
                  Menunggu
                </span></td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-success btn-sm">
                      <Phone size={14} />
                      Panggil
                    </button>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>A-014</strong></td>
                <td>RM-003789</td>
                <td>Kapten Dewi Lestari</td>
                <td>Kapten / 518901</td>
                <td>Poli Mata</td>
                <td>dr. Hendra Wijaya, Sp.M</td>
                <td><span className="badge badge-primary">TNI AL</span></td>
                <td>09:00</td>
                <td><span className="badge badge-success">
                  <CheckCircle size={12} style={{ marginRight: '5px' }} />
                  Selesai
                </span></td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                      Lihat
                    </button>
                    <button className="btn btn-secondary btn-sm">
                      <Printer size={14} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>B-008</strong></td>
                <td>RM-004123</td>
                <td>Serda Bambang Widodo</td>
                <td>Serda / 512345</td>
                <td>Poli Gigi</td>
                <td>drg. Ratna Sari, Sp.KG</td>
                <td><span className="badge badge-primary">TNI AU</span></td>
                <td>09:15</td>
                <td><span className="badge badge-warning">
                  <Clock size={12} style={{ marginRight: '5px' }} />
                  Menunggu
                </span></td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-success btn-sm">
                      <Phone size={14} />
                      Panggil
                    </button>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>A-015</strong></td>
                <td>RM-005678</td>
                <td>Kolonel Hadi Purnomo</td>
                <td>Kolonel / 540123</td>
                <td>Poli Jantung</td>
                <td>dr. Siti Nurhaliza, Sp.JP</td>
                <td><span className="badge badge-primary">TNI AD</span></td>
                <td>09:30</td>
                <td><span className="badge badge-warning">
                  <Clock size={12} style={{ marginRight: '5px' }} />
                  Menunggu
                </span></td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-success btn-sm">
                      <Phone size={14} />
                      Panggil
                    </button>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </TableWithExport>

        <div className="alert alert-info" style={{ marginTop: '20px' }}>
          <Bell size={18} />
          <span>
            <strong>Antrean Aktif:</strong> 42 pasien menunggu | 
            <strong> Estimasi waktu tunggu:</strong> 15-20 menit | 
            <strong> Dokter tersedia:</strong> 12/15
          </span>
        </div>
      </div>
    </div>
  );

  // 🔔 Fitur 4 & 5: Pemeriksaan Elektronik dengan Integrasi Penunjang
  const renderPemeriksaan = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h2 className="card-title">Pemeriksaan Pasien</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-outline">
              <History size={16} />
              Riwayat
            </button>
            <button className="btn btn-secondary">
              <Printer size={16} />
              Cetak
            </button>
          </div>
        </div>
        <div className="card-body">
          <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | 
              <strong> Poli:</strong> Jantung | 
              <strong> Dokter:</strong> dr. Siti Nurhaliza, Sp.JP |
              <strong> Antrean:</strong> A-012
            </div>
            <span className="badge badge-info">Sedang Diperiksa</span>
          </div>

          <div className="tabs" style={{ marginBottom: '20px' }}>
            <button className="tab active">Assessment Awal</button>
            <button className="tab">SOAP</button>
            <button className="tab">Tindakan & BMHP</button>
            <button className="tab">Order Lab</button>
            <button className="tab">Order Radiologi</button>
            <button className="tab">Reseptur</button>
            <button className="tab">CPPT</button>
          </div>

          {/* Assessment Awal */}
          <div className="form-group">
            <label className="form-label">Tanda Vital</label>
            <div className="grid grid-cols-4" style={{ marginBottom: '15px' }}>
              <div className="form-group">
                <label className="form-label">TD (mmHg)</label>
                <input type="text" className="form-input" placeholder="120/80" defaultValue="145/95" />
              </div>
              <div className="form-group">
                <label className="form-label">Nadi (x/mnt)</label>
                <input type="text" className="form-input" placeholder="80" defaultValue="88" />
              </div>
              <div className="form-group">
                <label className="form-label">RR (x/mnt)</label>
                <input type="text" className="form-input" placeholder="20" defaultValue="20" />
              </div>
              <div className="form-group">
                <label className="form-label">Suhu (°C)</label>
                <input type="text" className="form-input" placeholder="36.5" defaultValue="36.8" />
              </div>
              <div className="form-group">
                <label className="form-label">BB (kg)</label>
                <input type="text" className="form-input" placeholder="70" defaultValue="78" />
              </div>
              <div className="form-group">
                <label className="form-label">TB (cm)</label>
                <input type="text" className="form-input" placeholder="170" defaultValue="168" />
              </div>
              <div className="form-group">
                <label className="form-label">SpO2 (%)</label>
                <input type="text" className="form-input" placeholder="98" defaultValue="97" />
              </div>
              <div className="form-group">
                <label className="form-label">Lingkar Perut (cm)</label>
                <input type="text" className="form-input" placeholder="85" defaultValue="92" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Keluhan Utama</label>
            <textarea className="form-textarea" rows="3" placeholder="Keluhan pasien..." defaultValue="Nyeri dada sebelah kiri yang menjalar ke lengan, sesak napas saat beraktivitas"></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Riwayat Penyakit Sekarang</label>
            <textarea className="form-textarea" rows="3" placeholder="Anamnesis..." defaultValue="Keluhan dirasakan sejak 2 hari yang lalu, memberat saat aktivitas, berkurang saat istirahat. Pasien memiliki riwayat hipertensi tidak terkontrol."></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Riwayat Penyakit Dahulu</label>
            <textarea className="form-textarea" rows="2" placeholder="Riwayat penyakit terdahulu..." defaultValue="Hipertensi sejak 5 tahun lalu, DM tipe 2 sejak 3 tahun lalu"></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Riwayat Alergi</label>
            <input type="text" className="form-input" placeholder="Obat, makanan, dll..." defaultValue="Tidak ada alergi obat" />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="btn btn-primary">
              <FileText size={16} />
              Simpan Assessment
            </button>
            <button className="btn btn-secondary">Lanjut ke SOAP</button>
          </div>
        </div>
      </div>

      {/* Quick Actions for Integration */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card-body" style={{ textAlign: 'center', padding: '25px' }}>
            <TestTube size={40} style={{ color: '#003d82', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px' }}>Order Laboratorium</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>Request pemeriksaan lab tanpa input ulang</p>
            <button className="btn btn-primary btn-sm">
              <Send size={14} />
              Buat Order Lab
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card-body" style={{ textAlign: 'center', padding: '25px' }}>
            <Scan size={40} style={{ color: '#003d82', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px' }}>Order Radiologi</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>Request pemeriksaan radiologi langsung</p>
            <button className="btn btn-primary btn-sm">
              <Send size={14} />
              Buat Order Radiologi
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card-body" style={{ textAlign: 'center', padding: '25px' }}>
            <Pill size={40} style={{ color: '#003d82', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px' }}>E-Prescription</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>Resep elektronik dengan drug interaction check</p>
            <button className="btn btn-primary btn-sm">
              <Send size={14} />
              Buat Resep
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card-body" style={{ textAlign: 'center', padding: '25px' }}>
            <MessageSquare size={40} style={{ color: '#003d82', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px' }}>Konsultasi</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>Konsultasi ke dokter spesialis lain</p>
            <button className="btn btn-primary btn-sm" onClick={() => setActiveTab('konsultasi')}>
              <Send size={14} />
              Buat Konsultasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // 🔔 Fitur 6: Integrasi Tagihan Otomatis
  const renderTagihan = () => (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Rincian Tagihan Pasien</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary">
            <Printer size={16} />
            Cetak Billing
          </button>
          <button className="btn btn-primary">
            <Send size={16} />
            Kirim ke Kasir
          </button>
        </div>
      </div>
      <div className="card-body">
        <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | 
              <strong> Penjamin:</strong> TNI AD | 
              <strong> Tanggal:</strong> 18 Januari 2024
            </div>
            <span className="badge badge-warning">Belum Lunas</span>
          </div>
        </div>

        <TableWithExport filename="tagihan-rawat-jalan">
          <table className="table">
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Subtotal</th>
                <th>Ditanggung Penjamin</th>
                <th>Bayar Pasien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge badge-info">Konsultasi</span></td>
                <td>Konsultasi Spesialis Jantung</td>
                <td>1</td>
                <td>Rp 150.000</td>
                <td>Rp 150.000</td>
                <td>Rp 150.000</td>
                <td>Rp 0</td>
              </tr>
              <tr>
                <td><span className="badge badge-warning">Tindakan</span></td>
                <td>EKG 12 Lead</td>
                <td>1</td>
                <td>Rp 100.000</td>
                <td>Rp 100.000</td>
                <td>Rp 100.000</td>
                <td>Rp 0</td>
              </tr>
              <tr>
                <td><span className="badge badge-success">Obat</span></td>
                <td>Bisoprolol 5mg - 30 tablet</td>
                <td>1</td>
                <td>Rp 45.000</td>
                <td>Rp 45.000</td>
                <td>Rp 45.000</td>
                <td>Rp 0</td>
              </tr>
              <tr>
                <td><span className="badge badge-success">Obat</span></td>
                <td>Simvastatin 20mg - 30 tablet</td>
                <td>1</td>
                <td>Rp 35.000</td>
                <td>Rp 35.000</td>
                <td>Rp 35.000</td>
                <td>Rp 0</td>
              </tr>
              <tr>
                <td><span className="badge badge-primary">Lab</span></td>
                <td>Lipid Profile</td>
                <td>1</td>
                <td>Rp 200.000</td>
                <td>Rp 200.000</td>
                <td>Rp 200.000</td>
                <td>Rp 0</td>
              </tr>
              <tr>
                <td><span className="badge badge-secondary">BMHP</span></td>
                <td>Alat Habis Pakai</td>
                <td>1</td>
                <td>Rp 25.000</td>
                <td>Rp 25.000</td>
                <td>Rp 25.000</td>
                <td>Rp 0</td>
              </tr>
              <tr style={{ fontWeight: 'bold', borderTop: '2px solid #003d82', background: '#f9fafb' }}>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Tagihan</td>
                <td>Rp 555.000</td>
                <td>Rp 555.000</td>
                <td>Rp 0</td>
              </tr>
              <tr style={{ fontWeight: 'bold', background: '#eff6ff' }}>
                <td colSpan="4" style={{ textAlign: 'right' }}>Ditanggung TNI AD (100%)</td>
                <td colSpan="2">Rp 555.000</td>
                <td></td>
              </tr>
              <tr style={{ fontWeight: 'bold', color: '#d4af37', background: '#fef3c7', fontSize: '16px' }}>
                <td colSpan="4" style={{ textAlign: 'right' }}>Total Bayar Pasien</td>
                <td colSpan="3">Rp 0</td>
              </tr>
            </tbody>
          </table>
        </TableWithExport>

        <div className="alert alert-success" style={{ marginTop: '20px' }}>
          <CheckCircle size={18} />
          <span>Tagihan ini <strong>100% ditanggung oleh TNI AD</strong>. Pasien tidak perlu membayar.</span>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h4 style={{ marginBottom: '10px' }}>Riwayat Pembayaran</h4>
          <p style={{ fontSize: '14px', color: '#666' }}>Belum ada pembayaran untuk kunjungan ini.</p>
        </div>
      </div>
    </div>
  );

  // 🔔 Fitur 4: Konsultasi Terpadu dengan Digital Messaging
  const renderKonsultasi = () => (
    <div>
      {/* Konsultasi Form */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h2 className="card-title">Konsultasi ke Poliklinik Lain</h2>
        </div>
        <div className="card-body">
          <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
            <strong>Pasien:</strong> Letkol Budi Santoso (RM-001234) | <strong>Poli Asal:</strong> Poli Jantung | <strong>Dokter:</strong> dr. Siti Nurhaliza, Sp.JP
          </div>

          <div className="form-group">
            <label className="form-label">Poliklinik Tujuan *</label>
            <select className="form-select">
              <option value="">Pilih Poliklinik</option>
              <option value="umum">Poli Umum</option>
              <option value="gigi">Poli Gigi</option>
              <option value="mata">Poli Mata</option>
              <option value="tht">Poli THT</option>
              <option value="paru">Poli Paru</option>
              <option value="bedah">Poli Bedah</option>
              <option value="obgyn">Poli Kandungan</option>
              <option value="anak">Poli Anak</option>
              <option value="saraf">Poli Saraf</option>
              <option value="kulit">Poli Kulit</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Dokter Tujuan</label>
            <select className="form-select">
              <option value="">Pilih Dokter (Opsional)</option>
              <option value="dr1">dr. Andi Wijaya, Sp.PD</option>
              <option value="dr2">dr. Budi Santoso, Sp.B</option>
              <option value="dr3">dr. Dewi Lestari, Sp.A</option>
              <option value="dr4">dr. Hendra Saputra, Sp.S</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Indikasi Konsultasi *</label>
            <textarea className="form-textarea" rows="4" placeholder="Alasan konsultasi dan informasi klinis yang relevan..."></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Hasil Pemeriksaan Penunjang</label>
            <textarea className="form-textarea" rows="3" placeholder="Hasil lab, radiologi, atau pemeriksaan penunjang lainnya..."></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Prioritas</label>
            <select className="form-select">
              <option value="rutin">Rutin</option>
              <option value="cito">Cito (Segera)</option>
              <option value="elektif">Elektif (Terjadwal)</option>
            </select>
          </div>

          <button className="btn btn-primary">
            <ArrowRight size={16} />
            Kirim Konsultasi
          </button>
        </div>
      </div>

      {/* Digital Messaging Interface */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        {/* Conversation List */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Percakapan Konsultasi</h3>
          </div>
          <div className="card-body" style={{ padding: '0' }}>
            {[
              { id: 1, doctor: 'dr. Andi Wijaya, Sp.PD', specialty: 'Poli Umum', lastMsg: 'Terima kasih atas infonya', time: '09:35', unread: 0, active: true },
              { id: 2, doctor: 'dr. Hendra Saputra, Sp.S', specialty: 'Poli Saraf', lastMsg: 'Saya akan evaluasi pasien', time: '08:45', unread: 2, active: false },
              { id: 3, doctor: 'dr. Ratna Dewi, Sp.JP', specialty: 'Poli Jantung', lastMsg: 'Hasil EKG sudah saya terima', time: 'Kemarin', unread: 0, active: false }
            ].map((conv) => (
              <div 
                key={conv.id}
                style={{ 
                  padding: '15px', 
                  borderBottom: '1px solid #e5e7eb',
                  background: conv.active ? '#eff6ff' : 'white',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.background = conv.active ? '#eff6ff' : 'white'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <strong style={{ fontSize: '14px' }}>{conv.doctor}</strong>
                  {conv.unread > 0 && (
                    <span className="badge badge-danger" style={{ fontSize: '10px' }}>{conv.unread}</span>
                  )}
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '3px' }}>{conv.specialty}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#999' }}>{conv.lastMsg}</span>
                  <span style={{ fontSize: '11px', color: '#999' }}>{conv.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="card">
          <div className="card-header" style={{ borderBottom: '2px solid #003d82' }}>
            <div>
              <h3 className="card-title">dr. Andi Wijaya, Sp.PD</h3>
              <p style={{ fontSize: '12px', color: '#666', margin: '5px 0 0 0' }}>Poli Umum • Online</p>
            </div>
          </div>
          <div className="card-body" style={{ height: '400px', overflowY: 'auto', background: '#f9fafb' }}>
            {chatMessages.map((msg) => (
              <div 
                key={msg.id}
                style={{ 
                  display: 'flex',
                  justifyContent: msg.type === 'sent' ? 'flex-end' : 'flex-start',
                  marginBottom: '15px'
                }}
              >
                <div style={{ 
                  maxWidth: '70%',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  background: msg.type === 'sent' ? '#003d82' : 'white',
                  color: msg.type === 'sent' ? 'white' : '#333',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '11px', marginBottom: '5px', opacity: 0.8 }}>
                    {msg.sender} • {msg.time}
                  </div>
                  <div style={{ fontSize: '14px' }}>{msg.message}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card-body" style={{ borderTop: '1px solid #e5e7eb', padding: '15px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Ketik pesan konsultasi..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newMessage.trim()) {
                    setChatMessages([...chatMessages, {
                      id: chatMessages.length + 1,
                      sender: 'You',
                      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
                      message: newMessage,
                      type: 'sent'
                    }]);
                    setNewMessage('');
                  }
                }}
              />
              <button className="btn btn-primary">
                <Send size={16} />
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Riwayat Konsultasi */}
      <div className="card" style={{ marginTop: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Riwayat Konsultasi Pasien</h3>
        </div>
        <div className="card-body">
          <TableWithExport filename="riwayat-konsultasi">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Indikasi</th>
                  <th>Prioritas</th>
                  <th>Status</th>
                  <th>Jawaban</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/01/2024 09:35</td>
                  <td>Poli Jantung<br/><small>dr. Siti Nurhaliza</small></td>
                  <td>Poli Umum<br/><small>dr. Andi Wijaya</small></td>
                  <td>Evaluasi CAD dengan komorbid DM</td>
                  <td><span className="badge badge-warning">Cito</span></td>
                  <td><span className="badge badge-success">Dijawab</span></td>
                  <td>Sudah dievaluasi, lanjutkan terapi</td>
                  <td>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>15/01/2024 14:20</td>
                  <td>Poli Umum<br/><small>dr. Andi Wijaya</small></td>
                  <td>Poli Jantung<br/><small>dr. Siti Nurhaliza</small></td>
                  <td>Suspek CAD, nyeri dada angina</td>
                  <td><span className="badge badge-warning">Cito</span></td>
                  <td><span className="badge badge-success">Dijawab</span></td>
                  <td>EKG menunjukkan iskemia, rujuk untuk kateterisasi</td>
                  <td>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                      Detail
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>10/01/2024 10:15</td>
                  <td>Poli Jantung<br/><small>dr. Siti Nurhaliza</small></td>
                  <td>Poli Saraf<br/><small>dr. Hendra Saputra</small></td>
                  <td>Evaluasi pusing berulang</td>
                  <td><span className="badge badge-info">Rutin</span></td>
                  <td><span className="badge badge-success">Dijawab</span></td>
                  <td>Vertigo perifer, sudah diberikan terapi</td>
                  <td>
                    <button className="btn btn-outline btn-sm">
                      <Eye size={14} />
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </TableWithExport>
        </div>
      </div>
    </div>
  );

  // 🔔 Fitur 7: Riwayat Pasien Terpadu
  const renderRiwayat = () => (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Riwayat Pasien Terpadu</h2>
        <button className="btn btn-secondary">
          <Download size={16} />
          Export Riwayat
        </button>
      </div>
      <div className="card-body">
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text" 
            className="form-input" 
            placeholder="🔍 Cari pasien (No. RM / NIK / NRP / Nama)"
            style={{ maxWidth: '400px' }}
          />
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Pasien:</strong> Letkol Budi Santoso | 
              <strong> No. RM:</strong> RM-001234 | 
              <strong> NIK:</strong> 3175012345670001 | 
              <strong> NRP:</strong> 531234
            </div>
            <button className="btn btn-outline btn-sm">
              <History size={14} />
              Timeline Lengkap
            </button>
          </div>
          <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #d1d5db' }}>
            <span className="badge badge-primary" style={{ marginRight: '5px' }}>Hipertensi</span>
            <span className="badge badge-warning" style={{ marginRight: '5px' }}>DM Tipe 2</span>
            <span className="badge badge-danger" style={{ marginRight: '5px' }}>Alergi: Tidak ada</span>
          </div>
        </div>

        <div className="tabs" style={{ marginBottom: '20px' }}>
          <button className="tab active">Kunjungan</button>
          <button className="tab">Diagnosa</button>
          <button className="tab">Obat</button>
          <button className="tab">Lab</button>
          <button className="tab">Radiologi</button>
          <button className="tab">Tindakan</button>
        </div>

        <TableWithExport filename="riwayat-kunjungan-pasien">
          <table className="table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Poliklinik</th>
                <th>Dokter</th>
                <th>Keluhan</th>
                <th>Diagnosa (ICD-10)</th>
                <th>Terapi</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18/01/2024 09:30</td>
                <td>Poli Jantung</td>
                <td>dr. Siti Nurhaliza, Sp.JP</td>
                <td>Nyeri dada, sesak napas</td>
                <td>I25.1 - Coronary Artery Disease</td>
                <td>Bisoprolol 5mg, Simvastatin 20mg</td>
                <td><span className="badge badge-info">Sedang Berlangsung</span></td>
                <td>
                  <button className="btn btn-primary btn-sm">
                    <Eye size={14} />
                    Detail
                  </button>
                </td>
              </tr>
              <tr>
                <td>15/01/2024 10:15</td>
                <td>Poli Umum</td>
                <td>dr. Andi Wijaya, Sp.PD</td>
                <td>Kontrol rutin hipertensi</td>
                <td>I10 - Essential Hypertension</td>
                <td>Amlodipine 10mg, Candesartan 16mg</td>
                <td><span className="badge badge-success">Selesai</span></td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    <Eye size={14} />
                    Detail
                  </button>
                </td>
              </tr>
              <tr>
                <td>10/01/2024 14:00</td>
                <td>Poli Umum</td>
                <td>dr. Andi Wijaya, Sp.PD</td>
                <td>Pusing, lemas, TD tinggi</td>
                <td>I10 - Essential Hypertension</td>
                <td>Amlodipine 5mg, konseling gaya hidup</td>
                <td><span className="badge badge-success">Selesai</span></td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    <Eye size={14} />
                    Detail
                  </button>
                </td>
              </tr>
              <tr>
                <td>05/01/2024 09:00</td>
                <td>Laboratorium</td>
                <td>-</td>
                <td>Pemeriksaan rutin</td>
                <td>-</td>
                <td>Lipid Profile, HbA1c, Urinalisis</td>
                <td><span className="badge badge-success">Selesai</span></td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    <Eye size={14} />
                    Hasil Lab
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/12/2023 11:30</td>
                <td>Poli Mata</td>
                <td>dr. Hendra Wijaya, Sp.M</td>
                <td>Penglihatan kabur</td>
                <td>H52.4 - Presbyopia</td>
                <td>Resep kacamata baca</td>
                <td><span className="badge badge-success">Selesai</span></td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    <Eye size={14} />
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </TableWithExport>

        <div className="alert alert-info" style={{ marginTop: '20px' }}>
          <History size={18} />
          <span>
            <strong>Total Kunjungan:</strong> 45 kunjungan sejak registrasi pertama (03/01/2019) | 
            <strong> Kunjungan Tahun Ini:</strong> 8 kunjungan
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Activity size={16} style={{ marginRight: '5px' }} />
          Dashboard
        </button>
        <button 
          className={`tab ${activeTab === 'daftar' ? 'active' : ''}`}
          onClick={() => setActiveTab('daftar')}
        >
          <Users size={16} style={{ marginRight: '5px' }} />
          Daftar Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Pemeriksaan
        </button>
        <button 
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Tagihan
        </button>
        <button 
          className={`tab ${activeTab === 'konsultasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('konsultasi')}
        >
          <MessageSquare size={16} style={{ marginRight: '5px' }} />
          Konsultasi
        </button>
        <button 
          className={`tab ${activeTab === 'riwayat' ? 'active' : ''}`}
          onClick={() => setActiveTab('riwayat')}
        >
          <History size={16} style={{ marginRight: '5px' }} />
          Riwayat Pasien
        </button>
      </div>

      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'daftar' && renderDaftarPasien()}
      {activeTab === 'pemeriksaan' && renderPemeriksaan()}
      {activeTab === 'tagihan' && renderTagihan()}
      {activeTab === 'konsultasi' && renderKonsultasi()}
      {activeTab === 'riwayat' && renderRiwayat()}
    </div>
  );
};

export default RawatJalan;
