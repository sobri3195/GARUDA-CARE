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
  Plane,
  Building2
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuSections = [
    {
      title: 'Pelayanan',
      items: [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/registrasi', icon: Users, label: 'Registrasi & Antrean' },
        { path: '/rme', icon: FileText, label: 'Rekam Medis' },
        { path: '/farmasi', icon: Pill, label: 'Farmasi' },
        { path: '/laboratorium', icon: TestTube, label: 'Laboratorium' },
        { path: '/radiologi', icon: Activity, label: 'Radiologi' },
        { path: '/keperawatan', icon: Stethoscope, label: 'Keperawatan' },
        { path: '/rawat-inap', icon: Bed, label: 'Rawat Inap' },
        { path: '/aerospace', icon: Plane, label: 'Aerospace Medicine' },
        { path: '/telemedis', icon: MessageSquare, label: 'Telemedis' }
      ]
    },
    {
      title: 'Administrasi',
      items: [
        { path: '/operasional', icon: Settings, label: 'Operasional' },
        { path: '/keuangan', icon: DollarSign, label: 'Keuangan' },
        { path: '/mutu', icon: ShieldCheck, label: 'Mutu & Keselamatan' },
        { path: '/analitik', icon: BarChart3, label: 'Analitik' }
      ]
    },
    {
      title: 'Kepegawaian',
      items: [
        { path: '/sdm', icon: UserCog, label: 'SDM & Jadwal' }
      ]
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-container">
          <Building2 size={40} className="logo-icon" />
        </div>
        <h1>RS TRIMATRA</h1>
        <p>Sistem Informasi Rumah Sakit</p>
      </div>
      
      <div className="sidebar-menu-container">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-menu-section">
            <div className="sidebar-menu-section-title">{section.title}</div>
            <ul className="sidebar-menu">
              {section.items.map((item) => {
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
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
