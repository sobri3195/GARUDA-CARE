import React from 'react';
import { Stethoscope, Heart } from 'lucide-react';

const Keperawatan = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Asuhan Keperawatan</h2>
        </div>
        <div className="card-body">
          <div className="alert alert-info">
            <Stethoscope size={20} style={{ display: 'inline', marginRight: '10px' }} />
            Modul Keperawatan meliputi: Asesmen keperawatan, nursing diagnosis (NANDA), NIC/NOC, care plan, eMAR
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Fitur Utama:</h4>
            <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Asesmen keperawatan awal dan ulang</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Nursing diagnosis menggunakan standar NANDA</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Nursing Interventions Classification (NIC)</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Nursing Outcomes Classification (NOC)</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Electronic Medication Administration Record (eMAR)</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Bundle kepatuhan (VAP, CAUTI, CLABSI)</li>
              <li><Heart size={16} style={{ display: 'inline', marginRight: '8px' }} />Asesmen risiko dekubitus dan jatuh</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keperawatan;
