import React, { useState } from 'react';
import { User, Calendar, FileText, Receipt, MessageSquare, Star, Clock, Download, Eye, CheckCircle, AlertCircle } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const patientInfo = {
    name: 'Mayor Inf. Ahmad Hidayat',
    nrp: '528901234',
    rank: 'Mayor Infanteri',
    unit: 'Yon Armed 1/Kostrad',
    dob: '15 Maret 1985',
    blood: 'O+',
    phone: '081234567890',
    email: 'ahmad.hidayat@tni.mil.id',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat'
  };

  const appointments = [
    { id: 1, date: '15 Jan 2024', time: '09:00', doctor: 'Dr. Budi Santoso, Sp.PD', clinic: 'Poli Penyakit Dalam', status: 'Terkonfirmasi', type: 'Kontrol Rutin' },
    { id: 2, date: '22 Jan 2024', time: '14:30', doctor: 'Dr. Rina Hartati, Sp.JP', clinic: 'Poli Kardiologi', status: 'Menunggu', type: 'Konsultasi' },
    { id: 3, date: '05 Jan 2024', time: '10:00', doctor: 'Dr. Ahmad Wijaya, Sp.B', clinic: 'Poli Bedah', status: 'Selesai', type: 'Post-Operasi' }
  ];

  const labResults = [
    { id: 1, date: '03 Jan 2024', type: 'Darah Lengkap', status: 'Tersedia', doctor: 'Dr. Budi Santoso, Sp.PD' },
    { id: 2, date: '20 Des 2023', type: 'Profil Lipid', status: 'Tersedia', doctor: 'Dr. Rina Hartati, Sp.JP' },
    { id: 3, date: '10 Des 2023', type: 'Fungsi Hati', status: 'Tersedia', doctor: 'Dr. Budi Santoso, Sp.PD' }
  ];

  const prescriptions = [
    { id: 1, date: '05 Jan 2024', doctor: 'Dr. Budi Santoso, Sp.PD', medication: 'Metformin 500mg, Captopril 25mg', duration: '30 hari', status: 'Aktif' },
    { id: 2, date: '20 Des 2023', doctor: 'Dr. Rina Hartati, Sp.JP', medication: 'Simvastatin 20mg, Aspirin 100mg', duration: '30 hari', status: 'Selesai' }
  ];

  const bills = [
    { id: 1, date: '05 Jan 2024', description: 'Rawat Jalan - Konsultasi Spesialis', amount: 250000, payer: 'Askes TNI', status: 'Lunas' },
    { id: 2, date: '03 Jan 2024', description: 'Pemeriksaan Laboratorium', amount: 350000, payer: 'Askes TNI', status: 'Lunas' },
    { id: 3, date: '20 Des 2023', description: 'Rawat Jalan - Kardiologi', amount: 300000, payer: 'Askes TNI', status: 'Lunas' }
  ];

  const medicalHistory = [
    { date: '05 Jan 2024', diagnosis: 'Diabetes Mellitus Type 2 Terkontrol', doctor: 'Dr. Budi Santoso, Sp.PD', notes: 'Kondisi stabil, lanjutkan terapi' },
    { date: '20 Des 2023', diagnosis: 'Hipertensi Grade 1', doctor: 'Dr. Rina Hartati, Sp.JP', notes: 'Tekanan darah terkontrol' },
    { date: '15 Nov 2023', diagnosis: 'Post-Operasi Appendektomi', doctor: 'Dr. Ahmad Wijaya, Sp.B', notes: 'Pemulihan baik' }
  ];

  const statistics = [
    { label: 'Janji Temu Mendatang', value: '2', icon: Calendar, color: '#003d82' },
    { label: 'Hasil Lab Baru', value: '1', icon: FileText, color: '#27ae60' },
    { label: 'Resep Aktif', value: '1', icon: Receipt, color: '#d4af37' },
    { label: 'Total Kunjungan', value: '24', icon: Clock, color: '#e67e22' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><User size={32} /> Patient Portal - CRM Kesehatan</h1>
        <p>Portal pasien untuk akses informasi kesehatan, janji temu, dan komunikasi dengan tim medis</p>
      </div>

      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#003d82',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 'bold'
          }}>
            AH
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: '8px' }}>{patientInfo.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', fontSize: '14px' }}>
              <div><strong>NRP:</strong> {patientInfo.nrp}</div>
              <div><strong>Pangkat:</strong> {patientInfo.rank}</div>
              <div><strong>Kesatuan:</strong> {patientInfo.unit}</div>
              <div><strong>Tanggal Lahir:</strong> {patientInfo.dob}</div>
              <div><strong>Gol. Darah:</strong> {patientInfo.blood}</div>
              <div><strong>Telepon:</strong> {patientInfo.phone}</div>
            </div>
          </div>
        </div>
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
          <User size={18} />
          Dashboard
        </button>
        <button 
          className={`tab ${activeTab === 'appointments' ? 'active' : ''}`}
          onClick={() => setActiveTab('appointments')}
        >
          <Calendar size={18} />
          Janji Temu
        </button>
        <button 
          className={`tab ${activeTab === 'lab' ? 'active' : ''}`}
          onClick={() => setActiveTab('lab')}
        >
          <FileText size={18} />
          Hasil Lab
        </button>
        <button 
          className={`tab ${activeTab === 'prescriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescriptions')}
        >
          <Receipt size={18} />
          Resep
        </button>
        <button 
          className={`tab ${activeTab === 'bills' ? 'active' : ''}`}
          onClick={() => setActiveTab('bills')}
        >
          <Receipt size={18} />
          Tagihan
        </button>
        <button 
          className={`tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <Clock size={18} />
          Riwayat Medis
        </button>
        <button 
          className={`tab ${activeTab === 'feedback' ? 'active' : ''}`}
          onClick={() => setActiveTab('feedback')}
        >
          <Star size={18} />
          Feedback
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} />
              Janji Temu Terdekat
            </h3>
            {appointments.filter(a => a.status !== 'Selesai').map((apt) => (
              <div key={apt.id} style={{ 
                padding: '15px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                marginBottom: '10px',
                borderLeft: '4px solid #003d82'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>{apt.date} - {apt.time}</div>
                <div style={{ fontSize: '14px', marginBottom: '4px' }}>{apt.doctor}</div>
                <div style={{ fontSize: '13px', color: '#666' }}>{apt.clinic}</div>
                <span className={`badge ${apt.status === 'Terkonfirmasi' ? 'badge-success' : 'badge-warning'}`} style={{ marginTop: '8px' }}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Receipt size={20} />
              Resep Aktif
            </h3>
            {prescriptions.filter(p => p.status === 'Aktif').map((rx) => (
              <div key={rx.id} style={{ 
                padding: '15px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                marginBottom: '10px',
                borderLeft: '4px solid #d4af37'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>{rx.doctor}</div>
                <div style={{ fontSize: '14px', marginBottom: '4px' }}>{rx.medication}</div>
                <div style={{ fontSize: '13px', color: '#666' }}>Durasi: {rx.duration}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} />
              Hasil Lab Terbaru
            </h3>
            {labResults.slice(0, 2).map((lab) => (
              <div key={lab.id} style={{ 
                padding: '15px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>{lab.type}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{lab.date}</div>
                </div>
                <button className="btn-primary">
                  <Download size={16} />
                  Unduh
                </button>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} />
              Riwayat Kunjungan Terakhir
            </h3>
            {medicalHistory.slice(0, 2).map((history, index) => (
              <div key={index} style={{ 
                padding: '15px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: '600' }}>{history.diagnosis}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{history.date}</div>
                </div>
                <div style={{ fontSize: '14px', marginBottom: '4px' }}>{history.doctor}</div>
                <div style={{ fontSize: '13px', color: '#666' }}>{history.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'appointments' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Daftar Janji Temu</h3>
          <TableWithExport filename="janji_temu_pasien">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Waktu</th>
                  <th>Dokter</th>
                  <th>Poliklinik</th>
                  <th>Tipe</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr key={apt.id}>
                    <td>{apt.date}</td>
                    <td>{apt.time}</td>
                    <td>{apt.doctor}</td>
                    <td>{apt.clinic}</td>
                    <td>{apt.type}</td>
                    <td>
                      <span className={`badge ${
                        apt.status === 'Terkonfirmasi' ? 'badge-success' : 
                        apt.status === 'Menunggu' ? 'badge-warning' : 
                        'badge-info'
                      }`}>
                        {apt.status}
                      </span>
                    </td>
                    <td>
                      {apt.status === 'Menunggu' && (
                        <button className="btn-primary" style={{ padding: '6px 12px' }}>
                          Konfirmasi
                        </button>
                      )}
                      {apt.status === 'Selesai' && (
                        <button className="btn-secondary" style={{ padding: '6px 12px' }}>
                          <Eye size={14} />
                          Lihat Detail
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'lab' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Hasil Laboratorium</h3>
          <TableWithExport filename="hasil_lab_pasien">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Jenis Pemeriksaan</th>
                  <th>Dokter Pengirim</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {labResults.map((lab) => (
                  <tr key={lab.id}>
                    <td>{lab.date}</td>
                    <td>{lab.type}</td>
                    <td>{lab.doctor}</td>
                    <td>
                      <span className="badge badge-success">
                        <CheckCircle size={14} />
                        {lab.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn-secondary" style={{ padding: '6px 12px' }}>
                          <Eye size={14} />
                          Lihat
                        </button>
                        <button className="btn-primary" style={{ padding: '6px 12px' }}>
                          <Download size={14} />
                          Unduh
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'prescriptions' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Resep & Obat</h3>
          <TableWithExport filename="resep_pasien">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Dokter</th>
                  <th>Obat</th>
                  <th>Durasi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((rx) => (
                  <tr key={rx.id}>
                    <td>{rx.date}</td>
                    <td>{rx.doctor}</td>
                    <td>{rx.medication}</td>
                    <td>{rx.duration}</td>
                    <td>
                      <span className={`badge ${rx.status === 'Aktif' ? 'badge-success' : 'badge-info'}`}>
                        {rx.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-secondary" style={{ padding: '6px 12px' }}>
                        <Eye size={14} />
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'bills' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Riwayat Tagihan</h3>
          <TableWithExport filename="tagihan_pasien">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Deskripsi</th>
                  <th>Jumlah</th>
                  <th>Penjamin</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.date}</td>
                    <td>{bill.description}</td>
                    <td>Rp {bill.amount.toLocaleString('id-ID')}</td>
                    <td>{bill.payer}</td>
                    <td>
                      <span className="badge badge-success">
                        <CheckCircle size={14} />
                        {bill.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Riwayat Medis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {medicalHistory.map((history, index) => (
              <div key={index} style={{
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '4px solid #003d82'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4>{history.diagnosis}</h4>
                  <span style={{ color: '#666', fontSize: '14px' }}>{history.date}</span>
                </div>
                <div style={{ marginBottom: '8px', fontSize: '15px' }}>
                  <strong>Dokter:</strong> {history.doctor}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Catatan:</strong> {history.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Berikan Feedback & Rating</h3>
          <div className="alert alert-info">
            <AlertCircle size={20} />
            <span>Feedback Anda sangat membantu kami untuk meningkatkan kualitas pelayanan</span>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div className="form-group">
              <label>Kunjungan yang ingin dinilai</label>
              <select>
                <option value="">Pilih kunjungan...</option>
                <option value="1">05 Jan 2024 - Dr. Budi Santoso, Sp.PD</option>
                <option value="2">20 Des 2023 - Dr. Rina Hartati, Sp.JP</option>
              </select>
            </div>
            <div className="form-group">
              <label>Rating Pelayanan</label>
              <div style={{ display: 'flex', gap: '8px', fontSize: '32px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} style={{ cursor: 'pointer', color: '#d4af37' }} fill="#d4af37" />
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Komentar</label>
              <textarea rows="5" placeholder="Bagikan pengalaman Anda..."></textarea>
            </div>
            <button className="btn-primary">
              <MessageSquare size={18} />
              Kirim Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientPortal;
