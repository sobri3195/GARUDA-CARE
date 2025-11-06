import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Mutu = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Mutu, Risiko & Keselamatan Pasien</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <ShieldCheck size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul Mutu meliputi: Insiden keselamatan pasien, PPI, Akreditasi (SNARS/KARS), Survei kepuasan
        </div>
        <p>Fitur dalam pengembangan untuk quality assurance dan patient safety sesuai standar akreditasi.</p>
      </div>
    </div>
  );
};

export default Mutu;
