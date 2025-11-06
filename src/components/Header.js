import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      
      <div className="header-actions">
        <button className="btn btn-outline btn-sm">
          <Search size={16} />
        </button>
        <button className="btn btn-outline btn-sm">
          <Bell size={16} />
        </button>
        
        <div className="header-user">
          <div className="user-avatar">
            DR
          </div>
          <div className="user-info">
            <span className="user-name">dr. Andi Wijaya, Sp.PD</span>
            <span className="user-role">Dokter Spesialis Penyakit Dalam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
