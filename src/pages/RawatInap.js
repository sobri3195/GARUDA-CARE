import React, { useState } from 'react';
import { 
  Bed, AlertCircle, Users, ClipboardCheck, FileText, 
  Activity, Pill, TestTube, DollarSign, Home, Lock, 
  Calendar, TrendingUp, Plus, Edit, Eye, Download,
  UserPlus, ArrowRightLeft, Filter,
  AlertTriangle, FileSignature, Settings
} from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const RawatInap = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard & BOR', icon: <TrendingUp size={16} /> },
    { id: 'registrasi', label: 'Registrasi & Admisi', icon: <UserPlus size={16} /> },
    { id: 'bedmanagement', label: 'Bed Management', icon: <Bed size={16} /> },
    { id: 'asuhan', label: 'Asuhan Pasien', icon: <ClipboardCheck size={16} /> },
    { id: 'farmasi', label: 'Farmasi & E-Resep', icon: <Pill size={16} /> },
    { id: 'penunjang', label: 'Penunjang Medis', icon: <TestTube size={16} /> },
    { id: 'pelaporan', label: 'Pelaporan SIRS', icon: <FileText size={16} /> },
    { id: 'billing', label: 'Billing & Tagihan', icon: <DollarSign size={16} /> },
    { id: 'mutasi', label: 'Mutasi Pasien', icon: <ArrowRightLeft size={16} /> },
    { id: 'discharge', label: 'Discharge Planning', icon: <Home size={16} /> },
    { id: 'keamanan', label: 'Keamanan & Audit', icon: <Lock size={16} /> }
  ];

  const renderDashboard = () => (
    <div>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Total Bed</h3>
            <p>120</p>
            <small>Kapasitas total RS</small>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon secondary">
            <Users size={30} />
          </div>
          <div className="stat-content">
            <h3>Pasien Aktif</h3>
            <p>94</p>
            <small>Sedang dirawat</small>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Bed Tersedia</h3>
            <p>26</p>
            <small>21.7% kapasitas</small>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <TrendingUp size={30} />
          </div>
          <div className="stat-content">
            <h3>BOR (Bed Occupancy Rate)</h3>
            <p>78.3%</p>
            <small>Target: 60-85%</small>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginTop: '20px' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Indikator Mutu Rawat Inap</h3>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Indikator</th>
                  <th>Nilai</th>
                  <th>Target</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>BOR</strong> (Bed Occupancy Rate)</td>
                  <td>78.3%</td>
                  <td>60-85%</td>
                  <td><span className="badge badge-success">Normal</span></td>
                </tr>
                <tr>
                  <td><strong>ALOS</strong> (Average Length of Stay)</td>
                  <td>4.2 hari</td>
                  <td>6-9 hari</td>
                  <td><span className="badge badge-success">Baik</span></td>
                </tr>
                <tr>
                  <td><strong>TOI</strong> (Turn Over Interval)</td>
                  <td>1.8 hari</td>
                  <td>1-3 hari</td>
                  <td><span className="badge badge-success">Normal</span></td>
                </tr>
                <tr>
                  <td><strong>BTR</strong> (Bed Turn Over Rate)</td>
                  <td>52x/tahun</td>
                  <td>40-50x/tahun</td>
                  <td><span className="badge badge-warning">Tinggi</span></td>
                </tr>
                <tr>
                  <td><strong>NDR</strong> (Net Death Rate)</td>
                  <td>18/1000</td>
                  <td>{'<'}25/1000</td>
                  <td><span className="badge badge-success">Baik</span></td>
                </tr>
                <tr>
                  <td><strong>GDR</strong> (Gross Death Rate)</td>
                  <td>25/1000</td>
                  <td>{'<'}45/1000</td>
                  <td><span className="badge badge-success">Baik</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Grafik Sensus Harian (7 Hari Terakhir)</h3>
          </div>
          <div className="card-body">
            <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Activity size={48} style={{ margin: '0 auto', color: '#003d82', marginBottom: '15px' }} />
              <div style={{ fontSize: '14px', color: '#666' }}>
                <strong>Grafik Sensus Pasien Rawat Inap</strong><br />
                <div style={{ marginTop: '15px' }}>
                  📊 Pasien Masuk: 42 pasien<br />
                  📊 Pasien Keluar: 38 pasien<br />
                  📊 Pasien Meninggal: 2 pasien<br />
                  📊 Pasien Pindah Ruangan: 8 pasien
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegistrasi = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Registrasi & Admisi Pasien Rawat Inap</h3>
        <button className="btn btn-primary">
          <Plus size={16} style={{ marginRight: '8px' }} />
          Daftar Pasien Baru
        </button>
      </div>
      <div className="card-body">
        <div className="alert alert-info" style={{ marginBottom: '20px' }}>
          <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Form registrasi mencakup: Identitas pasien, Kelas perawatan (VIP/I/II/III/ICU/HCU), DPJP, Rujukan dari (Rawat Jalan/IGD), Diagnosa awal
        </div>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="🔍 Cari berdasarkan No. RM, NIK, atau Nama"
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px'
            }}
          />
          <button className="btn btn-outline">
            <Filter size={16} style={{ marginRight: '8px' }} />
            Filter
          </button>
          <button className="btn btn-outline">
            <Download size={16} style={{ marginRight: '8px' }} />
            Export
          </button>
        </div>

        <TableWithExport
          data={[
            { no_rm: 'RM-001234', nama: 'Kapten Budi Santoso', nik: '3201012345670001', asal: 'IGD', kelas: 'Kelas I', dpjp: 'dr. Andi Wijaya, Sp.PD', diagnosa: 'Demam Dengue', tgl_masuk: '2024-01-15 08:30', status: 'Aktif' },
            { no_rm: 'RM-001235', nama: 'Serka Ahmad Hidayat', nik: '3201012345670002', asal: 'Rawat Jalan', kelas: 'VIP', dpjp: 'dr. Siti Nurhaliza, Sp.JP', diagnosa: 'Hipertensi Grade 2', tgl_masuk: '2024-01-15 09:15', status: 'Aktif' },
            { no_rm: 'RM-001236', nama: 'Sersan Eko Prasetyo', nik: '3201012345670003', asal: 'IGD', kelas: 'ICU', dpjp: 'dr. Bambang Sutopo, Sp.An', diagnosa: 'Sepsis', tgl_masuk: '2024-01-15 10:00', status: 'Kritis' },
            { no_rm: 'RM-001237', nama: 'Pratu Dewi Lestari', nik: '3201012345670004', asal: 'Rawat Jalan', kelas: 'Kelas II', dpjp: 'dr. Maya Sari, Sp.OG', diagnosa: 'Kehamilan Risiko Tinggi', tgl_masuk: '2024-01-15 11:20', status: 'Aktif' },
            { no_rm: 'RM-001238', nama: 'Mayor Agus Setiawan', nik: '3201012345670005', asal: 'IGD', kelas: 'VIP', dpjp: 'dr. Andi Wijaya, Sp.PD', diagnosa: 'Pneumonia', tgl_masuk: '2024-01-15 14:00', status: 'Aktif' }
          ]}
          columns={[
            { header: 'No. RM', key: 'no_rm' },
            { header: 'Nama Pasien', key: 'nama' },
            { header: 'NIK', key: 'nik' },
            { header: 'Asal', key: 'asal' },
            { header: 'Kelas', key: 'kelas' },
            { header: 'DPJP', key: 'dpjp' },
            { header: 'Diagnosa Awal', key: 'diagnosa' },
            { header: 'Tanggal Masuk', key: 'tgl_masuk' },
            { 
              header: 'Status', 
              key: 'status',
              render: (value) => (
                <span className={`badge ${
                  value === 'Aktif' ? 'badge-success' : 
                  value === 'Kritis' ? 'badge-danger' : 'badge-secondary'
                }`}>
                  {value}
                </span>
              )
            },
            {
              header: 'Aksi',
              key: 'aksi',
              render: () => (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button className="btn btn-sm btn-outline" title="Lihat Detail">
                    <Eye size={14} />
                  </button>
                  <button className="btn btn-sm btn-outline" title="Edit">
                    <Edit size={14} />
                  </button>
                </div>
              )
            }
          ]}
          fileName="registrasi_rawat_inap"
        />
      </div>
    </div>
  );

  const renderBedManagement = () => (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <h3 className="card-title">Bed Management System - Real Time</h3>
          <button className="btn btn-outline">
            <Settings size={16} style={{ marginRight: '8px' }} />
            Kelola Bed
          </button>
        </div>
        <div className="card-body">
          <div className="alert alert-info" style={{ marginBottom: '20px' }}>
            <Bed size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Status Bed:</strong> 🟢 Kosong | 🔴 Terisi | 🟡 Dipesan | 🟠 Dibersihkan | ⚫ Maintenance
          </div>

          <div className="grid grid-cols-3">
            {/* VIP A */}
            <div style={{ padding: '15px', border: '2px solid #003d82', borderRadius: '8px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontWeight: 'bold', color: '#003d82' }}>🏆 VIP A</h4>
                <span className="badge badge-warning">BOR: 80%</span>
              </div>
              <div style={{ fontSize: '13px', marginBottom: '10px' }}>
                Kapasitas: <strong>10 bed</strong> | Terisi: <strong>8 bed</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                {[
                  { no: 1, status: 'terisi', pasien: 'Mayor Agus' },
                  { no: 2, status: 'terisi', pasien: 'Kolonel Budi' },
                  { no: 3, status: 'dibersihkan', pasien: '-' },
                  { no: 4, status: 'terisi', pasien: 'Letkol Ahmad' },
                  { no: 5, status: 'kosong', pasien: '-' },
                  { no: 6, status: 'terisi', pasien: 'Mayor Siti' },
                  { no: 7, status: 'terisi', pasien: 'Kapten Dewi' },
                  { no: 8, status: 'terisi', pasien: 'Mayor Eko' },
                  { no: 9, status: 'terisi', pasien: 'Kolonel Hadi' },
                  { no: 10, status: 'kosong', pasien: '-' }
                ].map(bed => (
                  <div
                    key={bed.no}
                    style={{
                      padding: '8px',
                      textAlign: 'center',
                      borderRadius: '6px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      border: '1px solid #ddd',
                      backgroundColor: 
                        bed.status === 'terisi' ? '#ffcccc' :
                        bed.status === 'kosong' ? '#ccffcc' :
                        bed.status === 'dibersihkan' ? '#fff3cd' : '#f0f0f0',
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title={bed.pasien}
                  >
                    <div style={{ fontWeight: 'bold' }}>Bed {bed.no}</div>
                    <div style={{ fontSize: '10px', marginTop: '2px' }}>
                      {bed.status === 'terisi' ? '🔴' : bed.status === 'kosong' ? '🟢' : '🟠'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kelas I */}
            <div style={{ padding: '15px', border: '2px solid #0066cc', borderRadius: '8px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontWeight: 'bold', color: '#0066cc' }}>🛏️ Kelas I</h4>
                <span className="badge badge-warning">BOR: 80%</span>
              </div>
              <div style={{ fontSize: '13px', marginBottom: '10px' }}>
                Kapasitas: <strong>30 bed</strong> | Terisi: <strong>24 bed</strong>
              </div>
              <div style={{ fontSize: '12px', color: '#666', padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                Klik "Kelola Bed" untuk melihat detail 30 bed Kelas I
              </div>
            </div>

            {/* ICU */}
            <div style={{ padding: '15px', border: '2px solid #dc3545', borderRadius: '8px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontWeight: 'bold', color: '#dc3545' }}>⚠️ ICU</h4>
                <span className="badge badge-danger">BOR: 83%</span>
              </div>
              <div style={{ fontSize: '13px', marginBottom: '10px' }}>
                Kapasitas: <strong>12 bed</strong> | Terisi: <strong>10 bed</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {[
                  { no: 1, status: 'terisi', pasien: 'Sersan Eko (Sepsis)' },
                  { no: 2, status: 'terisi', pasien: 'Kapten Hadi' },
                  { no: 3, status: 'terisi', pasien: 'Mayor Yudi' },
                  { no: 4, status: 'kosong', pasien: '-' },
                  { no: 5, status: 'terisi', pasien: 'Pratu Slamet' },
                  { no: 6, status: 'terisi', pasien: 'Serka Bambang' },
                  { no: 7, status: 'terisi', pasien: 'Kapten Joko' },
                  { no: 8, status: 'terisi', pasien: 'Mayor Andi' },
                  { no: 9, status: 'terisi', pasien: 'Sersan Agung' },
                  { no: 10, status: 'terisi', pasien: 'Pratu Dika' },
                  { no: 11, status: 'kosong', pasien: '-' },
                  { no: 12, status: 'dibersihkan', pasien: '-' }
                ].map(bed => (
                  <div
                    key={bed.no}
                    style={{
                      padding: '8px',
                      textAlign: 'center',
                      borderRadius: '6px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      border: '1px solid #ddd',
                      backgroundColor: 
                        bed.status === 'terisi' ? '#ffcccc' :
                        bed.status === 'kosong' ? '#ccffcc' :
                        bed.status === 'dibersihkan' ? '#fff3cd' : '#f0f0f0',
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title={bed.pasien}
                  >
                    <div style={{ fontWeight: 'bold' }}>ICU {bed.no}</div>
                    <div style={{ fontSize: '10px', marginTop: '2px' }}>
                      {bed.status === 'terisi' ? '🔴' : bed.status === 'kosong' ? '🟢' : '🟠'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Ringkasan Seluruh Ruangan:</h4>
            <div className="grid grid-cols-2">
              <div>
                <p>🏆 VIP A: 8/10 bed (80%)</p>
                <p>🛏️ Kelas I: 24/30 bed (80%)</p>
                <p>🛏️ Kelas II: 32/40 bed (80%)</p>
              </div>
              <div>
                <p>⚠️ ICU: 10/12 bed (83%)</p>
                <p>🏥 HCU: 6/8 bed (75%)</p>
                <p>🚫 Isolasi: 2/6 bed (33%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAsuhan = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Asuhan & Perawatan Pasien</h3>
      </div>
      <div className="card-body">
        <div className="alert alert-info" style={{ marginBottom: '20px' }}>
          <ClipboardCheck size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Terintegrasi dengan RME: Catatan Medis Harian (CPPT/SOAP), Catatan Keperawatan, Vital Sign Monitoring, Order Set Dokter, Jadwal Kunjungan DPJP
        </div>

        <div className="grid grid-cols-2">
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <FileText size={20} style={{ marginRight: '8px' }} />
              CPPT (Catatan Perkembangan Pasien Terintegrasi)
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              ✅ Input SOAP harian oleh dokter<br />
              ✅ Integrasi dengan RME elektronik<br />
              ✅ E-signature dokter & perawat<br />
              ✅ Riwayat perubahan (audit trail)
            </div>
            <button className="btn btn-primary" style={{ marginTop: '15px', width: '100%' }}>
              <Plus size={16} style={{ marginRight: '8px' }} />
              Input CPPT Baru
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Activity size={20} style={{ marginRight: '8px' }} />
              Monitoring Vital Sign
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              🩺 Tekanan Darah: 120/80 mmHg<br />
              ❤️ Nadi: 82 x/menit<br />
              🌡️ Suhu: 36.8°C<br />
              🫁 Saturasi O2: 98%<br />
              💨 Respirasi: 18 x/menit
            </div>
            <button className="btn btn-outline" style={{ marginTop: '15px', width: '100%' }}>
              <Edit size={16} style={{ marginRight: '8px' }} />
              Update Vital Sign
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ClipboardCheck size={20} style={{ marginRight: '8px' }} />
              Order Set Dokter
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              💊 Order Obat (terintegrasi Farmasi)<br />
              🧪 Order Laboratorium<br />
              🔬 Order Radiologi<br />
              👨‍⚕️ Konsultasi Antar Dokter<br />
              🏥 Order Tindakan Medis
            </div>
            <button className="btn btn-primary" style={{ marginTop: '15px', width: '100%' }}>
              <Plus size={16} style={{ marginRight: '8px' }} />
              Buat Order Baru
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Calendar size={20} style={{ marginRight: '8px' }} />
              Jadwal Kunjungan DPJP
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              📅 <strong>Hari ini:</strong><br />
              08:00 - dr. Andi Wijaya, Sp.PD (VIP A)<br />
              09:00 - dr. Siti Nurhaliza, Sp.JP (Kelas I)<br />
              10:00 - dr. Bambang Sutopo, Sp.An (ICU)<br />
              14:00 - dr. Maya Sari, Sp.OG (Kelas II)
            </div>
            <button className="btn btn-outline" style={{ marginTop: '15px', width: '100%' }}>
              <Eye size={16} style={{ marginRight: '8px' }} />
              Lihat Jadwal Lengkap
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFarmasi = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Farmasi & Resep Elektronik</h3>
        <button className="btn btn-primary">
          <Plus size={16} style={{ marginRight: '8px' }} />
          E-Resep Baru
        </button>
      </div>
      <div className="card-body">
        <div className="alert alert-success" style={{ marginBottom: '20px' }}>
          <Pill size={20} style={{ display: 'inline', marginRight: '10px' }} />
          <strong>Sesuai Permenkes 24/2022:</strong> E-resep terintegrasi dengan Modul Farmasi, Unit Dose Dispensing, Validasi Apoteker, Monitoring Stok Per Ruangan
        </div>

        <TableWithExport
          data={[
            { no_resep: 'RX-20240115-001', no_rm: 'RM-001234', pasien: 'Kapten Budi Santoso', ruangan: 'VIP A - Bed 1', dokter: 'dr. Andi Wijaya, Sp.PD', obat: 'Paracetamol 500mg (3x1), Amoxicillin 500mg (3x1)', tgl_order: '2024-01-15 08:45', status: 'Diverifikasi', apoteker: 'Apt. Rina Susanti' },
            { no_resep: 'RX-20240115-002', no_rm: 'RM-001236', pasien: 'Sersan Eko Prasetyo', ruangan: 'ICU - Bed 1', dokter: 'dr. Bambang Sutopo, Sp.An', obat: 'Norepinephrine 4mg/ml (Infus), Meropenem 1g (IV 3x1)', tgl_order: '2024-01-15 10:30', status: 'Dikirim ke Ruangan', apoteker: 'Apt. Budi Hartono' },
            { no_resep: 'RX-20240115-003', no_rm: 'RM-001237', pasien: 'Pratu Dewi Lestari', ruangan: 'Kelas II - Bed 5', dokter: 'dr. Maya Sari, Sp.OG', obat: 'Asam Folat 400mcg (1x1), Vitamin B Complex (2x1)', tgl_order: '2024-01-15 11:45', status: 'Menunggu Validasi', apoteker: '-' },
            { no_resep: 'RX-20240115-004', no_rm: 'RM-001238', pasien: 'Mayor Agus Setiawan', ruangan: 'VIP A - Bed 2', dokter: 'dr. Andi Wijaya, Sp.PD', obat: 'Azithromycin 500mg (1x1), Salbutamol Inhaler (4x2 puff)', tgl_order: '2024-01-15 14:20', status: 'Diverifikasi', apoteker: 'Apt. Rina Susanti' }
          ]}
          columns={[
            { header: 'No. Resep', key: 'no_resep' },
            { header: 'No. RM', key: 'no_rm' },
            { header: 'Pasien', key: 'pasien' },
            { header: 'Ruangan', key: 'ruangan' },
            { header: 'Dokter', key: 'dokter' },
            { header: 'Obat', key: 'obat' },
            { header: 'Tanggal Order', key: 'tgl_order' },
            {
              header: 'Status',
              key: 'status',
              render: (value) => (
                <span className={`badge ${
                  value === 'Diverifikasi' ? 'badge-success' :
                  value === 'Dikirim ke Ruangan' ? 'badge-info' :
                  value === 'Menunggu Validasi' ? 'badge-warning' : 'badge-secondary'
                }`}>
                  {value}
                </span>
              )
            },
            { header: 'Apoteker', key: 'apoteker' },
            {
              header: 'Aksi',
              key: 'aksi',
              render: () => (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button className="btn btn-sm btn-outline" title="Lihat Detail">
                    <Eye size={14} />
                  </button>
                  <button className="btn btn-sm btn-outline" title="Print">
                    <Download size={14} />
                  </button>
                </div>
              )
            }
          ]}
          fileName="resep_elektronik_rawat_inap"
        />

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>📦 Monitoring Stok Obat Per Ruangan</h4>
          <div className="grid grid-cols-3">
            <div>
              <strong>VIP A:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Paracetamol: 250 tablet<br />
                ⚠️ Amoxicillin: 45 tablet (Low)<br />
                ✅ Omeprazole: 180 kapsul
              </p>
            </div>
            <div>
              <strong>ICU:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Norepinephrine: 20 vial<br />
                ✅ Meropenem: 15 vial<br />
                ❌ Dopamine: 0 vial (Habis)
              </p>
            </div>
            <div>
              <strong>Kelas I:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Paracetamol: 320 tablet<br />
                ✅ Ambroxol: 200 tablet<br />
                ✅ Vitamin B Complex: 150 tablet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPenunjang = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Integrasi Penunjang Medis (Lab & Radiologi)</h3>
      </div>
      <div className="card-body">
        <div className="alert alert-info" style={{ marginBottom: '20px' }}>
          <TestTube size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Permintaan pemeriksaan Lab & Radiologi dari ruang perawatan, hasil otomatis muncul di dashboard, notifikasi hasil kritis
        </div>

        <TableWithExport
          data={[
            { no_order: 'LAB-20240115-012', no_rm: 'RM-001234', pasien: 'Kapten Budi Santoso', ruangan: 'VIP A - Bed 1', jenis: 'Laboratorium', pemeriksaan: 'Darah Lengkap, Fungsi Hati, Dengue NS1', tgl_order: '2024-01-15 08:50', status: 'Selesai', hasil: 'Normal', kritis: 'Tidak' },
            { no_order: 'RAD-20240115-008', no_rm: 'RM-001238', pasien: 'Mayor Agus Setiawan', ruangan: 'VIP A - Bed 2', jenis: 'Radiologi', pemeriksaan: 'Rontgen Thorax AP/Lateral', tgl_order: '2024-01-15 14:25', status: 'Selesai', hasil: 'Pneumonia Bilateral', kritis: 'Tidak' },
            { no_order: 'LAB-20240115-013', no_rm: 'RM-001236', pasien: 'Sersan Eko Prasetyo', ruangan: 'ICU - Bed 1', jenis: 'Laboratorium', pemeriksaan: 'Elektrolit, Laktat, Procalcitonin, Kultur Darah', tgl_order: '2024-01-15 10:35', status: 'Proses', hasil: '-', kritis: '-' },
            { no_order: 'LAB-20240115-014', no_rm: 'RM-001245', pasien: 'Kapten Hadi Wijaya', ruangan: 'ICU - Bed 2', jenis: 'Laboratorium', pemeriksaan: 'Elektrolit (Kalium)', tgl_order: '2024-01-15 15:10', status: 'Selesai', hasil: 'Kalium 6.8 mEq/L', kritis: 'Ya' }
          ]}
          columns={[
            { header: 'No. Order', key: 'no_order' },
            { header: 'No. RM', key: 'no_rm' },
            { header: 'Pasien', key: 'pasien' },
            { header: 'Ruangan', key: 'ruangan' },
            { header: 'Jenis', key: 'jenis' },
            { header: 'Pemeriksaan', key: 'pemeriksaan' },
            { header: 'Tanggal Order', key: 'tgl_order' },
            {
              header: 'Status',
              key: 'status',
              render: (value) => (
                <span className={`badge ${
                  value === 'Selesai' ? 'badge-success' :
                  value === 'Proses' ? 'badge-warning' : 'badge-secondary'
                }`}>
                  {value}
                </span>
              )
            },
            { header: 'Hasil', key: 'hasil' },
            {
              header: 'Kritis',
              key: 'kritis',
              render: (value) => (
                value === 'Ya' ? <span className="badge badge-danger">⚠️ KRITIS</span> :
                value === 'Tidak' ? <span className="badge badge-success">Normal</span> :
                <span>-</span>
              )
            },
            {
              header: 'Aksi',
              key: 'aksi',
              render: () => (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button className="btn btn-sm btn-outline" title="Lihat Hasil">
                    <Eye size={14} />
                  </button>
                  <button className="btn btn-sm btn-outline" title="Download PDF">
                    <Download size={14} />
                  </button>
                </div>
              )
            }
          ]}
          fileName="penunjang_medis_rawat_inap"
        />

        <div className="alert alert-danger" style={{ marginTop: '20px' }}>
          <AlertTriangle size={20} style={{ display: 'inline', marginRight: '10px' }} />
          <strong>Notifikasi Hasil Kritis:</strong> Pasien RM-001245 (Kapten Hadi Wijaya) - Kalium 6.8 mEq/L (Normal: 3.5-5.0). Segera lakukan tindakan!
        </div>
      </div>
    </div>
  );

  const renderPelaporan = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Pelaporan & Analitik SIRS</h3>
        <button className="btn btn-outline">
          <Download size={16} style={{ marginRight: '8px' }} />
          Export SIRS Online
        </button>
      </div>
      <div className="card-body">
        <div className="alert alert-success" style={{ marginBottom: '20px' }}>
          <FileText size={20} style={{ display: 'inline', marginRight: '10px' }} />
          <strong>Sistem Informasi Rumah Sakit (SIRS) Kemenkes:</strong> BOR, ALOS, TOI, BTR, NDR, GDR otomatis dihitung, Laporan RL 1.3 (Sensus Harian)
        </div>

        <div className="grid grid-cols-2">
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>📊 Indikator Mutu (Bulan Ini)</h4>
            <table className="data-table">
              <tbody>
                <tr>
                  <td><strong>BOR</strong></td>
                  <td>78.3%</td>
                  <td><span className="badge badge-success">Target: 60-85%</span></td>
                </tr>
                <tr>
                  <td><strong>ALOS</strong></td>
                  <td>4.2 hari</td>
                  <td><span className="badge badge-success">Target: 6-9 hari</span></td>
                </tr>
                <tr>
                  <td><strong>TOI</strong></td>
                  <td>1.8 hari</td>
                  <td><span className="badge badge-success">Target: 1-3 hari</span></td>
                </tr>
                <tr>
                  <td><strong>BTR</strong></td>
                  <td>52x/tahun</td>
                  <td><span className="badge badge-warning">Target: 40-50x</span></td>
                </tr>
                <tr>
                  <td><strong>NDR</strong></td>
                  <td>18/1000</td>
                  <td><span className="badge badge-success">Target: {'<'}25/1000</span></td>
                </tr>
                <tr>
                  <td><strong>GDR</strong></td>
                  <td>25/1000</td>
                  <td><span className="badge badge-success">Target: {'<'}45/1000</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>📋 Laporan Sensus Harian (RL 1.3)</h4>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <strong>Data Hari Ini (15 Jan 2024):</strong><br />
              📥 Pasien Masuk: <strong>12 pasien</strong><br />
              📤 Pasien Keluar: <strong>10 pasien</strong><br />
              ⚰️ Pasien Meninggal: <strong>1 pasien</strong><br />
              🔄 Pasien Pindah Ruangan: <strong>3 pasien</strong><br />
              🛏️ Pasien dalam Perawatan: <strong>94 pasien</strong><br />
              ⏱️ Total Hari Perawatan: <strong>395 hari</strong>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '15px', width: '100%' }}>
              <Download size={16} style={{ marginRight: '8px' }} />
              Download Laporan RL 1.3
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>📈 Grafik Trend 6 Bulan Terakhir</h4>
          <div style={{ textAlign: 'center', padding: '30px', color: '#666' }}>
            <TrendingUp size={48} style={{ margin: '0 auto', color: '#003d82', marginBottom: '10px' }} />
            <div>Grafik trend BOR, ALOS, TOI, dan indikator lainnya untuk monitoring mutu pelayanan</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Billing & Administrasi Keuangan</h3>
      </div>
      <div className="card-body">
        <div className="alert alert-info" style={{ marginBottom: '20px' }}>
          <DollarSign size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Billing otomatis berdasarkan tindakan, obat, dan lama rawat. Integrasi dengan Kasir, Asuransi, dan BPJS. Split billing tersedia.
        </div>

        <TableWithExport
          data={[
            { no_rm: 'RM-001234', pasien: 'Kapten Budi Santoso', ruangan: 'VIP A', kelas: 'VIP', lama: '5 hari', jasa_kamar: 'Rp 5.000.000', tindakan: 'Rp 1.500.000', obat: 'Rp 850.000', lab: 'Rp 450.000', total: 'Rp 7.800.000', penjamin: 'Jasa Raharja', status: 'Lunas' },
            { no_rm: 'RM-001235', pasien: 'Serka Ahmad Hidayat', ruangan: 'VIP A', kelas: 'VIP', lama: '3 hari', jasa_kamar: 'Rp 3.000.000', tindakan: 'Rp 2.200.000', obat: 'Rp 650.000', lab: 'Rp 350.000', total: 'Rp 6.200.000', penjamin: 'BPJS', status: 'Verifikasi' },
            { no_rm: 'RM-001236', pasien: 'Sersan Eko Prasetyo', ruangan: 'ICU', kelas: 'ICU', lama: '7 hari', jasa_kamar: 'Rp 14.000.000', tindakan: 'Rp 8.500.000', obat: 'Rp 5.200.000', lab: 'Rp 2.100.000', total: 'Rp 29.800.000', penjamin: 'BPJS', status: 'Proses' },
            { no_rm: 'RM-001237', pasien: 'Pratu Dewi Lestari', ruangan: 'Kelas II', kelas: 'Kelas II', lama: '4 hari', jasa_kamar: 'Rp 1.200.000', tindakan: 'Rp 800.000', obat: 'Rp 320.000', lab: 'Rp 280.000', total: 'Rp 2.600.000', penjamin: 'Mandiri', status: 'Belum Lunas' }
          ]}
          columns={[
            { header: 'No. RM', key: 'no_rm' },
            { header: 'Pasien', key: 'pasien' },
            { header: 'Ruangan', key: 'ruangan' },
            { header: 'Kelas', key: 'kelas' },
            { header: 'Lama Rawat', key: 'lama' },
            { header: 'Jasa Kamar', key: 'jasa_kamar' },
            { header: 'Tindakan', key: 'tindakan' },
            { header: 'Obat', key: 'obat' },
            { header: 'Lab/Rad', key: 'lab' },
            { header: 'Total Tagihan', key: 'total' },
            { header: 'Penjamin', key: 'penjamin' },
            {
              header: 'Status',
              key: 'status',
              render: (value) => (
                <span className={`badge ${
                  value === 'Lunas' ? 'badge-success' :
                  value === 'Verifikasi' ? 'badge-warning' :
                  value === 'Proses' ? 'badge-info' : 'badge-danger'
                }`}>
                  {value}
                </span>
              )
            },
            {
              header: 'Aksi',
              key: 'aksi',
              render: () => (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button className="btn btn-sm btn-outline" title="Lihat Detail">
                    <Eye size={14} />
                  </button>
                  <button className="btn btn-sm btn-outline" title="Print Invoice">
                    <Download size={14} />
                  </button>
                </div>
              )
            }
          ]}
          fileName="billing_rawat_inap"
        />

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>💰 Ringkasan Keuangan Hari Ini</h4>
          <div className="grid grid-cols-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#003d82' }}>Rp 46.400.000</div>
              <div style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>Total Tagihan</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>Rp 7.800.000</div>
              <div style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>Sudah Lunas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>Rp 38.600.000</div>
              <div style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>Belum Lunas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMutasi = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Mutasi & Pergerakan Pasien</h3>
        <button className="btn btn-primary">
          <ArrowRightLeft size={16} style={{ marginRight: '8px' }} />
          Buat Mutasi Baru
        </button>
      </div>
      <div className="card-body">
        <div className="alert alert-info" style={{ marginBottom: '20px' }}>
          <ArrowRightLeft size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Mencatat: Pindah kamar/ruang/kelas, Pindah rumah sakit (rujukan), Pulang APS, Meninggal dunia, Resume medis otomatis
        </div>

        <TableWithExport
          data={[
            { no_rm: 'RM-001239', pasien: 'Mayor Hendra S.', asal: 'ICU - Bed 5', tujuan: 'HCU - Bed 2', jenis: 'Pindah Ruangan', alasan: 'Kondisi membaik, turun dari ICU', tgl_mutasi: '2024-01-15 10:30', petugas: 'dr. Bambang Sutopo, Sp.An', status: 'Selesai' },
            { no_rm: 'RM-001240', pasien: 'Serka Yudi Prabowo', asal: 'Kelas II - Bed 8', tujuan: 'Kelas I - Bed 12', jenis: 'Pindah Kelas', alasan: 'Upgrade kelas perawatan atas permintaan keluarga', tgl_mutasi: '2024-01-15 11:00', petugas: 'Perawat Ani', status: 'Selesai' },
            { no_rm: 'RM-001241', pasien: 'Pratu Dika Saputra', asal: 'VIP A - Bed 5', tujuan: 'RS Pusat TNI AU Halim', jenis: 'Rujuk Eksternal', alasan: 'Rujukan untuk operasi Jantung', tgl_mutasi: '2024-01-15 13:30', petugas: 'dr. Siti Nurhaliza, Sp.JP', status: 'Proses' },
            { no_rm: 'RM-001242', pasien: 'Kapten Joko Widodo', asal: 'Kelas I - Bed 15', tujuan: 'Rumah', jenis: 'Pulang APS', alasan: 'Pulang atas permintaan sendiri (menolak tindakan)', tgl_mutasi: '2024-01-15 14:00', petugas: 'dr. Andi Wijaya, Sp.PD', status: 'Selesai' }
          ]}
          columns={[
            { header: 'No. RM', key: 'no_rm' },
            { header: 'Pasien', key: 'pasien' },
            { header: 'Dari', key: 'asal' },
            { header: 'Ke', key: 'tujuan' },
            { header: 'Jenis Mutasi', key: 'jenis' },
            { header: 'Alasan', key: 'alasan' },
            { header: 'Tanggal & Waktu', key: 'tgl_mutasi' },
            { header: 'Petugas', key: 'petugas' },
            {
              header: 'Status',
              key: 'status',
              render: (value) => (
                <span className={`badge ${
                  value === 'Selesai' ? 'badge-success' : 'badge-warning'
                }`}>
                  {value}
                </span>
              )
            },
            {
              header: 'Aksi',
              key: 'aksi',
              render: () => (
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button className="btn btn-sm btn-outline" title="Lihat Detail">
                    <Eye size={14} />
                  </button>
                  <button className="btn btn-sm btn-outline" title="Print Surat">
                    <Download size={14} />
                  </button>
                </div>
              )
            }
          ]}
          fileName="mutasi_pasien_rawat_inap"
        />

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>📊 Statistik Mutasi Hari Ini</h4>
          <div className="grid grid-cols-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#003d82' }}>8</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Pindah Ruangan</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#17a2b8' }}>3</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Pindah Kelas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffc107' }}>2</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Rujuk Eksternal</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc3545' }}>1</div>
              <div style={{ fontSize: '13px', color: '#666' }}>Pulang APS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDischarge = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Discharge Planning (Perencanaan Pulang)</h3>
      </div>
      <div className="card-body">
        <div className="alert alert-success" style={{ marginBottom: '20px' }}>
          <Home size={20} style={{ display: 'inline', marginRight: '10px' }} />
          <strong>Standar Akreditasi SNARS Edisi 1.1:</strong> Rencana pulang, Terapi lanjutan, Edukasi pasien, Resume medis otomatis, Surat keterangan rawat inap
        </div>

        <div className="grid grid-cols-2">
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <FileSignature size={20} style={{ marginRight: '8px' }} />
              Resume Medis Pasien
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              ✅ Identitas pasien & DPJP<br />
              ✅ Diagnosa masuk & keluar (ICD-10)<br />
              ✅ Tindakan yang dilakukan (ICD-9-CM)<br />
              ✅ Kondisi saat keluar<br />
              ✅ Terapi lanjutan & resep pulang<br />
              ✅ E-signature dokter & cap RS
            </div>
            <button className="btn btn-primary" style={{ marginTop: '15px', width: '100%' }}>
              <FileText size={16} style={{ marginRight: '8px' }} />
              Buat Resume Medis
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <ClipboardCheck size={20} style={{ marginRight: '8px' }} />
              Edukasi Pasien & Keluarga
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              📝 Cara minum obat di rumah<br />
              📝 Pantangan makanan & aktivitas<br />
              📝 Tanda bahaya yang harus diwaspadai<br />
              📝 Jadwal kontrol selanjutnya<br />
              📝 Kontak darurat rumah sakit<br />
              ✍️ TTD digital pasien/keluarga
            </div>
            <button className="btn btn-outline" style={{ marginTop: '15px', width: '100%' }}>
              <FileSignature size={16} style={{ marginRight: '8px' }} />
              Input Edukasi Pasien
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Pill size={20} style={{ marginRight: '8px' }} />
              Resep Pulang
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              💊 E-resep untuk dibawa pulang<br />
              💊 Validasi apoteker<br />
              💊 Obat dapat diambil di Farmasi<br />
              💊 Instruksi lengkap cara pakai<br />
              💊 Stock availability check
            </div>
            <button className="btn btn-primary" style={{ marginTop: '15px', width: '100%' }}>
              <Plus size={16} style={{ marginRight: '8px' }} />
              Buat Resep Pulang
            </button>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <FileText size={20} style={{ marginRight: '8px' }} />
              Surat Keterangan Rawat Inap
            </h4>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
              📄 Surat keterangan untuk keperluan:<br />
              &nbsp;&nbsp;&nbsp;• Cuti sakit (dinas)<br />
              &nbsp;&nbsp;&nbsp;• Klaim asuransi<br />
              &nbsp;&nbsp;&nbsp;• Keperluan administrasi lainnya<br />
              🖨️ Cetak dengan kop surat resmi RS
            </div>
            <button className="btn btn-outline" style={{ marginTop: '15px', width: '100%' }}>
              <Download size={16} style={{ marginRight: '8px' }} />
              Cetak Surat Keterangan
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>📋 Daftar Pasien Siap Pulang Hari Ini</h4>
          <TableWithExport
            data={[
              { no_rm: 'RM-001234', pasien: 'Kapten Budi Santoso', ruangan: 'VIP A - Bed 1', diagnosa: 'Demam Dengue', lama: '5 hari', dpjp: 'dr. Andi Wijaya, Sp.PD', resume: 'Selesai', edukasi: 'Selesai', resep: 'Selesai', billing: 'Lunas', status: 'Siap Pulang' },
              { no_rm: 'RM-001243', pasien: 'Serka Bambang S.', ruangan: 'Kelas I - Bed 10', diagnosa: 'Gastritis Akut', lama: '3 hari', dpjp: 'dr. Andi Wijaya, Sp.PD', resume: 'Selesai', edukasi: 'Selesai', resep: 'Proses', billing: 'Lunas', status: 'Proses' },
              { no_rm: 'RM-001244', pasien: 'Mayor Sri Mulyani', ruangan: 'VIP A - Bed 4', diagnosa: 'Post-Op Appendectomy', lama: '4 hari', dpjp: 'dr. Hendra Kusuma, Sp.B', resume: 'Proses', edukasi: 'Belum', resep: 'Belum', billing: 'Belum', status: 'Belum Siap' }
            ]}
            columns={[
              { header: 'No. RM', key: 'no_rm' },
              { header: 'Pasien', key: 'pasien' },
              { header: 'Ruangan', key: 'ruangan' },
              { header: 'Diagnosa', key: 'diagnosa' },
              { header: 'Lama Rawat', key: 'lama' },
              { header: 'DPJP', key: 'dpjp' },
              {
                header: 'Resume',
                key: 'resume',
                render: (value) => (
                  <span className={`badge ${value === 'Selesai' ? 'badge-success' : value === 'Proses' ? 'badge-warning' : 'badge-secondary'}`}>
                    {value}
                  </span>
                )
              },
              {
                header: 'Edukasi',
                key: 'edukasi',
                render: (value) => (
                  <span className={`badge ${value === 'Selesai' ? 'badge-success' : value === 'Proses' ? 'badge-warning' : 'badge-secondary'}`}>
                    {value}
                  </span>
                )
              },
              {
                header: 'Resep',
                key: 'resep',
                render: (value) => (
                  <span className={`badge ${value === 'Selesai' ? 'badge-success' : value === 'Proses' ? 'badge-warning' : 'badge-secondary'}`}>
                    {value}
                  </span>
                )
              },
              {
                header: 'Billing',
                key: 'billing',
                render: (value) => (
                  <span className={`badge ${value === 'Lunas' ? 'badge-success' : 'badge-danger'}`}>
                    {value}
                  </span>
                )
              },
              {
                header: 'Status',
                key: 'status',
                render: (value) => (
                  <span className={`badge ${
                    value === 'Siap Pulang' ? 'badge-success' :
                    value === 'Proses' ? 'badge-warning' : 'badge-secondary'
                  }`}>
                    {value}
                  </span>
                )
              },
              {
                header: 'Aksi',
                key: 'aksi',
                render: () => (
                  <button className="btn btn-sm btn-primary">
                    <Home size={14} style={{ marginRight: '5px' }} />
                    Pulangkan
                  </button>
                )
              }
            ]}
            fileName="discharge_planning"
          />
        </div>
      </div>
    </div>
  );

  const renderKeamanan = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Keamanan, Audit Trail & Kepatuhan Regulasi</h3>
      </div>
      <div className="card-body">
        <div className="alert alert-success" style={{ marginBottom: '20px' }}>
          <Lock size={20} style={{ display: 'inline', marginRight: '10px' }} />
          <strong>Keamanan Data:</strong> Audit trail setiap perubahan, Hak akses bertingkat, Kerahasiaan pasien (Pasal 11 Permenkes 24/2022), Log aktivitas & backup otomatis
        </div>

        <div className="grid grid-cols-2" style={{ marginBottom: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Lock size={20} style={{ marginRight: '8px' }} />
              Hak Akses Pengguna
            </h4>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '10px' }}>
                <strong>👨‍⚕️ Dokter:</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Akses CPPT, Order medis, Resume, Discharge planning</span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>👩‍⚕️ Perawat:</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Akses Asuhan keperawatan, Vital sign, Administrasi bed</span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>💰 Kasir:</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Akses Billing, Pembayaran, Cetak invoice</span>
              </div>
              <div>
                <strong>🔧 Admin:</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Akses penuh untuk konfigurasi sistem</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <FileText size={20} style={{ marginRight: '8px' }} />
              Kepatuhan Regulasi
            </h4>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '8px' }}>
                ✅ <strong>Permenkes 24/2022</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Rekam Medis Elektronik & kerahasiaan data</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                ✅ <strong>UU ITE No. 11/2008</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>E-signature & dokumen elektronik</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                ✅ <strong>SIRS Online Kemenkes</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Pelaporan indikator mutu RS</span>
              </div>
              <div>
                ✅ <strong>SNARS Edisi 1.1</strong><br />
                <span style={{ fontSize: '13px', color: '#666' }}>Standar akreditasi nasional</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>📋 Log Audit Trail (Aktivitas Terakhir)</h4>
          <TableWithExport
            data={[
              { waktu: '2024-01-15 15:10:45', user: 'dr. Andi Wijaya, Sp.PD', aktivitas: 'Mengubah CPPT pasien RM-001234', modul: 'Asuhan Pasien', ip: '192.168.1.105', status: 'Berhasil' },
              { waktu: '2024-01-15 15:08:20', user: 'Apt. Rina Susanti', aktivitas: 'Memverifikasi resep RX-20240115-004', modul: 'Farmasi', ip: '192.168.1.88', status: 'Berhasil' },
              { waktu: '2024-01-15 15:05:12', user: 'Perawat Ani', aktivitas: 'Update vital sign pasien RM-001236', modul: 'Asuhan Pasien', ip: '192.168.1.67', status: 'Berhasil' },
              { waktu: '2024-01-15 15:02:30', user: 'Admin Rina', aktivitas: 'Pindah pasien RM-001240 dari Kelas II ke Kelas I', modul: 'Bed Management', ip: '192.168.1.50', status: 'Berhasil' },
              { waktu: '2024-01-15 15:00:10', user: 'Kasir Budi', aktivitas: 'Cetak invoice pasien RM-001234', modul: 'Billing', ip: '192.168.1.45', status: 'Berhasil' },
              { waktu: '2024-01-15 14:58:00', user: 'dr. Unknown', aktivitas: 'Percobaan akses CPPT pasien RM-001245', modul: 'Asuhan Pasien', ip: '192.168.1.250', status: 'GAGAL - Tidak punya akses' }
            ]}
            columns={[
              { header: 'Waktu', key: 'waktu' },
              { header: 'Pengguna', key: 'user' },
              { header: 'Aktivitas', key: 'aktivitas' },
              { header: 'Modul', key: 'modul' },
              { header: 'IP Address', key: 'ip' },
              {
                header: 'Status',
                key: 'status',
                render: (value) => (
                  <span className={`badge ${
                    value === 'Berhasil' ? 'badge-success' : 'badge-danger'
                  }`}>
                    {value}
                  </span>
                )
              }
            ]}
            fileName="audit_trail_rawat_inap"
          />
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>🔐 Backup & Keamanan Data</h4>
          <div className="grid grid-cols-3">
            <div>
              <strong>Backup Otomatis:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Backup harian pukul 02:00 WIB<br />
                ✅ Backup mingguan (Minggu)<br />
                ✅ Backup bulanan (tanggal 1)
              </p>
            </div>
            <div>
              <strong>Enkripsi:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Data pasien: AES-256<br />
                ✅ Komunikasi: TLS 1.3<br />
                ✅ Password: Bcrypt hash
              </p>
            </div>
            <div>
              <strong>Monitoring:</strong>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>
                ✅ Aktivitas mencurigakan terdeteksi<br />
                ✅ Alert otomatis ke admin<br />
                ✅ Log tersimpan 5 tahun
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span style={{ marginLeft: '8px' }}>{tab.label}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'registrasi' && renderRegistrasi()}
        {activeTab === 'bedmanagement' && renderBedManagement()}
        {activeTab === 'asuhan' && renderAsuhan()}
        {activeTab === 'farmasi' && renderFarmasi()}
        {activeTab === 'penunjang' && renderPenunjang()}
        {activeTab === 'pelaporan' && renderPelaporan()}
        {activeTab === 'billing' && renderBilling()}
        {activeTab === 'mutasi' && renderMutasi()}
        {activeTab === 'discharge' && renderDischarge()}
        {activeTab === 'keamanan' && renderKeamanan()}
      </div>
    </div>
  );
};

export default RawatInap;
