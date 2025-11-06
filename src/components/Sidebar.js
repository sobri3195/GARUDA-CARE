import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  Activity,
  Pill,
  TestTube,
  Stethoscope,
  Bed,
  DollarSign,
  UserCog,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Settings,
  Plane
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/registrasi', icon: Users, label: 'Registrasi & Antrean' },
    { path: '/rme', icon: FileText, label: 'Rekam Medis' },
    { path: '/farmasi', icon: Pill, label: 'Farmasi' },
    { path: '/laboratorium', icon: TestTube, label: 'Laboratorium' },
    { path: '/radiologi', icon: Activity, label: 'Radiologi' },
    { path: '/keperawatan', icon: Stethoscope, label: 'Keperawatan' },
    { path: '/rawat-inap', icon: Bed, label: 'Rawat Inap' },
    { path: '/operasional', icon: Settings, label: 'Operasional' },
    { path: '/keuangan', icon: DollarSign, label: 'Keuangan' },
    { path: '/sdm', icon: UserCog, label: 'SDM & Jadwal' },
    { path: '/mutu', icon: ShieldCheck, label: 'Mutu & Keselamatan' },
    { path: '/telemedis', icon: MessageSquare, label: 'Telemedis' },
    { path: '/analitik', icon: BarChart3, label: 'Analitik' },
    { path: '/aerospace', icon: Plane, label: 'Aerospace Medicine' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>SIMRS TNI AU</h1>
        <p>Sistem Informasi Rumah Sakit</p>
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <li key={item.path} className="sidebar-menu-item">
              <Link 
                to={item.path} 
                className={`sidebar-menu-link ${isActive ? 'active' : ''}`}
              >
                <Icon className="sidebar-menu-icon" size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
