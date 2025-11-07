import React, { useState } from 'react';
import { UserPlus, Search, QrCode, ExternalLink, Clock, Users, CheckCircle, Camera, Upload, AlertCircle, X, Bell, XCircle, TrendingUp, Activity } from 'lucide-react';
import TableWithExport from '../components/TableWithExport';

const Registrasi = () => {
  const [activeTab, setActiveTab] = useState('registrasi');
  const [activeQueueTab, setActiveQueueTab] = useState('pendaftaran');
  const [jenisRegistrasi, setJenisRegistrasi] = useState('rawatjalan');
  const [isPasienBaru, setIsPasienBaru] = useState(true);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showPatientSearch, setShowPatientSearch] = useState(false);
  const [showCameraCapture, setShowCameraCapture] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    nik: '',
    nrp: '',
    nama: '',
    pangkat: '',
    satuan: '',
    jenisKelamin: '',
    tanggalLahir: '',
    alamat: '',
    telepon: '',
    penjamin: '',
    poliklinik: '',
    dokter: '',
    kontakDarurat: '',
    namaKontakDarurat: '',
    email: '',
    golonganDarah: '',
    alergi: '',
    riwayatPenyakit: ''
  });

  // Queue Management State
  const [queuePendaftaran, setQueuePendaftaran] = useState([
    { id: 1, noAntrean: 'A-012', nama: 'Mayor Budi Santoso', jenis: 'Rawat Jalan', loket: 'Loket 1', waktu: '08:30', estimasi: '5 menit', status: 'Menunggu' },
    { id: 2, noAntrean: 'A-013', nama: 'Kapten Ahmad Fauzi', jenis: 'Rawat Jalan', loket: 'Loket 1', waktu: '08:45', estimasi: '-', status: 'Dilayani' },
    { id: 3, noAntrean: 'A-014', nama: 'Kolonel Siti Nurhaliza', jenis: 'BPJS', loket: 'Loket 2', waktu: '09:00', estimasi: '15 menit', status: 'Menunggu' },
    { id: 4, noAntrean: 'B-008', nama: 'Serda Hendra Wijaya', jenis: 'Rawat Inap', loket: 'Loket 3', waktu: '09:15', estimasi: '25 menit', status: 'Menunggu' },
    { id: 5, noAntrean: 'A-015', nama: 'Lettu Andi Saputra', jenis: 'Rawat Jalan', loket: 'Loket 1', waktu: '09:30', estimasi: '35 menit', status: 'Menunggu' },
  ]);

  const [queuePenunjang, setQueuePenunjang] = useState([
    { id: 1, noAntrean: 'LAB-045', nama: 'Kolonel Bambang Wijaya', jenis: 'Laboratorium', ruang: 'Lab 1', waktu: '08:15', estimasi: '10 menit', status: 'Menunggu' },
    { id: 2, noAntrean: 'RAD-023', nama: 'Mayor Indah Permata', jenis: 'Radiologi', ruang: 'Radiologi', waktu: '08:30', estimasi: '-', status: 'Dilayani' },
    { id: 3, noAntrean: 'LAB-046', nama: 'Kapten Yusuf Hidayat', jenis: 'Laboratorium', ruang: 'Lab 2', waktu: '08:45', estimasi: '20 menit', status: 'Menunggu' },
    { id: 4, noAntrean: 'RAD-024', nama: 'Serka Dewi Sartika', jenis: 'Radiologi', ruang: 'Radiologi', waktu: '09:00', estimasi: '30 menit', status: 'Menunggu' },
  ]);

  const [queueKasir, setQueueKasir] = useState([
    { id: 1, noAntrean: 'K-087', nama: 'Letkol Hadi Purnomo', jenis: 'Pembayaran Rawat Jalan', loket: 'Kasir 1', waktu: '08:20', estimasi: '5 menit', status: 'Menunggu' },
    { id: 2, noAntrean: 'K-088', nama: 'Mayor Siti Rahma', jenis: 'Pembayaran Tindakan', loket: 'Kasir 2', waktu: '08:35', estimasi: '-', status: 'Dilayani' },
    { id: 3, noAntrean: 'K-089', nama: 'Kapten Budi Raharjo', jenis: 'Pembayaran Lab', loket: 'Kasir 1', waktu: '08:50', estimasi: '10 menit', status: 'Menunggu' },
    { id: 4, noAntrean: 'K-090', nama: 'Serda Ahmad Faisal', jenis: 'DP Rawat Inap', loket: 'Kasir 3', waktu: '09:05', estimasi: '15 menit', status: 'Menunggu' },
  ]);

  const [queueApotek, setQueueApotek] = useState([
    { id: 1, noAntrean: 'APT-125', nama: 'Kolonel Dedi Kurniawan', jenis: 'Resep Rawat Jalan', loket: 'Apotek 1', waktu: '08:10', estimasi: '10 menit', status: 'Menunggu' },
    { id: 2, noAntrean: 'APT-126', nama: 'Mayor Lisa Andriani', jenis: 'Resep Rawat Inap', loket: 'Apotek 2', waktu: '08:25', estimasi: '-', status: 'Dilayani' },
    { id: 3, noAntrean: 'APT-127', nama: 'Kapten Rudi Hartono', jenis: 'Resep Rawat Jalan', loket: 'Apotek 1', waktu: '08:40', estimasi: '20 menit', status: 'Menunggu' },
    { id: 4, noAntrean: 'APT-128', nama: 'Letda Putri Wulandari', jenis: 'Resep Rawat Jalan', loket: 'Apotek 3', waktu: '08:55', estimasi: '30 menit', status: 'Menunggu' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nama) errors.nama = 'Nama lengkap wajib diisi';
    if (!formData.jenisKelamin) errors.jenisKelamin = 'Jenis kelamin wajib diisi';
    if (!formData.tanggalLahir) errors.tanggalLahir = 'Tanggal lahir wajib diisi';
    if (!formData.telepon) errors.telepon = 'No. telepon wajib diisi';
    if (formData.telepon && !/^[0-9]{10,13}$/.test(formData.telepon)) errors.telepon = 'No. telepon tidak valid';
    if (!formData.penjamin) errors.penjamin = 'Penjamin wajib diisi';
    if (!formData.poliklinik) errors.poliklinik = 'Poliklinik tujuan wajib diisi';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Email tidak valid';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert('Mohon lengkapi semua field yang wajib diisi dengan benar!');
      return;
    }
    
    const noRM = 'RM-' + Date.now().toString().slice(-6);
    const noAntrean = jenisRegistrasi === 'rawatjalan' ? 'A-' + (Math.floor(Math.random() * 100) + 1).toString().padStart(3, '0') : 
                      jenisRegistrasi === 'igd' ? 'IGD-' + (Math.floor(Math.random() * 50) + 1).toString().padStart(3, '0') : 
                      'B-' + (Math.floor(Math.random() * 50) + 1).toString().padStart(3, '0');
    
    alert(`✅ Pendaftaran Berhasil!\n\nNo. RM: ${noRM}\nNo. Antrean: ${noAntrean}\nNama: ${formData.nama}\nPoliklinik: ${formData.poliklinik}\n\nSilakan menunggu panggilan antrean`);
    
    setFormData({
      nik: '',
      nrp: '',
      nama: '',
      pangkat: '',
      satuan: '',
      jenisKelamin: '',
      tanggalLahir: '',
      alamat: '',
      telepon: '',
      penjamin: '',
      poliklinik: '',
      dokter: '',
      kontakDarurat: '',
      namaKontakDarurat: '',
      email: '',
      golonganDarah: '',
      alergi: '',
      riwayatPenyakit: ''
    });
    setFormErrors({});
  };

  const handleReset = () => {
    setFormData({
      nik: '',
      nrp: '',
      nama: '',
      pangkat: '',
      satuan: '',
      jenisKelamin: '',
      tanggalLahir: '',
      alamat: '',
      telepon: '',
      penjamin: '',
      poliklinik: '',
      dokter: '',
      kontakDarurat: '',
      namaKontakDarurat: '',
      email: '',
      golonganDarah: '',
      alergi: '',
      riwayatPenyakit: ''
    });
    setFormErrors({});
  };

  const handleSearchPatient = (searchTerm) => {
    const mockResults = [
      { nik: '3174051234567890', nrp: '531234', nama: 'Letkol Budi Santoso', pangkat: 'Letkol', satuan: 'Lanud Halim', telepon: '081234567890' },
      { nik: '3174051234567891', nrp: '621245', nama: 'Mayor Siti Nurhaliza', pangkat: 'Mayor', satuan: 'Mabesau', telepon: '081234567891' },
      { nik: '3174051234567892', nrp: '721356', nama: 'Kapten Ahmad Fauzi', pangkat: 'Kapten', satuan: 'Lanud Atang Sendjaja', telepon: '081234567892' }
    ];
    const results = mockResults.filter(p => 
      p.nik.includes(searchTerm) || 
      p.nrp.includes(searchTerm) || 
      p.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const selectPatient = (patient) => {
    setFormData({
      ...formData,
      nik: patient.nik,
      nrp: patient.nrp,
      nama: patient.nama,
      pangkat: patient.pangkat,
      satuan: patient.satuan,
      telepon: patient.telepon
    });
    setShowPatientSearch(false);
    setSearchResults([]);
    setIsPasienBaru(false);
  };

  // Queue Management Functions
  const handleCallQueue = (queueType, id) => {
    const setQueue = queueType === 'pendaftaran' ? setQueuePendaftaran :
                     queueType === 'penunjang' ? setQueuePenunjang :
                     queueType === 'kasir' ? setQueueKasir : setQueueApotek;

    const queue = queueType === 'pendaftaran' ? queuePendaftaran :
                  queueType === 'penunjang' ? queuePenunjang :
                  queueType === 'kasir' ? queueKasir : queueApotek;

    setQueue(queue.map(item => 
      item.id === id ? { ...item, status: 'Dilayani', estimasi: '-' } : item
    ));
  };

  const handleFinishQueue = (queueType, id) => {
    const setQueue = queueType === 'pendaftaran' ? setQueuePendaftaran :
                     queueType === 'penunjang' ? setQueuePenunjang :
                     queueType === 'kasir' ? setQueueKasir : setQueueApotek;

    const queue = queueType === 'pendaftaran' ? queuePendaftaran :
                  queueType === 'penunjang' ? queuePenunjang :
                  queueType === 'kasir' ? queueKasir : queueApotek;

    setQueue(queue.map(item => 
      item.id === id ? { ...item, status: 'Selesai' } : item
    ));
  };

  const getQueueStats = (queue) => {
    const total = queue.length;
    const dilayani = queue.filter(q => q.status === 'Dilayani').length;
    const selesai = queue.filter(q => q.status === 'Selesai').length;
    const menunggu = queue.filter(q => q.status === 'Menunggu').length;
    return { total, dilayani, selesai, menunggu };
  };

  const getCurrentQueue = () => {
    switch(activeQueueTab) {
      case 'pendaftaran': return queuePendaftaran;
      case 'penunjang': return queuePenunjang;
      case 'kasir': return queueKasir;
      case 'apotek': return queueApotek;
      default: return [];
    }
  };

  const currentQueue = getCurrentQueue();
  const queueStats = getQueueStats(currentQueue);

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'registrasi' ? 'active' : ''}`}
          onClick={() => setActiveTab('registrasi')}
        >
          Registrasi Pasien
        </button>
        <button 
          className={`tab ${activeTab === 'antrean' ? 'active' : ''}`}
          onClick={() => setActiveTab('antrean')}
        >
          Manajemen Antrean
        </button>
        <button 
          className={`tab ${activeTab === 'jadwal' ? 'active' : ''}`}
          onClick={() => setActiveTab('jadwal')}
        >
          Jadwal Dokter
        </button>
        <button 
          className={`tab ${activeTab === 'rujukan' ? 'active' : ''}`}
          onClick={() => setActiveTab('rujukan')}
        >
          Rujukan
        </button>
      </div>

      {activeTab === 'registrasi' && (
        <div>
          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-header">
              <h2 className="card-title">Jenis Pendaftaran</h2>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                  className={`btn ${jenisRegistrasi === 'rawatjalan' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('rawatjalan')}
                >
                  Rawat Jalan
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'rawatinap' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('rawatinap')}
                >
                  Rawat Inap
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'igd' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('igd')}
                >
                  Gawat Darurat (IGD)
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'penunjang' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('penunjang')}
                >
                  Penunjang (Lab/Radiologi)
                </button>
                <button 
                  className={`btn ${jenisRegistrasi === 'bpjs' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setJenisRegistrasi('bpjs')}
                >
                  BPJS - SEP Otomatis
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                {jenisRegistrasi === 'rawatjalan' && 'Pendaftaran Rawat Jalan'}
                {jenisRegistrasi === 'rawatinap' && 'Pendaftaran Rawat Inap'}
                {jenisRegistrasi === 'igd' && 'Pendaftaran Gawat Darurat'}
                {jenisRegistrasi === 'penunjang' && 'Pendaftaran Penunjang'}
                {jenisRegistrasi === 'bpjs' && 'Pendaftaran BPJS dengan SEP Otomatis'}
              </h2>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  className={`btn ${isPasienBaru ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => {
                    setIsPasienBaru(true);
                    handleReset();
                  }}
                >
                  <UserPlus size={16} />
                  Pasien Baru
                </button>
                <button 
                  className={`btn ${!isPasienBaru ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => {
                    setIsPasienBaru(false);
                    setShowPatientSearch(true);
                  }}
                >
                  <Search size={16} />
                  Cari Pasien Lama (NIK/NRP)
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowQRScanner(true)}
                >
                  <QrCode size={16} />
                  Scan QR Code
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowCameraCapture(true)}
                >
                  <Camera size={16} />
                  Foto Pasien
                </button>
                <button className="btn btn-outline">
                  <Upload size={16} />
                  Upload Dokumen
                </button>
              </div>

              {isPasienBaru && (
                <div className="alert alert-info" style={{ marginBottom: '20px' }}>
                  <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                  <strong>Pendaftaran Pasien Baru:</strong> Pastikan semua data terisi dengan benar dan lengkap untuk pembuatan rekam medis baru.
                </div>
              )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2">
                <div className="form-group">
                  <label className="form-label">NIK</label>
                  <input 
                    type="text" 
                    className={`form-input ${formErrors.nik ? 'error' : ''}`}
                    name="nik"
                    value={formData.nik}
                    onChange={handleInputChange}
                    placeholder="Masukkan NIK (16 digit)"
                    maxLength="16"
                  />
                  {formErrors.nik && <span className="error-text">{formErrors.nik}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">NRP (Jika Prajurit TNI)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="nrp"
                    value={formData.nrp}
                    onChange={handleInputChange}
                    placeholder="Masukkan NRP"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    className={`form-input ${formErrors.nama ? 'error' : ''}`}
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                  {formErrors.nama && <span className="error-text">{formErrors.nama}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Pangkat</label>
                  <select 
                    className="form-select" 
                    name="pangkat"
                    value={formData.pangkat}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Pangkat</option>
                    <option value="Marsekal">Marsekal</option>
                    <option value="Marsda">Marsda</option>
                    <option value="Marsma">Marsma</option>
                    <option value="Kolonel">Kolonel</option>
                    <option value="Letkol">Letkol</option>
                    <option value="Mayor">Mayor</option>
                    <option value="Kapten">Kapten</option>
                    <option value="Lettu">Lettu</option>
                    <option value="Letda">Letda</option>
                    <option value="Peltu">Peltu</option>
                    <option value="Pelda">Pelda</option>
                    <option value="Serka">Serka</option>
                    <option value="Serda">Serda</option>
                    <option value="Sertu">Sertu</option>
                    <option value="Kopka">Kopka</option>
                    <option value="Kopda">Kopda</option>
                    <option value="Koptu">Koptu</option>
                    <option value="PNS">PNS</option>
                    <option value="Keluarga">Keluarga</option>
                    <option value="Umum">Umum</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Satuan/Unit</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="satuan"
                    value={formData.satuan}
                    onChange={handleInputChange}
                    placeholder="Contoh: Lanud Halim Perdanakusuma"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Jenis Kelamin *</label>
                  <select 
                    className={`form-select ${formErrors.jenisKelamin ? 'error' : ''}`}
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                  {formErrors.jenisKelamin && <span className="error-text">{formErrors.jenisKelamin}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Tanggal Lahir *</label>
                  <input 
                    type="date" 
                    className={`form-input ${formErrors.tanggalLahir ? 'error' : ''}`}
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.tanggalLahir && <span className="error-text">{formErrors.tanggalLahir}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">No. Telepon *</label>
                  <input 
                    type="tel" 
                    className={`form-input ${formErrors.telepon ? 'error' : ''}`}
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                  {formErrors.telepon && <span className="error-text">{formErrors.telepon}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                  />
                  {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Golongan Darah</label>
                  <select 
                    className="form-select" 
                    name="golonganDarah"
                    value={formData.golonganDarah}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Golongan Darah</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Nama Kontak Darurat</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="namaKontakDarurat"
                    value={formData.namaKontakDarurat}
                    onChange={handleInputChange}
                    placeholder="Nama keluarga yang dapat dihubungi"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">No. Telepon Kontak Darurat</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    name="kontakDarurat"
                    value={formData.kontakDarurat}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Penjamin *</label>
                  <select 
                    className={`form-select ${formErrors.penjamin ? 'error' : ''}`}
                    name="penjamin"
                    value={formData.penjamin}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Penjamin</option>
                    <option value="TNI">TNI</option>
                    <option value="BPJS">BPJS Kesehatan</option>
                    <option value="Askes">Askes</option>
                    <option value="Asuransi">Asuransi Swasta</option>
                    <option value="Umum">Umum/Pribadi</option>
                  </select>
                  {formErrors.penjamin && <span className="error-text">{formErrors.penjamin}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Poliklinik Tujuan *</label>
                  <select 
                    className={`form-select ${formErrors.poliklinik ? 'error' : ''}`}
                    name="poliklinik"
                    value={formData.poliklinik}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Poliklinik</option>
                    <option value="umum">Poli Umum</option>
                    <option value="gigi">Poli Gigi</option>
                    <option value="mata">Poli Mata</option>
                    <option value="tht">Poli THT</option>
                    <option value="jantung">Poli Jantung</option>
                    <option value="paru">Poli Paru</option>
                    <option value="bedah">Poli Bedah</option>
                    <option value="obgyn">Poli Kandungan</option>
                    <option value="anak">Poli Anak</option>
                    <option value="aerospace">Aerospace Medicine</option>
                  </select>
                  {formErrors.poliklinik && <span className="error-text">{formErrors.poliklinik}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Dokter</label>
                  <select 
                    className="form-select" 
                    name="dokter"
                    value={formData.dokter}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Dokter (Opsional)</option>
                    <option value="dr1">dr. Andi Wijaya, Sp.PD</option>
                    <option value="dr2">dr. Siti Nurhaliza, Sp.JP</option>
                    <option value="dr3">dr. Budi Santoso, Sp.B</option>
                    <option value="dr4">dr. Dewi Lestari, Sp.A</option>
                    <option value="dr5">dr. Ahmad Fauzi, Sp.OG</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Alergi Obat/Makanan</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="alergi"
                  value={formData.alergi}
                  onChange={handleInputChange}
                  placeholder="Contoh: Penisilin, seafood, kacang, dll"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Riwayat Penyakit</label>
                <textarea 
                  className="form-textarea" 
                  name="riwayatPenyakit"
                  value={formData.riwayatPenyakit}
                  onChange={handleInputChange}
                  placeholder="Riwayat penyakit yang pernah diderita"
                  rows="2"
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Alamat Lengkap</label>
                <textarea 
                  className="form-textarea" 
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  placeholder="Masukkan alamat lengkap"
                  rows="2"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" className="btn btn-primary">
                  <UserPlus size={16} />
                  Daftar Pasien
                </button>
                <button type="button" className="btn btn-outline" onClick={handleReset}>
                  Reset
                </button>
                <button type="button" className="btn btn-secondary">
                  Cetak Kartu Berobat
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'antrean' && (
        <div>
          <div className="tabs" style={{ marginBottom: '20px' }}>
            <button 
              className={`tab ${activeQueueTab === 'pendaftaran' ? 'active' : ''}`}
              onClick={() => setActiveQueueTab('pendaftaran')}
            >
              Antrean Pendaftaran
            </button>
            <button 
              className={`tab ${activeQueueTab === 'penunjang' ? 'active' : ''}`}
              onClick={() => setActiveQueueTab('penunjang')}
            >
              Antrean Penunjang
            </button>
            <button 
              className={`tab ${activeQueueTab === 'kasir' ? 'active' : ''}`}
              onClick={() => setActiveQueueTab('kasir')}
            >
              Antrean Kasir
            </button>
            <button 
              className={`tab ${activeQueueTab === 'apotek' ? 'active' : ''}`}
              onClick={() => setActiveQueueTab('apotek')}
            >
              Antrean Apotek
            </button>
            <button 
              className={`tab ${activeQueueTab === 'kuota' ? 'active' : ''}`}
              onClick={() => setActiveQueueTab('kuota')}
            >
              Kuota Dokter
            </button>
          </div>

          {activeQueueTab !== 'kuota' && (
            <>
              <div className="dashboard-grid">
                <div className="stat-card">
                  <div className="stat-icon info">
                    <Users size={30} />
                  </div>
                  <div className="stat-content">
                    <h3>Total Antrean Hari Ini</h3>
                    <p>{queueStats.total}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <Clock size={30} />
                  </div>
                  <div className="stat-content">
                    <h3>Sedang Dilayani</h3>
                    <p>{queueStats.dilayani}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success">
                    <CheckCircle size={30} />
                  </div>
                  <div className="stat-content">
                    <h3>Selesai</h3>
                    <p>{queueStats.selesai}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon danger">
                    <Bell size={30} />
                  </div>
                  <div className="stat-content">
                    <h3>Menunggu</h3>
                    <p>{queueStats.menunggu}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">
                    Status Antrean {activeQueueTab === 'pendaftaran' ? 'Pendaftaran' : 
                                   activeQueueTab === 'penunjang' ? 'Penunjang (Lab/Radiologi)' :
                                   activeQueueTab === 'kasir' ? 'Kasir' : 'Apotek'} Real-time
                  </h2>
                </div>
                <div className="card-body">
                  <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                    <button className="btn btn-outline btn-sm">
                      <Activity size={16} />
                      Refresh
                    </button>
                    <button className="btn btn-outline btn-sm">Cetak Semua</button>
                  </div>
                  <TableWithExport title={`Antrean ${activeQueueTab}`} tableId={`antrean-${activeQueueTab}`}>
                  <table className="table" id={`antrean-${activeQueueTab}`}>
                    <thead>
                      <tr>
                        <th>No. Antrean</th>
                        <th>Nama Pasien</th>
                        <th>Jenis</th>
                        <th>{activeQueueTab === 'pendaftaran' || activeQueueTab === 'kasir' || activeQueueTab === 'apotek' ? 'Loket' : 'Ruang'}</th>
                        <th>Waktu Daftar</th>
                        <th>Estimasi</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentQueue.map((item) => (
                        <tr 
                          key={item.id} 
                          style={{ 
                            background: item.status === 'Dilayani' ? '#e8f4f8' : 
                                       item.status === 'Selesai' ? '#e8f8e8' : 'transparent' 
                          }}
                        >
                          <td><strong style={{ fontSize: '1.2em' }}>{item.noAntrean}</strong></td>
                          <td>{item.nama}</td>
                          <td>{item.jenis}</td>
                          <td>{item.loket || item.ruang}</td>
                          <td>{item.waktu}</td>
                          <td>{item.estimasi}</td>
                          <td>
                            <span className={`badge ${
                              item.status === 'Menunggu' ? 'badge-warning' :
                              item.status === 'Dilayani' ? 'badge-info' :
                              'badge-success'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td>
                            {item.status === 'Menunggu' && (
                              <button 
                                className="btn btn-primary btn-sm"
                                onClick={() => handleCallQueue(activeQueueTab, item.id)}
                              >
                                <Bell size={14} />
                                Panggil
                              </button>
                            )}
                            {item.status === 'Dilayani' && (
                              <button 
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleFinishQueue(activeQueueTab, item.id)}
                              >
                                <CheckCircle size={14} />
                                Selesai
                              </button>
                            )}
                            {item.status === 'Selesai' && (
                              <span style={{ color: '#10b981', fontSize: '12px' }}>✓ Selesai</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </TableWithExport>
                </div>
              </div>
            </>
          )}

          {activeQueueTab === 'kuota' && (
            <div>
              <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card-header">
                  <h2 className="card-title">Kuota Dokter Hari Ini</h2>
                </div>
                <div className="card-body">
                  <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="stat-card">
                      <div className="stat-icon info">
                        <Activity size={24} />
                      </div>
                      <div className="stat-content">
                        <h3>Total Dokter Praktik</h3>
                        <p>24</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon success">
                        <CheckCircle size={24} />
                      </div>
                      <div className="stat-content">
                        <h3>Dokter Aktif</h3>
                        <p>18</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon warning">
                        <TrendingUp size={24} />
                      </div>
                      <div className="stat-content">
                        <h3>Total Kuota</h3>
                        <p>320</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon danger">
                        <XCircle size={24} />
                      </div>
                      <div className="stat-content">
                        <h3>Sisa Kuota</h3>
                        <p>67</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Detail Kuota Dokter per Poliklinik</h2>
                </div>
                <div className="card-body">
                  <TableWithExport title="Kuota Dokter" tableId="kuota-dokter">
                  <table className="table" id="kuota-dokter">
                    <thead>
                      <tr>
                        <th>Nama Dokter</th>
                        <th>Poliklinik</th>
                        <th>Jam Praktik</th>
                        <th>Total Kuota</th>
                        <th>Terdaftar</th>
                        <th>Sisa Kuota</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>dr. Andi Wijaya, Sp.PD</td>
                        <td>Poli Umum</td>
                        <td>08:00 - 12:00</td>
                        <td>20</td>
                        <td>18</td>
                        <td>2</td>
                        <td><span className="badge badge-warning">Hampir Penuh</span></td>
                      </tr>
                      <tr>
                        <td>dr. Siti Nurhaliza, Sp.JP</td>
                        <td>Poli Jantung</td>
                        <td>08:00 - 14:00</td>
                        <td>15</td>
                        <td>12</td>
                        <td>3</td>
                        <td><span className="badge badge-info">Tersedia</span></td>
                      </tr>
                      <tr>
                        <td>dr. Budi Santoso, Sp.B</td>
                        <td>Poli Bedah</td>
                        <td>14:00 - 17:00</td>
                        <td>10</td>
                        <td>10</td>
                        <td>0</td>
                        <td><span className="badge badge-danger">Penuh</span></td>
                      </tr>
                      <tr>
                        <td>dr. Dewi Lestari, Sp.A</td>
                        <td>Poli Anak</td>
                        <td>08:00 - 14:00</td>
                        <td>25</td>
                        <td>15</td>
                        <td>10</td>
                        <td><span className="badge badge-success">Tersedia</span></td>
                      </tr>
                      <tr>
                        <td>dr. Ahmad Fauzi, Sp.OG</td>
                        <td>Poli Kandungan</td>
                        <td>08:00 - 12:00</td>
                        <td>12</td>
                        <td>8</td>
                        <td>4</td>
                        <td><span className="badge badge-success">Tersedia</span></td>
                      </tr>
                      <tr>
                        <td>dr. Hendra Gunawan, Sp.M</td>
                        <td>Poli Mata</td>
                        <td>08:00 - 12:00</td>
                        <td>15</td>
                        <td>14</td>
                        <td>1</td>
                        <td><span className="badge badge-warning">Hampir Penuh</span></td>
                      </tr>
                      <tr>
                        <td>dr. Lisa Permata, Sp.THT</td>
                        <td>Poli THT</td>
                        <td>13:00 - 17:00</td>
                        <td>10</td>
                        <td>6</td>
                        <td>4</td>
                        <td><span className="badge badge-success">Tersedia</span></td>
                      </tr>
                      <tr>
                        <td>dr. Rudi Hartono, Sp.P</td>
                        <td>Poli Paru</td>
                        <td>08:00 - 12:00</td>
                        <td>12</td>
                        <td>9</td>
                        <td>3</td>
                        <td><span className="badge badge-info">Tersedia</span></td>
                      </tr>
                    </tbody>
                  </table>
                  </TableWithExport>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'jadwal' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Jadwal Praktek Dokter</h2>
          </div>
          <div className="card-body">
            <TableWithExport title="Jadwal Praktek Dokter" tableId="jadwal-dokter">
            <table className="table" id="jadwal-dokter">
              <thead>
                <tr>
                  <th>Nama Dokter</th>
                  <th>Spesialisasi</th>
                  <th>Senin</th>
                  <th>Selasa</th>
                  <th>Rabu</th>
                  <th>Kamis</th>
                  <th>Jumat</th>
                  <th>Sabtu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dr. Andi Wijaya, Sp.PD</td>
                  <td>Penyakit Dalam</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Siti Nurhaliza, Sp.JP</td>
                  <td>Jantung</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                </tr>
                <tr>
                  <td>dr. Budi Santoso, Sp.B</td>
                  <td>Bedah</td>
                  <td>14:00-17:00</td>
                  <td>14:00-17:00</td>
                  <td>-</td>
                  <td>14:00-17:00</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Dewi Lestari, Sp.A</td>
                  <td>Anak</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>08:00-14:00</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>dr. Ahmad Fauzi, Sp.OG</td>
                  <td>Kandungan</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                  <td>-</td>
                  <td>08:00-12:00</td>
                </tr>
              </tbody>
            </table>
            </TableWithExport>
          </div>
        </div>
      )}

      {activeTab === 'rujukan' && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Manajemen Rujukan</h2>
          </div>
          <div className="card-body">
            <div style={{ marginBottom: '20px' }}>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                Rujukan Internal
              </button>
              <button className="btn btn-secondary">
                <ExternalLink size={16} />
                Rujukan Eksternal (BPJS)
              </button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>No. Rujukan</th>
                  <th>Pasien</th>
                  <th>Dari</th>
                  <th>Ke</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RUJ-2024-001</td>
                  <td>Mayor Budi Santoso</td>
                  <td>Poli Umum</td>
                  <td>Poli Jantung</td>
                  <td>15/01/2024</td>
                  <td><span className="badge badge-success">Selesai</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RUJ-2024-002</td>
                  <td>Kapten Ahmad Fauzi</td>
                  <td>IGD</td>
                  <td>Rawat Inap</td>
                  <td>16/01/2024</td>
                  <td><span className="badge badge-info">Proses</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td>RUJ-2024-003</td>
                  <td>Kolonel Siti Nurhaliza</td>
                  <td>RS TNI AU</td>
                  <td>RS Pusat (Eksternal)</td>
                  <td>17/01/2024</td>
                  <td><span className="badge badge-warning">Menunggu</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showQRScanner && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div className="card" style={{ width: '500px', maxWidth: '90%' }}>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="card-title">Scan QR Code Pasien</h2>
              <X size={24} style={{ cursor: 'pointer' }} onClick={() => setShowQRScanner(false)} />
            </div>
            <div className="card-body" style={{ textAlign: 'center', padding: '40px' }}>
              <QrCode size={120} style={{ margin: '0 auto 20px', color: '#003d82' }} />
              <p>Arahkan QR Code ke kamera</p>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                Fitur ini akan menggunakan kamera untuk membaca QR Code dari kartu berobat pasien
              </p>
              <button className="btn btn-outline" style={{ marginTop: '20px' }} onClick={() => setShowQRScanner(false)}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {showPatientSearch && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div className="card" style={{ width: '600px', maxWidth: '90%' }}>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="card-title">Cari Pasien Lama</h2>
              <X size={24} style={{ cursor: 'pointer' }} onClick={() => { setShowPatientSearch(false); setSearchResults([]); }} />
            </div>
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">NIK / NRP / Nama Pasien</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Masukkan NIK, NRP, atau Nama"
                  onChange={(e) => handleSearchPatient(e.target.value)}
                />
              </div>
              {searchResults.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                  <h4>Hasil Pencarian:</h4>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {searchResults.map((patient, index) => (
                      <div key={index} style={{
                        padding: '15px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        marginBottom: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onClick={() => selectPatient(patient)}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{patient.nama}</div>
                        <div style={{ fontSize: '13px', color: '#666' }}>
                          NIK: {patient.nik} | NRP: {patient.nrp} | {patient.pangkat}
                        </div>
                        <div style={{ fontSize: '13px', color: '#666' }}>
                          {patient.satuan} | {patient.telepon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {searchResults.length === 0 && (
                <div className="alert alert-info" style={{ marginTop: '20px' }}>
                  <AlertCircle size={20} style={{ display: 'inline', marginRight: '10px' }} />
                  Masukkan NIK, NRP, atau nama pasien untuk mencari data pasien lama
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showCameraCapture && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div className="card" style={{ width: '500px', maxWidth: '90%' }}>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="card-title">Foto Pasien</h2>
              <X size={24} style={{ cursor: 'pointer' }} onClick={() => setShowCameraCapture(false)} />
            </div>
            <div className="card-body" style={{ textAlign: 'center', padding: '40px' }}>
              <Camera size={120} style={{ margin: '0 auto 20px', color: '#003d82' }} />
              <p>Ambil foto pasien untuk rekam medis</p>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                Foto akan disimpan dalam rekam medis elektronik pasien
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                <button className="btn btn-primary">
                  <Camera size={16} />
                  Ambil Foto
                </button>
                <button className="btn btn-outline" onClick={() => setShowCameraCapture(false)}>
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrasi;
