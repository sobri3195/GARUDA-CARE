import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Registrasi from './pages/Registrasi';
import RawatJalan from './pages/RawatJalan';
import RME from './pages/RME';
import IGD from './pages/IGD';
import Farmasi from './pages/Farmasi';
import Laboratorium from './pages/Laboratorium';
import Radiologi from './pages/Radiologi';
import Keperawatan from './pages/Keperawatan';
import RawatInap from './pages/RawatInap';
import BedahSentral from './pages/BedahSentral';
import Kasir from './pages/Kasir';
import GudangFarmasi from './pages/GudangFarmasi';
import RekamMedik from './pages/RekamMedik';
import Inventory from './pages/Inventory';
import Administrasi from './pages/Administrasi';
import Operasional from './pages/Operasional';
import Keuangan from './pages/Keuangan';
import KeuanganManajemen from './pages/KeuanganManajemen';
import SDM from './pages/SDM';
import Mutu from './pages/Mutu';
import Telemedis from './pages/Telemedis';
import Analitik from './pages/Analitik';
import AerospaceMedicine from './pages/AerospaceMedicine';
import Asuransi from './pages/Asuransi';
import GudangUmum from './pages/GudangUmum';
import Pengadaan from './pages/Pengadaan';
import Akuntansi from './pages/Akuntansi';
import Ambulans from './pages/Ambulans';
import PemulasaranJenazah from './pages/PemulasaranJenazah';
import Persalinan from './pages/Persalinan';
import Gizi from './pages/Gizi';
import SistemInformasiEksekutif from './pages/SistemInformasiEksekutif';
import AsuhanKeperawatan from './pages/AsuhanKeperawatan';
import Sterilisasi from './pages/Sterilisasi';
import PerawatanIntensif from './pages/PerawatanIntensif';
import BankDarah from './pages/BankDarah';
import RehabilitasiMedik from './pages/RehabilitasiMedik';
import Anestesi from './pages/Anestesi';
import Informasi from './pages/Informasi';
import SMSGateway from './pages/SMSGateway';
import MobilePatients from './pages/MobilePatients';
import MobileDoctor from './pages/MobileDoctor';

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
            <Route path="/rawat-jalan" element={
              <>
                <Header title="Rawat Jalan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Rawat Jalan' }]} />
                  <RawatJalan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/igd" element={
              <>
                <Header title="IGD (Instalasi Gawat Darurat)" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'IGD' }]} />
                  <IGD />
                </div>
                <Footer />
              </>
            } />
            <Route path="/bedah-sentral" element={
              <>
                <Header title="Bedah Sentral" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Bedah Sentral' }]} />
                  <BedahSentral />
                </div>
                <Footer />
              </>
            } />
            <Route path="/kasir" element={
              <>
                <Header title="Kasir" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Kasir' }]} />
                  <Kasir />
                </div>
                <Footer />
              </>
            } />
            <Route path="/gudang-farmasi" element={
              <>
                <Header title="Gudang Farmasi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan' }, { label: 'Gudang Farmasi' }]} />
                  <GudangFarmasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/rekam-medik" element={
              <>
                <Header title="Rekam Medik" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Rekam Medik' }]} />
                  <RekamMedik />
                </div>
                <Footer />
              </>
            } />
            <Route path="/inventory" element={
              <>
                <Header title="Inventory" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Inventory' }]} />
                  <Inventory />
                </div>
                <Footer />
              </>
            } />
            <Route path="/administrasi" element={
              <>
                <Header title="Sistem Administrasi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Administrasi' }, { label: 'Sistem Administrasi' }]} />
                  <Administrasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/asuransi" element={
              <>
                <Header title="Asuransi Penjamin" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Back Office' }, { label: 'Asuransi Penjamin' }]} />
                  <Asuransi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/gudang-umum" element={
              <>
                <Header title="Gudang Umum" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Back Office' }, { label: 'Gudang Umum' }]} />
                  <GudangUmum />
                </div>
                <Footer />
              </>
            } />
            <Route path="/pengadaan" element={
              <>
                <Header title="Pengadaan/Pembelian" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Back Office' }, { label: 'Pengadaan/Pembelian' }]} />
                  <Pengadaan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/akuntansi" element={
              <>
                <Header title="Akuntansi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Back Office' }, { label: 'Akuntansi' }]} />
                  <Akuntansi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/keuangan-manajemen" element={
              <>
                <Header title="Manajemen Keuangan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Back Office' }, { label: 'Manajemen Keuangan' }]} />
                  <KeuanganManajemen />
                </div>
                <Footer />
              </>
            } />
            <Route path="/ambulans" element={
              <>
                <Header title="Ambulans" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Ambulans' }]} />
                  <Ambulans />
                </div>
                <Footer />
              </>
            } />
            <Route path="/pemulasaran-jenazah" element={
              <>
                <Header title="Pemulasaran Jenazah" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Pemulasaran Jenazah' }]} />
                  <PemulasaranJenazah />
                </div>
                <Footer />
              </>
            } />
            <Route path="/persalinan" element={
              <>
                <Header title="Persalinan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Persalinan' }]} />
                  <Persalinan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/gizi" element={
              <>
                <Header title="Gizi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Gizi' }]} />
                  <Gizi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/sistem-informasi-eksekutif" element={
              <>
                <Header title="Sistem Informasi Eksekutif" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Sistem Informasi Eksekutif' }]} />
                  <SistemInformasiEksekutif />
                </div>
                <Footer />
              </>
            } />
            <Route path="/asuhan-keperawatan" element={
              <>
                <Header title="Asuhan Keperawatan" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 1' }, { label: 'Asuhan Keperawatan' }]} />
                  <AsuhanKeperawatan />
                </div>
                <Footer />
              </>
            } />
            <Route path="/sterilisasi" element={
              <>
                <Header title="Sterilisasi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 2' }, { label: 'Sterilisasi' }]} />
                  <Sterilisasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/perawatan-intensif" element={
              <>
                <Header title="Perawatan Intensif (ICU)" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 2' }, { label: 'Perawatan Intensif' }]} />
                  <PerawatanIntensif />
                </div>
                <Footer />
              </>
            } />
            <Route path="/bank-darah" element={
              <>
                <Header title="Bank Darah" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 2' }, { label: 'Bank Darah' }]} />
                  <BankDarah />
                </div>
                <Footer />
              </>
            } />
            <Route path="/rehabilitasi-medik" element={
              <>
                <Header title="Rehabilitasi Medik" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 2' }, { label: 'Rehabilitasi Medik' }]} />
                  <RehabilitasiMedik />
                </div>
                <Footer />
              </>
            } />
            <Route path="/anestesi" element={
              <>
                <Header title="Anestesi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Pelayanan 2' }, { label: 'Anestesi' }]} />
                  <Anestesi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/informasi" element={
              <>
                <Header title="Informasi" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Informasi' }, { label: 'Informasi' }]} />
                  <Informasi />
                </div>
                <Footer />
              </>
            } />
            <Route path="/sms-gateway" element={
              <>
                <Header title="SMS Gateway & Email" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Informasi' }, { label: 'SMS Gateway & Email' }]} />
                  <SMSGateway />
                </div>
                <Footer />
              </>
            } />
            <Route path="/mobile-patients" element={
              <>
                <Header title="Mobile Patients" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Informasi' }, { label: 'Mobile Patients' }]} />
                  <MobilePatients />
                </div>
                <Footer />
              </>
            } />
            <Route path="/mobile-doctor" element={
              <>
                <Header title="Mobile Doctor" />
                <div className="content">
                  <Breadcrumb items={[{ label: 'Informasi' }, { label: 'Mobile Doctor' }]} />
                  <MobileDoctor />
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
