import React from 'react';
import { MessageSquare, Video } from 'lucide-react';

const Telemedis = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Komunikasi, Layanan Publik & Telemedis</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <MessageSquare size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul Telemedis meliputi: Portal pasien, Telemedis intra-RS TNI & remote, Notifikasi, Call Center/CRM
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Fitur:</h4>
          <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
            <li><Video size={16} style={{ display: 'inline', marginRight: '8px' }} />Konsultasi video telemedicine</li>
            <li><Video size={16} style={{ display: 'inline', marginRight: '8px' }} />Portal pasien untuk akses rekam medis</li>
            <li><Video size={16} style={{ display: 'inline', marginRight: '8px' }} />Notifikasi WA/SMS/Email</li>
            <li><Video size={16} style={{ display: 'inline', marginRight: '8px' }} />Call center & ticketing system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Telemedis;
