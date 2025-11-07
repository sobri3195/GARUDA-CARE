import React, { useState } from 'react';
import { Star, TrendingUp, MessageSquare, BarChart3, Calendar, ThumbsUp, Filter, Download } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const PatientFeedback = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const feedbackData = [
    { id: 1, date: '07 Jan 2024', patient: 'Mayor Inf. Ahmad H.', nrp: '528901234', doctor: 'Dr. Budi Santoso, Sp.PD', clinic: 'Poli Penyakit Dalam', rating: 5, comment: 'Pelayanan sangat baik, dokter menjelaskan dengan detail', status: 'Sudah Ditanggapi' },
    { id: 2, date: '06 Jan 2024', patient: 'Kapten Kav. Budi S.', nrp: '528901235', doctor: 'Dr. Rina Hartati, Sp.JP', clinic: 'Poli Kardiologi', rating: 4, comment: 'Dokter profesional, namun waktu tunggu cukup lama', status: 'Belum Ditanggapi' },
    { id: 3, date: '05 Jan 2024', patient: 'Letda Arh. Siti A.', nrp: '528901236', doctor: 'Dr. Ahmad Wijaya, Sp.B', clinic: 'Bedah Sentral', rating: 5, comment: 'Tim medis sangat care, operasi berjalan lancar', status: 'Sudah Ditanggapi' },
    { id: 4, date: '05 Jan 2024', patient: 'Serka Fitri M.', nrp: '528901237', doctor: 'Ns. Siti Aminah', clinic: 'IGD', rating: 3, comment: 'Pelayanan cukup baik, tapi administrasi perlu diperbaiki', status: 'Dalam Proses' },
    { id: 5, date: '04 Jan 2024', patient: 'Kolonel Inf. Joko P.', nrp: '528901238', doctor: 'Dr. Maya Kusuma, Apt', clinic: 'Farmasi', rating: 5, comment: 'Apoteker memberikan penjelasan obat dengan jelas', status: 'Sudah Ditanggapi' },
    { id: 6, date: '03 Jan 2024', patient: 'Letda Tek. Andi S.', nrp: '528901239', doctor: 'Dr. Fitri Ayu, Sp.A', clinic: 'Poli Anak', rating: 4, comment: 'Dokter ramah dan anak saya merasa nyaman', status: 'Sudah Ditanggapi' },
    { id: 7, date: '02 Jan 2024', patient: 'Serda Rini H.', nrp: '528901240', doctor: 'Dr. Joko Prabowo, Sp.Rad', clinic: 'Radiologi', rating: 2, comment: 'Alat radiologi perlu di-upgrade, hasil kurang jelas', status: 'Belum Ditanggapi' },
    { id: 8, date: '01 Jan 2024', patient: 'Mayor Czi. Dewi L.', nrp: '528901241', doctor: 'Dr. Andi Setiawan, Sp.An', clinic: 'ICU', rating: 5, comment: 'Penanganan sangat profesional dan cepat tanggap', status: 'Sudah Ditanggapi' }
  ];

  const clinicRatings = [
    { clinic: 'Poli Penyakit Dalam', avgRating: 4.8, totalFeedback: 145, satisfaction: 96 },
    { clinic: 'Poli Kardiologi', avgRating: 4.6, totalFeedback: 98, satisfaction: 92 },
    { clinic: 'Bedah Sentral', avgRating: 4.9, totalFeedback: 87, satisfaction: 98 },
    { clinic: 'IGD', avgRating: 4.3, totalFeedback: 234, satisfaction: 86 },
    { clinic: 'Rawat Inap', avgRating: 4.7, totalFeedback: 156, satisfaction: 94 },
    { clinic: 'Farmasi', avgRating: 4.5, totalFeedback: 189, satisfaction: 90 },
    { clinic: 'Laboratorium', avgRating: 4.4, totalFeedback: 201, satisfaction: 88 },
    { clinic: 'Radiologi', avgRating: 4.2, totalFeedback: 123, satisfaction: 84 }
  ];

  const trendData = [
    { month: 'Jul 2023', avgRating: 4.2, responses: 145 },
    { month: 'Aug 2023', avgRating: 4.3, responses: 167 },
    { month: 'Sep 2023', avgRating: 4.4, responses: 189 },
    { month: 'Oct 2023', avgRating: 4.5, responses: 201 },
    { month: 'Nov 2023', avgRating: 4.6, responses: 223 },
    { month: 'Dec 2023', avgRating: 4.7, responses: 245 },
    { month: 'Jan 2024', avgRating: 4.8, responses: 234 }
  ];

  const statistics = [
    { label: 'Rating Rata-rata', value: '4.7', subtext: '/ 5.0', icon: Star, color: '#d4af37' },
    { label: 'Total Feedback', value: '1,428', subtext: 'Bulan ini: 234', icon: MessageSquare, color: '#003d82' },
    { label: 'Tingkat Kepuasan', value: '94%', subtext: '+2% dari bulan lalu', icon: ThumbsUp, color: '#27ae60' },
    { label: 'Waktu Respons', value: '1.2 hari', subtext: 'Rata-rata', icon: Calendar, color: '#e67e22' }
  ];

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={16} 
            fill={star <= rating ? '#d4af37' : 'none'}
            color={star <= rating ? '#d4af37' : '#ccc'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Star size={32} /> Survei & Umpan Balik Pasien</h1>
        <p>Analisis feedback dan kepuasan pasien untuk peningkatan kualitas pelayanan</p>
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
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart3 size={18} />
          Overview
        </button>
        <button 
          className={`tab ${activeTab === 'feedback' ? 'active' : ''}`}
          onClick={() => setActiveTab('feedback')}
        >
          <MessageSquare size={18} />
          Daftar Feedback
        </button>
        <button 
          className={`tab ${activeTab === 'clinic' ? 'active' : ''}`}
          onClick={() => setActiveTab('clinic')}
        >
          <BarChart3 size={18} />
          Rating per Poli
        </button>
        <button 
          className={`tab ${activeTab === 'trend' ? 'active' : ''}`}
          onClick={() => setActiveTab('trend')}
        >
          <TrendingUp size={18} />
          Trend Kepuasan
        </button>
      </div>

      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Distribusi Rating</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = feedbackData.filter(f => f.rating === rating).length;
                const percentage = (count / feedbackData.length) * 100;
                return (
                  <div key={rating} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ minWidth: '80px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Star size={16} fill="#d4af37" color="#d4af37" />
                      <span style={{ fontWeight: '600' }}>{rating}</span>
                    </div>
                    <div style={{ flex: 1, height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          backgroundColor: '#d4af37', 
                          width: `${percentage}%`,
                          transition: 'width 0.5s'
                        }}
                      />
                    </div>
                    <span style={{ minWidth: '60px', textAlign: 'right', fontWeight: '600' }}>
                      {count} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Status Penanganan</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { status: 'Sudah Ditanggapi', count: feedbackData.filter(f => f.status === 'Sudah Ditanggapi').length, color: '#27ae60' },
                { status: 'Dalam Proses', count: feedbackData.filter(f => f.status === 'Dalam Proses').length, color: '#f39c12' },
                { status: 'Belum Ditanggapi', count: feedbackData.filter(f => f.status === 'Belum Ditanggapi').length, color: '#e74c3c' }
              ].map((item) => (
                <div key={item.status} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${item.color}`
                }}>
                  <span style={{ fontWeight: '600' }}>{item.status}</span>
                  <span style={{ 
                    backgroundColor: item.color,
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontWeight: 'bold'
                  }}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ marginBottom: '20px' }}>Feedback Terbaru</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {feedbackData.slice(0, 4).map((feedback) => (
                <div key={feedback.id} style={{
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${
                    feedback.rating >= 4 ? '#27ae60' : 
                    feedback.rating >= 3 ? '#f39c12' : 
                    '#e74c3c'
                  }`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                      <strong>{feedback.patient}</strong> • {feedback.clinic}
                      <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                        {feedback.doctor} • {feedback.date}
                      </div>
                    </div>
                    {renderStars(feedback.rating)}
                  </div>
                  <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
                    "{feedback.comment}"
                  </div>
                  <span className={`badge ${
                    feedback.status === 'Sudah Ditanggapi' ? 'badge-success' :
                    feedback.status === 'Dalam Proses' ? 'badge-warning' :
                    'badge-danger'
                  }`}>
                    {feedback.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Daftar Feedback Pasien</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-secondary">
                <Filter size={18} />
                Filter
              </button>
              <button className="btn-primary">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          <TableWithExport filename="feedback_pasien">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Pasien</th>
                  <th>NRP</th>
                  <th>Dokter/Perawat</th>
                  <th>Poliklinik</th>
                  <th style={{ textAlign: 'center' }}>Rating</th>
                  <th>Komentar</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((feedback) => (
                  <tr key={feedback.id}>
                    <td>{feedback.date}</td>
                    <td>{feedback.patient}</td>
                    <td>{feedback.nrp}</td>
                    <td>{feedback.doctor}</td>
                    <td>{feedback.clinic}</td>
                    <td style={{ textAlign: 'center' }}>
                      {renderStars(feedback.rating)}
                    </td>
                    <td style={{ maxWidth: '300px' }}>
                      <div style={{ 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap' 
                      }}>
                        {feedback.comment}
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                        feedback.status === 'Sudah Ditanggapi' ? 'badge-success' :
                        feedback.status === 'Dalam Proses' ? 'badge-warning' :
                        'badge-danger'
                      }`}>
                        {feedback.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
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

      {activeTab === 'clinic' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Rating Kepuasan per Poliklinik</h3>
          <TableWithExport filename="rating_per_poliklinik">
            <table>
              <thead>
                <tr>
                  <th>Poliklinik</th>
                  <th style={{ textAlign: 'center' }}>Rating Rata-rata</th>
                  <th style={{ textAlign: 'center' }}>Total Feedback</th>
                  <th style={{ textAlign: 'center' }}>Tingkat Kepuasan</th>
                  <th>Visualisasi</th>
                </tr>
              </thead>
              <tbody>
                {clinicRatings.map((clinic, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '600' }}>{clinic.clinic}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: '700', fontSize: '18px', color: '#d4af37' }}>
                          {clinic.avgRating}
                        </span>
                        {renderStars(Math.round(clinic.avgRating))}
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>{clinic.totalFeedback}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ 
                        fontWeight: '700', 
                        fontSize: '16px',
                        color: clinic.satisfaction >= 90 ? '#27ae60' : clinic.satisfaction >= 80 ? '#f39c12' : '#e74c3c'
                      }}>
                        {clinic.satisfaction}%
                      </span>
                    </td>
                    <td>
                      <div style={{ height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            height: '100%', 
                            backgroundColor: clinic.satisfaction >= 90 ? '#27ae60' : clinic.satisfaction >= 80 ? '#f39c12' : '#e74c3c',
                            width: `${clinic.satisfaction}%`,
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

      {activeTab === 'trend' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Trend Kepuasan Pasien</h3>
          
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #e0e0e0' }}>
              <span style={{ fontWeight: '600', fontSize: '14px' }}>Bulan</span>
              <span style={{ fontWeight: '600', fontSize: '14px' }}>Rating Rata-rata</span>
            </div>
            {trendData.map((data, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ minWidth: '100px', fontWeight: '500' }}>{data.month}</span>
                <div style={{ flex: 1, marginLeft: '20px', marginRight: '20px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '6px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      backgroundColor: '#003d82', 
                      width: `${(data.avgRating / 5) * 100}%`,
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
                    {data.avgRating}
                  </div>
                </div>
                <span style={{ minWidth: '100px', textAlign: 'right', color: '#666', fontSize: '13px' }}>
                  {data.responses} respons
                </span>
              </div>
            ))}
          </div>

          <div className="alert alert-info">
            <TrendingUp size={20} />
            <span>
              <strong>Tren Positif:</strong> Rating kepuasan meningkat 14.3% dalam 6 bulan terakhir. 
              Terus pertahankan dan tingkatkan kualitas pelayanan!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientFeedback;
