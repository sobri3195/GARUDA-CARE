import React from 'react';
import { Activity } from 'lucide-react';

const Radiologi = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Radiologi & PACS</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <Activity size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul Radiologi meliputi: Order radiologi, PACS viewer, structured report, dan dose tracking
        </div>
        <p>Fitur dalam pengembangan untuk integrasi RIS/PACS, DICOM viewer, dan protokol pemeriksaan.</p>
      </div>
    </div>
  );
};

export default Radiologi;
