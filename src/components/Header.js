import React, { useState } from 'react';
import { Bell, Search, MessageSquare, Settings, Zap, X } from 'lucide-react';

const Header = ({ title }) => {
  const [showMessages, setShowMessages] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      
      <div className="header-actions">
        <div style={{ position: 'relative' }}>
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => setShowSearch(!showSearch)}
            title="Pencarian"
          >
            <Search size={16} />
          </button>
          {showSearch && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '350px',
              zIndex: 1000
            }}>
              <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Pencarian Global</strong>
                <X size={16} style={{ cursor: 'pointer' }} onClick={() => setShowSearch(false)} />
              </div>
              <div style={{ padding: '15px' }}>
                <input
                  type="text"
                  placeholder="Cari pasien, dokter, data medis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <div style={{ marginTop: '15px' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: 'bold' }}>Pencarian Cepat:</div>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '6px', justifyContent: 'flex-start', fontSize: '12px' }}>
                    🔍 Cari berdasarkan No. RM
                  </button>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '6px', justifyContent: 'flex-start', fontSize: '12px' }}>
                    🔍 Cari berdasarkan NIK
                  </button>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '6px', justifyContent: 'flex-start', fontSize: '12px' }}>
                    🔍 Cari berdasarkan Nama
                  </button>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '6px', justifyContent: 'flex-start', fontSize: '12px' }}>
                    🔍 Cari Jadwal Dokter
                  </button>
                  <button className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '12px' }}>
                    🔍 Cari Hasil Lab/Radiologi
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => setShowQuickActions(!showQuickActions)}
            title="Quick Actions"
          >
            <Zap size={16} />
          </button>
          {showQuickActions && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '250px',
              zIndex: 1000
            }}>
              <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Quick Actions</strong>
                <X size={16} style={{ cursor: 'pointer' }} onClick={() => setShowQuickActions(false)} />
              </div>
              <div style={{ padding: '10px' }}>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  📋 Daftar Pasien Baru
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  📊 Lihat Dashboard
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  💊 Resep Elektronik
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  🔬 Order Lab
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => setShowMessages(!showMessages)}
            title="Pesan"
          >
            <MessageSquare size={16} />
            <span className="badge badge-danger" style={{ position: 'absolute', top: '-5px', right: '-5px', fontSize: '10px', padding: '2px 5px', minWidth: '18px' }}>5</span>
          </button>
          {showMessages && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '300px',
              zIndex: 1000
            }}>
              <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Pesan (5)</strong>
                <X size={16} style={{ cursor: 'pointer' }} onClick={() => setShowMessages(false)} />
              </div>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px' }}>dr. Siti Nurhaliza</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Hasil lab pasien RM-001234 sudah ready</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>5 menit yang lalu</div>
                </div>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px' }}>Perawat ICU</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Pasien di bed 3 butuh konsultasi dokter</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>15 menit yang lalu</div>
                </div>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px' }}>Farmasi</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Stok obat Adrenalin perlu restock</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>1 jam yang lalu</div>
                </div>
              </div>
              <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px solid #eee' }}>
                <button style={{ color: '#003d82', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Lihat Semua Pesan</button>
              </div>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <button 
            className="btn btn-outline btn-sm" 
            onClick={() => setShowSettings(!showSettings)}
            title="Pengaturan"
          >
            <Settings size={16} />
          </button>
          {showSettings && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '220px',
              zIndex: 1000
            }}>
              <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Pengaturan</strong>
                <X size={16} style={{ cursor: 'pointer' }} onClick={() => setShowSettings(false)} />
              </div>
              <div style={{ padding: '10px' }}>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  👤 Profil Saya
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  🔔 Notifikasi
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  🌐 Bahasa: Indonesia
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', marginBottom: '8px', justifyContent: 'flex-start' }}>
                  🎨 Tema: Terang
                </button>
                <button className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  🔒 Keamanan
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div style={{ position: 'relative' }}>
          <button 
            className="btn btn-outline btn-sm" 
            style={{ position: 'relative' }} 
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifikasi"
          >
            <Bell size={16} />
            <span className="badge badge-danger" style={{ position: 'absolute', top: '-5px', right: '-5px', fontSize: '10px', padding: '2px 5px', minWidth: '18px' }}>3</span>
          </button>
          {showNotifications && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              width: '320px',
              zIndex: 1000
            }}>
              <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Notifikasi (3)</strong>
                <X size={16} style={{ cursor: 'pointer' }} onClick={() => setShowNotifications(false)} />
              </div>
              <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', backgroundColor: '#fff3cd' }} onMouseOver={(e) => e.currentTarget.style.background = '#ffe69c'} onMouseOut={(e) => e.currentTarget.style.background = '#fff3cd'}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <span className="badge badge-danger" style={{ marginRight: '8px' }}>URGENT</span>
                    <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Hasil Lab Kritis</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Pasien RM-001245 memiliki hasil Kalium 6.8 mEq/L (kritis)</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>2 menit yang lalu</div>
                </div>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <span className="badge badge-warning" style={{ marginRight: '8px' }}>INFO</span>
                    <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Bed Tersedia</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Ruang VIP A Bed 3 selesai dibersihkan dan siap ditempati</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>10 menit yang lalu</div>
                </div>
                <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <span className="badge badge-success" style={{ marginRight: '8px' }}>SUCCESS</span>
                    <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Resep Terverifikasi</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Resep pasien RM-001234 telah diverifikasi oleh Apoteker</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>25 menit yang lalu</div>
                </div>
              </div>
              <div style={{ padding: '10px', textAlign: 'center', borderTop: '1px solid #eee' }}>
                <button style={{ color: '#003d82', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}>Lihat Semua Notifikasi</button>
              </div>
            </div>
          )}
        </div>
        
        <div className="header-user">
          <div className="user-avatar">
            DR
          </div>
          <div className="user-info">
            <span className="user-name">dr. Andi Wijaya, Sp.PD</span>
            <span className="user-role">Dokter Spesialis Penyakit Dalam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
