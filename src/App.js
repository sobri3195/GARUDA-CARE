import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Registrasi from './pages/Registrasi';
import RME from './pages/RME';
import Farmasi from './pages/Farmasi';
import Laboratorium from './pages/Laboratorium';
import Radiologi from './pages/Radiologi';
import Keperawatan from './pages/Keperawatan';
import RawatInap from './pages/RawatInap';
import Operasional from './pages/Operasional';
import Keuangan from './pages/Keuangan';
import SDM from './pages/SDM';
import Mutu from './pages/Mutu';
import Telemedis from './pages/Telemedis';
import Analitik from './pages/Analitik';
import AerospaceMedicine from './pages/AerospaceMedicine';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<><Header title="Dashboard" /><div className="content"><Dashboard /></div></>} />
            <Route path="/registrasi" element={<><Header title="Registrasi & Antrean" /><div className="content"><Registrasi /></div></>} />
            <Route path="/rme" element={<><Header title="Rekam Medis Elektronik" /><div className="content"><RME /></div></>} />
            <Route path="/farmasi" element={<><Header title="Farmasi" /><div className="content"><Farmasi /></div></>} />
            <Route path="/laboratorium" element={<><Header title="Laboratorium" /><div className="content"><Laboratorium /></div></>} />
            <Route path="/radiologi" element={<><Header title="Radiologi" /><div className="content"><Radiologi /></div></>} />
            <Route path="/keperawatan" element={<><Header title="Keperawatan" /><div className="content"><Keperawatan /></div></>} />
            <Route path="/rawat-inap" element={<><Header title="Rawat Inap" /><div className="content"><RawatInap /></div></>} />
            <Route path="/operasional" element={<><Header title="Operasional" /><div className="content"><Operasional /></div></>} />
            <Route path="/keuangan" element={<><Header title="Keuangan" /><div className="content"><Keuangan /></div></>} />
            <Route path="/sdm" element={<><Header title="SDM & Jadwal" /><div className="content"><SDM /></div></>} />
            <Route path="/mutu" element={<><Header title="Mutu & Keselamatan Pasien" /><div className="content"><Mutu /></div></>} />
            <Route path="/telemedis" element={<><Header title="Telemedis" /><div className="content"><Telemedis /></div></>} />
            <Route path="/analitik" element={<><Header title="Analitik & Pelaporan" /><div className="content"><Analitik /></div></>} />
            <Route path="/aerospace" element={<><Header title="Aerospace Medicine" /><div className="content"><AerospaceMedicine /></div></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
