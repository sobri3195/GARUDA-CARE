import React, { useState } from 'react';
import { Ambulance, FileText, ClipboardList, ScrollText } from 'lucide-react';

const PemulasaranJenazah = () => {
  const [activeTab, setActiveTab] = useState('mobil');

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'mobil' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobil')}
        >
          Mobil Jenazah
        </button>
        <button 
          className={`tab ${activeTab === 'pendaftaran' ? 'active' : ''}`}
          onClick={() => setActiveTab('pendaftaran')}
        >
          Pendaftaran
        </button>
        <button 
          className={`tab ${activeTab === 'tindakan' ? 'active' : ''}`}
          onClick={() => setActiveTab('tindakan')}
        >
          Tindakan & Pelayanan
        </button>
        <button 
          className={`tab ${activeTab === 'surat' ? 'active' : ''}`}
          onClick={() => setActiveTab('surat')}
        >
          Surat Keterangan Meninggal
        </button>
      </div>

      {activeTab === 'mobil' && (
        <div>
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon primary">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Total Mobil Jenazah</h3>
                <p>2</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon success">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Siap Operasi</h3>
                <p>2</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon warning">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Dalam Perjalanan</h3>
                <p>0</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon danger">
                <Ambulance size={30} />
              </div>
              <div className="stat-content">
                <h3>Maintenance</h3>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Mobil Jenazah</h2>
              <button className="btn btn-primary">+ Tambah Mobil</button>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No Polisi</th>
                    <th>Tipe</th>
                    <th>Merk/Model</th>
                    <th>Tahun</th>
                    <th>Kapasitas</th>
                    <th>Status</th>
                    <th>Pengemudi</th>
                    <th>Lokasi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B 3344 TNI</td>
                    <td>Mobil Jenazah Standar</td>
                    <td>Mitsubishi L300</td>
                    <td>2020</td>
                    <td>2 Jenazah</td>
                    <td><span className="badge badge-success">Siap Operasi</span></td>
                    <td>Kopda Bambang</td>
                    <td>Kamar Jenazah</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>B 5566 TNI</td>
                    <td>Mobil Jenazah Premium</td>
                    <td>Toyota Hiace</td>
                    <td>2022</td>
                    <td>1 Jenazah</td>
                    <td><span className="badge badge-success">Siap Operasi</span></td>
                    <td>Praka Dedi</td>
                    <td>Kamar Jenazah</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pendaftaran' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Pendaftaran Pemulasaran Jenazah</h2>
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
                  <label className="form-label">Tanggal Meninggal</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Almarhum/ah</label>
                  <input type="text" className="form-input" placeholder="Nama lengkap" />
                </div>
                <div className="form-group">
                  <label className="form-label">Pangkat/NRP</label>
                  <input type="text" className="form-input" placeholder="Letda/123456" />
                </div>
                <div className="form-group">
                  <label className="form-label">Satuan</label>
                  <input type="text" className="form-input" placeholder="Satuan/Kesatuan" />
                </div>
                <div className="form-group">
                  <label className="form-label">Lokasi Meninggal</label>
                  <select className="form-input">
                    <option value="">Pilih Lokasi</option>
                    <option value="igd">IGD</option>
                    <option value="rawat_inap">Rawat Inap</option>
                    <option value="icu">ICU</option>
                    <option value="ok">Kamar Operasi</option>
                    <option value="luar">Luar RS</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Ruangan</label>
                  <input type="text" className="form-input" placeholder="Nama ruangan" />
                </div>
                <div className="form-group">
                  <label className="form-label">Dokter Pemeriksa</label>
                  <input type="text" className="form-input" placeholder="Nama dokter" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Penyebab Kematian</label>
                  <textarea className="form-input" rows="3" placeholder="Diagnosa penyebab kematian"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Keluarga/Penanggung Jawab</label>
                  <input type="text" className="form-input" placeholder="Nama lengkap" />
                </div>
                <div className="form-group">
                  <label className="form-label">Hubungan</label>
                  <select className="form-input">
                    <option value="">Pilih Hubungan</option>
                    <option value="suami">Suami</option>
                    <option value="istri">Istri</option>
                    <option value="anak">Anak</option>
                    <option value="orangtua">Orang Tua</option>
                    <option value="saudara">Saudara</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">No. Telepon Keluarga</label>
                  <input type="tel" className="form-input" placeholder="08xxxxxxxxxx" />
                </div>
                <div className="form-group">
                  <label className="form-label">Alamat Keluarga</label>
                  <textarea className="form-input" rows="2" placeholder="Alamat lengkap"></textarea>
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-primary">Simpan Pendaftaran</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Pendaftaran Pemulasaran Jenazah</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Registrasi</th>
                    <th>Tanggal Meninggal</th>
                    <th>Nama Almarhum/ah</th>
                    <th>Pangkat/NRP</th>
                    <th>Lokasi Meninggal</th>
                    <th>Keluarga</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JNZ-20241215-001</td>
                    <td>15 Des 2024 10:30</td>
                    <td>Mayor (Purn) Sudirman</td>
                    <td>Mayor/456789</td>
                    <td>Rawat Inap - VIP A</td>
                    <td>Ny. Siti (Istri)</td>
                    <td><span className="badge badge-warning">Dalam Proses</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>JNZ-20241214-002</td>
                    <td>14 Des 2024 15:20</td>
                    <td>Serka Bambang Wijaya</td>
                    <td>Serka/234567</td>
                    <td>ICU</td>
                    <td>Tn. Ahmad (Anak)</td>
                    <td><span className="badge badge-success">Selesai</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tindakan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Tindakan & Pelayanan Pemulasaran Jenazah</h2>
            <button className="btn btn-primary">+ Tambah Tindakan</button>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Cari No. Registrasi atau Nama..."
                style={{ maxWidth: '400px' }}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>No. Registrasi</th>
                  <th>Nama Almarhum/ah</th>
                  <th>Tanggal</th>
                  <th>Jenis Tindakan</th>
                  <th>Petugas</th>
                  <th>Biaya (Rp)</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JNZ-20241215-001</td>
                  <td>Mayor (Purn) Sudirman</td>
                  <td>15 Des 2024</td>
                  <td>Memandikan & Mengkafani</td>
                  <td>Tn. Hadi</td>
                  <td>500.000</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>JNZ-20241215-001</td>
                  <td>Mayor (Purn) Sudirman</td>
                  <td>15 Des 2024</td>
                  <td>Penyimpanan di Cold Storage (24 jam)</td>
                  <td>Tn. Hadi</td>
                  <td>300.000</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-sm btn-primary">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>JNZ-20241214-002</td>
                  <td>Serka Bambang Wijaya</td>
                  <td>14 Des 2024</td>
                  <td>Transportasi Jenazah (Local)</td>
                  <td>Kopda Bambang</td>
                  <td>400.000</td>
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

      {activeTab === 'surat' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Buat Surat Keterangan Meninggal</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">No. Registrasi Jenazah</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" className="form-input" placeholder="Cari No. Registrasi" />
                    <button className="btn btn-primary">Cari</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">No. Surat</label>
                  <input type="text" className="form-input" placeholder="Auto-generate" disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Nama Almarhum/ah</label>
                  <input type="text" className="form-input" placeholder="Auto-fill dari registrasi" />
                </div>
                <div className="form-group">
                  <label className="form-label">NIK</label>
                  <input type="text" className="form-input" placeholder="NIK almarhum/ah" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tempat, Tanggal Lahir</label>
                  <input type="text" className="form-input" placeholder="Jakarta, 01 Januari 1950" />
                </div>
                <div className="form-group">
                  <label className="form-label">Jenis Kelamin</label>
                  <select className="form-input">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Agama</label>
                  <select className="form-input">
                    <option value="">Pilih Agama</option>
                    <option value="islam">Islam</option>
                    <option value="kristen">Kristen</option>
                    <option value="katolik">Katolik</option>
                    <option value="hindu">Hindu</option>
                    <option value="buddha">Buddha</option>
                    <option value="konghucu">Konghucu</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Pekerjaan</label>
                  <input type="text" className="form-input" placeholder="Pekerjaan almarhum/ah" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Alamat Terakhir</label>
                  <textarea className="form-input" rows="2" placeholder="Alamat lengkap"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Tanggal Meninggal</label>
                  <input type="datetime-local" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Tempat Meninggal</label>
                  <input type="text" className="form-input" placeholder="RS Trimatra" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Penyebab Kematian</label>
                  <textarea className="form-input" rows="3" placeholder="Diagnosa penyebab kematian"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Dokter Yang Memeriksa</label>
                  <input type="text" className="form-input" placeholder="Nama dokter" />
                </div>
                <div className="form-group">
                  <label className="form-label">No. SIP Dokter</label>
                  <input type="text" className="form-input" placeholder="No. SIP" />
                </div>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary">Batal</button>
                <button className="btn btn-success">Preview</button>
                <button className="btn btn-primary">Simpan & Cetak</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Daftar Surat Keterangan Meninggal</h2>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No. Surat</th>
                    <th>Tanggal Surat</th>
                    <th>Nama Almarhum/ah</th>
                    <th>NIK</th>
                    <th>Tanggal Meninggal</th>
                    <th>Dokter Pemeriksa</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SKM/001/XII/2024</td>
                    <td>15 Des 2024</td>
                    <td>Mayor (Purn) Sudirman</td>
                    <td>3174012345678901</td>
                    <td>15 Des 2024 10:30</td>
                    <td>dr. Ahmad Yani, Sp.PD</td>
                    <td><span className="badge badge-success">Terbit</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Cetak</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>SKM/002/XII/2024</td>
                    <td>14 Des 2024</td>
                    <td>Serka Bambang Wijaya</td>
                    <td>3276012345678902</td>
                    <td>14 Des 2024 15:20</td>
                    <td>dr. Siti Nurhaliza, Sp.An</td>
                    <td><span className="badge badge-success">Terbit</span></td>
                    <td>
                      <button className="btn btn-sm btn-primary">Cetak</button>
                      <button className="btn btn-sm btn-warning" style={{ marginLeft: '5px' }}>Edit</button>
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

export default PemulasaranJenazah;
