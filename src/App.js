import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
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
            <Route path="/" element={
              <>
                <Header title="Dashboard" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Dashboard' }]} />
                  <Dashboard />
                </div>
                <Footer />
              </>
            } />
            <Route path="/registrasi" element={
              <>
                <Header title="Registrasi & Antrean" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Registrasi & Antrean' }]} />
                  <Registrasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/rme" element={
              <>
                <Header title="Rekam Medis Elektronik" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Rekam Medis Elektronik' }]} />
                  <RME />
                </div>
                <Footer />
              </>
            } />
            <Route path="/farmasi" element={
              <>
                <Header title="Farmasi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Farmasi' }]} />
                  <Farmasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/laboratorium" element={
              <>
                <Header title="Laboratorium" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Laboratorium' }]} />
                  <Laboratorium />
                </div>
                <Footer />
              </>
            } />
            <Route path="/radiologi" element={
              <>
                <Header title="Radiologi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Radiologi' }]} />
                  <Radiologi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/keperawatan" element={
              <>
                <Header title="Keperawatan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Keperawatan' }]} />
                  <Keperawatan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/rawat-inap" element={
              <>
                <Header title="Rawat Inap" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Rawat Inap' }]} />
                  <RawatInap />
                </div>
                <Footer />
              </>
            } />
            <Route path="/operasional" element={
              <>
                <Header title="Operasional" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Operasional' }]} />
                  <Operasional />
                </div>
                <Footer />
              </>
            } />
            <Route path="/keuangan" element={
              <>
                <Header title="Keuangan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Keuangan' }]} />
                  <Keuangan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/sdm" element={
              <>
                <Header title="SDM & Jadwal" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Kepegawaian' }, { label: 'SDM & Jadwal' }]} />
                  <SDM />
                </div>
                <Footer />
              </>
            } />
            <Route path="/mutu" element={
              <>
                <Header title="Mutu & Keselamatan Pasien" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Mutu & Keselamatan' }]} />
                  <Mutu />
                </div>
                <Footer />
              </>
            } />
            <Route path="/telemedis" element={
              <>
                <Header title="Telemedis" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Telemedis' }]} />
                  <Telemedis />
                </div>
                <Footer />
              </>
            } />
            <Route path="/analitik" element={
              <>
                <Header title="Analitik & Pelaporan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Analitik & Pelaporan' }]} />
                  <Analitik />
                </div>
                <Footer />
              </>
            } />
            <Route path="/aerospace" element={
              <>
                <Header title="Aerospace Medicine" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Aerospace Medicine' }]} />
                  <AerospaceMedicine />
                </div>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
