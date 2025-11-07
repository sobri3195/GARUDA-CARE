import React, { useState } from 'react';
import { Package, Wrench, Calendar, AlertTriangle, CheckCircle, TrendingUp, Search, Filter, Download } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const AsetRumahSakit = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const assets = [
    { id: 'AST-001', name: 'Ventilator Hamilton-C6', category: 'Medical Equipment', location: 'ICU Lt. 3', purchaseDate: '15 Mar 2020', cost: 450000000, condition: 'Baik', lastMaintenance: '05 Jan 2024', nextMaintenance: '05 Apr 2024', status: 'Operasional', warranty: 'Expired' },
    { id: 'AST-002', name: 'CT Scan 128 Slice', category: 'Radiology', location: 'Radiologi Lt. 1', purchaseDate: '10 Jun 2019', cost: 8500000000, condition: 'Baik', lastMaintenance: '20 Des 2023', nextMaintenance: '20 Feb 2024', status: 'Operasional', warranty: 'Active' },
    { id: 'AST-003', name: 'Defibrillator Philips MRx', category: 'Medical Equipment', location: 'IGD', purchaseDate: '22 Jan 2021', cost: 85000000, condition: 'Baik', lastMaintenance: '10 Des 2023', nextMaintenance: '10 Mar 2024', status: 'Operasional', warranty: 'Active' },
    { id: 'AST-004', name: 'Infusion Pump Terumo', category: 'Medical Equipment', location: 'Rawat Inap Lt. 4', purchaseDate: '05 Sep 2022', cost: 12500000, condition: 'Baik', lastMaintenance: '28 Des 2023', nextMaintenance: '28 Mar 2024', status: 'Operasional', warranty: 'Active' },
    { id: 'AST-005', name: 'USG 4D GE Voluson', category: 'Radiology', location: 'Poli Kandungan Lt. 2', purchaseDate: '18 Nov 2021', cost: 650000000, condition: 'Perlu Perbaikan', lastMaintenance: '15 Nov 2023', nextMaintenance: '15 Feb 2024', status: 'Maintenance', warranty: 'Active' },
    { id: 'AST-006', name: 'Autoclave Steam Sterilizer', category: 'Sterilization', location: 'CSSD Lt. 1', purchaseDate: '12 Apr 2020', cost: 125000000, condition: 'Baik', lastMaintenance: '02 Jan 2024', nextMaintenance: '02 Apr 2024', status: 'Operasional', warranty: 'Expired' },
    { id: 'AST-007', name: 'Anesthesia Machine Drager', category: 'Medical Equipment', location: 'Bedah Sentral', purchaseDate: '08 Jul 2019', cost: 550000000, condition: 'Baik', lastMaintenance: '18 Des 2023', nextMaintenance: '18 Mar 2024', status: 'Operasional', warranty: 'Expired' },
    { id: 'AST-008', name: 'Patient Monitor Mindray', category: 'Medical Equipment', location: 'ICU Lt. 3', purchaseDate: '25 Feb 2023', cost: 45000000, condition: 'Baik', lastMaintenance: '20 Des 2023', nextMaintenance: '20 Mar 2024', status: 'Operasional', warranty: 'Active' }
  ];

  const maintenanceSchedule = [
    { id: 1, assetId: 'AST-005', assetName: 'USG 4D GE Voluson', type: 'Repair', priority: 'Urgent', scheduledDate: '08 Jan 2024', technician: 'PT. GE Healthcare', estimatedCost: 15000000, status: 'In Progress' },
    { id: 2, assetId: 'AST-002', assetName: 'CT Scan 128 Slice', type: 'Preventive', priority: 'High', scheduledDate: '20 Feb 2024', technician: 'PT. Siemens Healthcare', estimatedCost: 25000000, status: 'Scheduled' },
    { id: 3, assetId: 'AST-003', assetName: 'Defibrillator Philips MRx', type: 'Calibration', priority: 'Medium', scheduledDate: '10 Mar 2024', technician: 'PT. Philips Indonesia', estimatedCost: 5000000, status: 'Scheduled' },
    { id: 4, assetId: 'AST-007', assetName: 'Anesthesia Machine Drager', type: 'Preventive', priority: 'Medium', scheduledDate: '18 Mar 2024', technician: 'PT. Drager Indonesia', estimatedCost: 12000000, status: 'Scheduled' }
  ];

  const assetCategories = [
    { category: 'Medical Equipment', count: 45, value: 2500000000, utilization: 87 },
    { category: 'Radiology', count: 8, value: 12000000000, utilization: 92 },
    { category: 'Laboratory', count: 32, value: 850000000, utilization: 78 },
    { category: 'Sterilization', count: 12, value: 450000000, utilization: 85 },
    { category: 'Furniture', count: 156, value: 320000000, utilization: 95 }
  ];

  const statistics = [
    { label: 'Total Aset', value: '253', subtext: 'Nilai: Rp 16.1 M', icon: Package, color: '#003d82' },
    { label: 'Operasional', value: '245', subtext: '96.8%', icon: CheckCircle, color: '#27ae60' },
    { label: 'Maintenance', value: '5', subtext: '2.0%', icon: Wrench, color: '#f39c12' },
    { label: 'Jadwal Servis Bulan Ini', value: '12', subtext: '4 urgent', icon: Calendar, color: '#e67e22' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><Package size={32} /> Manajemen Aset Rumah Sakit</h1>
          <p>Sistem monitoring dan manajemen aset medis, peralatan, dan infrastruktur rumah sakit</p>
        </div>
        <button className="btn-primary">
          <Package size={18} />
          Tambah Aset Baru
        </button>
      </div>

      <div className="stats-grid">
        {statistics.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div className="stat-info">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <div className="stat-value">{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{stat.subtext}</div>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          <Package size={18} />
          Inventaris Aset
        </button>
        <button 
          className={`tab ${activeTab === 'maintenance' ? 'active' : ''}`}
          onClick={() => setActiveTab('maintenance')}
        >
          <Wrench size={18} />
          Jadwal Servis
        </button>
        <button 
          className={`tab ${activeTab === 'category' ? 'active' : ''}`}
          onClick={() => setActiveTab('category')}
        >
          <TrendingUp size={18} />
          Kategori & Utilisasi
        </button>
      </div>

      {activeTab === 'inventory' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Daftar Inventaris Aset</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                <input 
                  type="text" 
                  placeholder="Cari aset..." 
                  style={{ paddingLeft: '40px', width: '250px' }}
                />
              </div>
              <button className="btn-secondary">
                <Filter size={18} />
                Filter
              </button>
              <button className="btn-primary">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          <TableWithExport filename="inventaris_aset">
            <table>
              <thead>
                <tr>
                  <th>ID Aset</th>
                  <th>Nama Aset</th>
                  <th>Kategori</th>
                  <th>Lokasi</th>
                  <th>Tanggal Beli</th>
                  <th>Nilai (Rp)</th>
                  <th>Kondisi</th>
                  <th>Servis Terakhir</th>
                  <th>Servis Berikutnya</th>
                  <th>Status</th>
                  <th>Garansi</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id}>
                    <td style={{ fontWeight: '600' }}>{asset.id}</td>
                    <td>{asset.name}</td>
                    <td><span className="badge badge-info">{asset.category}</span></td>
                    <td>{asset.location}</td>
                    <td>{asset.purchaseDate}</td>
                    <td>{(asset.cost / 1000000).toFixed(1)} M</td>
                    <td>
                      <span className={`badge ${
                        asset.condition === 'Baik' ? 'badge-success' : 
                        asset.condition === 'Perlu Perbaikan' ? 'badge-warning' : 
                        'badge-danger'
                      }`}>
                        {asset.condition}
                      </span>
                    </td>
                    <td>{asset.lastMaintenance}</td>
                    <td>{asset.nextMaintenance}</td>
                    <td>
                      <span className={`badge ${
                        asset.status === 'Operasional' ? 'badge-success' : 
                        asset.status === 'Maintenance' ? 'badge-warning' : 
                        'badge-danger'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${asset.warranty === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                        {asset.warranty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="alert alert-warning">
              <AlertTriangle size={20} />
              <span>
                <strong>Perhatian:</strong> 1 aset memerlukan perbaikan urgent (USG 4D) dan 3 aset mendekati jadwal servis preventive.
              </span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Jadwal Perawatan & Servis</h3>
            <TableWithExport filename="jadwal_maintenance">
              <table>
                <thead>
                  <tr>
                    <th>ID Aset</th>
                    <th>Nama Aset</th>
                    <th>Tipe Maintenance</th>
                    <th>Prioritas</th>
                    <th>Tanggal Jadwal</th>
                    <th>Teknisi/Vendor</th>
                    <th>Estimasi Biaya</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceSchedule.map((maint) => (
                    <tr key={maint.id}>
                      <td style={{ fontWeight: '600' }}>{maint.assetId}</td>
                      <td>{maint.assetName}</td>
                      <td><span className="badge badge-info">{maint.type}</span></td>
                      <td>
                        <span className={`badge ${
                          maint.priority === 'Urgent' ? 'badge-danger' :
                          maint.priority === 'High' ? 'badge-warning' :
                          'badge-info'
                        }`}>
                          {maint.priority}
                        </span>
                      </td>
                      <td>{maint.scheduledDate}</td>
                      <td>{maint.technician}</td>
                      <td>Rp {(maint.estimatedCost / 1000000).toFixed(1)} M</td>
                      <td>
                        <span className={`badge ${
                          maint.status === 'In Progress' ? 'badge-warning' : 'badge-info'
                        }`}>
                          {maint.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWithExport>
          </div>
        </div>
      )}

      {activeTab === 'category' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Kategori Aset & Tingkat Utilisasi</h3>
          
          <TableWithExport filename="kategori_aset">
            <table>
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th style={{ textAlign: 'center' }}>Jumlah Aset</th>
                  <th style={{ textAlign: 'center' }}>Total Nilai (Rp)</th>
                  <th style={{ textAlign: 'center' }}>Tingkat Utilisasi (%)</th>
                  <th>Visualisasi</th>
                </tr>
              </thead>
              <tbody>
                {assetCategories.map((cat, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '600' }}>{cat.category}</td>
                    <td style={{ textAlign: 'center', fontSize: '16px', fontWeight: '700' }}>{cat.count}</td>
                    <td style={{ textAlign: 'center' }}>Rp {(cat.value / 1000000000).toFixed(1)} M</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        color: cat.utilization >= 85 ? '#27ae60' : cat.utilization >= 70 ? '#f39c12' : '#e74c3c'
                      }}>
                        {cat.utilization}%
                      </span>
                    </td>
                    <td>
                      <div style={{ height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            height: '100%', 
                            backgroundColor: cat.utilization >= 85 ? '#27ae60' : cat.utilization >= 70 ? '#f39c12' : '#e74c3c',
                            width: `${cat.utilization}%`,
                            transition: 'width 0.5s'
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>
            {[
              { title: 'Total Nilai Aset', value: 'Rp 16.1 M', icon: Package, color: '#003d82' },
              { title: 'Rata-rata Utilisasi', value: '87.4%', icon: TrendingUp, color: '#27ae60' },
              { title: 'ROI Tahunan', value: '12.5%', icon: CheckCircle, color: '#d4af37' }
            ].map((item, index) => (
              <div key={index} className="card" style={{ border: `2px solid ${item.color}`, textAlign: 'center' }}>
                <item.icon size={32} color={item.color} style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: item.color }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AsetRumahSakit;
