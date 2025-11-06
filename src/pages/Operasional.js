import React from 'react';
import { Settings } from 'lucide-react';

const Operasional = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Manajemen Operasional RS</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <Settings size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul Operasional meliputi: Bed Management, Linen & Laundry, Housekeeping, Limbah Medis, Aset & CMMS, Transport/Ambulans
        </div>
        <p>Fitur dalam pengembangan untuk manajemen operasional rumah sakit secara komprehensif.</p>
      </div>
    </div>
  );
};

export default Operasional;
