# API Documentation - SIMRS TNI AU

Dokumentasi API untuk integrasi backend dengan frontend SIMRS TNI AU.

## Base URL

```
Development: http://localhost:5000/api/v1
Staging: https://staging-api.simrs-tniau.mil.id/api/v1
Production: https://api.simrs-tniau.mil.id/api/v1
```

## Authentication

Semua request harus menyertakan JWT token di header:

```
Authorization: Bearer <token>
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "username": "dr.andi",
  "password": "password123"
}

Response:
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "USR-001",
      "name": "dr. Andi Wijaya, Sp.PD",
      "role": "doctor",
      "unit": "Poli Penyakit Dalam"
    }
  }
}
```

## Endpoints

### 1. Registrasi & Pasien

#### Get Patient List
```http
GET /patients?page=1&limit=20&search=budi
```

#### Get Patient Detail
```http
GET /patients/:id

Response:
{
  "success": true,
  "data": {
    "id": "RM-001234",
    "nik": "3174012345678901",
    "nrp": "531234",
    "name": "Letkol Budi Santoso",
    "rank": "Letkol",
    "unit": "Lanud Halim Perdanakusuma",
    "dateOfBirth": "1975-05-12",
    "gender": "L",
    "phone": "081234567890",
    "address": "Jl. Merdeka No. 123, Jakarta",
    "insurance": "TNI",
    "registrationDate": "2020-01-15"
  }
}
```

#### Register New Patient
```http
POST /patients
Content-Type: application/json

{
  "nik": "3174012345678901",
  "nrp": "531234",
  "name": "Letkol Budi Santoso",
  "rank": "Letkol",
  "unit": "Lanud Halim Perdanakusuma",
  "dateOfBirth": "1975-05-12",
  "gender": "L",
  "phone": "081234567890",
  "address": "Jl. Merdeka No. 123, Jakarta",
  "insurance": "TNI"
}
```

### 2. Antrean

#### Get Queue List
```http
GET /queues?date=2024-01-18&clinic=poli-umum

Response:
{
  "success": true,
  "data": [
    {
      "queueNumber": "A-012",
      "patient": {
        "id": "RM-001234",
        "name": "Letkol Budi Santoso"
      },
      "clinic": "Poli Umum",
      "doctor": "dr. Andi Wijaya, Sp.PD",
      "registrationTime": "2024-01-18T08:30:00Z",
      "status": "waiting"
    }
  ]
}
```

#### Create Queue
```http
POST /queues
{
  "patientId": "RM-001234",
  "clinicId": "CLINIC-001",
  "doctorId": "DOC-001",
  "appointmentDate": "2024-01-18"
}
```

### 3. Rekam Medis

#### Get Medical Records
```http
GET /medical-records?patientId=RM-001234&limit=10
```

#### Create SOAP Note
```http
POST /medical-records/soap
{
  "patientId": "RM-001234",
  "visitId": "VISIT-20240118-001",
  "subjective": "Pasien mengeluh nyeri dada...",
  "objective": {
    "bloodPressure": "160/100",
    "heartRate": 88,
    "respiratoryRate": 22,
    "temperature": 36.8,
    "spo2": 98
  },
  "assessment": [
    {
      "icd10": "I25.1",
      "diagnosis": "Coronary Artery Disease"
    }
  ],
  "plan": "1. Rujuk ke Poli Jantung..."
}
```

### 4. Farmasi

#### Get Prescriptions
```http
GET /pharmacy/prescriptions?status=pending

Response:
{
  "success": true,
  "data": [
    {
      "id": "RX-2024-0123",
      "patientId": "RM-001234",
      "doctorId": "DOC-001",
      "status": "pending_verification",
      "medications": [
        {
          "drugId": "DRUG-001",
          "name": "Aspirin 100mg",
          "dose": "100mg",
          "route": "PO",
          "frequency": "1x1",
          "duration": "30 hari",
          "quantity": 30
        }
      ]
    }
  ]
}
```

#### Verify Prescription
```http
POST /pharmacy/prescriptions/:id/verify
{
  "status": "approved",
  "notes": "Verified, no drug interaction"
}
```

#### Dispense Medication
```http
POST /pharmacy/dispense
{
  "prescriptionId": "RX-2024-0123",
  "medications": [
    {
      "drugId": "DRUG-001",
      "batchNumber": "LOT-2023-456",
      "expiryDate": "2025-12-31",
      "quantity": 30
    }
  ]
}
```

### 5. Laboratorium

#### Create Lab Order
```http
POST /laboratory/orders
{
  "patientId": "RM-001234",
  "doctorId": "DOC-001",
  "priority": "routine",
  "tests": [
    "complete-blood-count",
    "lipid-profile",
    "glucose"
  ],
  "clinicalInfo": "Suspect dyslipidemia"
}
```

#### Submit Lab Results
```http
POST /laboratory/results
{
  "orderId": "LAB-20240118-001",
  "results": [
    {
      "testCode": "HGB",
      "value": 13.8,
      "unit": "g/dL",
      "normalRange": "13.0-17.0",
      "status": "normal"
    }
  ]
}
```

### 6. Aerospace Medicine

#### Create Fit-to-Fly Assessment
```http
POST /aerospace/fit-to-fly
{
  "personnelId": "NRP-531234",
  "missionType": "training",
  "assessment": {
    "complaints": [],
    "vitalSigns": {
      "bloodPressure": "120/80",
      "heartRate": 72,
      "spo2": 98
    },
    "vision": {
      "rightEye": "6/6",
      "leftEye": "6/6",
      "colorVision": "normal"
    },
    "hearing": "normal",
    "conclusion": "fit",
    "limitations": null
  }
}
```

#### Get Medical Readiness Status
```http
GET /aerospace/readiness?unit=skadron-1

Response:
{
  "success": true,
  "data": {
    "unit": "Skadron Udara 1",
    "totalPersonnel": 120,
    "fullyReady": 102,
    "limitedReady": 12,
    "notReady": 6,
    "readinessPercentage": 85
  }
}
```

### 7. Analytics & Reporting

#### Get Dashboard Stats
```http
GET /analytics/dashboard?date=2024-01-18

Response:
{
  "success": true,
  "data": {
    "patientsToday": 243,
    "emergencyPatients": 18,
    "bedOccupancyRate": 78,
    "activeQueues": 42
  }
}
```

#### Get Top 10 Diseases
```http
GET /analytics/top-diseases?period=monthly&year=2024&month=1
```

## Error Responses

### Standard Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "nik",
        "message": "NIK must be 16 digits"
      }
    ]
  }
}
```

### Error Codes
- `AUTHENTICATION_ERROR` (401): Invalid or expired token
- `AUTHORIZATION_ERROR` (403): User tidak memiliki akses
- `VALIDATION_ERROR` (400): Input data tidak valid
- `NOT_FOUND` (404): Resource tidak ditemukan
- `CONFLICT` (409): Data conflict (e.g., duplicate NIK)
- `INTERNAL_ERROR` (500): Server error

## Rate Limiting

- 100 requests per minute per user
- 1000 requests per hour per user

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

## Webhooks

### Patient Admission
```json
POST https://your-webhook-url.com/patient-admission
{
  "event": "patient.admitted",
  "timestamp": "2024-01-18T10:30:00Z",
  "data": {
    "patientId": "RM-001234",
    "roomNumber": "VIP-201",
    "admissionDate": "2024-01-18T10:30:00Z"
  }
}
```

### Critical Lab Result
```json
POST https://your-webhook-url.com/critical-result
{
  "event": "lab.critical_value",
  "timestamp": "2024-01-18T11:45:00Z",
  "data": {
    "patientId": "RM-001234",
    "testCode": "TROP-I",
    "value": 2.5,
    "normalRange": "<0.04",
    "status": "critical"
  }
}
```

## BPJS Integration

### Get SEP (Surat Eligibilitas Peserta)
```http
POST /bpjs/sep
{
  "noKartu": "0001234567890",
  "tglSep": "2024-01-18",
  "ppkPelayanan": "0301R001",
  "jnsPelayanan": "2",
  "klsRawat": "3",
  "noMR": "RM-001234",
  "rujukan": {
    "noRujukan": "0301R00112340001",
    "tglRujukan": "2024-01-17"
  }
}
```

## Security Considerations

1. **HTTPS Only**: Semua API calls harus menggunakan HTTPS
2. **Token Expiry**: JWT token expire setelah 8 jam
3. **IP Whitelisting**: Production API hanya accept dari IP TNI
4. **Data Encryption**: Sensitive data di-encrypt at rest
5. **Audit Logging**: Semua API calls di-log untuk audit

## Versioning

API menggunakan versioning di URL path: `/api/v1/`, `/api/v2/`, etc.

Breaking changes akan dirilis di version baru, dan old version akan di-support minimal 6 bulan.

## Support

Untuk bantuan integrasi API:
- Email: api-support@simrs-tniau.mil.id
- Documentation: https://api-docs.simrs-tniau.mil.id
- Slack: #simrs-api-support (internal)

---

**Last Updated: 2024-01-18**
