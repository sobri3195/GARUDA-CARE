# Queue Management System - Feature Documentation

## Overview
The Queue Management System has been fully activated with comprehensive features for managing patient queues across different service areas in RS Trimatra.

## Version
**v2.7.0** - Queue Management Enhancement

## Activated Features

### 1. Multi-Tab Queue System
Five queue management tabs are now fully functional:

#### a. **Antrean Pendaftaran** (Registration Queue)
- **Purpose**: Manage patient registration queues for outpatient, inpatient, emergency, and BPJS services
- **Loket**: 3 counters (Loket 1, 2, 3)
- **Queue Format**: A-XXX (outpatient), B-XXX (inpatient)
- **Sample Data**: 5 queue items with various statuses

#### b. **Antrean Penunjang** (Supporting Services Queue)
- **Purpose**: Manage queues for Laboratory and Radiology services
- **Rooms**: Lab 1, Lab 2, Radiologi
- **Queue Format**: LAB-XXX, RAD-XXX
- **Sample Data**: 4 queue items for lab and radiology services

#### c. **Antrean Kasir** (Cashier Queue)
- **Purpose**: Manage payment processing queues
- **Loket**: 3 cashier counters (Kasir 1, 2, 3)
- **Queue Format**: K-XXX
- **Payment Types**: Rawat Jalan, Tindakan, Lab, DP Rawat Inap
- **Sample Data**: 4 queue items with various payment types

#### d. **Antrean Apotek** (Pharmacy Queue)
- **Purpose**: Manage prescription dispensing queues
- **Loket**: 3 pharmacy counters (Apotek 1, 2, 3)
- **Queue Format**: APT-XXX
- **Prescription Types**: Resep Rawat Jalan, Resep Rawat Inap
- **Sample Data**: 4 queue items from different services

#### e. **Kuota Dokter** (Doctor Quota Management)
- **Purpose**: Monitor and manage doctor quotas per clinic
- **Features**:
  - Real-time quota tracking
  - Doctor availability status
  - Quota statistics (Total: 320, Used: 253, Remaining: 67)
  - 8 doctors with detailed quota information
  - Status indicators: Tersedia, Hampir Penuh, Penuh

### 2. Real-time Statistics Dashboard
Dynamic statistics that update based on queue status:

- **Total Antrean Hari Ini**: Total queue items
- **Sedang Dilayani**: Currently being served
- **Selesai**: Completed services
- **Menunggu**: Waiting in queue

Statistics are calculated in real-time and update automatically when queue status changes.

### 3. Interactive "Panggil" (Call) Feature

#### Status Flow
```
Menunggu → [Panggil Button] → Dilayani → [Selesai Button] → Selesai
```

#### Functionality
- **Menunggu Status**: 
  - Shows "Panggil" button with Bell icon
  - Click to change status to "Dilayani"
  - Estimasi time is displayed

- **Dilayani Status**:
  - Row background turns light blue (#e8f4f8)
  - Shows "Selesai" button with CheckCircle icon
  - Click to change status to "Selesai"
  - Estimasi shows "-"

- **Selesai Status**:
  - Row background turns light green (#e8f8e8)
  - Shows green checkmark "✓ Selesai"
  - No further action needed

#### Visual Indicators
- **Badge Colors**:
  - Menunggu: Yellow/Orange badge (badge-warning)
  - Dilayani: Blue badge (badge-info)
  - Selesai: Green badge (badge-success)

- **Row Highlighting**:
  - Menunggu: White background
  - Dilayani: Light blue background
  - Selesai: Light green background

### 4. Export Functionality
All queue tables support 5 export formats via TableWithExport component:
1. Copy to Clipboard
2. Excel (.xls)
3. CSV (.csv)
4. Word (.doc)
5. PDF (via print)

### 5. Doctor Quota Dashboard
Comprehensive quota management view with:

#### Statistics Cards
- **Total Dokter Praktik**: 24 doctors
- **Dokter Aktif**: 18 currently practicing
- **Total Kuota**: 320 total slots
- **Sisa Kuota**: 67 remaining slots

#### Detailed Quota Table
Columns:
- Nama Dokter
- Poliklinik
- Jam Praktik
- Total Kuota
- Terdaftar
- Sisa Kuota
- Status (Tersedia/Hampir Penuh/Penuh)

#### Sample Data (8 doctors)
- dr. Andi Wijaya, Sp.PD - Poli Umum (Hampir Penuh)
- dr. Siti Nurhaliza, Sp.JP - Poli Jantung (Tersedia)
- dr. Budi Santoso, Sp.B - Poli Bedah (Penuh)
- dr. Dewi Lestari, Sp.A - Poli Anak (Tersedia)
- dr. Ahmad Fauzi, Sp.OG - Poli Kandungan (Tersedia)
- dr. Hendra Gunawan, Sp.M - Poli Mata (Hampir Penuh)
- dr. Lisa Permata, Sp.THT - Poli THT (Tersedia)
- dr. Rudi Hartono, Sp.P - Poli Paru (Tersedia)

## Technical Implementation

### State Management
```javascript
// Queue tab state
const [activeQueueTab, setActiveQueueTab] = useState('pendaftaran');

// Queue data states
const [queuePendaftaran, setQueuePendaftaran] = useState([...]);
const [queuePenunjang, setQueuePenunjang] = useState([...]);
const [queueKasir, setQueueKasir] = useState([...]);
const [queueApotek, setQueueApotek] = useState([...]);
```

### Key Functions

#### 1. handleCallQueue(queueType, id)
Changes queue status from "Menunggu" to "Dilayani"
- Updates status
- Sets estimasi to "-"
- Triggers re-render

#### 2. handleFinishQueue(queueType, id)
Changes queue status from "Dilayani" to "Selesai"
- Updates status
- Triggers statistics update

#### 3. getQueueStats(queue)
Calculates real-time statistics for current queue
- Returns: { total, dilayani, selesai, menunggu }

#### 4. getCurrentQueue()
Returns the appropriate queue data based on active tab
- Switches between different queue arrays

### Data Structure
```javascript
{
  id: number,              // Unique identifier
  noAntrean: string,       // Queue number (e.g., "A-012")
  nama: string,            // Patient name with rank
  jenis: string,           // Service type
  loket: string,           // Counter/Loket (for registration/cashier/pharmacy)
  ruang: string,           // Room (for supporting services)
  waktu: string,           // Registration time (HH:mm)
  estimasi: string,        // Estimated wait time
  status: string           // "Menunggu" | "Dilayani" | "Selesai"
}
```

## User Interface

### Navigation
```
Registrasi & Antrean
├── Registrasi Pasien
├── Manajemen Antrean
│   ├── Antrean Pendaftaran ✓
│   ├── Antrean Penunjang ✓
│   ├── Antrean Kasir ✓
│   ├── Antrean Apotek ✓
│   └── Kuota Dokter ✓
├── Jadwal Dokter
└── Rujukan
```

### Color Scheme
- **Primary Action**: Blue (#003d82) - Panggil button
- **Secondary Action**: Grey - Selesai button
- **Warning Badge**: Yellow/Orange (#f59e0b) - Menunggu
- **Info Badge**: Blue (#3b82f6) - Dilayani
- **Success Badge**: Green (#10b981) - Selesai
- **Danger Badge**: Red - Alerts/Penuh

## Icons Used
- `Users` - Total queue count
- `Clock` - Currently being served
- `CheckCircle` - Completed services
- `Bell` - Call/Notification, Waiting count
- `Activity` - Refresh, Doctor stats
- `TrendingUp` - Total quota
- `XCircle` - Remaining quota

## Integration Points

### Future API Integration
Ready for backend integration:
```javascript
// Call queue API
POST /api/queue/call
{
  queueType: "pendaftaran",
  queueId: 1,
  loket: "Loket 1"
}

// Finish queue API
POST /api/queue/finish
{
  queueType: "pendaftaran",
  queueId: 1
}

// Get queue stats API
GET /api/queue/stats?type=pendaftaran

// Get doctor quota API
GET /api/doctor/quota?date=2024-01-15
```

### Display Integration
Queue numbers can be broadcast to:
- Display screens in waiting areas
- Mobile patient app
- Audio announcements
- SMS notifications

## Benefits

### For Staff
1. **Efficient Queue Management**: Easy to call and track patients
2. **Real-time Updates**: Instant visibility of queue status
3. **Multi-service Support**: Manage all queues from one interface
4. **Quota Monitoring**: Prevent overbooking with doctor quota tracking
5. **Export Capabilities**: Generate reports for analysis

### For Patients
1. **Fair Queue System**: Transparent and ordered service
2. **Wait Time Estimation**: Know approximate wait time
3. **Real-time Status**: See their position in queue
4. **Multiple Service Queues**: Separate queues for different services

### For Management
1. **Performance Metrics**: Track service efficiency
2. **Resource Planning**: Optimize staff allocation
3. **Data Export**: Analyze trends and patterns
4. **Quota Management**: Balance patient load across doctors

## Testing Checklist

- [x] Switch between queue tabs
- [x] View real-time statistics
- [x] Click "Panggil" button (Menunggu → Dilayani)
- [x] Click "Selesai" button (Dilayani → Selesai)
- [x] Verify statistics update after status change
- [x] Check row highlighting for different statuses
- [x] View doctor quota management
- [x] Export queue data to various formats
- [x] Verify all queue data displays correctly
- [x] Build process completes without errors

## Version History

### v2.7.0 (Current)
- ✅ Activated all 5 queue management tabs
- ✅ Implemented functional "Panggil" button
- ✅ Added real-time statistics calculation
- ✅ Created Doctor Quota management section
- ✅ Added interactive status change workflow
- ✅ Implemented visual status indicators
- ✅ Added export functionality for all tables

### Previous Versions
- v2.6.0 - Enhanced Rawat Jalan with 10 new features
- v2.5.0 - Added Header enhancements and Dashboard charts
- v2.0.0 - Initial Registration with queue management stub

## Future Enhancements

### Planned Features
1. **Audio Announcements**: Text-to-speech for queue calls
2. **SMS Notifications**: Alert patients when their turn approaches
3. **Queue Display Board**: Large screen display for waiting areas
4. **Auto Queue Assignment**: Automatic loket assignment based on load
5. **Queue Priority System**: VIP/Emergency queue priority
6. **Historical Analytics**: Queue performance reports
7. **Mobile Queue Check**: Patients check queue status via mobile
8. **Queue Transfer**: Move patients between lokets
9. **Estimated Wait Time Algorithm**: Dynamic calculation based on service time
10. **Doctor Break Management**: Handle doctor breaks in quota system

## Support & Documentation

For more information:
- Main Documentation: README.md
- API Documentation: API_DOCUMENTATION.md
- Table Export Guide: TABLE_EXPORT_GUIDE.md
- Changelog: CHANGELOG_TRIMATRA.md

---

**RS Trimatra** - Sistem Informasi Rumah Sakit Terpadu
*Melayani TNI AD, TNI AL, TNI AU dengan sepenuh hati*
