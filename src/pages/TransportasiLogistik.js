import React, { useState } from 'react';
import { Truck, MapPin, Package, Activity, Clock, CheckCircle, Navigation } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const TransportasiLogistik = () => {
  const [activeTab, setActiveTab] = useState('ambulance');

  const ambulanceFleet = [
    { id: 'AMB-001', type: 'Ambulance Emergency', status: 'Tersedia', location: 'Pool RS Trimatra', driver: 'Serda Budi S.', lastService: '02 Jan 2024', mileage: 45230, fuelLevel: 85, condition: 'Baik' },
    { id: 'AMB-002', type: 'Ambulance ICU', status: 'Dalam Perjalanan', location: 'Menuju RSCM', driver: 'Kopda Ahmad W.', lastService: '28 Des 2023', mileage: 38910, fuelLevel: 60, condition: 'Baik' },
    { id: 'AMB-003', type: 'Ambulance Emergency', status: 'Tersedia', location: 'Pool RS Trimatra', driver: '-', lastService: '05 Jan 2024', mileage: 32450, fuelLevel: 95, condition: 'Baik' },
    { id: 'AMB-004', type: 'Ambulance Transport', status: 'Dalam Servis', location: 'Workshop', driver: '-', lastService: '20 Nov 2023', mileage: 67890, fuelLevel: 20, condition: 'Maintenance' },
    { id: 'AMB-005', type: 'Ambulance Emergency', status: 'Dalam Perjalanan', location: 'Kembali dari RS Fatmawati', driver: 'Pratu Siti A.', lastService: '30 Des 2023', mileage: 41200, fuelLevel: 45, condition: 'Baik' }
  ];

  const activeTrips = [
    { id: 'TRIP-001', ambulanceId: 'AMB-002', type: 'Rujukan Emergensi', patient: 'Mayor Inf. Joko P.', from: 'RS Trimatra', to: 'RSCM Jakarta', departure: '10:30', eta: '11:15', distance: '12 km', status: 'Dalam Perjalanan' },
    { id: 'TRIP-002', ambulanceId: 'AMB-005', type: 'Pulang Pasien', patient: 'Serka Fitri M.', from: 'RS Fatmawati', to: 'Rumah Pasien', departure: '09:45', eta: '10:30', distance: '8 km', status: 'Kembali ke RS' }
  ];

  const supplyDistribution = [
    { id: 'DIST-001', item: 'Obat-obatan Emergency', quantity: '250 item', from: 'Gudang Farmasi', to: 'IGD', requestedBy: 'Ns. Siti Aminah', requestTime: '10:15', status: 'Dalam Proses', priority: 'Urgent' },
    { id: 'DIST-002', item: 'Alat Medis Habis Pakai', quantity: '500 pcs', from: 'Gudang Umum', to: 'Bedah Sentral', requestedBy: 'Dr. Ahmad Wijaya', requestTime: '09:30', status: 'Selesai', priority: 'Normal' },
    { id: 'DIST-003', item: 'Linen & Handuk', quantity: '200 set', from: 'Laundry', to: 'Rawat Inap Lt. 4', requestedBy: 'Perawat Ruangan', requestTime: '10:45', status: 'Dalam Proses', priority: 'Normal' },
    { id: 'DIST-004', item: 'Reagensia Lab', quantity: '50 kit', from: 'Gudang Farmasi', to: 'Laboratorium', requestedBy: 'Lab Analyst', requestTime: '08:30', status: 'Selesai', priority: 'High' }
  ];

  const medicalEquipmentTransfer = [
    { id: 'TRANS-001', equipment: 'Ventilator Portable', from: 'ICU Lt. 3', to: 'IGD', transferredBy: 'Tim Teknis', transferTime: '11:00', reason: 'Emergency Case', status: 'Completed' },
    { id: 'TRANS-002', equipment: 'Infusion Pump (3 unit)', from: 'Gudang Alkes', to: 'Rawat Inap Lt. 5', transferredBy: 'Logistik', transferTime: '10:20', reason: 'Request Unit', status: 'Completed' },
    { id: 'TRANS-003', equipment: 'Patient Monitor', from: 'Bedah Sentral', to: 'ICU Lt. 3', transferredBy: 'Tim Teknis', transferTime: '10:50', reason: 'Post-Surgery', status: 'In Progress' }
  ];

  const statistics = [
    { label: 'Armada Ambulans', value: '5', subtext: '3 tersedia', icon: Truck, color: '#003d82' },
    { label: 'Trip Aktif', value: '2', subtext: 'Real-time tracking', icon: Navigation, color: '#e67e22' },
    { label: 'Distribusi Hari Ini', value: '24', subtext: '4 dalam proses', icon: Package, color: '#d4af37' },
    { label: 'On-Time Rate', value: '94%', subtext: 'Bulan ini', icon: CheckCircle, color: '#27ae60' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><Truck size={32} /> Transportasi & Logistik</h1>
        <p>Sistem monitoring transportasi medis, distribusi supplies, dan logistik internal rumah sakit</p>
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
          className={`tab ${activeTab === 'ambulance' ? 'active' : ''}`}
          onClick={() => setActiveTab('ambulance')}
        >
          <Truck size={18} />
          Armada Ambulans
        </button>
        <button 
          className={`tab ${activeTab === 'trips' ? 'active' : ''}`}
          onClick={() => setActiveTab('trips')}
        >
          <Navigation size={18} />
          Trip Aktif
        </button>
        <button 
          className={`tab ${activeTab === 'supply' ? 'active' : ''}`}
          onClick={() => setActiveTab('supply')}
        >
          <Package size={18} />
          Distribusi Supplies
        </button>
        <button 
          className={`tab ${activeTab === 'equipment' ? 'active' : ''}`}
          onClick={() => setActiveTab('equipment')}
        >
          <Activity size={18} />
          Transfer Alat Medis
        </button>
      </div>

      {activeTab === 'ambulance' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Status Armada Ambulans Real-Time</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
            {[
              { label: 'Tersedia', value: 3, color: '#27ae60' },
              { label: 'Dalam Perjalanan', value: 2, color: '#f39c12' },
              { label: 'Maintenance', value: 1, color: '#e74c3c' }
            ].map((item, index) => (
              <div key={index} className="stat-card">
                <div className="stat-info">
                  <div className="stat-value" style={{ color: item.color }}>{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <TableWithExport filename="armada_ambulans">
            <table>
              <thead>
                <tr>
                  <th>ID Ambulans</th>
                  <th>Tipe</th>
                  <th>Status</th>
                  <th>Lokasi Saat Ini</th>
                  <th>Driver</th>
                  <th>Servis Terakhir</th>
                  <th>Kilometer</th>
                  <th>Bahan Bakar</th>
                  <th>Kondisi</th>
                </tr>
              </thead>
              <tbody>
                {ambulanceFleet.map((amb) => (
                  <tr key={amb.id}>
                    <td style={{ fontWeight: '600' }}>{amb.id}</td>
                    <td>{amb.type}</td>
                    <td>
                      <span className={`badge ${
                        amb.status === 'Tersedia' ? 'badge-success' :
                        amb.status === 'Dalam Perjalanan' ? 'badge-warning' :
                        'badge-danger'
                      }`}>
                        {amb.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={14} />
                        {amb.location}
                      </div>
                    </td>
                    <td>{amb.driver || '-'}</td>
                    <td>{amb.lastService}</td>
                    <td>{amb.mileage.toLocaleString()} km</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, height: '12px', backgroundColor: '#f0f0f0', borderRadius: '6px', overflow: 'hidden' }}>
                          <div 
                            style={{ 
                              height: '100%', 
                              backgroundColor: amb.fuelLevel >= 70 ? '#27ae60' : amb.fuelLevel >= 40 ? '#f39c12' : '#e74c3c',
                              width: `${amb.fuelLevel}%`
                            }}
                          />
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '600', minWidth: '40px' }}>{amb.fuelLevel}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${amb.condition === 'Baik' ? 'badge-success' : 'badge-warning'}`}>
                        {amb.condition}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>
        </div>
      )}

      {activeTab === 'trips' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="alert alert-info">
              <Navigation size={20} />
              <span>
                <strong>Real-Time Tracking:</strong> 2 ambulans sedang dalam perjalanan. Monitoring GPS dan komunikasi aktif.
              </span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Trip Ambulans Aktif</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {activeTrips.map((trip) => (
                <div 
                  key={trip.id}
                  style={{
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #f39c12'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <div>
                      <h4 style={{ marginBottom: '8px' }}>{trip.id} - {trip.type}</h4>
                      <div style={{ fontSize: '14px', color: '#666' }}>
                        Ambulans: <strong>{trip.ambulanceId}</strong> • Pasien: <strong>{trip.patient}</strong>
                      </div>
                    </div>
                    <span className="badge badge-warning" style={{ height: 'fit-content' }}>
                      <Activity size={14} />
                      {trip.status}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ 
                      padding: '12px', 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      textAlign: 'center',
                      minWidth: '150px'
                    }}>
                      <MapPin size={20} color="#003d82" style={{ marginBottom: '6px' }} />
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Dari</div>
                      <div style={{ fontWeight: '600', fontSize: '14px' }}>{trip.from}</div>
                    </div>

                    <div style={{ position: 'relative', height: '4px', backgroundColor: '#003d82', borderRadius: '2px' }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: '2px solid #003d82',
                        fontSize: '12px',
                        fontWeight: '600',
                        whiteSpace: 'nowrap'
                      }}>
                        <Truck size={14} style={{ display: 'inline', marginRight: '4px' }} />
                        {trip.distance}
                      </div>
                    </div>

                    <div style={{ 
                      padding: '12px', 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      textAlign: 'center',
                      minWidth: '150px'
                    }}>
                      <MapPin size={20} color="#27ae60" style={{ marginBottom: '6px' }} />
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Ke</div>
                      <div style={{ fontWeight: '600', fontSize: '14px' }}>{trip.to}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '15px', fontSize: '14px', color: '#666' }}>
                    <div style={{ flex: 1, padding: '10px', backgroundColor: 'white', borderRadius: '6px' }}>
                      <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
                      <strong>Berangkat:</strong> {trip.departure}
                    </div>
                    <div style={{ flex: 1, padding: '10px', backgroundColor: 'white', borderRadius: '6px' }}>
                      <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
                      <strong>ETA:</strong> {trip.eta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'supply' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Distribusi Supplies Internal</h3>
          
          <TableWithExport filename="distribusi_supplies">
            <table>
              <thead>
                <tr>
                  <th>ID Distribusi</th>
                  <th>Item</th>
                  <th>Kuantitas</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Diminta Oleh</th>
                  <th>Waktu Request</th>
                  <th>Status</th>
                  <th>Prioritas</th>
                </tr>
              </thead>
              <tbody>
                {supplyDistribution.map((supply) => (
                  <tr key={supply.id}>
                    <td style={{ fontWeight: '600' }}>{supply.id}</td>
                    <td>{supply.item}</td>
                    <td style={{ fontWeight: '600' }}>{supply.quantity}</td>
                    <td>{supply.from}</td>
                    <td>{supply.to}</td>
                    <td>{supply.requestedBy}</td>
                    <td>{supply.requestTime}</td>
                    <td>
                      <span className={`badge ${
                        supply.status === 'Selesai' ? 'badge-success' : 'badge-warning'
                      }`}>
                        {supply.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        supply.priority === 'Urgent' ? 'badge-danger' :
                        supply.priority === 'High' ? 'badge-warning' :
                        'badge-info'
                      }`}>
                        {supply.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>
            {[
              { label: 'Total Distribusi Hari Ini', value: '24', color: '#003d82' },
              { label: 'Dalam Proses', value: '4', color: '#f39c12' },
              { label: 'Selesai Tepat Waktu', value: '18/20', color: '#27ae60' }
            ].map((item, index) => (
              <div key={index} className="stat-card">
                <div className="stat-info">
                  <div className="stat-value" style={{ color: item.color }}>{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'equipment' && (
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Transfer Alat Medis Antar Unit</h3>
          
          <TableWithExport filename="transfer_alat_medis">
            <table>
              <thead>
                <tr>
                  <th>ID Transfer</th>
                  <th>Alat Medis</th>
                  <th>Dari Unit</th>
                  <th>Ke Unit</th>
                  <th>Ditransfer Oleh</th>
                  <th>Waktu Transfer</th>
                  <th>Alasan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {medicalEquipmentTransfer.map((transfer) => (
                  <tr key={transfer.id}>
                    <td style={{ fontWeight: '600' }}>{transfer.id}</td>
                    <td style={{ fontWeight: '600' }}>{transfer.equipment}</td>
                    <td>{transfer.from}</td>
                    <td>{transfer.to}</td>
                    <td>{transfer.transferredBy}</td>
                    <td>{transfer.transferTime}</td>
                    <td>{transfer.reason}</td>
                    <td>
                      <span className={`badge ${
                        transfer.status === 'Completed' ? 'badge-success' : 'badge-warning'
                      }`}>
                        {transfer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWithExport>

          <div className="alert alert-info" style={{ marginTop: '20px' }}>
            <CheckCircle size={20} />
            <span>
              <strong>Tracking Alat Medis:</strong> Semua transfer alat medis dicatat untuk memastikan akuntabilitas 
              dan memudahkan tracking lokasi peralatan.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransportasiLogistik;
