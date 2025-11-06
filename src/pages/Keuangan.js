import React from 'react';
import { DollarSign } from 'lucide-react';

const Keuangan = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Keuangan & Revenue Cycle</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <DollarSign size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul Keuangan meliputi: Tarif & Paket, Billing, Klaim BPJS, Piutang & Kas, Pelaporan Fiskal
        </div>
        <p>Fitur dalam pengembangan untuk manajemen keuangan dan revenue cycle yang terintegrasi dengan BPJS.</p>
      </div>
    </div>
  );
};

export default Keuangan;
