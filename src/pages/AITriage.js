import React, { useState } from 'react';
import { Brain, Activity, AlertCircle, Clock, User, Heart, Thermometer, Droplet, Wind, TrendingUp } from 'lucide-react';

const AITriage = () => {
  const [activeTab, setActiveTab] = useState('queue');

  const triageQueue = [
    { 
      id: 1, 
      no: 'IGD-001', 
      name: 'Serda Budi Santoso', 
      nrp: '528901234',
      age: 35, 
      complaint: 'Nyeri dada menjalar ke lengan kiri, sesak napas', 
      vitalSigns: { hr: 110, bp: '160/100', rr: 28, temp: 37.2, spo2: 92 },
      aiPriority: 'P1 - Resusitasi',
      aiScore: 95,
      aiDiagnosis: 'Suspected Acute Coronary Syndrome (STEMI)',
      recommendation: 'SEGERA: EKG 12-lead, Akses IV, Oksigen, Aspirin, Rujuk Kardiologi STAT',
      waitTime: '2 menit',
      status: 'Sedang Ditangani'
    },
    { 
      id: 2, 
      no: 'IGD-002', 
      name: 'Kopda Siti Aminah', 
      nrp: '528901235',
      age: 28, 
      complaint: 'Luka bakar grade 2 pada lengan kanan 15% TBSA', 
      vitalSigns: { hr: 95, bp: '120/80', rr: 20, temp: 36.8, spo2: 98 },
      aiPriority: 'P2 - Emergensi',
      aiScore: 78,
      aiDiagnosis: 'Moderate Burn Injury',
      recommendation: 'Wound care, IV fluid resuscitation (Parkland formula), Pain management',
      waitTime: '8 menit',
      status: 'Menunggu'
    },
    { 
      id: 3, 
      no: 'IGD-003', 
      name: 'Letda Ahmad Wijaya', 
      nrp: '528901236',
      age: 32, 
      complaint: 'Fraktur femur dekstra post kecelakaan motor', 
      vitalSigns: { hr: 88, bp: '130/85', rr: 18, temp: 36.5, spo2: 99 },
      aiPriority: 'P2 - Emergensi',
      aiScore: 72,
      aiDiagnosis: 'Closed Femoral Fracture',
      recommendation: 'X-ray, Splinting, IV analgesia, Konsul Ortopedi',
      waitTime: '15 menit',
      status: 'Menunggu'
    },
    { 
      id: 4, 
      no: 'IGD-004', 
      name: 'Pratu Joko Prabowo', 
      nrp: '528901237',
      age: 24, 
      complaint: 'Demam tinggi 39.5°C, nyeri kepala, mual', 
      vitalSigns: { hr: 98, bp: '110/70', rr: 22, temp: 39.5, spo2: 97 },
      aiPriority: 'P3 - Urgensi',
      aiScore: 58,
      aiDiagnosis: 'Suspected Dengue Fever vs Typhoid',
      recommendation: 'Lab: CBC, NS1 antigen, Widal, IV fluid, Antipiretik',
      waitTime: '22 menit',
      status: 'Menunggu'
    },
    { 
      id: 5, 
      no: 'IGD-005', 
      name: 'Sertu Rina Hartati', 
      nrp: '528901238',
      age: 30, 
      complaint: 'Gastritis akut, nyeri epigastrik sedang', 
      vitalSigns: { hr: 78, bp: '120/75', rr: 16, temp: 36.7, spo2: 99 },
      aiPriority: 'P4 - Semi Urgensi',
      aiScore: 42,
      aiDiagnosis: 'Acute Gastritis',
      recommendation: 'PPI, Antasida, Observasi 2 jam',
      waitTime: '35 menit',
      status: 'Menunggu'
    },
    { 
      id: 6, 
      no: 'IGD-006', 
      name: 'Koptu Maya Kusuma', 
      nrp: '528901239',
      age: 26, 
      complaint: 'Batuk pilek 3 hari, tidak ada demam', 
      vitalSigns: { hr: 72, bp: '115/70', rr: 16, temp: 36.5, spo2: 99 },
      aiPriority: 'P5 - Non Urgensi',
      aiScore: 25,
      aiDiagnosis: 'Upper Respiratory Tract Infection (URTI)',
      recommendation: 'Symptomatic treatment, Rujuk ke Poli',
      waitTime: '48 menit',
      status: 'Menunggu'
    }
  ];

  const statistics = [
    { label: 'Total Pasien di Queue', value: '6', icon: User, color: '#003d82' },
    { label: 'P1 - Resusitasi', value: '1', icon: AlertCircle, color: '#e74c3c' },
    { label: 'P2 - Emergensi', value: '2', icon: Activity, color: '#e67e22' },
    { label: 'Waktu Tunggu Rata-rata', value: '21 min', icon: Clock, color: '#d4af37' }
  ];

  const aiInsights = [
    { type: 'Critical', message: 'Pasien IGD-001 memerlukan intervensi SEGERA - Suspected STEMI', priority: 'urgent' },
    { type: 'Warning', message: '2 pasien dengan prioritas P2 menunggu > 10 menit', priority: 'warning' },
    { type: 'Info', message: 'Prediksi lonjakan pasien pada jam 18:00-20:00', priority: 'info' }
  ];

  const getPriorityColor = (priority) => {
    if (priority.includes('P1')) return '#e74c3c';
    if (priority.includes('P2')) return '#e67e22';
    if (priority.includes('P3')) return '#f39c12';
    if (priority.includes('P4')) return '#3498db';
    return '#95a5a6';
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Brain size={32} /> AI Triage Dashboard</h1>
        <p>Sistem triage otomatis berbasis AI untuk prioritisasi pasien IGD secara real-time</p>
      </div>

      <div className="alert alert-info" style={{ marginBottom: '20px' }}>
        <Brain size={20} />
        <span>
          <strong>AI-Powered Triage:</strong> Model AI menganalisis chief complaint, vital signs, dan data klinis 
          untuk memberikan rekomendasi prioritas dan diagnosis diferensial secara otomatis.
        </span>
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        {aiInsights.map((insight, index) => (
          <div 
            key={index}
            className={`alert alert-${
              insight.priority === 'urgent' ? 'danger' :
              insight.priority === 'warning' ? 'warning' :
              'info'
            }`}
            style={{ margin: 0 }}
          >
            <AlertCircle size={18} />
            <div>
              <strong>{insight.type}:</strong> {insight.message}
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'queue' ? 'active' : ''}`}
          onClick={() => setActiveTab('queue')}
        >
          <Activity size={18} />
          AI Triage Queue
        </button>
        <button 
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <TrendingUp size={18} />
          Analytics
        </button>
      </div>

      {activeTab === 'queue' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Antrian Triage Otomatis</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {triageQueue.map((patient) => (
              <div 
                key={patient.id}
                style={{
                  padding: '20px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: `6px solid ${getPriorityColor(patient.aiPriority)}`,
                  boxShadow: patient.aiPriority.includes('P1') ? '0 0 15px rgba(231, 76, 60, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <h4 style={{ margin: 0, fontSize: '18px' }}>{patient.no} - {patient.name}</h4>
                      <span className="badge badge-info">{patient.age} tahun</span>
                      <span style={{ fontSize: '13px', color: '#666' }}>NRP: {patient.nrp}</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>
                      <strong>Keluhan:</strong> {patient.complaint}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      backgroundColor: getPriorityColor(patient.aiPriority),
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginBottom: '8px'
                    }}>
                      {patient.aiPriority}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      AI Score: {patient.aiScore}/100
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '15px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center' }}>
                    <Heart size={16} style={{ marginBottom: '4px', color: '#e74c3c' }} />
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{patient.vitalSigns.hr}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>HR (bpm)</div>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center' }}>
                    <Activity size={16} style={{ marginBottom: '4px', color: '#e74c3c' }} />
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{patient.vitalSigns.bp}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>BP (mmHg)</div>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center' }}>
                    <Wind size={16} style={{ marginBottom: '4px', color: '#3498db' }} />
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{patient.vitalSigns.rr}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>RR (/min)</div>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center' }}>
                    <Thermometer size={16} style={{ marginBottom: '4px', color: '#e67e22' }} />
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{patient.vitalSigns.temp}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Temp (°C)</div>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center' }}>
                    <Droplet size={16} style={{ marginBottom: '4px', color: '#3498db' }} />
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{patient.vitalSigns.spo2}%</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>SpO2</div>
                  </div>
                </div>

                <div style={{ 
                  padding: '12px', 
                  backgroundColor: 'white', 
                  borderRadius: '6px',
                  marginBottom: '10px',
                  borderLeft: '3px solid #003d82'
                }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#003d82' }}>
                    <Brain size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    AI Diagnosis:
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {patient.aiDiagnosis}
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    <strong>Rekomendasi:</strong> {patient.recommendation}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span className={`badge ${
                      patient.status === 'Sedang Ditangani' ? 'badge-info' : 'badge-warning'
                    }`}>
                      {patient.status}
                    </span>
                    <span style={{ fontSize: '13px', color: '#666' }}>
                      <Clock size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      Waktu tunggu: {patient.waitTime}
                    </span>
                  </div>
                  {patient.status === 'Menunggu' && (
                    <button className="btn-primary" style={{ padding: '8px 16px' }}>
                      Panggil Pasien
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Distribusi Prioritas Triage</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { priority: 'P1 - Resusitasi', count: 1, color: '#e74c3c' },
                { priority: 'P2 - Emergensi', count: 2, color: '#e67e22' },
                { priority: 'P3 - Urgensi', count: 1, color: '#f39c12' },
                { priority: 'P4 - Semi Urgensi', count: 1, color: '#3498db' },
                { priority: 'P5 - Non Urgensi', count: 1, color: '#95a5a6' }
              ].map((item) => (
                <div key={item.priority} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ minWidth: '150px', fontWeight: '600' }}>{item.priority}</div>
                  <div style={{ flex: 1, height: '30px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        backgroundColor: item.color,
                        width: `${(item.count / 6) * 100}%`,
                        transition: 'width 0.5s'
                      }}
                    />
                  </div>
                  <span style={{ minWidth: '40px', fontWeight: 'bold', fontSize: '18px' }}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Performa AI Model</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { metric: 'Akurasi Triage', value: '96.8%', color: '#27ae60' },
                { metric: 'Sensitivity (P1/P2)', value: '98.5%', color: '#27ae60' },
                { metric: 'Specificity', value: '94.2%', color: '#27ae60' },
                { metric: 'Rata-rata Waktu Proses', value: '< 5 detik', color: '#3498db' }
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontWeight: '600' }}>{item.metric}</span>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: item.color }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ marginBottom: '20px' }}>Rekomendasi Improvement</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { text: 'Tambah 2 perawat triage pada shift malam untuk menangani lonjakan', type: 'warning' },
                { text: 'Model AI mendeteksi 3 kasus yang perlu re-assessment dalam 30 menit', type: 'info' },
                { text: 'Waktu tunggu P2 melebihi target (>15 menit) - Optimalkan alur pasien', type: 'warning' }
              ].map((rec, index) => (
                <div key={index} className={`alert alert-${rec.type}`} style={{ margin: 0 }}>
                  <AlertCircle size={18} />
                  <span>{rec.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITriage;
