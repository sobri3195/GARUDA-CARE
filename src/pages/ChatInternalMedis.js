import React, { useState } from 'react';
import { MessageSquare, Send, Search, Phone, Video, Paperclip, Smile, Users, User, Clock, CheckCheck } from 'lucide-react';

const ChatInternalMedis = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const contacts = [
    { id: 1, name: 'Dr. Budi Santoso, Sp.PD', role: 'Dokter Spesialis Penyakit Dalam', status: 'online', avatar: 'BS', unread: 3, lastMessage: 'Terima kasih atas konsultasinya', lastTime: '10:45', department: 'Poli Penyakit Dalam' },
    { id: 2, name: 'Ns. Siti Aminah, S.Kep', role: 'Perawat IGD', status: 'online', avatar: 'SA', unread: 0, lastMessage: 'Pasien sudah dipindahkan ke ruang inap', lastTime: '10:30', department: 'IGD' },
    { id: 3, name: 'Dr. Ahmad Wijaya, Sp.B', role: 'Dokter Spesialis Bedah', status: 'busy', avatar: 'AW', unread: 1, lastMessage: 'Saya sedang operasi, hubungi nanti', lastTime: '09:15', department: 'Bedah Sentral' },
    { id: 4, name: 'Apt. Maya Kusuma, S.Farm', role: 'Apoteker', status: 'online', avatar: 'MK', unread: 0, lastMessage: 'Obat sudah tersedia', lastTime: '08:50', department: 'Farmasi' },
    { id: 5, name: 'Dr. Rina Hartati, Sp.A', role: 'Dokter Spesialis Anak', status: 'away', avatar: 'RH', unread: 2, lastMessage: 'Mohon cek hasil lab segera', lastTime: 'Kemarin', department: 'Poli Anak' },
    { id: 6, name: 'Ns. Joko Prabowo, S.Kep', role: 'Perawat Rawat Inap', status: 'online', avatar: 'JP', unread: 0, lastMessage: 'Baik, akan saya laporkan', lastTime: 'Kemarin', department: 'Rawat Inap' },
    { id: 7, name: 'Dr. Fitri Ayu, Sp.OG', role: 'Dokter Spesialis Kandungan', status: 'offline', avatar: 'FA', unread: 0, lastMessage: 'Sampai jumpa besok', lastTime: '2 hari lalu', department: 'Poli Kandungan' },
    { id: 8, name: 'Ns. Andi Setiawan, S.Kep', role: 'Perawat ICU', status: 'busy', avatar: 'AS', unread: 5, lastMessage: 'Urgent: Pasien A-123 memerlukan perhatian', lastTime: '11:00', department: 'ICU' }
  ];

  const groups = [
    { id: 1, name: 'Tim IGD', members: 12, avatar: 'IG', unread: 7, lastMessage: 'Dr. Budi: Ada pasien emergency datang', lastTime: '10:50', department: 'IGD' },
    { id: 2, name: 'Dokter Jaga Malam', members: 8, avatar: 'DJ', unread: 0, lastMessage: 'Jadwal shift sudah diupdate', lastTime: '09:30', department: 'Multi-Departemen' },
    { id: 3, name: 'Tim Bedah', members: 15, avatar: 'TB', unread: 2, lastMessage: 'Operasi dijadwalkan jam 14.00', lastTime: '08:45', department: 'Bedah Sentral' },
    { id: 4, name: 'Koordinasi Farmasi', members: 6, avatar: 'KF', unread: 0, lastMessage: 'Stok obat emergency sudah dicek', lastTime: 'Kemarin', department: 'Farmasi' }
  ];

  const messages = selectedContact ? [
    { id: 1, sender: 'other', text: 'Selamat pagi, saya butuh konsultasi terkait pasien Tn. Ahmad', time: '10:30', read: true },
    { id: 2, sender: 'me', text: 'Selamat pagi, silakan. Apa keluhan pasien?', time: '10:31', read: true },
    { id: 3, sender: 'other', text: 'Pasien mengeluh nyeri dada sebelah kiri sejak 2 jam yang lalu', time: '10:32', read: true },
    { id: 4, sender: 'me', text: 'Apakah sudah dilakukan EKG?', time: '10:33', read: true },
    { id: 5, sender: 'other', text: 'Sudah, akan saya kirimkan hasilnya', time: '10:34', read: true },
    { id: 6, sender: 'other', text: '[File: EKG_TnAhmad_20240107.pdf]', time: '10:35', read: true },
    { id: 7, sender: 'me', text: 'Terima kasih. Berdasarkan hasil EKG, sepertinya ada indikasi STEMI. Segera rujuk ke kardiologi', time: '10:40', read: true },
    { id: 8, sender: 'other', text: 'Baik dokter, segera saya proses rujukannya', time: '10:42', read: true },
    { id: 9, sender: 'me', text: selectedContact.lastMessage, time: selectedContact.lastTime, read: false }
  ] : [];

  const statistics = [
    { label: 'Total Kontak', value: '156', icon: Users, color: '#003d82' },
    { label: 'Online Sekarang', value: '43', icon: User, color: '#27ae60' },
    { label: 'Pesan Hari Ini', value: '287', icon: MessageSquare, color: '#d4af37' },
    { label: 'Waktu Respons Rata-rata', value: '3.2 min', icon: Clock, color: '#e67e22' }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#27ae60';
      case 'busy': return '#e74c3c';
      case 'away': return '#f39c12';
      case 'offline': return '#95a5a6';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><MessageSquare size={32} /> Chat Internal Dokter-Perawat</h1>
        <p>Platform komunikasi real-time antar tenaga medis untuk koordinasi dan kolaborasi yang efektif</p>
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
          className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageSquare size={18} />
          Chat Personal
        </button>
        <button 
          className={`tab ${activeTab === 'groups' ? 'active' : ''}`}
          onClick={() => setActiveTab('groups')}
        >
          <Users size={18} />
          Grup Tim
        </button>
      </div>

      <div className="chat-container" style={{ display: 'flex', height: '600px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Contact List */}
        <div style={{ width: '350px', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Cari kontak atau pesan..." 
                style={{ width: '100%', padding: '10px 10px 10px 40px', border: '1px solid #e0e0e0', borderRadius: '6px' }}
              />
            </div>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {(activeTab === 'chat' ? contacts : groups).map((contact) => (
              <div 
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                style={{
                  padding: '15px',
                  borderBottom: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  backgroundColor: selectedContact?.id === contact.id ? '#f8f9fa' : 'white',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedContact?.id === contact.id ? '#f8f9fa' : 'white'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#003d82',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '16px'
                    }}>
                      {contact.avatar}
                    </div>
                    {activeTab === 'chat' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: getStatusColor(contact.status),
                        border: '2px solid white'
                      }} />
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ fontWeight: '600', fontSize: '14px', color: '#2c3e50' }}>{contact.name}</div>
                      <div style={{ fontSize: '11px', color: '#999' }}>{contact.lastTime}</div>
                    </div>
                    <div style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '4px' }}>
                      {activeTab === 'chat' ? contact.role : `${contact.members} anggota`}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '13px', color: '#95a5a6', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                        {contact.lastMessage}
                      </div>
                      {contact.unread > 0 && (
                        <div style={{
                          backgroundColor: '#e74c3c',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '2px 8px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          marginLeft: '8px'
                        }}>
                          {contact.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div style={{ 
                padding: '15px 20px', 
                borderBottom: '1px solid #e0e0e0', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: '#003d82',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}>
                      {selectedContact.avatar}
                    </div>
                    {activeTab === 'chat' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: getStatusColor(selectedContact.status),
                        border: '2px solid white'
                      }} />
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px', color: '#2c3e50' }}>{selectedContact.name}</div>
                    <div style={{ fontSize: '13px', color: '#7f8c8d' }}>
                      {activeTab === 'chat' ? selectedContact.department : `${selectedContact.members} anggota • ${selectedContact.department}`}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-icon" title="Panggilan Suara">
                    <Phone size={20} />
                  </button>
                  <button className="btn-icon" title="Panggilan Video">
                    <Video size={20} />
                  </button>
                  <button className="btn-icon" title="Info Kontak">
                    <Users size={20} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    style={{
                      marginBottom: '15px',
                      display: 'flex',
                      justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <div style={{
                      maxWidth: '70%',
                      padding: '12px 16px',
                      borderRadius: message.sender === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      backgroundColor: message.sender === 'me' ? '#003d82' : 'white',
                      color: message.sender === 'me' ? 'white' : '#2c3e50',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      {message.text.startsWith('[File:') ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Paperclip size={16} />
                          <span style={{ fontSize: '14px' }}>{message.text.replace('[File: ', '').replace(']', '')}</span>
                        </div>
                      ) : (
                        <div style={{ fontSize: '14px', lineHeight: '1.5' }}>{message.text}</div>
                      )}
                      <div style={{ 
                        fontSize: '11px', 
                        marginTop: '6px', 
                        opacity: 0.8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px'
                      }}>
                        {message.time}
                        {message.sender === 'me' && <CheckCheck size={14} color={message.read ? '#4a90e2' : 'currentColor'} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div style={{ 
                padding: '15px 20px', 
                borderTop: '1px solid #e0e0e0',
                backgroundColor: 'white'
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button className="btn-icon">
                    <Paperclip size={20} />
                  </button>
                  <button className="btn-icon">
                    <Smile size={20} />
                  </button>
                  <input 
                    type="text"
                    placeholder="Ketik pesan..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '24px',
                      outline: 'none'
                    }}
                  />
                  <button 
                    className="btn-primary" 
                    onClick={handleSendMessage}
                    style={{ borderRadius: '50%', width: '45px', height: '45px', padding: '0' }}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '20px',
              color: '#95a5a6'
            }}>
              <MessageSquare size={64} />
              <div style={{ fontSize: '18px', fontWeight: '500' }}>
                Pilih kontak untuk memulai chat
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInternalMedis;
