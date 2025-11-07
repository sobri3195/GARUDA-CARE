import React from 'react';
import { Users, Activity, Bed, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">
            <Users size={30} />
          </div>
          <div className="stat-content">
            <h3>Pasien Hari Ini</h3>
            <p>243</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon secondary">
            <Activity size={30} />
          </div>
          <div className="stat-content">
            <h3>Pasien IGD</h3>
            <p>18</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <Bed size={30} />
          </div>
          <div className="stat-content">
            <h3>Bed Occupancy Rate</h3>
            <p>78%</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon info">
            <Clock size={30} />
          </div>
          <div className="stat-content">
            <h3>Antrean Aktif</h3>
            <p>42</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Pasien Rawat Inap</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Pasien Rawat Inap" tableId="table-rawat-inap">
              <table className="table" id="table-rawat-inap">
                <thead>
                  <tr>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Pangkat/NRP</th>
                    <th>Ruangan</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RM-001234</td>
                    <td>Letkol Budi Santoso</td>
                    <td>Letkol / 531234</td>
                    <td>VIP A - 201</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001235</td>
                    <td>Mayor Siti Nurhaliza</td>
                    <td>Mayor / 621245</td>
                    <td>ICU - 102</td>
                    <td><span className="badge badge-warning">Monitoring</span></td>
                  </tr>
                  <tr>
                    <td>RM-001236</td>
                    <td>Kapten Ahmad Fauzi</td>
                    <td>Kapten / 721356</td>
                    <td>Kelas I - 305</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001237</td>
                    <td>Serka Dewi Lestari</td>
                    <td>Serka / 821467</td>
                    <td>Kelas II - 408</td>
                    <td><span className="badge badge-success">Stabil</span></td>
                  </tr>
                  <tr>
                    <td>RM-001238</td>
                    <td>Kolonel Hendra Wijaya</td>
                    <td>Kolonel / 431128</td>
                    <td>HCU - 203</td>
                    <td><span className="badge badge-danger">Kritis</span></td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Antrean Poliklinik</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Antrean Poliklinik" tableId="table-antrean-poli">
              <table className="table" id="table-antrean-poli">
                <thead>
                  <tr>
                    <th>No. Antrean</th>
                    <th>Poliklinik</th>
                    <th>Pasien Menunggu</th>
                    <th>Estimasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-012</td>
                    <td>Poli Umum</td>
                    <td>8 pasien</td>
                    <td>45 menit</td>
                  </tr>
                  <tr>
                    <td>B-008</td>
                    <td>Poli Jantung</td>
                    <td>5 pasien</td>
                    <td>30 menit</td>
                  </tr>
                  <tr>
                    <td>C-015</td>
                    <td>Poli Gigi</td>
                    <td>12 pasien</td>
                    <td>60 menit</td>
                  </tr>
                  <tr>
                    <td>D-004</td>
                    <td>Poli Mata</td>
                    <td>3 pasien</td>
                    <td>15 menit</td>
                  </tr>
                  <tr>
                    <td>E-009</td>
                    <td>Aerospace Medicine</td>
                    <td>6 pasien</td>
                    <td>40 menit</td>
                  </tr>
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Notifikasi & Alert</h2>
        </div>
        <div className="card-body">
          <div className="alert alert-danger">
            <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Critical Alert:</strong> Stok obat Adrenalin di ICU tinggal 2 ampul
          </div>
          <div className="alert alert-warning">
            <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Warning:</strong> BOR mencapai 78%, pertimbangkan untuk mengaktifkan bed cadangan
          </div>
          <div className="alert alert-info">
            <TrendingUp size={20} style={{ display: 'inline', marginRight: '10px' }} />
            <strong>Info:</strong> Pemeriksaan Fit-to-Fly untuk 5 awak pesawat dijadwalkan besok pagi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
