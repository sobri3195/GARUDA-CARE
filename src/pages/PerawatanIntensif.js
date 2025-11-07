import React, { useState } from 'react';
import { Users, UserCheck, DoorOpen, Utensils, Activity, Package } from 'lucide-react';

const PerawatanIntensif = () => {
  const [activeTab, setActiveTab] = useState('informasi');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'informasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('informasi')}
        >
          Informasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'visit' ? 'active' : ''}`}
          onClick={() => setActiveTab('visit')}
        >
          Visit Doctor
        </button>
        <button 
          className={`tab ${activeTab === 'pindah' ? 'active' : ''}`}
          onClick={() => setActiveTab('pindah')}
        >
          Pindah Kamar
        </button>
        <button 
          className={`tab ${activeTab === 'diet' ? 'active' : ''}`}
          onClick={() => setActiveTab('diet')}
        >
          Menu Diet
        </button>
        <button 
          className={`tab ${activeTab === 'pemeriksaan' ? 'active' : ''}`}
          onClick={() => setActiveTab('pemeriksaan')}
        >
          Pemeriksaan Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'bmhp' ? 'active' : ''}`}
          onClick={() => setActiveTab('bmhp')}
        >
          Pemakaian BMHP
        </button>
      </div>

      {activeTab === 'informasi' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Bed ICU</h3>
                <p>20</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Terisi</h3>
                <p>12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Users size={30} />
              </div>
              <div className="stat-content">
                <h3>Tersedia</h3>
                <p>8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Activity size={30} />
              </div>
              <div className="stat-content">
                <h3>BOR ICU</h3>
                <p>60%</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Pasien ICU</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Bed</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Diagnosa</th>
                    <th>Tanggal Masuk</th>
                    <th>LOS (hari)</th>
                    <th>GCS</th>
                    <th>APACHE Score</th>
                    <th>Ventilator</th>
                    <th>DPJP</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ICU-01</td>
                    <td>RM-123456</td>
                    <td>Mayor Sudirman</td>
                    <td>Stroke Hemoragik</td>
                    <td>13 Des 2024</td>
                    <td>2</td>
                    <td>E3V3M5 (11)</td>
                    <td>18</td>
                    <td><span className="badge badge-danger">Ya</span></td>
                    <td>dr. Ahmad, Sp.An</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ICU-03</td>
                    <td>RM-234567</td>
                    <td>Kolonel Hartono</td>
                    <td>Post Op CAB</td>
                    <td>14 Des 2024</td>
                    <td>1</td>
                    <td>E4V5M6 (15)</td>
                    <td>12</td>
                    <td><span className="badge badge-success">Tidak</span></td>
                    <td>dr. Budi, Sp.BTKV</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>ICU-05</td>
                    <td>RM-345678</td>
                    <td>Kapten Wijaya</td>
                    <td>Sepsis Berat</td>
                    <td>15 Des 2024</td>
                    <td>0</td>
                    <td>E4V4M6 (14)</td>
                    <td>22</td>
                    <td><span className="badge badge-danger">Ya</span></td>
                    <td>dr. Citra, Sp.PD</td>
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

      {activeTab === 'visit' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Visit Doctor ICU</h2>
            <button className="btn btn-primary">+ Tambah Visit</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Waktu</th>
                  <th>Bed</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Dokter</th>
                  <th>Keluhan/Kondisi</th>
                  <th>Tindakan</th>
                  <th>Instruksi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024 08:00</td>
                  <td>ICU-01</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>dr. Ahmad, Sp.An</td>
                  <td>Kesadaran belum membaik, GCS 11</td>
                  <td>Evaluasi ventilator setting, cek AGD</td>
                  <td>Continue sedasi, monitoring ketat TIK</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024 09:30</td>
                  <td>ICU-03</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>dr. Budi, Sp.BTKV</td>
                  <td>Kondisi stabil, hemodinamik baik</td>
                  <td>Cek EKG, drain produksi</td>
                  <td>Lanjutkan terapi, mobilisasi bertahap</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pindah' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pindah Kamar/Discharge ICU</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Bed Asal</th>
                  <th>Tujuan</th>
                  <th>Alasan</th>
                  <th>LOS ICU</th>
                  <th>Dokter</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 Des 2024</td>
                  <td>RM-456789</td>
                  <td>Letda Susanto</td>
                  <td>ICU-07</td>
                  <td>Rawat Inap Kelas 1</td>
                  <td>Kondisi membaik, tidak memerlukan monitoring intensif</td>
                  <td>3 hari</td>
                  <td>dr. Ahmad, Sp.An</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>13 Des 2024</td>
                  <td>RM-567890</td>
                  <td>Praka Wibowo</td>
                  <td>ICU-02</td>
                  <td>Discharge (Pulang)</td>
                  <td>Kondisi stabil, keluarga meminta pulang</td>
                  <td>2 hari</td>
                  <td>dr. Citra, Sp.PD</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'diet' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Menu Diet Pasien ICU</h2>
            <button className="btn btn-primary">+ Atur Menu</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Bed</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Jenis Diet</th>
                  <th>Rute</th>
                  <th>Kalori Target</th>
                  <th>Protein Target</th>
                  <th>Status Nutrisi</th>
                  <th>Ahli Gizi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ICU-01</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Enteral (NGT)</td>
                  <td>Nasogastric Tube</td>
                  <td>2000 kkal</td>
                  <td>80 g</td>
                  <td><span className="badge badge-warning">Risiko Malnutrisi</span></td>
                  <td>Ns. Lina, S.Gz</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>ICU-03</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Diet Cair</td>
                  <td>Oral</td>
                  <td>1800 kkal</td>
                  <td>70 g</td>
                  <td><span className="badge badge-success">Nutrisi Baik</span></td>
                  <td>Ns. Lina, S.Gz</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>ICU-05</td>
                  <td>RM-345678</td>
                  <td>Kapten Wijaya</td>
                  <td>Parenteral (TPN)</td>
                  <td>Central Line</td>
                  <td>2200 kkal</td>
                  <td>90 g</td>
                  <td><span className="badge badge-danger">Malnutrisi</span></td>
                  <td>Ns. Dewi, S.Gz</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pemeriksaan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemeriksaan Pasien ICU</h2>
            <button className="btn btn-primary">+ Tambah Data</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal/Waktu</th>
                  <th>Bed</th>
                  <th>Nama Pasien</th>
                  <th>TD</th>
                  <th>Nadi</th>
                  <th>RR</th>
                  <th>Suhu</th>
                  <th>SpO2</th>
                  <th>GCS</th>
                  <th>Balance Cairan</th>
                  <th>Perawat</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024 06:00</td>
                  <td>ICU-01</td>
                  <td>Mayor Sudirman</td>
                  <td>130/85</td>
                  <td>92</td>
                  <td>18</td>
                  <td>37.2</td>
                  <td>98%</td>
                  <td>E3V3M5</td>
                  <td>+250 ml</td>
                  <td>Ns. Ani</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024 06:00</td>
                  <td>ICU-03</td>
                  <td>Kolonel Hartono</td>
                  <td>120/80</td>
                  <td>78</td>
                  <td>16</td>
                  <td>36.8</td>
                  <td>99%</td>
                  <td>E4V5M6</td>
                  <td>+100 ml</td>
                  <td>Ns. Budi</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'bmhp' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pemakaian BMHP ICU</h2>
            <button className="btn btn-primary">+ Catat Pemakaian</button>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Bed</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Nama BMHP</th>
                  <th>Jumlah</th>
                  <th>Satuan</th>
                  <th>Harga Satuan</th>
                  <th>Total</th>
                  <th>Perawat</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Des 2024</td>
                  <td>ICU-01</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>ETT No. 7.5</td>
                  <td>1</td>
                  <td>Pcs</td>
                  <td>150.000</td>
                  <td>150.000</td>
                  <td>Ns. Ani</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>ICU-01</td>
                  <td>RM-123456</td>
                  <td>Mayor Sudirman</td>
                  <td>Ventilator Circuit</td>
                  <td>1</td>
                  <td>Set</td>
                  <td>200.000</td>
                  <td>200.000</td>
                  <td>Ns. Ani</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>15 Des 2024</td>
                  <td>ICU-03</td>
                  <td>RM-234567</td>
                  <td>Kolonel Hartono</td>
                  <td>Central Line Kit</td>
                  <td>1</td>
                  <td>Set</td>
                  <td>300.000</td>
                  <td>300.000</td>
                  <td>Ns. Budi</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerawatanIntensif;
