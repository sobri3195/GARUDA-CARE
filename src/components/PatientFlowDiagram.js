import React, { useState } from 'react';
import { 
  UserPlus, 
  ClipboardList, 
  Stethoscope, 
  TestTube, 
  Camera, 
  Pill, 
  Bed, 
  FileText, 
  CreditCard, 
  LogOut,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const PatientFlowDiagram = () => {
  const [activeStep, setActiveStep] = useState(null);

  const flowSteps = [
    {
      id: 1,
      title: 'Registrasi',
      subtitle: 'Pendaftaran Pasien',
      icon: UserPlus,
      description: 'Pasien mendaftar di loket registrasi, mengisi data diri, dan mendapatkan nomor rekam medis',
      color: '#003d82',
      bgColor: '#e6f0ff',
      stats: { today: 243, waiting: 12 },
      link: '/registrasi'
    },
    {
      id: 2,
      title: 'Anamnesis',
      subtitle: 'Pemeriksaan Awal',
      icon: ClipboardList,
      description: 'Perawat melakukan pengukuran vital signs (tekanan darah, suhu, nadi) dan anamnesis awal',
      color: '#10b981',
      bgColor: '#d1fae5',
      stats: { today: 238, waiting: 8 },
      link: '/keperawatan'
    },
    {
      id: 3,
      title: 'Pemeriksaan Dokter',
      subtitle: 'Konsultasi Medis',
      icon: Stethoscope,
      description: 'Dokter memeriksa pasien, menegakkan diagnosis, dan memberikan resep atau rujukan pemeriksaan',
      color: '#0066cc',
      bgColor: '#dbeafe',
      stats: { today: 235, waiting: 15 },
      link: '/rawat-jalan'
    },
    {
      id: 4,
      title: 'Laboratorium',
      subtitle: 'Pemeriksaan Lab',
      icon: TestTube,
      description: 'Pengambilan sampel darah/urine dan pemeriksaan laboratorium sesuai permintaan dokter',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      stats: { today: 156, waiting: 7 },
      link: '/laboratorium',
      optional: true
    },
    {
      id: 5,
      title: 'Radiologi',
      subtitle: 'Pemeriksaan Imaging',
      icon: Camera,
      description: 'Pemeriksaan radiologi (Rontgen, CT-Scan, USG, MRI) sesuai indikasi medis',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      stats: { today: 89, waiting: 5 },
      link: '/radiologi',
      optional: true
    },
    {
      id: 6,
      title: 'Farmasi',
      subtitle: 'Pengambilan Obat',
      icon: Pill,
      description: 'Pasien mengambil obat sesuai resep dokter di apotek rumah sakit',
      color: '#ec4899',
      bgColor: '#fce7f3',
      stats: { today: 198, waiting: 18 },
      link: '/farmasi'
    },
    {
      id: 7,
      title: 'Rawat Inap',
      subtitle: 'Perawatan',
      icon: Bed,
      description: 'Pasien yang memerlukan perawatan lebih lanjut dirawat di ruang inap',
      color: '#ef4444',
      bgColor: '#fee2e2',
      stats: { today: 79, bed: '78%' },
      link: '/rawat-inap',
      optional: true
    },
    {
      id: 8,
      title: 'Resume Medis',
      subtitle: 'Dokumentasi',
      icon: FileText,
      description: 'Petugas rekam medis melengkapi dokumentasi dan resume pelayanan pasien',
      color: '#6366f1',
      bgColor: '#e0e7ff',
      stats: { today: 220, completed: 215 },
      link: '/rekam-medik'
    },
    {
      id: 9,
      title: 'Pembayaran',
      subtitle: 'Kasir',
      icon: CreditCard,
      description: 'Pasien melakukan pembayaran biaya pelayanan di kasir sebelum pulang',
      color: '#d4af37',
      bgColor: '#fef9e7',
      stats: { today: 225, total: 'Rp 156 juta' },
      link: '/kasir'
    },
    {
      id: 10,
      title: 'Pasien Pulang',
      subtitle: 'Selesai',
      icon: LogOut,
      description: 'Pasien pulang dengan membawa obat, surat kontrol, dan dokumentasi medis',
      color: '#10b981',
      bgColor: '#d1fae5',
      stats: { today: 218, satisfaction: '4.7/5' },
      link: '/'
    }
  ];

  const renderFlowItem = (step, index) => {
    const Icon = step.icon;
    const isActive = activeStep === step.id;
    const isOptional = step.optional;

    return (
      <div key={step.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            position: 'relative',
            padding: '20px',
            minWidth: '200px',
            backgroundColor: isActive ? step.color : step.bgColor,
            borderRadius: '12px',
            border: `3px solid ${step.color}`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isActive ? `0 8px 16px ${step.color}40` : '0 2px 8px rgba(0,0,0,0.1)',
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setActiveStep(step.id)}
          onMouseLeave={() => setActiveStep(null)}
        >
          {isOptional && (
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: '#f59e0b',
              color: 'white',
              fontSize: '10px',
              padding: '4px 8px',
              borderRadius: '12px',
              fontWeight: 'bold'
            }}>
              Opsional
            </div>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '12px' }}>
            <div style={{
              backgroundColor: isActive ? 'white' : step.color,
              color: isActive ? step.color : 'white',
              padding: '12px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}>
              <Icon size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '10px',
                color: isActive ? 'white' : step.color,
                fontWeight: '600',
                marginBottom: '2px',
                opacity: 0.8
              }}>
                Tahap {step.id}
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: isActive ? 'white' : '#1f2937',
                marginBottom: '2px'
              }}>
                {step.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: isActive ? 'rgba(255,255,255,0.9)' : '#6b7280',
                fontWeight: '500'
              }}>
                {step.subtitle}
              </div>
            </div>
          </div>

          {isActive && (
            <div style={{
              fontSize: '13px',
              color: 'white',
              lineHeight: '1.5',
              marginTop: '8px',
              paddingTop: '12px',
              borderTop: '2px solid rgba(255,255,255,0.3)'
            }}>
              {step.description}
            </div>
          )}

          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '12px',
            flexWrap: 'wrap'
          }}>
            {Object.entries(step.stats).map(([key, value]) => (
              <div
                key={key}
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'white',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: isActive ? 'white' : step.color,
                  border: `1px solid ${isActive ? 'rgba(255,255,255,0.3)' : step.color + '30'}`
                }}
              >
                {key === 'today' && '📊 Hari ini: '}
                {key === 'waiting' && '⏳ Menunggu: '}
                {key === 'bed' && '🛏️ Okupansi: '}
                {key === 'completed' && '✅ Selesai: '}
                {key === 'total' && '💰 Total: '}
                {key === 'satisfaction' && '⭐ Rating: '}
                {value}
              </div>
            ))}
          </div>
        </div>

        {index < flowSteps.length - 1 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '12px 0',
            color: step.color
          }}>
            <ArrowRight size={32} strokeWidth={3} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div className="card-header" style={{ 
        background: 'linear-gradient(135deg, #003d82 0%, #0066cc 100%)',
        color: 'white',
        padding: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 className="card-title" style={{ color: 'white', fontSize: '24px', marginBottom: '8px' }}>
              🏥 Alur Pelayanan Pasien RS Trimatra
            </h2>
            <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>
              Visualisasi lengkap perjalanan pasien dari registrasi hingga pulang
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>Total Pasien Hari Ini</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>243</div>
          </div>
        </div>
      </div>
      <div className="card-body" style={{ padding: '30px', overflowX: 'auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          minWidth: 'fit-content'
        }}>
          {flowSteps.map((step, index) => renderFlowItem(step, index))}
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          border: '2px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <AlertCircle size={24} color="#003d82" />
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0, color: '#003d82' }}>
              Informasi Penting
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
              <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: '#4b5563' }}>
                <strong>Tahap Opsional:</strong> Laboratorium, Radiologi, dan Rawat Inap hanya dilakukan sesuai indikasi medis
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
              <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: '#4b5563' }}>
                <strong>Estimasi Waktu:</strong> Rata-rata waktu pelayanan pasien rawat jalan adalah 2-3 jam
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
              <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: '#4b5563' }}>
                <strong>Pasien IGD:</strong> Pasien gawat darurat diprioritaskan dan mengikuti alur khusus
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
              <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: '#4b5563' }}>
                <strong>Asuransi BPJS:</strong> Pasien dengan jaminan BPJS tidak perlu ke kasir untuk pembayaran
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFlowDiagram;
