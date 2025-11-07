import React, { useState } from 'react';
import { FileText, Upload, Clock, CheckCircle, AlertTriangle, Download, Eye, Edit, Archive, Search } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const EDokumenSOP = () => {
  const [activeTab, setActiveTab] = useState('dokumen');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const documents = [
    { 
      id: 'SOP-001', 
      title: 'SOP Penerimaan Pasien Rawat Inap', 
      category: 'Pelayanan', 
      version: '3.1', 
      status: 'Aktif',
      lastUpdate: '15 Jan 2024',
      updatedBy: 'dr. Siti Aminah, M.Kes',
      nextReview: '15 Jul 2024',
      approver: 'Direktur Pelayanan',
      isoRef: 'ISO 9001:2015 - 7.1.4'
    },
    { 
      id: 'SOP-002', 
      title: 'SOP Pengendalian Infeksi', 
      category: 'Mutu & Keselamatan', 
      version: '2.5', 
      status: 'Review',
      lastUpdate: '10 Jan 2024',
      updatedBy: 'dr. Ahmad Wijaya, Sp.PK',
      nextReview: '10 Feb 2024',
      approver: 'Komite PPI',
      isoRef: 'ISO 9001:2015 - 8.5.1'
    },
    { 
      id: 'SOP-003', 
      title: 'SOP Manajemen Obat High Alert', 
      category: 'Farmasi', 
      version: '4.0', 
      status: 'Aktif',
      lastUpdate: '05 Jan 2024',
      updatedBy: 'Apt. Rina Kusuma, S.Farm',
      nextReview: '05 Jul 2024',
      approver: 'Kepala Instalasi Farmasi',
      isoRef: 'ISO 9001:2015 - 8.5.2'
    },
    { 
      id: 'DOK-001', 
      title: 'Kebijakan Keselamatan Pasien', 
      category: 'Kebijakan', 
      version: '2.0', 
      status: 'Aktif',
      lastUpdate: '20 Des 2023',
      updatedBy: 'Tim Mutu RS',
      nextReview: '20 Jun 2024',
      approver: 'Direktur RS',
      isoRef: 'ISO 9001:2015 - 5.2'
    },
    { 
      id: 'ISO-001', 
      title: 'Manual Mutu RS Trimatra', 
      category: 'ISO', 
      version: '5.2', 
      status: 'Aktif',
      lastUpdate: '01 Jan 2024',
      updatedBy: 'Tim Akreditasi',
      nextReview: '01 Jan 2025',
      approver: 'Direktur RS',
      isoRef: 'ISO 9001:2015 - 4.1-10'
    },
    { 
      id: 'SOP-004', 
      title: 'SOP Penanganan Pasien Gawat Darurat', 
      category: 'Pelayanan', 
      version: '3.3', 
      status: 'Aktif',
      lastUpdate: '12 Jan 2024',
      updatedBy: 'dr. Bambang Irawan, Sp.EM',
      nextReview: '12 Jul 2024',
      approver: 'Kepala IGD',
      isoRef: 'ISO 9001:2015 - 8.5.5'
    },
    { 
      id: 'SOP-005', 
      title: 'SOP Sterilisasi Alat Medis', 
      category: 'CSSD', 
      version: '2.8', 
      status: 'Review',
      lastUpdate: '08 Jan 2024',
      updatedBy: 'Sri Handayani, AMK',
      nextReview: '08 Feb 2024',
      approver: 'Kepala CSSD',
      isoRef: 'ISO 9001:2015 - 8.5.4'
    },
    { 
      id: 'DOK-002', 
      title: 'Panduan Clinical Pathway Pneumonia', 
      category: 'Clinical Pathway', 
      version: '1.5', 
      status: 'Aktif',
      lastUpdate: '15 Des 2023',
      updatedBy: 'Tim Medis',
      nextReview: '15 Jun 2024',
      approver: 'Komite Medis',
      isoRef: 'ISO 9001:2015 - 8.5.3'
    }
  ];

  const revisionHistory = [
    { id: 1, docId: 'SOP-001', version: '3.1', date: '15 Jan 2024', type: 'Major Update', changes: 'Penambahan prosedur verifikasi identitas pasien', editor: 'dr. Siti Aminah, M.Kes', approved: true },
    { id: 2, docId: 'SOP-001', version: '3.0', date: '15 Jul 2023', type: 'Minor Update', changes: 'Perbaikan format dan typo', editor: 'dr. Siti Aminah, M.Kes', approved: true },
    { id: 3, docId: 'SOP-003', version: '4.0', date: '05 Jan 2024', type: 'Major Update', changes: 'Update sesuai regulasi BPOM terbaru', editor: 'Apt. Rina Kusuma, S.Farm', approved: true },
    { id: 4, docId: 'SOP-002', version: '2.5', date: '10 Jan 2024', type: 'Major Update', changes: 'Penambahan protokol COVID-19 varian baru', editor: 'dr. Ahmad Wijaya, Sp.PK', approved: false }
  ];

  const categories = ['Pelayanan', 'Mutu & Keselamatan', 'Farmasi', 'Kebijakan', 'ISO', 'CSSD', 'Clinical Pathway', 'Administratif'];

  const statistics = [
    { label: 'Total Dokumen', value: documents.length.toString(), icon: FileText, color: '#003d82' },
    { label: 'Dokumen Aktif', value: documents.filter(d => d.status === 'Aktif').length.toString(), icon: CheckCircle, color: '#27ae60' },
    { label: 'Dalam Review', value: documents.filter(d => d.status === 'Review').length.toString(), icon: Clock, color: '#f39c12' },
    { label: 'Perlu Update', value: '3', icon: AlertTriangle, color: '#e74c3c' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const renderDokumenTab = () => (
    <div>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
          <input
            type="text"
            placeholder="Cari dokumen atau nomor SOP..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '40px', width: '100%' }}
          />
        </div>
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{ padding: '10px', minWidth: '200px' }}
        >
          <option value="all">Semua Kategori</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          <Upload size={18} /> Upload Dokumen Baru
        </button>
      </div>

      <TableWithExport data={filteredDocuments} filename="Dokumen_SOP_ISO">
        <table>
          <thead>
            <tr>
              <th>No. Dokumen</th>
              <th>Judul Dokumen</th>
              <th>Kategori</th>
              <th>Versi</th>
              <th>Status</th>
              <th>Update Terakhir</th>
              <th>Review Berikutnya</th>
              <th>Referensi ISO</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc) => (
              <tr key={doc.id}>
                <td><strong>{doc.id}</strong></td>
                <td>{doc.title}</td>
                <td><span className="badge" style={{ backgroundColor: '#e3f2fd', color: '#1976d2' }}>{doc.category}</span></td>
                <td><strong>v{doc.version}</strong></td>
                <td>
                  <span className={`badge ${doc.status === 'Aktif' ? 'badge-success' : 'badge-warning'}`}>
                    {doc.status}
                  </span>
                </td>
                <td>{doc.lastUpdate}</td>
                <td>{doc.nextReview}</td>
                <td style={{ fontSize: '12px', color: '#666' }}>{doc.isoRef}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn-icon" title="Lihat">
                      <Eye size={16} />
                    </button>
                    <button className="btn-icon" title="Download">
                      <Download size={16} />
                    </button>
                    <button className="btn-icon" title="Edit">
                      <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderRevisiTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107' }}>
        <h3 style={{ marginTop: 0 }}><AlertTriangle size={20} /> Perhatian</h3>
        <p>Semua revisi dokumen harus melalui proses approval sebelum diterbitkan. Pastikan perubahan sudah sesuai dengan standar yang berlaku.</p>
      </div>

      <TableWithExport data={revisionHistory} filename="Riwayat_Revisi_Dokumen">
        <table>
          <thead>
            <tr>
              <th>ID Dokumen</th>
              <th>Versi</th>
              <th>Tanggal</th>
              <th>Tipe Perubahan</th>
              <th>Deskripsi Perubahan</th>
              <th>Editor</th>
              <th>Status Approval</th>
            </tr>
          </thead>
          <tbody>
            {revisionHistory.map((rev) => (
              <tr key={rev.id}>
                <td><strong>{rev.docId}</strong></td>
                <td>v{rev.version}</td>
                <td>{rev.date}</td>
                <td>
                  <span className={`badge ${rev.type === 'Major Update' ? 'badge-warning' : 'badge-info'}`}>
                    {rev.type}
                  </span>
                </td>
                <td>{rev.changes}</td>
                <td>{rev.editor}</td>
                <td>
                  {rev.approved ? (
                    <span className="badge badge-success"><CheckCircle size={14} /> Disetujui</span>
                  ) : (
                    <span className="badge badge-warning"><Clock size={14} /> Menunggu</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderKategoriTab = () => (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {categories.map((category) => {
          const count = documents.filter(d => d.category === category).length;
          const active = documents.filter(d => d.category === category && d.status === 'Aktif').length;
          
          return (
            <div key={category} className="card" style={{ textAlign: 'center' }}>
              <FileText size={40} style={{ color: '#003d82', marginBottom: '10px' }} />
              <h3>{category}</h3>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#003d82', margin: '10px 0' }}>
                {count}
              </div>
              <p style={{ color: '#666', margin: 0 }}>{active} dokumen aktif</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderPanduanTab = () => (
    <div className="card">
      <h2><FileText size={24} /> Panduan Manajemen Dokumen</h2>
      
      <h3>1. Penomoran Dokumen</h3>
      <ul>
        <li><strong>SOP-XXX:</strong> Standard Operating Procedure</li>
        <li><strong>DOK-XXX:</strong> Dokumen Kebijakan/Panduan</li>
        <li><strong>ISO-XXX:</strong> Dokumen Manual Mutu ISO</li>
        <li><strong>CP-XXX:</strong> Clinical Pathway</li>
      </ul>

      <h3>2. Proses Review Dokumen</h3>
      <ol>
        <li>Review dokumen dilakukan setiap 6 bulan atau sesuai kebutuhan</li>
        <li>Editor membuat draft revisi dengan tracking changes</li>
        <li>Draft diajukan ke approver terkait</li>
        <li>Setelah approval, dokumen dipublikasikan dengan versi baru</li>
        <li>Versi lama diarsipkan dengan status "Archived"</li>
      </ol>

      <h3>3. Referensi ISO 9001:2015</h3>
      <ul>
        <li><strong>4.1-10:</strong> Context of the organization</li>
        <li><strong>5.2:</strong> Policy</li>
        <li><strong>7.1.4:</strong> Environment for operation of processes</li>
        <li><strong>8.5.1-5:</strong> Production and service provision</li>
      </ul>

      <h3>4. Hak Akses</h3>
      <ul>
        <li><strong>View:</strong> Semua staff dapat melihat dokumen aktif</li>
        <li><strong>Edit:</strong> Hanya PIC dan editor terdaftar</li>
        <li><strong>Approve:</strong> Manajemen dan komite terkait</li>
        <li><strong>Archive:</strong> Administrator sistem</li>
      </ul>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><FileText size={32} /> e-SOP & Dokumen ISO</h1>
        <p>Manajemen dokumen operasional, SOP, kebijakan, dan dokumen ISO dengan tracking revisi</p>
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
          className={`tab ${activeTab === 'dokumen' ? 'active' : ''}`}
          onClick={() => setActiveTab('dokumen')}
        >
          <FileText size={18} /> Daftar Dokumen
        </button>
        <button
          className={`tab ${activeTab === 'revisi' ? 'active' : ''}`}
          onClick={() => setActiveTab('revisi')}
        >
          <Clock size={18} /> Riwayat Revisi
        </button>
        <button
          className={`tab ${activeTab === 'kategori' ? 'active' : ''}`}
          onClick={() => setActiveTab('kategori')}
        >
          <Archive size={18} /> Per Kategori
        </button>
        <button
          className={`tab ${activeTab === 'panduan' ? 'active' : ''}`}
          onClick={() => setActiveTab('panduan')}
        >
          <FileText size={18} /> Panduan
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'dokumen' && renderDokumenTab()}
        {activeTab === 'revisi' && renderRevisiTab()}
        {activeTab === 'kategori' && renderKategoriTab()}
        {activeTab === 'panduan' && renderPanduanTab()}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <h2><Upload size={24} /> Upload Dokumen Baru</h2>
            <form>
              <div className="form-group">
                <label>Nomor Dokumen</label>
                <input type="text" placeholder="Contoh: SOP-006" />
              </div>
              <div className="form-group">
                <label>Judul Dokumen</label>
                <input type="text" placeholder="Masukkan judul dokumen" />
              </div>
              <div className="form-group">
                <label>Kategori</label>
                <select>
                  <option value="">Pilih Kategori</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Versi</label>
                <input type="text" placeholder="Contoh: 1.0" />
              </div>
              <div className="form-group">
                <label>Referensi ISO (opsional)</label>
                <input type="text" placeholder="Contoh: ISO 9001:2015 - 8.5.1" />
              </div>
              <div className="form-group">
                <label>File Dokumen</label>
                <input type="file" accept=".pdf,.doc,.docx" />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  <Upload size={18} /> Upload Dokumen
                </button>
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)} style={{ flex: 1 }}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EDokumenSOP;
