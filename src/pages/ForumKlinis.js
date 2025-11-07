import React, { useState } from 'react';
import { MessageCircle, Plus, Search, ThumbsUp, MessageSquare, Eye, Clock, User, Tag, TrendingUp, Filter } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const ForumKlinis = () => {
  const [activeTab, setActiveTab] = useState('diskusi');
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);

  const discussions = [
    { 
      id: 1, 
      title: 'Penanganan Pasien COVID-19 dengan Komorbid Diabetes', 
      author: 'Dr. Budi Santoso, Sp.PD', 
      category: 'Penyakit Dalam',
      date: '07 Jan 2024, 10:30',
      views: 234,
      replies: 18,
      likes: 45,
      status: 'Aktif',
      lastReply: 'Dr. Ahmad Wijaya - 2 jam lalu'
    },
    { 
      id: 2, 
      title: 'Protokol Terbaru Resusitasi Jantung Paru (RJP)', 
      author: 'Dr. Siti Aminah, Sp.An', 
      category: 'Anestesi & ICU',
      date: '06 Jan 2024, 15:45',
      views: 189,
      replies: 12,
      likes: 38,
      status: 'Aktif',
      lastReply: 'Dr. Rina Hartati - 5 jam lalu'
    },
    { 
      id: 3, 
      title: 'Diagnosis Diferensial Demam Berdarah vs Chikungunya', 
      author: 'Dr. Ahmad Wijaya, Sp.PD', 
      category: 'Penyakit Dalam',
      date: '05 Jan 2024, 09:15',
      views: 456,
      replies: 28,
      likes: 67,
      status: 'Terjawab',
      lastReply: 'Dr. Maya Kusuma - Kemarin'
    },
    { 
      id: 4, 
      title: 'Manajemen Nyeri Post-Operasi pada Pasien Geriatri', 
      author: 'Dr. Fitri Ayu, Sp.B', 
      category: 'Bedah',
      date: '04 Jan 2024, 14:20',
      views: 312,
      replies: 22,
      likes: 54,
      status: 'Aktif',
      lastReply: 'Dr. Joko Prabowo - Kemarin'
    },
    { 
      id: 5, 
      title: 'Update Guideline Tatalaksana Hipertensi 2024', 
      author: 'Dr. Rina Hartati, Sp.JP', 
      category: 'Kardiologi',
      date: '03 Jan 2024, 11:00',
      views: 521,
      replies: 35,
      likes: 89,
      status: 'Terjawab',
      lastReply: 'Dr. Budi Santoso - 2 hari lalu'
    },
    { 
      id: 6, 
      title: 'Kasus Langka: Sindrom Stevens-Johnson Post-Antibiotik', 
      author: 'Dr. Maya Kusuma, Sp.KK', 
      category: 'Kulit & Kelamin',
      date: '02 Jan 2024, 16:30',
      views: 678,
      replies: 41,
      likes: 102,
      status: 'Aktif',
      lastReply: 'Dr. Ahmad Wijaya - 3 hari lalu'
    },
    { 
      id: 7, 
      title: 'Interpretasi Hasil CT Scan Thorax pada Kasus TB', 
      author: 'Dr. Joko Prabowo, Sp.Rad', 
      category: 'Radiologi',
      date: '01 Jan 2024, 08:45',
      views: 289,
      replies: 15,
      likes: 42,
      status: 'Terjawab',
      lastReply: 'Dr. Fitri Ayu - 4 hari lalu'
    },
    { 
      id: 8, 
      title: 'Strategi Weaning Ventilator pada Pasien ARDS', 
      author: 'Dr. Andi Setiawan, Sp.An', 
      category: 'Anestesi & ICU',
      date: '31 Des 2023, 13:15',
      views: 401,
      replies: 26,
      likes: 71,
      status: 'Aktif',
      lastReply: 'Dr. Siti Aminah - 5 hari lalu'
    }
  ];

  const categories = [
    { name: 'Penyakit Dalam', count: 45, icon: '🩺' },
    { name: 'Bedah', count: 32, icon: '🔪' },
    { name: 'Anestesi & ICU', count: 28, icon: '💉' },
    { name: 'Kardiologi', count: 24, icon: '❤️' },
    { name: 'Radiologi', count: 19, icon: '📡' },
    { name: 'Pediatri', count: 38, icon: '👶' },
    { name: 'Obstetri & Ginekologi', count: 31, icon: '🤰' },
    { name: 'Kulit & Kelamin', count: 15, icon: '🧴' },
    { name: 'Neurologi', count: 22, icon: '🧠' },
    { name: 'Psikiatri', count: 18, icon: '🧘' }
  ];

  const trendingTopics = [
    { topic: 'COVID-19 Management', discussions: 87 },
    { topic: 'Diabetes Care', discussions: 65 },
    { topic: 'Cardiac Emergency', discussions: 54 },
    { topic: 'Pediatric Cases', discussions: 48 },
    { topic: 'Surgical Techniques', discussions: 42 }
  ];

  const statistics = [
    { label: 'Total Diskusi', value: '342', icon: MessageCircle, color: '#003d82' },
    { label: 'Anggota Aktif', value: '156', icon: User, color: '#27ae60' },
    { label: 'Diskusi Minggu Ini', value: '28', icon: TrendingUp, color: '#d4af37' },
    { label: 'Rata-rata Respons', value: '2.4 jam', icon: Clock, color: '#e67e22' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><MessageCircle size={32} /> Forum Diskusi Kasus Klinis</h1>
          <p>Platform kolaborasi dan pembelajaran untuk berbagi pengetahuan dan pengalaman klinis</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => setShowNewDiscussion(!showNewDiscussion)}
        >
          <Plus size={20} />
          Buat Diskusi Baru
        </button>
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

      {showNewDiscussion && (
        <div className="card" style={{ marginBottom: '20px', border: '2px solid #003d82' }}>
          <h3 style={{ marginBottom: '20px' }}>Buat Diskusi Baru</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="form-group">
              <label>Judul Diskusi *</label>
              <input type="text" placeholder="Masukkan judul diskusi yang jelas dan deskriptif" />
            </div>
            <div className="form-group">
              <label>Kategori *</label>
              <select>
                <option value="">Pilih Kategori</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Deskripsi / Pertanyaan *</label>
              <textarea rows="6" placeholder="Jelaskan kasus atau pertanyaan Anda secara detail..."></textarea>
            </div>
            <div className="form-group">
              <label>Tag (opsional)</label>
              <input type="text" placeholder="Contoh: covid19, diabetes, emergency" />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button className="btn-secondary" onClick={() => setShowNewDiscussion(false)}>
                Batal
              </button>
              <button className="btn-primary">
                <Plus size={18} />
                Posting Diskusi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'diskusi' ? 'active' : ''}`}
          onClick={() => setActiveTab('diskusi')}
        >
          <MessageCircle size={18} />
          Semua Diskusi
        </button>
        <button 
          className={`tab ${activeTab === 'kategori' ? 'active' : ''}`}
          onClick={() => setActiveTab('kategori')}
        >
          <Tag size={18} />
          Kategori
        </button>
        <button 
          className={`tab ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <TrendingUp size={18} />
          Trending Topics
        </button>
      </div>

      {activeTab === 'diskusi' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Daftar Diskusi</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                <input 
                  type="text" 
                  placeholder="Cari diskusi..." 
                  style={{ paddingLeft: '40px', width: '300px' }}
                />
              </div>
              <button className="btn-secondary">
                <Filter size={18} />
                Filter
              </button>
            </div>
          </div>

          <TableWithExport filename="forum_diskusi_klinis">
            <table>
              <thead>
                <tr>
                  <th>Judul Diskusi</th>
                  <th>Penulis</th>
                  <th>Kategori</th>
                  <th>Tanggal</th>
                  <th style={{ textAlign: 'center' }}>Dilihat</th>
                  <th style={{ textAlign: 'center' }}>Balasan</th>
                  <th style={{ textAlign: 'center' }}>Suka</th>
                  <th>Status</th>
                  <th>Balasan Terakhir</th>
                </tr>
              </thead>
              <tbody>
                {discussions.map((disc) => (
                  <tr key={disc.id}>
                    <td>
                      <div style={{ fontWeight: '600', color: '#003d82', marginBottom: '4px' }}>
                        {disc.title}
                      </div>
                    </td>
                    <td>{disc.author}</td>
                    <td>
                      <span className="badge badge-info">{disc.category}</span>
                    </td>
                    <td>{disc.date}</td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <Eye size={14} />
                        {disc.views}
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <MessageSquare size={14} />
                        {disc.replies}
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <ThumbsUp size={14} />
                        {disc.likes}
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${disc.status === 'Aktif' ? 'badge-warning' : 'badge-success'}`}>
                        {disc.status}
                      </span>
                    </td>
                    <td style={{ fontSize: '13px', color: '#666' }}>{disc.lastReply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'kategori' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Kategori Diskusi</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
            {categories.map((category, index) => (
              <div 
                key={index}
                className="card"
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#003d82';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ fontSize: '40px' }}>{category.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>
                      {category.name}
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      {category.count} diskusi
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'trending' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Topik Trending</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trendingTopics.map((topic, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8f4f8';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#003d82',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '16px' }}>{topic.topic}</div>
                    <div style={{ color: '#666', fontSize: '14px' }}>{topic.discussions} diskusi aktif</div>
                  </div>
                </div>
                <TrendingUp size={24} color="#d4af37" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumKlinis;
