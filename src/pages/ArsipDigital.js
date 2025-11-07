import React, { useState } from 'react';
import { FileText, Upload, Download, Eye, Search, CheckCircle, PenTool, Lock, FileCheck } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const ArsipDigital = () => {
  const [activeTab, setActiveTab] = useState('arsip');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      id: 'DOC-2024-001',
      patientName: 'Mayor Inf. Ahmad Hidayat',
      nrp: '528901234',
      documentType: 'Hasil Pemeriksaan',
      subType: 'Laboratorium',
      date: '15 Jan 2024',
      uploadedBy: 'dr. Budi Santoso, Sp.PD',
      fileSize: '2.4 MB',
      format: 'PDF',
      signed: true,
      signedBy: 'dr. Budi Santoso, Sp.PD',
      signDate: '15 Jan 2024 10:30'
    },
    {
      id: 'DOC-2024-002',
      patientName: 'Kapten Kav. Budi Santoso',
      nrp: '528902345',
      documentType: 'Surat Rujukan',
      subType: 'Rujukan Eksternal',
      date: '14 Jan 2024',
      uploadedBy: 'dr. Rina Hartati, Sp.JP',
      fileSize: '1.8 MB',
      format: 'PDF',
      signed: true,
      signedBy: 'dr. Rina Hartati, Sp.JP',
      signDate: '14 Jan 2024 15:20'
    },
    {
      id: 'DOC-2024-003',
      patientName: 'Letda Arh. Rina Wati',
      nrp: '528903456',
      documentType: 'Resume Medis',
      subType: 'Resume Rawat Inap',
      date: '13 Jan 2024',
      uploadedBy: 'dr. Ahmad Wijaya, Sp.B',
      fileSize: '3.2 MB',
      format: 'PDF',
      signed: true,
      signedBy: 'dr. Ahmad Wijaya, Sp.B',
      signDate: '13 Jan 2024 16:45'
    },
    {
      id: 'DOC-2024-004',
      patientName: 'Serda Inf. Joko Widodo',
      nrp: '528904567',
      documentType: 'Hasil Pemeriksaan',
      subType: 'Radiologi',
      date: '12 Jan 2024',
      uploadedBy: 'dr. Siti Rahayu, Sp.Rad',
      fileSize: '5.6 MB',
      format: 'PDF',
      signed: false,
      signedBy: '',
      signDate: ''
    },
    {
      id: 'DOC-2024-005',
      patientName: 'Mayor Inf. Ahmad Hidayat',
      nrp: '528901234',
      documentType: 'Informed Consent',
      subType: 'Consent Operasi',
      date: '10 Jan 2024',
      uploadedBy: 'Ns. Sri Handayani, S.Kep',
      fileSize: '1.2 MB',
      format: 'PDF',
      signed: true,
      signedBy: 'Mayor Inf. Ahmad Hidayat (Pasien)',
      signDate: '10 Jan 2024 08:15'
    },
    {
      id: 'DOC-2024-006',
      patientName: 'Lettu Czi. Bambang Suryanto',
      nrp: '528905678',
      documentType: 'Surat Keterangan',
      subType: 'Surat Sehat',
      date: '09 Jan 2024',
      uploadedBy: 'dr. Dewi Lestari, Sp.PK',
      fileSize: '0.8 MB',
      format: 'PDF',
      signed: true,
      signedBy: 'dr. Dewi Lestari, Sp.PK',
      signDate: '09 Jan 2024 11:30'
    }
  ];

  const eSignatures = [
    {
      id: 'SIG-001',
      documentId: 'DOC-2024-001',
      signerName: 'dr. Budi Santoso, Sp.PD',
      signerRole: 'Dokter Penanggung Jawab',
      signDate: '15 Jan 2024 10:30',
      method: 'Digital Certificate',
      valid: true,
      certificateId: 'CERT-2024-BS-001'
    },
    {
      id: 'SIG-002',
      documentId: 'DOC-2024-002',
      signerName: 'dr. Rina Hartati, Sp.JP',
      signerRole: 'Dokter Rujukan',
      signDate: '14 Jan 2024 15:20',
      method: 'Digital Certificate',
      valid: true,
      certificateId: 'CERT-2024-RH-002'
    },
    {
      id: 'SIG-003',
      documentId: 'DOC-2024-005',
      signerName: 'Mayor Inf. Ahmad Hidayat',
      signerRole: 'Pasien',
      signDate: '10 Jan 2024 08:15',
      method: 'Biometric Signature',
      valid: true,
      certificateId: 'BIO-2024-AH-001'
    }
  ];

  const documentTypes = [
    'Hasil Pemeriksaan',
    'Surat Rujukan',
    'Resume Medis',
    'Informed Consent',
    'Surat Keterangan',
    'Resep Obat',
    'Laporan Operasi',
    'Hasil Konsultasi'
  ];

  const statistics = [
    { label: 'Total Dokumen', value: documents.length.toString(), icon: FileText, color: '#003d82' },
    { label: 'Telah Ditandatangani', value: documents.filter(d => d.signed).length.toString(), icon: CheckCircle, color: '#27ae60' },
    { label: 'Menunggu Tanda Tangan', value: documents.filter(d => !d.signed).length.toString(), icon: PenTool, color: '#f39c12' },
    { label: 'Total Ukuran', value: '15.0 MB', icon: FileText, color: '#3498db' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.nrp.includes(searchTerm) ||
                         doc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || doc.documentType === filterType;
    return matchesSearch && matchesType;
  });

  const handleSign = (doc) => {
    setSelectedDoc(doc);
    setShowSignModal(true);
  };

  const renderArsipTab = () => (
    <div>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
          <input
            type="text"
            placeholder="Cari pasien, NRP, atau ID dokumen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '40px', width: '100%' }}
          />
        </div>
        <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
          style={{ padding: '10px', minWidth: '200px' }}
        >
          <option value="all">Semua Tipe Dokumen</option>
          {documentTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button className="btn-primary" onClick={() => setShowUploadModal(true)}>
          <Upload size={18} /> Upload Dokumen
        </button>
      </div>

      <TableWithExport data={filteredDocuments} filename="Arsip_Digital_Pasien">
        <table>
          <thead>
            <tr>
              <th>ID Dokumen</th>
              <th>Nama Pasien</th>
              <th>NRP</th>
              <th>Tipe Dokumen</th>
              <th>Tanggal</th>
              <th>Diupload Oleh</th>
              <th>Format</th>
              <th>Ukuran</th>
              <th>Status Tanda Tangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc) => (
              <tr key={doc.id}>
                <td><strong>{doc.id}</strong></td>
                <td>{doc.patientName}</td>
                <td>{doc.nrp}</td>
                <td>
                  <div>
                    <strong>{doc.documentType}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{doc.subType}</div>
                  </div>
                </td>
                <td>{doc.date}</td>
                <td>{doc.uploadedBy}</td>
                <td><span className="badge badge-info">{doc.format}</span></td>
                <td>{doc.fileSize}</td>
                <td>
                  {doc.signed ? (
                    <div>
                      <span className="badge badge-success">
                        <CheckCircle size={14} /> Ditandatangani
                      </span>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
                        {doc.signedBy}<br/>{doc.signDate}
                      </div>
                    </div>
                  ) : (
                    <button 
                      className="btn-warning" 
                      style={{ fontSize: '12px', padding: '6px 10px' }}
                      onClick={() => handleSign(doc)}
                    >
                      <PenTool size={14} /> Tanda Tangan
                    </button>
                  )}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn-icon" title="Lihat">
                      <Eye size={16} />
                    </button>
                    <button className="btn-icon" title="Download">
                      <Download size={16} />
                    </button>
                    {doc.signed && (
                      <button className="btn-icon" title="Verifikasi Tanda Tangan">
                        <FileCheck size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderTandaTanganTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #4caf50' }}>
        <h3 style={{ marginTop: 0 }}><Lock size={20} /> Keamanan e-Signature</h3>
        <p>Semua tanda tangan digital menggunakan sertifikat elektronik yang terenkripsi dan tercatat dalam blockchain untuk mencegah pemalsuan.</p>
      </div>

      <TableWithExport data={eSignatures} filename="Daftar_Tanda_Tangan_Digital">
        <table>
          <thead>
            <tr>
              <th>ID Signature</th>
              <th>ID Dokumen</th>
              <th>Penandatangan</th>
              <th>Peran</th>
              <th>Tanggal & Waktu</th>
              <th>Metode</th>
              <th>ID Sertifikat</th>
              <th>Status Validitas</th>
            </tr>
          </thead>
          <tbody>
            {eSignatures.map((sig) => (
              <tr key={sig.id}>
                <td><strong>{sig.id}</strong></td>
                <td>{sig.documentId}</td>
                <td>{sig.signerName}</td>
                <td>{sig.signerRole}</td>
                <td>{sig.signDate}</td>
                <td>
                  <span className="badge" style={{ backgroundColor: '#e3f2fd', color: '#1976d2' }}>
                    {sig.method}
                  </span>
                </td>
                <td style={{ fontFamily: 'monospace', fontSize: '12px' }}>{sig.certificateId}</td>
                <td>
                  {sig.valid ? (
                    <span className="badge badge-success">
                      <CheckCircle size={14} /> Valid
                    </span>
                  ) : (
                    <span className="badge badge-danger">Invalid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderPanduanTab = () => (
    <div className="card">
      <h2><FileText size={24} /> Panduan Arsip Digital & e-Signature</h2>
      
      <h3>1. Tipe Dokumen yang Dapat Diarsipkan</h3>
      <ul>
        <li><strong>Hasil Pemeriksaan:</strong> Laboratorium, Radiologi, Patologi</li>
        <li><strong>Surat Rujukan:</strong> Rujukan internal dan eksternal</li>
        <li><strong>Resume Medis:</strong> Resume rawat jalan dan rawat inap</li>
        <li><strong>Informed Consent:</strong> Persetujuan tindakan medis</li>
        <li><strong>Surat Keterangan:</strong> Surat sehat, sakit, keterangan medis</li>
        <li><strong>Resep Obat:</strong> Resep digital dengan QR code</li>
      </ul>

      <h3>2. Format File yang Didukung</h3>
      <ul>
        <li>PDF (Recommended) - untuk dokumen final</li>
        <li>JPG/PNG - untuk hasil scan</li>
        <li>DICOM - untuk hasil radiologi</li>
        <li>Maksimal ukuran file: 10 MB per dokumen</li>
      </ul>

      <h3>3. Metode e-Signature</h3>
      <ol>
        <li><strong>Digital Certificate:</strong> Untuk dokter dan staff medis menggunakan sertifikat digital terenkripsi</li>
        <li><strong>Biometric Signature:</strong> Untuk pasien menggunakan tablet signature pad</li>
        <li><strong>PIN Verification:</strong> Backup method dengan verifikasi PIN</li>
        <li><strong>Two-Factor Authentication:</strong> Untuk dokumen kritikal</li>
      </ol>

      <h3>4. Keamanan & Compliance</h3>
      <ul>
        <li>Semua dokumen dienkripsi dengan AES-256</li>
        <li>Tanda tangan digital tercatat dalam blockchain</li>
        <li>Audit trail lengkap untuk setiap akses dokumen</li>
        <li>Compliance dengan UU ITE dan Permenkes 24/2022</li>
        <li>Backup otomatis setiap hari</li>
      </ul>

      <h3>5. Hak Akses</h3>
      <ul>
        <li><strong>View:</strong> Dokter, perawat yang terlibat dalam perawatan</li>
        <li><strong>Upload:</strong> Dokter, staff rekam medis</li>
        <li><strong>Sign:</strong> Dokter dengan sertifikat digital aktif</li>
        <li><strong>Download:</strong> Sesuai role dan keperluan medis</li>
        <li><strong>Delete:</strong> Hanya administrator dengan approval khusus</li>
      </ul>

      <h3>6. Retensi Dokumen</h3>
      <ul>
        <li>Dokumen medis: disimpan selamanya (sesuai regulasi)</li>
        <li>Surat keterangan: 10 tahun</li>
        <li>Informed consent: 10 tahun</li>
        <li>Hasil pemeriksaan: 10 tahun</li>
      </ul>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><FileText size={32} /> Upload & Arsip Digital Pasien</h1>
        <p>Simpan hasil pemeriksaan, surat rujukan, dan resume medis dalam format digital dengan dukungan e-signature</p>
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
          className={`tab ${activeTab === 'arsip' ? 'active' : ''}`}
          onClick={() => setActiveTab('arsip')}
        >
          <FileText size={18} /> Arsip Dokumen
        </button>
        <button
          className={`tab ${activeTab === 'tandatangan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tandatangan')}
        >
          <PenTool size={18} /> e-Signature
        </button>
        <button
          className={`tab ${activeTab === 'panduan' ? 'active' : ''}`}
          onClick={() => setActiveTab('panduan')}
        >
          <FileText size={18} /> Panduan
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'arsip' && renderArsipTab()}
        {activeTab === 'tandatangan' && renderTandaTanganTab()}
        {activeTab === 'panduan' && renderPanduanTab()}
      </div>

      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <h2><Upload size={24} /> Upload Dokumen Pasien</h2>
            <form>
              <div className="form-group">
                <label>Nama Pasien / NRP</label>
                <input type="text" placeholder="Cari pasien..." />
              </div>
              <div className="form-group">
                <label>Tipe Dokumen</label>
                <select>
                  <option value="">Pilih Tipe Dokumen</option>
                  {documentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Sub-Tipe / Keterangan</label>
                <input type="text" placeholder="Contoh: Hasil Lab Darah Lengkap" />
              </div>
              <div className="form-group">
                <label>File Dokumen</label>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                  Format: PDF, JPG, PNG. Maksimal 10 MB
                </small>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> Dokumen ini memerlukan tanda tangan digital
                </label>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  <Upload size={18} /> Upload Dokumen
                </button>
                <button type="button" className="btn-secondary" onClick={() => setShowUploadModal(false)} style={{ flex: 1 }}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSignModal && selectedDoc && (
        <div className="modal-overlay" onClick={() => setShowSignModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <h2><PenTool size={24} /> Tanda Tangan Digital</h2>
            <div className="card" style={{ marginBottom: '20px', backgroundColor: '#f8f9fa' }}>
              <strong>Dokumen:</strong> {selectedDoc.id}<br/>
              <strong>Pasien:</strong> {selectedDoc.patientName}<br/>
              <strong>Tipe:</strong> {selectedDoc.documentType}
            </div>
            <div className="form-group">
              <label>Metode Tanda Tangan</label>
              <select>
                <option value="digital">Digital Certificate</option>
                <option value="biometric">Biometric Signature</option>
                <option value="pin">PIN Verification</option>
              </select>
            </div>
            <div className="form-group">
              <label>PIN / Password</label>
              <input type="password" placeholder="Masukkan PIN Anda" />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" /> Saya bertanggung jawab atas keakuratan dokumen ini
              </label>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                <CheckCircle size={18} /> Tandatangani
              </button>
              <button type="button" className="btn-secondary" onClick={() => setShowSignModal(false)} style={{ flex: 1 }}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArsipDigital;
