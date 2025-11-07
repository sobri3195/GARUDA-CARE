import React, { useState } from 'react';
import { Calendar, Clock, User, Scissors, Stethoscope, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const KalenderOperasional = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 15)); // January 15, 2024
  const [filterType, setFilterType] = useState('all'); // all, doctors, surgery, nursing

  const doctorSchedules = [
    { id: 1, name: 'dr. Budi Santoso, Sp.PD', clinic: 'Poli Penyakit Dalam', day: 'Senin', time: '08:00-12:00', date: '2024-01-15' },
    { id: 2, name: 'dr. Rina Hartati, Sp.JP', clinic: 'Poli Kardiologi', day: 'Senin', time: '13:00-16:00', date: '2024-01-15' },
    { id: 3, name: 'dr. Ahmad Wijaya, Sp.B', clinic: 'Poli Bedah', day: 'Senin', time: '09:00-13:00', date: '2024-01-15' },
    { id: 4, name: 'dr. Siti Aminah, Sp.A', clinic: 'Poli Anak', day: 'Selasa', time: '08:00-12:00', date: '2024-01-16' },
    { id: 5, name: 'dr. Bambang Irawan, Sp.EM', clinic: 'IGD', day: 'Selasa', time: '07:00-19:00', date: '2024-01-16' },
    { id: 6, name: 'dr. Dewi Lestari, Sp.OG', clinic: 'Poli Kandungan', day: 'Rabu', time: '08:00-14:00', date: '2024-01-17' }
  ];

  const surgerySchedules = [
    { id: 1, patient: 'Mayor Inf. Ahmad H.', surgery: 'Appendektomi', room: 'OK 1', surgeon: 'dr. Ahmad Wijaya, Sp.B', time: '08:00-10:00', date: '2024-01-15', status: 'Scheduled' },
    { id: 2, patient: 'Kapten Kav. Budi S.', surgery: 'Laparoskopi', room: 'OK 2', surgeon: 'dr. Ahmad Wijaya, Sp.B', time: '11:00-13:00', date: '2024-01-15', status: 'Scheduled' },
    { id: 3, patient: 'Letda Arh. Rina M.', surgery: 'Sectio Caesarea', room: 'OK 3', surgeon: 'dr. Dewi Lestari, Sp.OG', time: '09:00-11:00', date: '2024-01-17', status: 'Scheduled' },
    { id: 4, patient: 'Serda Inf. Joko W.', surgery: 'Hernia Repair', room: 'OK 1', surgeon: 'dr. Ahmad Wijaya, Sp.B', time: '14:00-16:00', date: '2024-01-16', status: 'Scheduled' }
  ];

  const nursingSchedules = [
    { id: 1, unit: 'Rawat Inap Lt.2', shift: 'Pagi', nurses: 'Tim A (8 perawat)', time: '07:00-14:00', date: '2024-01-15', coordinator: 'Ns. Sri Handayani, S.Kep' },
    { id: 2, unit: 'Rawat Inap Lt.2', shift: 'Sore', nurses: 'Tim B (8 perawat)', time: '14:00-21:00', date: '2024-01-15', coordinator: 'Ns. Indah Permata, S.Kep' },
    { id: 3, unit: 'ICU', shift: 'Pagi', nurses: 'Tim ICU A (6 perawat)', time: '07:00-19:00', date: '2024-01-15', coordinator: 'Ns. Budi Santoso, S.Kep' },
    { id: 4, unit: 'IGD', shift: 'Malam', nurses: 'Tim IGD C (10 perawat)', time: '19:00-07:00', date: '2024-01-15', coordinator: 'Ns. Ahmad Fauzi, S.Kep' }
  ];

  const medicalActivities = [
    { id: 1, activity: 'Rapat Komite Medis', location: 'Ruang Rapat Lt.3', time: '13:00-15:00', date: '2024-01-15', participants: '15 dokter', type: 'Meeting' },
    { id: 2, activity: 'Pelatihan PPGD', location: 'Aula RS', time: '08:00-16:00', date: '2024-01-16', participants: '30 staff medis', type: 'Training' },
    { id: 3, activity: 'Grand Round', location: 'Ruang Konferensi', time: '07:00-08:00', date: '2024-01-17', participants: '25 dokter & residen', type: 'Education' },
    { id: 4, activity: 'Audit Medis', location: 'Ruang QA', time: '09:00-12:00', date: '2024-01-18', participants: 'Tim Mutu', type: 'Audit' }
  ];

  const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDates.push(day);
    }
    return weekDates;
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  const weekDates = getWeekDates(currentDate);

  const getEventsForDate = (date) => {
    const dateStr = formatDate(date);
    const events = [];

    if (filterType === 'all' || filterType === 'doctors') {
      doctorSchedules.filter(s => s.date === dateStr).forEach(s => {
        events.push({ ...s, type: 'doctor', color: '#003d82' });
      });
    }

    if (filterType === 'all' || filterType === 'surgery') {
      surgerySchedules.filter(s => s.date === dateStr).forEach(s => {
        events.push({ ...s, type: 'surgery', color: '#e74c3c' });
      });
    }

    if (filterType === 'all' || filterType === 'nursing') {
      nursingSchedules.filter(s => s.date === dateStr).forEach(s => {
        events.push({ ...s, type: 'nursing', color: '#27ae60' });
      });
    }

    if (filterType === 'all') {
      medicalActivities.filter(s => s.date === dateStr).forEach(s => {
        events.push({ ...s, type: 'activity', color: '#f39c12' });
      });
    }

    return events.sort((a, b) => {
      const timeA = a.time.split('-')[0];
      const timeB = b.time.split('-')[0];
      return timeA.localeCompare(timeB);
    });
  };

  const statistics = [
    { label: 'Jadwal Dokter', value: doctorSchedules.length.toString(), icon: User, color: '#003d82' },
    { label: 'Operasi Terjadwal', value: surgerySchedules.length.toString(), icon: Scissors, color: '#e74c3c' },
    { label: 'Shift Perawatan', value: nursingSchedules.length.toString(), icon: Stethoscope, color: '#27ae60' },
    { label: 'Kegiatan Medis', value: medicalActivities.length.toString(), icon: Calendar, color: '#f39c12' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Calendar size={32} /> Kalender Operasional RS</h1>
        <p>Menampilkan jadwal dokter, ruang bedah, perawatan, dan kegiatan medis harian</p>
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

      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button className="btn-icon" onClick={() => navigateWeek(-1)}>
              <ChevronLeft size={20} />
            </button>
            <h2 style={{ margin: 0 }}>
              {weekDates[0].toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} - {weekDates[6].toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
            </h2>
            <button className="btn-icon" onClick={() => navigateWeek(1)}>
              <ChevronRight size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              style={{ padding: '8px' }}
            >
              <option value="all">Semua Jadwal</option>
              <option value="doctors">Jadwal Dokter</option>
              <option value="surgery">Ruang Bedah</option>
              <option value="nursing">Shift Perawatan</option>
            </select>

            <button className="btn-secondary">
              <Download size={18} /> Export PDF
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#003d82', borderRadius: '3px' }}></div>
          <span style={{ fontSize: '13px' }}>Jadwal Dokter</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#e74c3c', borderRadius: '3px' }}></div>
          <span style={{ fontSize: '13px' }}>Operasi</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#27ae60', borderRadius: '3px' }}></div>
          <span style={{ fontSize: '13px' }}>Shift Perawatan</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#f39c12', borderRadius: '3px' }}></div>
          <span style={{ fontSize: '13px' }}>Kegiatan Medis</span>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(180px, 1fr))', gap: '10px', minWidth: '1200px' }}>
          {weekDates.map((date, index) => {
            const events = getEventsForDate(date);
            const isToday = formatDate(date) === formatDate(new Date());

            return (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  padding: '12px',
                  backgroundColor: isToday ? '#e3f2fd' : 'white',
                  minHeight: '400px'
                }}
              >
                <div style={{ 
                  textAlign: 'center', 
                  paddingBottom: '10px', 
                  borderBottom: '2px solid #e0e0e0',
                  marginBottom: '10px'
                }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                    {daysOfWeek[date.getDay()]}
                  </div>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: isToday ? '#003d82' : '#333'
                  }}>
                    {date.getDate()}
                  </div>
                  <div style={{ fontSize: '11px', color: '#999' }}>
                    {date.toLocaleDateString('id-ID', { month: 'short' })}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {events.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', padding: '20px 0' }}>
                      Tidak ada jadwal
                    </div>
                  ) : (
                    events.map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        style={{
                          padding: '8px',
                          backgroundColor: `${event.color}15`,
                          borderLeft: `3px solid ${event.color}`,
                          borderRadius: '4px',
                          fontSize: '11px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                      >
                        <div style={{ fontWeight: 'bold', marginBottom: '4px', color: event.color }}>
                          <Clock size={12} style={{ verticalAlign: 'middle', marginRight: '3px' }} />
                          {event.time}
                        </div>
                        {event.type === 'doctor' && (
                          <>
                            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{event.name}</div>
                            <div style={{ color: '#666' }}>{event.clinic}</div>
                          </>
                        )}
                        {event.type === 'surgery' && (
                          <>
                            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{event.surgery}</div>
                            <div style={{ color: '#666' }}>{event.room} - {event.surgeon}</div>
                          </>
                        )}
                        {event.type === 'nursing' && (
                          <>
                            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{event.unit}</div>
                            <div style={{ color: '#666' }}>{event.shift} - {event.coordinator}</div>
                          </>
                        )}
                        {event.type === 'activity' && (
                          <>
                            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{event.activity}</div>
                            <div style={{ color: '#666' }}>{event.location}</div>
                          </>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3><Calendar size={20} /> Ringkasan Minggu Ini</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <User size={32} style={{ color: '#003d82', marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#003d82' }}>
              {doctorSchedules.length}
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>Shift Dokter</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Scissors size={32} style={{ color: '#e74c3c', marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>
              {surgerySchedules.length}
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>Operasi Terjadwal</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Stethoscope size={32} style={{ color: '#27ae60', marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>
              {nursingSchedules.length}
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>Shift Perawatan</div>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Calendar size={32} style={{ color: '#f39c12', marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f39c12' }}>
              {medicalActivities.length}
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>Kegiatan Medis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalenderOperasional;
