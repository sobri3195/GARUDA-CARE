import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, AlertTriangle, TrendingUp, FileText, Users, Award, Clock } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const AuditCompliance = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const audits = [
    { 
      id: 'AUD-001', 
      title: 'Audit Keselamatan Pasien', 
      type: 'Internal', 
      area: 'Pelayanan', 
      date: '15 Jan 2024',
      auditor: 'Tim Mutu RS',
      status: 'Selesai',
      score: 92,
      findings: 3,
      critical: 0,
      major: 1,
      minor: 2
    },
    { 
      id: 'AUD-002', 
      title: 'Audit Pengendalian Infeksi', 
      type: 'Internal', 
      area: 'PPI', 
      date: '10 Jan 2024',
      auditor: 'Komite PPI',
      status: 'Selesai',
      score: 88,
      findings: 5,
      critical: 0,
      major: 2,
      minor: 3
    },
    { 
      id: 'AUD-003', 
      title: 'Audit Farmasi & LASA', 
      type: 'Internal', 
      area: 'Farmasi', 
      date: '08 Jan 2024',
      auditor: 'Apt. Rina Kusuma',
      status: 'Follow Up',
      score: 85,
      findings: 6,
      critical: 1,
      major: 2,
      minor: 3
    },
    { 
      id: 'AUD-004', 
      title: 'Audit Akreditasi JCI Mock Survey', 
      type: 'Eksternal', 
      area: 'Hospital-wide', 
      date: '05 Jan 2024',
      auditor: 'Konsultan JCI',
      status: 'Progress',
      score: 90,
      findings: 8,
      critical: 0,
      major: 3,
      minor: 5
    },
    { 
      id: 'AUD-005', 
      title: 'Audit ISO 9001:2015', 
      type: 'Surveillance', 
      area: 'Sistem Mutu', 
      date: '20 Des 2023',
      auditor: 'Badan Sertifikasi ISO',
      status: 'Selesai',
      score: 94,
      findings: 2,
      critical: 0,
      major: 0,
      minor: 2
    }
  ];

  const compliance = [
    { indicator: 'Hand Hygiene Compliance', target: 95, actual: 93, unit: '%', status: 'warning', trend: '+2%', dept: 'Hospital-wide' },
    { indicator: 'Identifikasi Pasien (2 Identifier)', target: 100, actual: 98, unit: '%', status: 'warning', trend: '+1%', dept: 'Pelayanan' },
    { indicator: 'Penggunaan APD Lengkap', target: 100, actual: 96, unit: '%', status: 'warning', trend: '+3%', dept: 'PPI' },
    { indicator: 'Kepatuhan Clinical Pathway', target: 80, actual: 87, unit: '%', status: 'success', trend: '+5%', dept: 'Medis' },
    { indicator: 'Kelengkapan Rekam Medis < 24 jam', target: 100, actual: 92, unit: '%', status: 'warning', trend: '-1%', dept: 'Rekam Medis' },
    { indicator: 'Waktu Respons Resusitasi', target: 5, actual: 4.2, unit: 'menit', status: 'success', trend: '-0.3', dept: 'IGD' },
    { indicator: 'Medication Error Rate', target: 0.5, actual: 0.3, unit: '%', status: 'success', trend: '-0.1%', dept: 'Farmasi' },
    { indicator: 'Surgical Safety Checklist', target: 100, actual: 100, unit: '%', status: 'success', trend: '0%', dept: 'Bedah Sentral' }
  ];

  const findings = [
    { 
      id: 'FND-001',
      auditId: 'AUD-003',
      category: 'Critical',
      area: 'Farmasi',
      description: 'Obat high-alert tidak tersimpan di tempat terkunci',
      recommendation: 'Segera pindahkan ke lemari khusus high-alert dengan double-lock',
      pic: 'Kepala Instalasi Farmasi',
      dueDate: '20 Jan 2024',
      status: 'Open',
      progress: 60
    },
    { 
      id: 'FND-002',
      auditId: 'AUD-001',
      category: 'Major',
      area: 'Rawat Inap',
      description: 'Beberapa nurse station tidak melakukan verifikasi 2 identitas',
      recommendation: 'Sosialisasi ulang dan monitoring kepatuhan',
      pic: 'Kepala Bidang Keperawatan',
      dueDate: '25 Jan 2024',
      status: 'In Progress',
      progress: 75
    },
    { 
      id: 'FND-003',
      auditId: 'AUD-002',
      category: 'Major',
      area: 'ICU',
      description: 'Kepatuhan hand hygiene 5 moments belum optimal',
      recommendation: 'Pelatihan dan audit hand hygiene berkala',
      pic: 'Komite PPI',
      dueDate: '30 Jan 2024',
      status: 'In Progress',
      progress: 40
    },
    { 
      id: 'FND-004',
      auditId: 'AUD-001',
      category: 'Minor',
      area: 'Poliklinik',
      description: 'Dokumentasi informed consent kurang lengkap',
      recommendation: 'Update template dan training staff',
      pic: 'Komite Medis',
      dueDate: '15 Feb 2024',
      status: 'Closed',
      progress: 100
    }
  ];

  const accreditation = [
    { standard: 'JCI Hospital 7th Edition', status: 'Berlaku', validUntil: '15 Okt 2025', score: 90, lastAudit: '15 Okt 2022' },
    { standard: 'ISO 9001:2015 Quality Management', status: 'Berlaku', validUntil: '20 Jun 2025', score: 94, lastAudit: '20 Des 2023' },
    { standard: 'ISO 14001:2015 Environmental', status: 'Berlaku', validUntil: '10 Mar 2025', score: 88, lastAudit: '10 Mar 2023' },
    { standard: 'KARS Paripurna', status: 'Berlaku', validUntil: '05 Des 2024', score: 92, lastAudit: '05 Des 2021' }
  ];

  const statistics = [
    { label: 'Total Audit', value: audits.length.toString(), icon: FileText, color: '#003d82' },
    { label: 'Compliance Rate', value: '92%', icon: CheckCircle, color: '#27ae60' },
    { label: 'Open Findings', value: findings.filter(f => f.status !== 'Closed').length.toString(), icon: AlertTriangle, color: '#f39c12' },
    { label: 'Sertifikasi Aktif', value: accreditation.length.toString(), icon: Award, color: '#d4af37' }
  ];

  const renderDashboardTab = () => (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <div className="card" style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #4caf50' }}>
          <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
            <TrendingUp size={24} /> Trend Compliance
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2e7d32' }}>
            +4.5%
          </div>
          <p style={{ margin: '10px 0 0 0', color: '#666' }}>Peningkatan dari bulan lalu</p>
        </div>

        <div className="card" style={{ backgroundColor: '#fff3e0', borderLeft: '4px solid #ff9800' }}>
          <h3 style={{ color: '#e65100', marginTop: 0 }}>
            <Clock size={24} /> Audit Mendatang
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#e65100' }}>
            3
          </div>
          <p style={{ margin: '10px 0 0 0', color: '#666' }}>Dalam 30 hari ke depan</p>
        </div>

        <div className="card" style={{ backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3' }}>
          <h3 style={{ color: '#1565c0', marginTop: 0 }}>
            <Users size={24} /> Auditor Aktif
          </h3>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1565c0' }}>
            12
          </div>
          <p style={{ margin: '10px 0 0 0', color: '#666' }}>Tim audit internal & eksternal</p>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h3><Award size={20} /> Status Akreditasi & Sertifikasi</h3>
        <TableWithExport data={accreditation} filename="Status_Akreditasi">
          <table>
            <thead>
              <tr>
                <th>Standar</th>
                <th>Status</th>
                <th>Berlaku Hingga</th>
                <th>Skor Terakhir</th>
                <th>Audit Terakhir</th>
              </tr>
            </thead>
            <tbody>
              {accreditation.map((acc, idx) => (
                <tr key={idx}>
                  <td><strong>{acc.standard}</strong></td>
                  <td><span className="badge badge-success">{acc.status}</span></td>
                  <td>{acc.validUntil}</td>
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
                          width: `${acc.score}%`,
                          height: '100%',
                          backgroundColor: acc.score >= 90 ? '#4caf50' : acc.score >= 80 ? '#ff9800' : '#f44336',
                          transition: 'width 0.3s'
                        }} />
                      </div>
                      <strong>{acc.score}%</strong>
                    </div>
                  </td>
                  <td>{acc.lastAudit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWithExport>
      </div>
    </div>
  );

  const renderAuditTab = () => (
    <div>
      <TableWithExport data={audits} filename="Daftar_Audit">
        <table>
          <thead>
            <tr>
              <th>ID Audit</th>
              <th>Judul Audit</th>
              <th>Tipe</th>
              <th>Area</th>
              <th>Tanggal</th>
              <th>Auditor</th>
              <th>Status</th>
              <th>Skor</th>
              <th>Temuan</th>
            </tr>
          </thead>
          <tbody>
            {audits.map((audit) => (
              <tr key={audit.id}>
                <td><strong>{audit.id}</strong></td>
                <td>{audit.title}</td>
                <td>
                  <span className={`badge ${audit.type === 'Internal' ? 'badge-info' : 'badge-warning'}`}>
                    {audit.type}
                  </span>
                </td>
                <td>{audit.area}</td>
                <td>{audit.date}</td>
                <td>{audit.auditor}</td>
                <td>
                  <span className={`badge ${
                    audit.status === 'Selesai' ? 'badge-success' : 
                    audit.status === 'Progress' ? 'badge-info' : 'badge-warning'
                  }`}>
                    {audit.status}
                  </span>
                </td>
                <td>
                  <strong style={{ 
                    color: audit.score >= 90 ? '#4caf50' : audit.score >= 80 ? '#ff9800' : '#f44336' 
                  }}>
                    {audit.score}%
                  </strong>
                </td>
                <td>
                  <div style={{ fontSize: '12px' }}>
                    {audit.critical > 0 && <div style={{ color: '#f44336' }}>Critical: {audit.critical}</div>}
                    {audit.major > 0 && <div style={{ color: '#ff9800' }}>Major: {audit.major}</div>}
                    {audit.minor > 0 && <div style={{ color: '#2196f3' }}>Minor: {audit.minor}</div>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderComplianceTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3' }}>
        <h3 style={{ marginTop: 0 }}><TrendingUp size={20} /> Monitoring Indikator Mutu</h3>
        <p>Pemantauan real-time terhadap indikator kinerja mutu dan keselamatan pasien</p>
      </div>

      <TableWithExport data={compliance} filename="Indikator_Compliance">
        <table>
          <thead>
            <tr>
              <th>Indikator</th>
              <th>Departemen</th>
              <th>Target</th>
              <th>Aktual</th>
              <th>Status</th>
              <th>Trend</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {compliance.map((item, idx) => {
              const achieved = item.actual >= item.target;
              const percentage = (item.actual / item.target) * 100;
              
              return (
                <tr key={idx}>
                  <td><strong>{item.indicator}</strong></td>
                  <td>{item.dept}</td>
                  <td>{item.target}{item.unit}</td>
                  <td><strong>{item.actual}{item.unit}</strong></td>
                  <td>
                    <span className={`badge ${achieved ? 'badge-success' : 'badge-warning'}`}>
                      {achieved ? 'Tercapai' : 'Belum Tercapai'}
                    </span>
                  </td>
                  <td style={{ color: item.trend.startsWith('+') ? '#4caf50' : '#f44336' }}>
                    {item.trend}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ 
                        width: '120px', 
                        height: '10px', 
                        backgroundColor: '#e0e0e0', 
                        borderRadius: '5px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${Math.min(percentage, 100)}%`,
                          height: '100%',
                          backgroundColor: achieved ? '#4caf50' : '#ff9800',
                          transition: 'width 0.3s'
                        }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderTemuanTab = () => (
    <div>
      <TableWithExport data={findings} filename="Temuan_Audit">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Audit ID</th>
              <th>Kategori</th>
              <th>Area</th>
              <th>Deskripsi</th>
              <th>Rekomendasi</th>
              <th>PIC</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((finding) => (
              <tr key={finding.id}>
                <td><strong>{finding.id}</strong></td>
                <td>{finding.auditId}</td>
                <td>
                  <span className={`badge ${
                    finding.category === 'Critical' ? 'badge-danger' : 
                    finding.category === 'Major' ? 'badge-warning' : 'badge-info'
                  }`}>
                    {finding.category}
                  </span>
                </td>
                <td>{finding.area}</td>
                <td>{finding.description}</td>
                <td>{finding.recommendation}</td>
                <td>{finding.pic}</td>
                <td>{finding.dueDate}</td>
                <td>
                  <span className={`badge ${
                    finding.status === 'Closed' ? 'badge-success' : 
                    finding.status === 'In Progress' ? 'badge-info' : 'badge-warning'
                  }`}>
                    {finding.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '80px', 
                      height: '8px', 
                      backgroundColor: '#e0e0e0', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${finding.progress}%`,
                        height: '100%',
                        backgroundColor: finding.progress === 100 ? '#4caf50' : finding.progress >= 50 ? '#ff9800' : '#f44336',
                        transition: 'width 0.3s'
                      }} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{finding.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><ShieldCheck size={32} /> Audit & Compliance Tracker</h1>
        <p>Monitoring pelaksanaan audit, compliance indikator mutu, dan standar akreditasi rumah sakit</p>
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
          <Award size={18} /> Dashboard
        </button>
        <button
          className={`tab ${activeTab === 'audit' ? 'active' : ''}`}
          onClick={() => setActiveTab('audit')}
        >
          <FileText size={18} /> Daftar Audit
        </button>
        <button
          className={`tab ${activeTab === 'compliance' ? 'active' : ''}`}
          onClick={() => setActiveTab('compliance')}
        >
          <CheckCircle size={18} /> Indikator Compliance
        </button>
        <button
          className={`tab ${activeTab === 'temuan' ? 'active' : ''}`}
          onClick={() => setActiveTab('temuan')}
        >
          <AlertTriangle size={18} /> Temuan & Tindak Lanjut
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'audit' && renderAuditTab()}
        {activeTab === 'compliance' && renderComplianceTab()}
        {activeTab === 'temuan' && renderTemuanTab()}
      </div>
    </div>
  );
};

export default AuditCompliance;
