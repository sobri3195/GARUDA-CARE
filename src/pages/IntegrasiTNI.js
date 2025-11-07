import React, { useState } from 'react';
import { Shield, Anchor, Plane, Users, Activity, Database, CheckCircle, AlertTriangle, RefreshCw, Download } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const IntegrasiTNI = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [syncStatus, setSyncStatus] = useState('connected');

  const personnelData = [
    {
      nrp: '528901234',
      nama: 'Mayor Inf. Ahmad Hidayat',
      pangkat: 'Mayor',
      korps: 'Infanteri',
      kesatuan: 'Yon Armed 1/Kostrad',
      golDarah: 'O+',
      status: 'Aktif',
      lastSync: '15 Jan 2024 10:30',
      medicalStatus: 'Fit',
      lastCheckup: '15 Jan 2024'
    },
    {
      nrp: '528902345',
      nama: 'Kapten Kav. Budi Santoso',
      pangkat: 'Kapten',
      korps: 'Kavaleri',
      kesatuan: 'Yonkav 1/Kostrad',
      golDarah: 'A+',
      status: 'Aktif',
      lastSync: '14 Jan 2024 15:20',
      medicalStatus: 'Under Treatment',
      lastCheckup: '14 Jan 2024'
    },
    {
      nrp: '528903456',
      nama: 'Letda Arh. Rina Wati',
      pangkat: 'Letnan Dua',
      korps: 'Artileri',
      kesatuan: 'Yon Arhanud 1/Kostrad',
      golDarah: 'B+',
      status: 'Aktif',
      lastSync: '13 Jan 2024 09:15',
      medicalStatus: 'Recovery',
      lastCheckup: '13 Jan 2024'
    },
    {
      nrp: '528904567',
      nama: 'Serda Inf. Joko Widodo',
      pangkat: 'Serda',
      korps: 'Infanteri',
      kesatuan: 'Yon Raider 500/Kostrad',
      golDarah: 'AB+',
      status: 'Aktif',
      lastSync: '12 Jan 2024 14:45',
      medicalStatus: 'Fit',
      lastCheckup: '10 Jan 2024'
    }
  ];

  const medicalRecords = [
    {
      nrp: '528901234',
      nama: 'Mayor Inf. Ahmad Hidayat',
      jnsPeriksa: 'Rawat Jalan',
      diagnosa: 'Diabetes Mellitus Type 2',
      tglPeriksa: '15 Jan 2024',
      dokter: 'dr. Budi Santoso, Sp.PD',
      tindakan: 'Konsultasi & Terapi',
      statusSync: 'Synced',
      syncDate: '15 Jan 2024 11:00'
    },
    {
      nrp: '528902345',
      nama: 'Kapten Kav. Budi Santoso',
      jnsPeriksa: 'Rawat Jalan',
      diagnosa: 'Hipertensi Grade 2',
      tglPeriksa: '14 Jan 2024',
      dokter: 'dr. Rina Hartati, Sp.JP',
      tindakan: 'Konsultasi Kardiologi',
      statusSync: 'Synced',
      syncDate: '14 Jan 2024 16:00'
    },
    {
      nrp: '528903456',
      nama: 'Letda Arh. Rina Wati',
      jnsPeriksa: 'Rawat Inap',
      diagnosa: 'Post-Op Appendektomi',
      tglPeriksa: '13-15 Jan 2024',
      dokter: 'dr. Ahmad Wijaya, Sp.B',
      tindakan: 'Operasi Appendektomi',
      statusSync: 'Synced',
      syncDate: '15 Jan 2024 17:00'
    },
    {
      nrp: '528904567',
      nama: 'Serda Inf. Joko Widodo',
      jnsPeriksa: 'Medical Checkup',
      diagnosa: 'Sehat',
      tglPeriksa: '10 Jan 2024',
      dokter: 'dr. Siti Aminah, Sp.PD',
      tindakan: 'MCU Rutin',
      statusSync: 'Pending',
      syncDate: '-'
    }
  ];

  const readinessStatus = [
    {
      kesatuan: 'Yon Armed 1/Kostrad',
      totalPersonnel: 450,
      medicallyFit: 425,
      underTreatment: 20,
      notFit: 5,
      percentageFit: 94.4,
      lastUpdate: '15 Jan 2024'
    },
    {
      kesatuan: 'Yonkav 1/Kostrad',
      totalPersonnel: 380,
      medicallyFit: 360,
      underTreatment: 15,
      notFit: 5,
      percentageFit: 94.7,
      lastUpdate: '14 Jan 2024'
    },
    {
      kesatuan: 'Yon Arhanud 1/Kostrad',
      totalPersonnel: 420,
      medicallyFit: 395,
      underTreatment: 18,
      notFit: 7,
      percentageFit: 94.0,
      lastUpdate: '13 Jan 2024'
    },
    {
      kesatuan: 'Yon Raider 500/Kostrad',
      totalPersonnel: 500,
      medicallyFit: 480,
      underTreatment: 15,
      notFit: 5,
      percentageFit: 96.0,
      lastUpdate: '12 Jan 2024'
    }
  ];

  const syncLogs = [
    { timestamp: '15 Jan 2024 11:00:15', action: 'SYNC_MEDICAL_RECORD', nrp: '528901234', status: 'SUCCESS', message: 'Data rekam medis berhasil disinkronkan' },
    { timestamp: '15 Jan 2024 10:30:20', action: 'SYNC_PERSONNEL', nrp: '528901234', status: 'SUCCESS', message: 'Data personel berhasil diperbarui' },
    { timestamp: '14 Jan 2024 16:00:45', action: 'SYNC_MEDICAL_RECORD', nrp: '528902345', status: 'SUCCESS', message: 'Data rekam medis berhasil disinkronkan' },
    { timestamp: '14 Jan 2024 15:20:30', action: 'SYNC_PERSONNEL', nrp: '528902345', status: 'SUCCESS', message: 'Data personel berhasil diperbarui' },
    { timestamp: '13 Jan 2024 17:00:10', action: 'SYNC_MEDICAL_RECORD', nrp: '528903456', status: 'SUCCESS', message: 'Data rekam medis berhasil disinkronkan' },
    { timestamp: '12 Jan 2024 14:45:25', action: 'SYNC_PERSONNEL', nrp: '528904567', status: 'SUCCESS', message: 'Data personel berhasil diperbarui' },
    { timestamp: '12 Jan 2024 08:15:00', action: 'SYNC_READINESS', nrp: 'ALL', status: 'SUCCESS', message: 'Data kesiapan kesatuan berhasil disinkronkan' }
  ];

  const statistics = [
    { label: 'Total Personel Terdaftar', value: personnelData.length.toString(), icon: Users, color: '#003d82' },
    { label: 'Medically Fit', value: personnelData.filter(p => p.medicalStatus === 'Fit').length.toString(), icon: CheckCircle, color: '#27ae60' },
    { label: 'Data Tersingkronisasi', value: medicalRecords.filter(m => m.statusSync === 'Synced').length.toString(), icon: Database, color: '#3498db' },
    { label: 'Pending Sync', value: medicalRecords.filter(m => m.statusSync === 'Pending').length.toString(), icon: AlertTriangle, color: '#f39c12' }
  ];

  const handleManualSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('connected');
    }, 2000);
  };

  const renderDashboardTab = () => (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <div className="card" style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #4caf50' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <h3 style={{ color: '#2e7d32', margin: 0 }}>
              <Database size={24} /> Status Koneksi
            </h3>
            {syncStatus === 'connected' && (
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#4caf50',
                animation: 'pulse 2s infinite'
              }}></div>
            )}
            {syncStatus === 'syncing' && (
              <RefreshCw size={20} style={{ color: '#2196f3', animation: 'spin 1s linear infinite' }} />
            )}
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32', marginBottom: '10px' }}>
            {syncStatus === 'connected' ? 'Terhubung' : 'Sinkronisasi...'}
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
            TNI Health Command Database<br/>
            Last sync: 15 Jan 2024 11:00
          </p>
          <button className="btn-primary" style={{ marginTop: '15px', width: '100%' }} onClick={handleManualSync}>
            <RefreshCw size={16} /> Sinkronisasi Manual
          </button>
        </div>

        <div className="card" style={{ backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3' }}>
          <h3 style={{ color: '#1565c0', marginTop: 0 }}>
            <Shield size={24} /> TNI AD
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1565c0' }}>
            2,150
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Personel terdaftar</p>
          <div style={{ marginTop: '10px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Fit: 2,050 (95.3%)</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#e1f5fe', borderLeft: '4px solid #0277bd' }}>
          <h3 style={{ color: '#01579b', marginTop: 0 }}>
            <Anchor size={24} /> TNI AL
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#01579b' }}>
            1,850
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Personel terdaftar</p>
          <div style={{ marginTop: '10px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Fit: 1,750 (94.6%)</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#e0f2f1', borderLeft: '4px solid #00897b' }}>
          <h3 style={{ color: '#00695c', marginTop: 0 }}>
            <Plane size={24} /> TNI AU
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#00695c' }}>
            1,600
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Personel terdaftar</p>
          <div style={{ marginTop: '10px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Fit: 1,540 (96.3%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3><Activity size={20} /> Tingkat Kesiapan Medis per Kesatuan</h3>
        <TableWithExport data={readinessStatus} filename="Kesiapan_Medis_Kesatuan">
          <table>
            <thead>
              <tr>
                <th>Kesatuan</th>
                <th>Total Personel</th>
                <th>Medically Fit</th>
                <th>Under Treatment</th>
                <th>Not Fit</th>
                <th>Persentase Fit</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {readinessStatus.map((unit, idx) => (
                <tr key={idx}>
                  <td><strong>{unit.kesatuan}</strong></td>
                  <td>{unit.totalPersonnel}</td>
                  <td><span className="badge badge-success">{unit.medicallyFit}</span></td>
                  <td><span className="badge badge-warning">{unit.underTreatment}</span></td>
                  <td><span className="badge badge-danger">{unit.notFit}</span></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ 
                        width: '100px', 
                        height: '8px', 
                        backgroundColor: '#e0e0e0', 
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${unit.percentageFit}%`,
                          height: '100%',
                          backgroundColor: unit.percentageFit >= 95 ? '#4caf50' : unit.percentageFit >= 90 ? '#ff9800' : '#f44336',
                          transition: 'width 0.3s'
                        }} />
                      </div>
                      <strong>{unit.percentageFit}%</strong>
                    </div>
                  </td>
                  <td>{unit.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWithExport>
      </div>
    </div>
  );

  const renderPersonelTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3' }}>
        <h3 style={{ marginTop: 0 }}><Users size={20} /> Data Personel Militer</h3>
        <p>Data personel militer yang terdaftar dan telah disinkronisasi dengan TNI Health Command Database</p>
      </div>

      <TableWithExport data={personnelData} filename="Data_Personel_TNI">
        <table>
          <thead>
            <tr>
              <th>NRP</th>
              <th>Nama</th>
              <th>Pangkat</th>
              <th>Korps</th>
              <th>Kesatuan</th>
              <th>Gol. Darah</th>
              <th>Status</th>
              <th>Medical Status</th>
              <th>Last Checkup</th>
              <th>Last Sync</th>
            </tr>
          </thead>
          <tbody>
            {personnelData.map((person) => (
              <tr key={person.nrp}>
                <td><strong>{person.nrp}</strong></td>
                <td>{person.nama}</td>
                <td>{person.pangkat}</td>
                <td>{person.korps}</td>
                <td>{person.kesatuan}</td>
                <td><span className="badge badge-info">{person.golDarah}</span></td>
                <td><span className="badge badge-success">{person.status}</span></td>
                <td>
                  <span className={`badge ${
                    person.medicalStatus === 'Fit' ? 'badge-success' :
                    person.medicalStatus === 'Under Treatment' ? 'badge-warning' :
                    person.medicalStatus === 'Recovery' ? 'badge-info' : 'badge-danger'
                  }`}>
                    {person.medicalStatus}
                  </span>
                </td>
                <td>{person.lastCheckup}</td>
                <td style={{ fontSize: '12px', color: '#666' }}>{person.lastSync}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderRekamMedisTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#fff3e0', borderLeft: '4px solid #ff9800' }}>
        <h3 style={{ marginTop: 0 }}><Activity size={20} /> Sinkronisasi Rekam Medis</h3>
        <p>Data rekam medis otomatis disinkronkan dengan TNI Health Command setiap kali ada pemeriksaan atau tindakan medis</p>
        <div style={{ marginTop: '10px' }}>
          <strong>Pending Sync:</strong> {medicalRecords.filter(m => m.statusSync === 'Pending').length} record
          {medicalRecords.filter(m => m.statusSync === 'Pending').length > 0 && (
            <button className="btn-warning" style={{ marginLeft: '15px', fontSize: '13px', padding: '6px 12px' }}>
              <RefreshCw size={14} /> Sync Sekarang
            </button>
          )}
        </div>
      </div>

      <TableWithExport data={medicalRecords} filename="Rekam_Medis_TNI">
        <table>
          <thead>
            <tr>
              <th>NRP</th>
              <th>Nama</th>
              <th>Jenis Pemeriksaan</th>
              <th>Diagnosa</th>
              <th>Tanggal</th>
              <th>Dokter</th>
              <th>Tindakan</th>
              <th>Status Sync</th>
              <th>Sync Date</th>
            </tr>
          </thead>
          <tbody>
            {medicalRecords.map((record, idx) => (
              <tr key={idx}>
                <td><strong>{record.nrp}</strong></td>
                <td>{record.nama}</td>
                <td>
                  <span className={`badge ${
                    record.jnsPeriksa === 'Rawat Jalan' ? 'badge-info' :
                    record.jnsPeriksa === 'Rawat Inap' ? 'badge-warning' :
                    'badge-secondary'
                  }`}>
                    {record.jnsPeriksa}
                  </span>
                </td>
                <td>{record.diagnosa}</td>
                <td>{record.tglPeriksa}</td>
                <td>{record.dokter}</td>
                <td>{record.tindakan}</td>
                <td>
                  {record.statusSync === 'Synced' ? (
                    <span className="badge badge-success"><CheckCircle size={14} /> Synced</span>
                  ) : (
                    <span className="badge badge-warning"><AlertTriangle size={14} /> Pending</span>
                  )}
                </td>
                <td style={{ fontSize: '12px', color: '#666' }}>{record.syncDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderLogTab = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3><Database size={20} /> Log Sinkronisasi</h3>
        <button className="btn-secondary">
          <Download size={16} /> Export Log
        </button>
      </div>

      <TableWithExport data={syncLogs} filename="Log_Sinkronisasi_TNI">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>NRP</th>
              <th>Status</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {syncLogs.map((log, idx) => (
              <tr key={idx}>
                <td style={{ fontSize: '12px', fontFamily: 'monospace' }}>{log.timestamp}</td>
                <td>
                  <span className="badge badge-info">{log.action}</span>
                </td>
                <td><strong>{log.nrp}</strong></td>
                <td>
                  {log.status === 'SUCCESS' ? (
                    <span className="badge badge-success"><CheckCircle size={14} /> {log.status}</span>
                  ) : (
                    <span className="badge badge-danger">ERROR</span>
                  )}
                </td>
                <td style={{ fontSize: '13px' }}>{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderKonfigurasiTab = () => (
    <div className="card">
      <h2><Shield size={24} /> Konfigurasi Integrasi TNI Health Command</h2>
      
      <div style={{ marginTop: '20px' }}>
        <h3>1. Koneksi Database</h3>
        <div className="form-group">
          <label>Server URL</label>
          <input type="text" value="https://health.tni.mil.id/api/v2" readOnly />
        </div>
        <div className="form-group">
          <label>API Key</label>
          <input type="password" value="********************************" readOnly />
        </div>
        <div className="form-group">
          <label>Hospital Code</label>
          <input type="text" value="TRIMATRA-001" readOnly />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#4caf50',
            animation: 'pulse 2s infinite'
          }}></div>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Koneksi Aktif</span>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>2. Pengaturan Sinkronisasi</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Auto-sync data personel (setiap 1 jam)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Auto-sync rekam medis (real-time)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Auto-sync kesiapan medis (setiap 6 jam)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Notifikasi untuk data tidak tersinkronisasi</span>
          </label>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>3. Data yang Disinkronkan</h3>
        <ul>
          <li>Data Personel (NRP, Nama, Pangkat, Kesatuan, Gol. Darah)</li>
          <li>Rekam Medis (Diagnosa, Tindakan, Obat, Hasil Lab)</li>
          <li>Medical Checkup (Rikkes, MCU, Fit-to-Fly)</li>
          <li>Kesiapan Medis (Medical Readiness per Kesatuan)</li>
          <li>Riwayat Vaksinasi</li>
          <li>Status Kesehatan Real-time</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>4. Keamanan & Compliance</h3>
        <ul>
          <li>Enkripsi AES-256 untuk transmisi data</li>
          <li>Compliance dengan Peraturan TNI tentang data personel</li>
          <li>Audit trail lengkap setiap akses data</li>
          <li>VPN dedikasi untuk koneksi ke TNI Health Command</li>
          <li>Two-factor authentication untuk admin</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Shield size={32} /> TNI Health Command Integration</h1>
        <p>Integrasi dengan database kesehatan militer TNI untuk sinkronisasi data personel dan rekam medis</p>
      </div>

      <div className="stats-grid">
        {statistics.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Activity size={18} /> Dashboard
        </button>
        <button
          className={`tab ${activeTab === 'personel' ? 'active' : ''}`}
          onClick={() => setActiveTab('personel')}
        >
          <Users size={18} /> Data Personel
        </button>
        <button
          className={`tab ${activeTab === 'rekammedis' ? 'active' : ''}`}
          onClick={() => setActiveTab('rekammedis')}
        >
          <Activity size={18} /> Rekam Medis
        </button>
        <button
          className={`tab ${activeTab === 'log' ? 'active' : ''}`}
          onClick={() => setActiveTab('log')}
        >
          <Database size={18} /> Log Sync
        </button>
        <button
          className={`tab ${activeTab === 'konfigurasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('konfigurasi')}
        >
          <Shield size={18} /> Konfigurasi
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'personel' && renderPersonelTab()}
        {activeTab === 'rekammedis' && renderRekamMedisTab()}
        {activeTab === 'log' && renderLogTab()}
        {activeTab === 'konfigurasi' && renderKonfigurasiTab()}
      </div>
    </div>
  );
};

export default IntegrasiTNI;
