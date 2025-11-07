import React, { useState } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, Clock, Pill, Activity, Calendar, Wrench, User, Search, X } from 'lucide-react';

const PusatNotifikasi = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');

  const notifications = [
    { 
      id: 1,
      module: 'Farmasi',
      icon: Pill,
      priority: 'Critical',
      title: 'Stok Obat Kritis',
      message: 'Paracetamol 500mg stok tersisa 50 box (di bawah minimum 100 box)',
      timestamp: '2 menit lalu',
      read: false,
      actionable: true,
      link: '/farmasi'
    },
    { 
      id: 2,
      module: 'ICU',
      icon: Activity,
      priority: 'Critical',
      title: 'Pasien Kritis',
      message: 'Mayor Inf. Budi Santoso (ICU-3) - Saturasi O2 turun menjadi 88%',
      timestamp: '5 menit lalu',
      read: false,
      actionable: true,
      link: '/perawatan-intensif'
    },
    { 
      id: 3,
      module: 'Jadwal',
      icon: Calendar,
      priority: 'High',
      title: 'Jadwal Dokter Berubah',
      message: 'Dr. Ahmad Wijaya, Sp.B shift besok digantikan oleh Dr. Rina Hartati, Sp.B',
      timestamp: '15 menit lalu',
      read: false,
      actionable: false,
      link: '/sdm'
    },
    { 
      id: 4,
      module: 'Peralatan',
      icon: Wrench,
      priority: 'High',
      title: 'Maintenance Terjadwal',
      message: 'Ventilator V-301 memerlukan maintenance rutin hari ini pukul 14:00',
      timestamp: '30 menit lalu',
      read: false,
      actionable: true,
      link: '/aset-rumah-sakit'
    },
    { 
      id: 5,
      module: 'Registrasi',
      icon: User,
      priority: 'Medium',
      title: 'Pasien Menunggu',
      message: '5 pasien baru menunggu registrasi di loket 2',
      timestamp: '1 jam lalu',
      read: true,
      actionable: true,
      link: '/registrasi'
    },
    { 
      id: 6,
      module: 'Laboratorium',
      icon: Activity,
      priority: 'Medium',
      title: 'Hasil Lab Siap',
      message: '12 hasil pemeriksaan laboratorium sudah siap untuk divalidasi',
      timestamp: '1 jam lalu',
      read: true,
      actionable: true,
      link: '/laboratorium'
    },
    { 
      id: 7,
      module: 'Farmasi',
      icon: Pill,
      priority: 'Critical',
      title: 'Obat Expired',
      message: '8 item obat akan expired dalam 30 hari',
      timestamp: '2 jam lalu',
      read: false,
      actionable: true,
      link: '/farmasi'
    },
    { 
      id: 8,
      module: 'Bedah Sentral',
      icon: Activity,
      priority: 'High',
      title: 'Ruang Operasi Siap',
      message: 'OK 2 sudah selesai sterilisasi dan siap untuk operasi berikutnya',
      timestamp: '2 jam lalu',
      read: true,
      actionable: false,
      link: '/bedah-sentral'
    },
    { 
      id: 9,
      module: 'IGD',
      icon: AlertTriangle,
      priority: 'Critical',
      title: 'Pasien Triase Merah',
      message: 'Pasien baru masuk IGD dengan kondisi kritis - memerlukan resusitasi',
      timestamp: '3 jam lalu',
      read: true,
      actionable: true,
      link: '/igd'
    },
    { 
      id: 10,
      module: 'Rawat Inap',
      icon: Activity,
      priority: 'Low',
      title: 'Discharge Planning',
      message: '3 pasien dijadwalkan pulang hari ini',
      timestamp: '4 jam lalu',
      read: true,
      actionable: false,
      link: '/rawat-inap'
    },
    { 
      id: 11,
      module: 'Sistem',
      icon: Info,
      priority: 'Low',
      title: 'Update Sistem',
      message: 'Sistem akan maintenance pada Minggu, 21 Jan 2024 pukul 02:00-04:00',
      timestamp: '5 jam lalu',
      read: true,
      actionable: false,
      link: '/'
    },
    { 
      id: 12,
      module: 'Keuangan',
      icon: Activity,
      priority: 'Medium',
      title: 'Pembayaran Tertunda',
      message: '15 tagihan pasien belum diselesaikan pembayarannya',
      timestamp: '6 jam lalu',
      read: true,
      actionable: true,
      link: '/kasir'
    }
  ];

  const statistics = [
    { label: 'Total Notifikasi', value: notifications.length.toString(), icon: Bell, color: '#003d82' },
    { label: 'Belum Dibaca', value: notifications.filter(n => !n.read).length.toString(), icon: AlertTriangle, color: '#e74c3c' },
    { label: 'Perlu Tindakan', value: notifications.filter(n => n.actionable && !n.read).length.toString(), icon: CheckCircle, color: '#f39c12' },
    { label: 'Critical', value: notifications.filter(n => n.priority === 'Critical').length.toString(), icon: AlertTriangle, color: '#c0392b' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return '#c0392b';
      case 'High': return '#e67e22';
      case 'Medium': return '#f39c12';
      case 'Low': return '#3498db';
      default: return '#95a5a6';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Critical': return 'badge-danger';
      case 'High': return 'badge-warning';
      case 'Medium': return 'badge-info';
      case 'Low': return 'badge-secondary';
      default: return 'badge-secondary';
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notif.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notif.module.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'unread' && !notif.read) ||
                      (activeTab === 'actionable' && notif.actionable) ||
                      (activeTab === 'critical' && notif.priority === 'Critical');
    
    const matchesPriority = filterPriority === 'all' || notif.priority === filterPriority;
    
    return matchesSearch && matchesTab && matchesPriority;
  });

  const markAsRead = (id) => {
    // In a real app, this would update the backend
    console.log('Mark as read:', id);
  };

  const dismissNotification = (id) => {
    // In a real app, this would dismiss the notification
    console.log('Dismiss:', id);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Bell size={32} /> Pusat Notifikasi</h1>
        <p>Menampung alert dari semua modul sistem - farmasi, ICU, jadwal, peralatan, dan pasien kritis</p>
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
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <Bell size={18} /> Semua ({notifications.length})
        </button>
        <button
          className={`tab ${activeTab === 'unread' ? 'active' : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          <AlertTriangle size={18} /> Belum Dibaca ({notifications.filter(n => !n.read).length})
        </button>
        <button
          className={`tab ${activeTab === 'actionable' ? 'active' : ''}`}
          onClick={() => setActiveTab('actionable')}
        >
          <CheckCircle size={18} /> Perlu Tindakan ({notifications.filter(n => n.actionable).length})
        </button>
        <button
          className={`tab ${activeTab === 'critical' ? 'active' : ''}`}
          onClick={() => setActiveTab('critical')}
        >
          <AlertTriangle size={18} /> Critical ({notifications.filter(n => n.priority === 'Critical').length})
        </button>
      </div>

      <div className="tab-content">
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
            <input
              type="text"
              placeholder="Cari notifikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '40px', width: '100%' }}
            />
          </div>
          <select 
            value={filterPriority} 
            onChange={(e) => setFilterPriority(e.target.value)}
            style={{ padding: '10px', minWidth: '150px' }}
          >
            <option value="all">Semua Prioritas</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredNotifications.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
              <Info size={48} style={{ margin: '0 auto 15px' }} />
              <p>Tidak ada notifikasi yang sesuai dengan filter</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => {
              const IconComponent = notif.icon;
              return (
                <div 
                  key={notif.id} 
                  className="card" 
                  style={{ 
                    backgroundColor: !notif.read ? '#f8f9fa' : 'white',
                    borderLeft: `4px solid ${getPriorityColor(notif.priority)}`,
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: `${getPriorityColor(notif.priority)}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={24} style={{ color: getPriorityColor(notif.priority) }} />
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                        <div>
                          <span className="badge" style={{ backgroundColor: '#e3f2fd', color: '#1976d2', marginRight: '8px' }}>
                            {notif.module}
                          </span>
                          <span className={`badge ${getPriorityBadgeClass(notif.priority)}`}>
                            {notif.priority}
                          </span>
                          {notif.actionable && (
                            <span className="badge" style={{ backgroundColor: '#fff3e0', color: '#e65100', marginLeft: '8px' }}>
                              Perlu Tindakan
                            </span>
                          )}
                        </div>
                        <button 
                          className="btn-icon"
                          onClick={() => dismissNotification(notif.id)}
                          title="Tutup notifikasi"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      <h3 style={{ margin: '8px 0', fontSize: '16px' }}>{notif.title}</h3>
                      <p style={{ margin: '8px 0', color: '#666' }}>{notif.message}</p>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                        <span style={{ fontSize: '13px', color: '#999' }}>
                          <Clock size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                          {notif.timestamp}
                        </span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {!notif.read && (
                            <button 
                              className="btn-secondary" 
                              style={{ fontSize: '13px', padding: '6px 12px' }}
                              onClick={() => markAsRead(notif.id)}
                            >
                              <CheckCircle size={14} /> Tandai Dibaca
                            </button>
                          )}
                          <a 
                            href={notif.link} 
                            className="btn-primary" 
                            style={{ fontSize: '13px', padding: '6px 12px', textDecoration: 'none' }}
                          >
                            Lihat Detail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {filteredNotifications.length > 0 && (
          <div className="card" style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#666' }}>
              Menampilkan {filteredNotifications.length} dari {notifications.length} notifikasi
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PusatNotifikasi;
