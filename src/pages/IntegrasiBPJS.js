import React, { useState } from 'react';
import { Shield, CheckCircle, XCircle, Clock, Search, RefreshCw, FileText, DollarSign } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const IntegrasiBPJS = () => {
  const [activeTab, setActiveTab] = useState('validasi');
  const [searchNIK, setSearchNIK] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const sepData = [
    {
      noSEP: '0301R0011023K000001',
      tglSEP: '15 Jan 2024',
      noKartu: '0001234567890',
      nama: 'Mayor Inf. Ahmad Hidayat',
      diagnosa: 'Diabetes Mellitus Type 2',
      poli: 'Poli Penyakit Dalam',
      dokter: 'dr. Budi Santoso, Sp.PD',
      jnsPelayanan: 'Rawat Jalan',
      status: 'Valid',
      kodeBooking: 'A001',
      tglPulang: '-'
    },
    {
      noSEP: '0301R0011023K000002',
      tglSEP: '14 Jan 2024',
      noKartu: '0001234567891',
      nama: 'Kapten Kav. Budi Santoso',
      diagnosa: 'Hipertensi Grade 2',
      poli: 'Poli Kardiologi',
      dokter: 'dr. Rina Hartati, Sp.JP',
      jnsPelayanan: 'Rawat Jalan',
      status: 'Valid',
      kodeBooking: 'A002',
      tglPulang: '-'
    },
    {
      noSEP: '0301R0011023K000003',
      tglSEP: '13 Jan 2024',
      noKartu: '0001234567892',
      nama: 'Letda Arh. Rina Wati',
      diagnosa: 'Appendicitis Acute',
      poli: 'IGD',
      dokter: 'dr. Ahmad Wijaya, Sp.B',
      jnsPelayanan: 'Rawat Inap',
      status: 'Valid',
      kodeBooking: 'IGD-001',
      tglPulang: '15 Jan 2024'
    },
    {
      noSEP: '0301R0011023K000004',
      tglSEP: '12 Jan 2024',
      noKartu: '0001234567893',
      nama: 'Serda Inf. Joko Widodo',
      diagnosa: 'Pneumonia',
      poli: 'IGD',
      dokter: 'dr. Siti Rahayu, Sp.P',
      jnsPelayanan: 'Rawat Inap',
      status: 'Selesai',
      kodeBooking: 'IGD-002',
      tglPulang: '14 Jan 2024'
    }
  ];

  const eligibilityData = [
    {
      nik: '3201012345678901',
      noKartu: '0001234567890',
      nama: 'Mayor Inf. Ahmad Hidayat',
      tglLahir: '15 Mar 1985',
      pisa: 'RS Trimatra',
      jnsKelamin: 'Laki-laki',
      status: 'Eligible',
      hakKelas: 'Kelas I',
      aktif: true,
      sisaPlafon: 'Unlimited'
    },
    {
      nik: '3201012345678902',
      noKartu: '0001234567891',
      nama: 'Kapten Kav. Budi Santoso',
      tglLahir: '20 Jun 1988',
      pisa: 'RS Trimatra',
      jnsKelamin: 'Laki-laki',
      status: 'Eligible',
      hakKelas: 'Kelas I',
      aktif: true,
      sisaPlafon: 'Unlimited'
    }
  ];

  const tagihanData = [
    {
      id: 'INV-2024-001',
      noSEP: '0301R0011023K000003',
      nama: 'Letda Arh. Rina Wati',
      diagnosa: 'Appendicitis Acute',
      tglMasuk: '13 Jan 2024',
      tglKeluar: '15 Jan 2024',
      totalTagihan: 15500000,
      tarifINA: 12000000,
      selisih: 3500000,
      statusKlaim: 'Submitted',
      tglSubmit: '16 Jan 2024'
    },
    {
      id: 'INV-2024-002',
      noSEP: '0301R0011023K000004',
      nama: 'Serda Inf. Joko Widodo',
      diagnosa: 'Pneumonia',
      tglMasuk: '12 Jan 2024',
      tglKeluar: '14 Jan 2024',
      totalTagihan: 18000000,
      tarifINA: 18000000,
      selisih: 0,
      statusKlaim: 'Approved',
      tglSubmit: '15 Jan 2024'
    },
    {
      id: 'INV-2024-003',
      noSEP: '0301R0011023K000001',
      nama: 'Mayor Inf. Ahmad Hidayat',
      diagnosa: 'Diabetes Mellitus Type 2',
      tglMasuk: '15 Jan 2024',
      tglKeluar: '15 Jan 2024',
      totalTagihan: 350000,
      tarifINA: 350000,
      selisih: 0,
      statusKlaim: 'Approved',
      tglSubmit: '15 Jan 2024'
    }
  ];

  const statistics = [
    { label: 'SEP Aktif', value: sepData.filter(s => s.status === 'Valid').length.toString(), icon: FileText, color: '#003d82' },
    { label: 'Eligible', value: eligibilityData.filter(e => e.aktif).length.toString(), icon: CheckCircle, color: '#27ae60' },
    { label: 'Klaim Submitted', value: tagihanData.filter(t => t.statusKlaim === 'Submitted').length.toString(), icon: Clock, color: '#f39c12' },
    { label: 'Total Klaim Bulan Ini', value: 'Rp 33,85 Jt', icon: DollarSign, color: '#d4af37' }
  ];

  const handleSearchEligibility = () => {
    if (searchNIK === '3201012345678901') {
      setSearchResults(eligibilityData[0]);
    } else if (searchNIK === '3201012345678902') {
      setSearchResults(eligibilityData[1]);
    } else {
      setSearchResults({ error: 'Data tidak ditemukan' });
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  const renderValidasiTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3><Search size={20} /> Validasi Eligibilitas Peserta</h3>
        <p style={{ color: '#666', marginBottom: '15px' }}>Masukkan NIK atau No. Kartu BPJS untuk memvalidasi eligibilitas peserta</p>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Masukkan NIK atau No. Kartu BPJS"
            value={searchNIK}
            onChange={(e) => setSearchNIK(e.target.value)}
            style={{ flex: 1 }}
          />
          <button className="btn-primary" onClick={handleSearchEligibility}>
            <Search size={18} /> Cek Eligibilitas
          </button>
        </div>

        {searchResults && !searchResults.error && (
          <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <CheckCircle size={32} style={{ color: '#4caf50' }} />
              <h3 style={{ margin: 0, color: '#2e7d32' }}>Peserta Eligible</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              <div><strong>NIK:</strong> {searchResults.nik}</div>
              <div><strong>No. Kartu:</strong> {searchResults.noKartu}</div>
              <div><strong>Nama:</strong> {searchResults.nama}</div>
              <div><strong>Tanggal Lahir:</strong> {searchResults.tglLahir}</div>
              <div><strong>Jenis Kelamin:</strong> {searchResults.jnsKelamin}</div>
              <div><strong>Hak Kelas:</strong> {searchResults.hakKelas}</div>
              <div><strong>PISA:</strong> {searchResults.pisa}</div>
              <div><strong>Status:</strong> <span className="badge badge-success">{searchResults.aktif ? 'Aktif' : 'Tidak Aktif'}</span></div>
            </div>
          </div>
        )}

        {searchResults && searchResults.error && (
          <div style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #f44336' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <XCircle size={32} style={{ color: '#f44336' }} />
              <div>
                <h3 style={{ margin: 0, color: '#c62828' }}>Data Tidak Ditemukan</h3>
                <p style={{ margin: '5px 0 0 0' }}>Pastikan NIK atau No. Kartu BPJS sudah benar</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <h3>Data Eligibilitas Tersimpan</h3>
      <TableWithExport data={eligibilityData} filename="Data_Eligibilitas_BPJS">
        <table>
          <thead>
            <tr>
              <th>NIK</th>
              <th>No. Kartu</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>Jenis Kelamin</th>
              <th>Hak Kelas</th>
              <th>PISA</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {eligibilityData.map((data, idx) => (
              <tr key={idx}>
                <td>{data.nik}</td>
                <td><strong>{data.noKartu}</strong></td>
                <td>{data.nama}</td>
                <td>{data.tglLahir}</td>
                <td>{data.jnsKelamin}</td>
                <td><span className="badge badge-info">{data.hakKelas}</span></td>
                <td>{data.pisa}</td>
                <td>
                  {data.aktif ? (
                    <span className="badge badge-success"><CheckCircle size={14} /> Aktif</span>
                  ) : (
                    <span className="badge badge-danger"><XCircle size={14} /> Tidak Aktif</span>
                  )}
                </td>
                <td>
                  <button className="btn-icon" title="Refresh Data">
                    <RefreshCw size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderSEPTab = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px', backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3' }}>
        <h3 style={{ marginTop: 0 }}><FileText size={20} /> Manajemen SEP (Surat Eligibilitas Peserta)</h3>
        <p>Daftar SEP yang telah dibuat untuk pasien BPJS. Data terhubung real-time dengan VClaim BPJS.</p>
      </div>

      <TableWithExport data={sepData} filename="Daftar_SEP_BPJS">
        <table>
          <thead>
            <tr>
              <th>No. SEP</th>
              <th>Tanggal SEP</th>
              <th>No. Kartu</th>
              <th>Nama Pasien</th>
              <th>Diagnosa</th>
              <th>Poli/Ruang</th>
              <th>Dokter</th>
              <th>Jenis Pelayanan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sepData.map((sep, idx) => (
              <tr key={idx}>
                <td style={{ fontFamily: 'monospace', fontSize: '12px' }}>{sep.noSEP}</td>
                <td>{sep.tglSEP}</td>
                <td>{sep.noKartu}</td>
                <td><strong>{sep.nama}</strong></td>
                <td>{sep.diagnosa}</td>
                <td>{sep.poli}</td>
                <td>{sep.dokter}</td>
                <td>
                  <span className={`badge ${sep.jnsPelayanan === 'Rawat Jalan' ? 'badge-info' : 'badge-warning'}`}>
                    {sep.jnsPelayanan}
                  </span>
                </td>
                <td>
                  <span className={`badge ${
                    sep.status === 'Valid' ? 'badge-success' : 
                    sep.status === 'Selesai' ? 'badge-secondary' : 'badge-danger'
                  }`}>
                    {sep.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderTagihanTab = () => (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '20px' }}>
        <div className="card" style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #4caf50', textAlign: 'center' }}>
          <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Klaim Approved</h4>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2e7d32' }}>
            {tagihanData.filter(t => t.statusKlaim === 'Approved').length}
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Total: {formatCurrency(tagihanData.filter(t => t.statusKlaim === 'Approved').reduce((sum, t) => sum + t.tarifINA, 0))}</p>
        </div>

        <div className="card" style={{ backgroundColor: '#fff3e0', borderLeft: '4px solid #ff9800', textAlign: 'center' }}>
          <h4 style={{ color: '#e65100', marginTop: 0 }}>Menunggu Approval</h4>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#e65100' }}>
            {tagihanData.filter(t => t.statusKlaim === 'Submitted').length}
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Total: {formatCurrency(tagihanData.filter(t => t.statusKlaim === 'Submitted').reduce((sum, t) => sum + t.tarifINA, 0))}</p>
        </div>

        <div className="card" style={{ backgroundColor: '#ffebee', borderLeft: '4px solid #f44336', textAlign: 'center' }}>
          <h4 style={{ color: '#c62828', marginTop: 0 }}>Selisih Tarif</h4>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#c62828' }}>
            {formatCurrency(tagihanData.reduce((sum, t) => sum + t.selisih, 0))}
          </div>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Dari {tagihanData.length} klaim</p>
        </div>
      </div>

      <TableWithExport data={tagihanData} filename="Tagihan_Klaim_BPJS">
        <table>
          <thead>
            <tr>
              <th>ID Invoice</th>
              <th>No. SEP</th>
              <th>Nama Pasien</th>
              <th>Diagnosa</th>
              <th>Tgl Masuk</th>
              <th>Tgl Keluar</th>
              <th>Total Tagihan</th>
              <th>Tarif INA-CBG</th>
              <th>Selisih</th>
              <th>Status Klaim</th>
              <th>Tgl Submit</th>
            </tr>
          </thead>
          <tbody>
            {tagihanData.map((tagihan) => (
              <tr key={tagihan.id}>
                <td><strong>{tagihan.id}</strong></td>
                <td style={{ fontFamily: 'monospace', fontSize: '11px' }}>{tagihan.noSEP}</td>
                <td>{tagihan.nama}</td>
                <td>{tagihan.diagnosa}</td>
                <td>{tagihan.tglMasuk}</td>
                <td>{tagihan.tglKeluar}</td>
                <td>{formatCurrency(tagihan.totalTagihan)}</td>
                <td><strong>{formatCurrency(tagihan.tarifINA)}</strong></td>
                <td style={{ color: tagihan.selisih > 0 ? '#f44336' : '#4caf50' }}>
                  <strong>{formatCurrency(tagihan.selisih)}</strong>
                </td>
                <td>
                  <span className={`badge ${
                    tagihan.statusKlaim === 'Approved' ? 'badge-success' : 
                    tagihan.statusKlaim === 'Submitted' ? 'badge-warning' : 'badge-danger'
                  }`}>
                    {tagihan.statusKlaim}
                  </span>
                </td>
                <td>{tagihan.tglSubmit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWithExport>
    </div>
  );

  const renderKonfigurasiTab = () => (
    <div className="card">
      <h2><Shield size={24} /> Konfigurasi Integrasi BPJS VClaim</h2>
      
      <div style={{ marginTop: '20px' }}>
        <h3>1. Koneksi Web Service</h3>
        <div className="form-group">
          <label>URL Endpoint VClaim</label>
          <input type="text" value="https://apijkn-dev.bpjs-kesehatan.go.id/vclaim-rest-dev/" readOnly />
        </div>
        <div className="form-group">
          <label>Cons ID</label>
          <input type="text" value="10011" readOnly />
        </div>
        <div className="form-group">
          <label>Secret Key</label>
          <input type="password" value="********************************" readOnly />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#4caf50',
            animation: 'pulse 2s infinite'
          }}></div>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Koneksi Aktif</span>
          <button className="btn-secondary" style={{ marginLeft: 'auto' }}>
            <RefreshCw size={16} /> Test Koneksi
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>2. Pengaturan Fasilitas</h3>
        <div className="form-group">
          <label>Kode PPK</label>
          <input type="text" value="0301R001" readOnly />
        </div>
        <div className="form-group">
          <label>Nama PPK</label>
          <input type="text" value="RS Trimatra" readOnly />
        </div>
        <div className="form-group">
          <label>Kelas RS</label>
          <input type="text" value="B" readOnly />
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>3. Fitur yang Diaktifkan</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Validasi Eligibilitas Peserta</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Pembuatan SEP Otomatis</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Submit Klaim INA-CBG</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Monitoring Status Klaim</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked readOnly />
            <span>Notifikasi Real-time</span>
          </label>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>4. Log Aktivitas</h3>
        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '12px', maxHeight: '200px', overflowY: 'auto' }}>
          <div>[2024-01-15 10:30:15] GET /peserta/0001234567890 - Status: 200 OK</div>
          <div>[2024-01-15 10:32:20] POST /sep/insert - Status: 200 OK - SEP: 0301R0011023K000001</div>
          <div>[2024-01-15 10:35:45] GET /referensi/diagnosa - Status: 200 OK</div>
          <div>[2024-01-15 11:15:30] POST /klaim/new - Status: 200 OK - Invoice: INV-2024-001</div>
          <div>[2024-01-15 11:20:00] GET /monitoring/klaim/INV-2024-001 - Status: 200 OK</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Shield size={32} /> BPJS Web Service</h1>
        <p>Validasi SEP, eligibilitas, dan tagihan otomatis terintegrasi dengan VClaim BPJS Kesehatan</p>
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
          className={`tab ${activeTab === 'validasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('validasi')}
        >
          <CheckCircle size={18} /> Validasi Eligibilitas
        </button>
        <button
          className={`tab ${activeTab === 'sep' ? 'active' : ''}`}
          onClick={() => setActiveTab('sep')}
        >
          <FileText size={18} /> Manajemen SEP
        </button>
        <button
          className={`tab ${activeTab === 'tagihan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagihan')}
        >
          <DollarSign size={18} /> Tagihan & Klaim
        </button>
        <button
          className={`tab ${activeTab === 'konfigurasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('konfigurasi')}
        >
          <Shield size={18} /> Konfigurasi
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'validasi' && renderValidasiTab()}
        {activeTab === 'sep' && renderSEPTab()}
        {activeTab === 'tagihan' && renderTagihanTab()}
        {activeTab === 'konfigurasi' && renderKonfigurasiTab()}
      </div>
    </div>
  );
};

export default IntegrasiBPJS;
