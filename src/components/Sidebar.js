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
  Building2,
  Ambulance,
  Scissors,
  CreditCard,
  Package,
  Archive,
  Clipboard,
  Shield,
  Warehouse,
  ShoppingCart,
  Calculator,
  Wallet,
  Cross,
  Baby,
  Utensils,
  Monitor,
  ClipboardList,
  Droplet,
  Sparkles,
  Heart,
  Info,
  Send,
  Smartphone,
  Anchor
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuSections = [
    {
      title: 'Pelayanan',
      items: [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/registrasi', icon: Users, label: 'Registrasi & Antrean' },
        { path: '/rawat-jalan', icon: Stethoscope, label: 'Rawat Jalan' },
        { path: '/igd', icon: Ambulance, label: 'IGD' },
        { path: '/rawat-inap', icon: Bed, label: 'Rawat Inap' },
        { path: '/bedah-sentral', icon: Scissors, label: 'Bedah Sentral' },
        { path: '/rme', icon: FileText, label: 'Rekam Medis' },
        { path: '/farmasi', icon: Pill, label: 'Farmasi' },
        { path: '/gudang-farmasi', icon: Package, label: 'Gudang Farmasi' },
        { path: '/laboratorium', icon: TestTube, label: 'Laboratorium' },
        { path: '/radiologi', icon: Activity, label: 'Radiologi' },
        { path: '/keperawatan', icon: Stethoscope, label: 'Keperawatan' },
        { path: '/aerospace', icon: Plane, label: 'Aerospace Medicine' },
        { path: '/telemedis', icon: MessageSquare, label: 'Telemedis' }
      ]
    },
    {
      title: 'Pelayanan 1',
      items: [
        { path: '/ambulans', icon: Ambulance, label: 'Ambulans' },
        { path: '/pemulasaran-jenazah', icon: Cross, label: 'Pemulasaran Jenazah' },
        { path: '/persalinan', icon: Baby, label: 'Persalinan' },
        { path: '/gizi', icon: Utensils, label: 'Gizi' },
        { path: '/sistem-informasi-eksekutif', icon: Monitor, label: 'Sistem Informasi Eksekutif' },
        { path: '/asuhan-keperawatan', icon: ClipboardList, label: 'Asuhan Keperawatan' }
      ]
    },
    {
      title: 'Pelayanan 2',
      items: [
        { path: '/sterilisasi', icon: Sparkles, label: 'Sterilisasi' },
        { path: '/perawatan-intensif', icon: Heart, label: 'Perawatan Intensif (ICU)' },
        { path: '/bank-darah', icon: Droplet, label: 'Bank Darah' },
        { path: '/rehabilitasi-medik', icon: Activity, label: 'Rehabilitasi Medik' },
        { path: '/anestesi', icon: Pill, label: 'Anestesi' }
      ]
    },
    {
      title: 'Administrasi',
      items: [
        { path: '/administrasi', icon: Clipboard, label: 'Sistem Administrasi' },
        { path: '/kasir', icon: CreditCard, label: 'Kasir' },
        { path: '/rekam-medik', icon: Archive, label: 'Rekam Medik' },
        { path: '/inventory', icon: Package, label: 'Inventory' },
        { path: '/operasional', icon: Settings, label: 'Operasional' },
        { path: '/keuangan', icon: DollarSign, label: 'Keuangan' },
        { path: '/mutu', icon: ShieldCheck, label: 'Mutu & Keselamatan' },
        { path: '/analitik', icon: BarChart3, label: 'Analitik' }
      ]
    },
    {
      title: 'Back Office',
      items: [
        { path: '/asuransi', icon: Shield, label: 'Asuransi Penjamin' },
        { path: '/gudang-umum', icon: Warehouse, label: 'Gudang Umum' },
        { path: '/pengadaan', icon: ShoppingCart, label: 'Pengadaan/Pembelian' },
        { path: '/akuntansi', icon: Calculator, label: 'Akuntansi' },
        { path: '/keuangan-manajemen', icon: Wallet, label: 'Manajemen Keuangan' }
      ]
    },
    {
      title: 'Kepegawaian',
      items: [
        { path: '/sdm', icon: UserCog, label: 'SDM & Jadwal' }
      ]
    },
    {
      title: 'Informasi',
      items: [
        { path: '/informasi', icon: Info, label: 'Informasi' },
        { path: '/sms-gateway', icon: Send, label: 'SMS Gateway & Email' },
        { path: '/mobile-patients', icon: Smartphone, label: 'Mobile Patients' },
        { path: '/mobile-doctor', icon: Stethoscope, label: 'Mobile Doctor' }
      ]
    },
    {
      title: 'TRIMATRA',
      items: [
        { path: '/tni-ad', icon: Shield, label: 'TNI AD' },
        { path: '/tni-al', icon: Anchor, label: 'TNI AL' },
        { path: '/tni-au', icon: Plane, label: 'TNI AU' }
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
