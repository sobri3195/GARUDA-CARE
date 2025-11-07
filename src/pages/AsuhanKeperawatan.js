import React, { useState } from 'react';
import { } from 'lucide-react';

const AsuhanKeperawatan = () => {
  const [activeTab, setActiveTab] = useState('implementasi');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'implementasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('implementasi')}
        >
          Implementasi Keperawatan
        </button>
        <button 
          className={`tab ${activeTab === 'rencana' ? 'active' : ''}`}
          onClick={() => setActiveTab('rencana')}
        >
          Rencana Keperawatan
        </button>
        <button 
          className={`tab ${activeTab === 'evaluasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('evaluasi')}
        >
          Evaluasi Keperawatan
        </button>
        <button 
          className={`tab ${activeTab === 'discharge' ? 'active' : ''}`}
          onClick={() => setActiveTab('discharge')}
        >
          Discharge Planning
        </button>
        <button 
          className={`tab ${activeTab === 'riwayat_obat' ? 'active' : ''}`}
          onClick={() => setActiveTab('riwayat_obat')}
        >
          Riwayat Pemberian Obat
        </button>
        <button 
          className={`tab ${activeTab === 'nic' ? 'active' : ''}`}
          onClick={() => setActiveTab('nic')}
        >
          NIC (Nursing Intervention Classification)
        </button>
      </div>

      {activeTab === 'implementasi' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Tambah Implementasi Keperawatan</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">No. RM Pasien</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" className="form-input" placeholder="Cari No. RM" />
                    <button className="btn btn-primary">Cari</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal/Waktu</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Pasien</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Ruangan</label>
                  <input type="text" className="form-input" placeholder="Auto-fill" disabled />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Diagnosa Keperawatan</label>
                  <select className="form-input">
                    <option value="">Pilih Diagnosa</option>
                    <option value="d1">Nyeri Akut</option>
                    <option value="d2">Gangguan Pola Tidur</option>
                    <option value="d3">Risiko Infeksi</option>
                    <option value="d4">Gangguan Mobilitas Fisik</option>
                    <option value="d5">Defisit Perawatan Diri</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Tindakan/Implementasi</label>
                  <textarea className="form-input" rows="4" placeholder="Deskripsikan tindakan keperawatan yang dilakukan"></textarea>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Respons Pasien</label>
                  <textarea className="form-input" rows="3" placeholder="Deskripsikan respons/reaksi pasien terhadap tindakan"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Perawat Pelaksana</label>
                  <input type="text" className="form-input" placeholder="Nama perawat" />
                </div>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select className="form-input">
                    <option value="dilakukan">Dilakukan</option>
                    <option value="pending">Pending</option>
                    <option value="delegasi">Delegasi</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Implementasi Keperawatan</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal/Waktu</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Ruangan</th>
                    <th>Diagnosa</th>
                    <th>Implementasi</th>
                    <th>Respons</th>
                    <th>Perawat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15 Des 2024 08:00</td>
                    <td>RM-123456</td>
                    <td>Mayor Sudirman</td>
                    <td>VIP A - 201</td>
                    <td>Nyeri Akut</td>
                    <td>Pemberian analgesik, kompres hangat, teknik relaksasi napas dalam</td>
                    <td>Pasien melaporkan nyeri berkurang dari skala 7 menjadi 4</td>
                    <td>Ns. Ani, S.Kep</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>15 Des 2024 07:30</td>
                    <td>RM-234567</td>
                    <td>Kolonel Hartono</td>
                    <td>VIP B - 202</td>
                    <td>Risiko Infeksi</td>
                    <td>Ganti balutan luka post op, observasi tanda infeksi, edukasi hand hygiene</td>
                    <td>Luka bersih, tidak ada tanda infeksi, pasien kooperatif</td>
                    <td>Ns. Budi, S.Kep</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rencana' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Rencana Asuhan Keperawatan</h2>
            <button className="btn btn-primary">+ Tambah Rencana</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Diagnosa Keperawatan</th>
                  <th>Tujuan (NOC)</th>
                  <th>Intervensi (NIC)</th>
                  <th>Rasional</th>
                  <th>Perawat</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Nyeri Akut b.d agen cedera biologis</td>
                  <td>Setelah 3x24 jam, nyeri berkurang dengan skala 0-3</td>
                  <td>1. Kaji skala nyeri<br/>2. Berikan analgesik<br/>3. Ajarkan teknik relaksasi</td>
                  <td>Manajemen nyeri komprehensif untuk meningkatkan kenyamanan</td>
                  <td>Ns. Ani, S.Kep</td>
                  <td><span className="badge badge-warning">Dalam Progress</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Risiko Infeksi b.d luka post operasi</td>
                  <td>Setelah 5x24 jam, tidak terjadi infeksi, luka sembuh</td>
                  <td>1. Observasi luka<br/>2. Ganti balutan steril<br/>3. Edukasi pasien</td>
                  <td>Pencegahan infeksi dengan teknik aseptik</td>
                  <td>Ns. Budi, S.Kep</td>
                  <td><span className="badge badge-warning">Dalam Progress</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'evaluasi' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Evaluasi Keperawatan (SOAP)</h2>
            <button className="btn btn-primary">+ Tambah Evaluasi</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Waktu</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Diagnosa</th>
                  <th>S (Subjektif)</th>
                  <th>O (Objektif)</th>
                  <th>A (Assessment)</th>
                  <th>P (Planning)</th>
                  <th>Perawat</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024 14:00</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Nyeri Akut</td>
                  <td>Pasien mengeluh nyeri berkurang</td>
                  <td>Skala nyeri 4/10, TTV stabil</td>
                  <td>Masalah teratasi sebagian</td>
                  <td>Lanjutkan intervensi</td>
                  <td>Ns. Ani, S.Kep</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024 13:30</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Risiko Infeksi</td>
                  <td>Pasien tidak mengeluh</td>
                  <td>Luka bersih, tidak ada pus, suhu 36.8°C</td>
                  <td>Risiko infeksi teratasi</td>
                  <td>Monitor, DC rencana</td>
                  <td>Ns. Budi, S.Kep</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'discharge' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Discharge Planning</h2>
            <button className="btn btn-primary">+ Buat Discharge Plan</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Diagnosa Medis</th>
                  <th>Edukasi Diberikan</th>
                  <th>Obat Pulang</th>
                  <th>Kontrol</th>
                  <th>Perawat</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Post Op Appendectomy</td>
                  <td>Perawatan luka, diet, aktivitas, tanda bahaya</td>
                  <td>Cefixime 2x1, Paracetamol 3x1</td>
                  <td>Poli Bedah 7 hari lagi</td>
                  <td>Ns. Budi, S.Kep</td>
                  <td><span className="badge badge-success">Lengkap</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Cetak</button>
                  </td>
                </tr>
                <tr>
                  <td>14 Des 2024</td>
                  <td>RM-345678</td>
                  <td>Kapten Wijaya</td>
                  <td>Gastritis</td>
                  <td>Diet, hindari makanan pedas, stres management</td>
                  <td>Omeprazole 1x1, Antasida 3x1</td>
                  <td>Poli Penyakit Dalam 14 hari</td>
                  <td>Ns. Sari, S.Kep</td>
                  <td><span className="badge badge-success">Lengkap</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Cetak</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'riwayat_obat' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Riwayat Pemberian Obat</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari No. RM atau Nama Pasien..."
                style={{ maxWidth: '400px' }}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Waktu</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Nama Obat</th>
                  <th>Dosis</th>
                  <th>Rute</th>
                  <th>Frekuensi</th>
                  <th>Perawat</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024 08:00</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Paracetamol</td>
                  <td>500mg</td>
                  <td>Oral</td>
                  <td>3x1</td>
                  <td>Ns. Ani, S.Kep</td>
                  <td><span className="badge badge-success">Diberikan</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>15 Des 2024 08:00</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Cefixime</td>
                  <td>200mg</td>
                  <td>Oral</td>
                  <td>2x1</td>
                  <td>Ns. Budi, S.Kep</td>
                  <td><span className="badge badge-success">Diberikan</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>15 Des 2024 08:30</td>
                  <td>RM-345678</td>
                  <td>Kapten Wijaya</td>
                  <td>Omeprazole</td>
                  <td>20mg</td>
                  <td>Oral</td>
                  <td>1x1</td>
                  <td>Ns. Sari, S.Kep</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                  <td>Pasien sedang pemeriksaan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'nic' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">NIC (Nursing Intervention Classification)</h2>
            </div>
            <div className="card-body">
              <p style={{ marginBottom: '15px' }}>
                NIC adalah sistem klasifikasi standar untuk intervensi keperawatan yang dikembangkan oleh University of Iowa.
                Sistem ini membantu perawat dalam mendokumentasikan tindakan keperawatan secara terstandar.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Intervensi NIC</h2>
              <button className="btn btn-primary">+ Tambah Intervensi</button>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Cari kode atau nama intervensi..."
                  style={{ maxWidth: '400px' }}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode NIC</th>
                    <th>Nama Intervensi</th>
                    <th>Definisi</th>
                    <th>Domain</th>
                    <th>Aktivitas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1400</td>
                    <td>Pain Management</td>
                    <td>Alleviation of pain or a reduction in pain to a level of comfort</td>
                    <td>Physiological: Complex</td>
                    <td>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Assess pain characteristics</li>
                        <li>Provide analgesics</li>
                        <li>Teach relaxation techniques</li>
                      </ul>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3590</td>
                    <td>Surveillance</td>
                    <td>Purposeful and ongoing acquisition, interpretation of patient data</td>
                    <td>Safety</td>
                    <td>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Monitor vital signs</li>
                        <li>Observe patient status</li>
                        <li>Document findings</li>
                      </ul>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>6540</td>
                    <td>Infection Control</td>
                    <td>Minimizing the acquisition and transmission of infectious agents</td>
                    <td>Safety</td>
                    <td>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Hand hygiene</li>
                        <li>Use of PPE</li>
                        <li>Aseptic technique</li>
                      </ul>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsuhanKeperawatan;
