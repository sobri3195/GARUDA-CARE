import React from 'react';
import { UserCog } from 'lucide-react';

const SDM = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">SDM, Jadwal & Pendidikan</h2>
      </div>
      <div className="card-body">
        <div className="alert alert-info">
          <UserCog size={20} style={{ display: 'inline', marginRight: '10px' }} />
          Modul SDM meliputi: Roster shift, Kredensial & privilege, Absensi, Diklat & Teaching Hospital
        </div>
        <p>Fitur dalam pengembangan untuk manajemen SDM kesehatan termasuk jadwal dinas dan kredensial tenaga medis.</p>
      </div>
    </div>
  );
};

export default SDM;
