# Queue Management System - Visual Guide

## 🎯 Interactive Features Demonstration

This guide shows how the queue management system works visually.

---

## 📋 Main Navigation

```
┌────────────────────────────────────────────────────────────────┐
│  RS TRIMATRA SIMRS                                             │
├────────────────────────────────────────────────────────────────┤
│  [Registrasi Pasien] [Manajemen Antrean] [Jadwal] [Rujukan]   │
└────────────────────────────────────────────────────────────────┘
                              ↑
                         Click Here
```

---

## 🏥 Queue Management Tabs

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Antrean Pendaftaran] [Antrean Penunjang] [Antrean Kasir]           │
│  [Antrean Apotek] [Kuota Dokter]                                      │
└────────────────────────────────────────────────────────────────────────┘
         ↑ Active              ↑ Inactive         ↑ Inactive
```

---

## 📊 Real-time Statistics Dashboard

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   👥 Users   │  │   ⏰ Clock   │  │  ✓ Check     │  │   🔔 Bell    │
│              │  │              │  │              │  │              │
│Total Antrean │  │    Sedang    │  │   Selesai    │  │  Menunggu    │
│  Hari Ini    │  │   Dilayani   │  │              │  │              │
│      5       │  │      1       │  │      0       │  │      4       │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
   (Blue)            (Orange)          (Green)           (Red)
```

**After clicking "Panggil" on one item:**

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   👥 Users   │  │   ⏰ Clock   │  │  ✓ Check     │  │   🔔 Bell    │
│              │  │              │  │              │  │              │
│Total Antrean │  │    Sedang    │  │   Selesai    │  │  Menunggu    │
│  Hari Ini    │  │   Dilayani   │  │              │  │              │
│      5       │  │      2 ⬆️    │  │      0       │  │      3 ⬇️    │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

---

## 🎯 Queue Table - Initial State

### Antrean Pendaftaran (Registration Queue)

```
┌─────────┬────────────────────────┬─────────────┬────────┬───────┬──────────┬──────────┬──────────┐
│ No.     │ Nama Pasien            │ Jenis       │ Loket  │ Waktu │ Estimasi │ Status   │ Aksi     │
│ Antrean │                        │             │        │       │          │          │          │
├─────────┼────────────────────────┼─────────────┼────────┼───────┼──────────┼──────────┼──────────┤
│ A-012   │ Mayor Budi Santoso     │ Rawat Jalan │ Loket 1│ 08:30 │ 5 menit  │ Menunggu │ [Panggil]│
│         │                        │             │        │       │          │ (Yellow) │  (Blue)  │
├─────────┼────────────────────────┼─────────────┼────────┼───────┼──────────┼──────────┼──────────┤
│ A-013   │ Kapten Ahmad Fauzi     │ Rawat Jalan │ Loket 1│ 08:45 │    -     │ Dilayani │ [Selesai]│
│         │                        │             │        │       │          │  (Blue)  │  (Grey)  │
│         │ ← Light Blue Background                                           │          │          │
├─────────┼────────────────────────┼─────────────┼────────┼───────┼──────────┼──────────┼──────────┤
│ A-014   │ Kolonel Siti Nurhaliza │ BPJS        │ Loket 2│ 09:00 │ 15 menit │ Menunggu │ [Panggil]│
│         │                        │             │        │       │          │ (Yellow) │  (Blue)  │
├─────────┼────────────────────────┼─────────────┼────────┼───────┼──────────┼──────────┼──────────┤
│ B-008   │ Serda Hendra Wijaya    │ Rawat Inap  │ Loket 3│ 09:15 │ 25 menit │ Menunggu │ [Panggil]│
│         │                        │             │        │       │          │ (Yellow) │  (Blue)  │
└─────────┴────────────────────────┴─────────────┴────────┴───────┴──────────┴──────────┴──────────┘
```

---

## 🔔 Step 1: Click "Panggil" Button

**User Action**: Click the blue "Panggil" button for A-012

```
┌─────────┐
│ A-012   │ ← Click "Panggil" button
│ Menunggu│ → Status changes to "Dilayani"
│ [Panggil]│
└─────────┘
```

**Result**: Row updates instantly

```
┌─────────┬────────────────────────┬─────────────┬────────┬───────┬──────────┬──────────┬──────────┐
│ A-012   │ Mayor Budi Santoso     │ Rawat Jalan │ Loket 1│ 08:30 │    -     │ Dilayani │ [Selesai]│
│         │                        │             │        │       │  ← Now - │  (Blue)  │  (Grey)  │
│         │ ← Light Blue Background (#e8f4f8)                                 │  ← New   │ ← New    │
└─────────┴────────────────────────┴─────────────┴────────┴───────┴──────────┴──────────┴──────────┘
```

**What Changed:**
- ✅ Status badge: Menunggu (Yellow) → Dilayani (Blue)
- ✅ Background: White → Light Blue (#e8f4f8)
- ✅ Button: "Panggil" (Blue) → "Selesai" (Grey)
- ✅ Estimasi: "5 menit" → "-"
- ✅ Statistics: Menunggu -1, Dilayani +1

---

## ✅ Step 2: Click "Selesai" Button

**User Action**: Click the grey "Selesai" button for A-013

```
┌─────────┐
│ A-013   │ ← Click "Selesai" button
│ Dilayani│ → Status changes to "Selesai"
│ [Selesai]│
└─────────┘
```

**Result**: Row updates to completed state

```
┌─────────┬────────────────────────┬─────────────┬────────┬───────┬──────────┬──────────┬──────────┐
│ A-013   │ Kapten Ahmad Fauzi     │ Rawat Jalan │ Loket 1│ 08:45 │    -     │ Selesai  │ ✓ Selesai│
│         │                        │             │        │       │          │ (Green)  │  (Green) │
│         │ ← Light Green Background (#e8f8e8)                                │  ← New   │ ← Done   │
└─────────┴────────────────────────┴─────────────┴────────┴───────┴──────────┴──────────┴──────────┘
```

**What Changed:**
- ✅ Status badge: Dilayani (Blue) → Selesai (Green)
- ✅ Background: Light Blue → Light Green (#e8f8e8)
- ✅ Button: "Selesai" (Grey) → "✓ Selesai" (Green text)
- ✅ Statistics: Dilayani -1, Selesai +1

---

## 🔄 Complete Workflow Animation

```
┌────────────────────────────────────────────────────────────────────┐
│                     QUEUE STATUS LIFECYCLE                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Step 1: MENUNGGU (Waiting)                                       │
│  ┌─────────────────────────────────────────────────────┐          │
│  │ A-012 │ Mayor Budi │ RJ │ L1 │ 08:30 │ 5m │ ⚠️ │ 🔔 │          │
│  └─────────────────────────────────────────────────────┘          │
│           Badge: Yellow    Background: White                       │
│                                                                    │
│                         👇 Click [Panggil]                         │
│                                                                    │
│  Step 2: DILAYANI (Being Served)                                  │
│  ┌─────────────────────────────────────────────────────┐          │
│  │ A-012 │ Mayor Budi │ RJ │ L1 │ 08:30 │ - │ ℹ️ │ ✅ │          │
│  └─────────────────────────────────────────────────────┘          │
│           Badge: Blue      Background: Light Blue                  │
│                                                                    │
│                         👇 Click [Selesai]                         │
│                                                                    │
│  Step 3: SELESAI (Completed)                                      │
│  ┌─────────────────────────────────────────────────────┐          │
│  │ A-012 │ Mayor Budi │ RJ │ L1 │ 08:30 │ - │ ✅ │ ✓  │          │
│  └─────────────────────────────────────────────────────┘          │
│           Badge: Green     Background: Light Green                 │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🏥 All Queue Tabs Overview

### 1. Antrean Pendaftaran
```
┌────────┬──────────────────┬─────────────┬─────────┬───────┐
│ A-012  │ Mayor Budi       │ Rawat Jalan │ Loket 1 │ ⚠️    │
│ A-013  │ Kapten Ahmad     │ Rawat Jalan │ Loket 1 │ ℹ️    │
│ A-014  │ Kolonel Siti     │ BPJS        │ Loket 2 │ ⚠️    │
│ B-008  │ Serda Hendra     │ Rawat Inap  │ Loket 3 │ ⚠️    │
└────────┴──────────────────┴─────────────┴─────────┴───────┘
```

### 2. Antrean Penunjang
```
┌──────────┬──────────────────┬──────────────┬───────────┬───────┐
│ LAB-045  │ Kolonel Bambang  │ Laboratorium │ Lab 1     │ ⚠️    │
│ RAD-023  │ Mayor Indah      │ Radiologi    │ Radiologi │ ℹ️    │
│ LAB-046  │ Kapten Yusuf     │ Laboratorium │ Lab 2     │ ⚠️    │
│ RAD-024  │ Serka Dewi       │ Radiologi    │ Radiologi │ ⚠️    │
└──────────┴──────────────────┴──────────────┴───────────┴───────┘
```

### 3. Antrean Kasir
```
┌─────────┬─────────────────┬──────────────────────┬─────────┬───────┐
│ K-087   │ Letkol Hadi     │ Pembayaran RJ        │ Kasir 1 │ ⚠️    │
│ K-088   │ Mayor Siti      │ Pembayaran Tindakan  │ Kasir 2 │ ℹ️    │
│ K-089   │ Kapten Budi     │ Pembayaran Lab       │ Kasir 1 │ ⚠️    │
│ K-090   │ Serda Ahmad     │ DP Rawat Inap        │ Kasir 3 │ ⚠️    │
└─────────┴─────────────────┴──────────────────────┴─────────┴───────┘
```

### 4. Antrean Apotek
```
┌──────────┬────────────────────┬──────────────────┬─────────┬───────┐
│ APT-125  │ Kolonel Dedi       │ Resep RJ         │ Apotek 1│ ⚠️    │
│ APT-126  │ Mayor Lisa         │ Resep RI         │ Apotek 2│ ℹ️    │
│ APT-127  │ Kapten Rudi        │ Resep RJ         │ Apotek 1│ ⚠️    │
│ APT-128  │ Letda Putri        │ Resep RJ         │ Apotek 3│ ⚠️    │
└──────────┴────────────────────┴──────────────────┴─────────┴───────┘
```

### 5. Kuota Dokter
```
┌───────────────────────┬──────────────┬──────────┬───────────────┬────────┐
│ Nama Dokter           │ Poliklinik   │ Jam      │ Kuota (T/R/S) │ Status │
├───────────────────────┼──────────────┼──────────┼───────────────┼────────┤
│ dr. Andi Wijaya       │ Poli Umum    │ 08-12    │ 20 / 18 / 2   │ ⚠️ HP  │
│ dr. Siti Nurhaliza    │ Poli Jantung │ 08-14    │ 15 / 12 / 3   │ ℹ️ T   │
│ dr. Budi Santoso      │ Poli Bedah   │ 14-17    │ 10 / 10 / 0   │ 🔴 P   │
│ dr. Dewi Lestari      │ Poli Anak    │ 08-14    │ 25 / 15 / 10  │ ✅ T   │
└───────────────────────┴──────────────┴──────────┴───────────────┴────────┘

Legend:
T/R/S = Total / Registered / Sisa (Remaining)
HP = Hampir Penuh (Almost Full)
T = Tersedia (Available)
P = Penuh (Full)
```

---

## 🎨 Color Scheme Reference

### Badge Colors
```
┌─────────────┬───────────┬─────────────────────┐
│ Status      │ Color     │ CSS Class           │
├─────────────┼───────────┼─────────────────────┤
│ Menunggu    │ 🟡 Yellow │ badge-warning       │
│ Dilayani    │ 🔵 Blue   │ badge-info          │
│ Selesai     │ 🟢 Green  │ badge-success       │
│ Penuh       │ 🔴 Red    │ badge-danger        │
└─────────────┴───────────┴─────────────────────┘
```

### Background Colors
```
┌─────────────┬──────────────────┬─────────────────┐
│ Status      │ Background       │ Hex Code        │
├─────────────┼──────────────────┼─────────────────┤
│ Menunggu    │ White            │ #ffffff         │
│ Dilayani    │ Light Blue       │ #e8f4f8         │
│ Selesai     │ Light Green      │ #e8f8e8         │
└─────────────┴──────────────────┴─────────────────┘
```

### Button Colors
```
┌─────────────┬──────────────────┬─────────────────┐
│ Button      │ Color            │ CSS Class       │
├─────────────┼──────────────────┼─────────────────┤
│ Panggil     │ Blue (#003d82)   │ btn-primary     │
│ Selesai     │ Grey             │ btn-secondary   │
│ Refresh     │ Outline          │ btn-outline     │
└─────────────┴──────────────────┴─────────────────┘
```

---

## 📱 Responsive Behavior

### Desktop View (> 1024px)
```
┌────────────────────────────────────────────────────────────────┐
│ [Full Table - All Columns Visible]                             │
│ ┌──────┬─────────┬───────┬────────┬───────┬─────────┬────────┐ │
│ │ No   │ Nama    │ Jenis │ Loket  │ Waktu │ Status  │ Aksi   │ │
│ └──────┴─────────┴───────┴────────┴───────┴─────────┴────────┘ │
└────────────────────────────────────────────────────────────────┘
```

### Tablet View (768px - 1024px)
```
┌──────────────────────────────────────────────────┐
│ [Scrollable Table - All Columns]                │
│ ← Scroll horizontally →                         │
└──────────────────────────────────────────────────┘
```

### Mobile View (< 768px)
```
┌─────────────────────┐
│ [Card Layout]       │
│ ┌─────────────────┐ │
│ │ A-012           │ │
│ │ Mayor Budi      │ │
│ │ Rawat Jalan     │ │
│ │ [Panggil]       │ │
│ └─────────────────┘ │
└─────────────────────┘
```

---

## 🎬 User Journey Example

### Scenario: Patient Registration Flow

**Time: 08:30 AM**

```
Step 1: Patient arrives
┌─────────────────────────────────────┐
│ Mayor Budi Santoso arrives          │
│ Gets queue number: A-012            │
│ Status: Menunggu ⚠️                 │
│ Estimated wait: 5 minutes           │
└─────────────────────────────────────┘

Step 2: Staff calls patient (08:35 AM)
┌─────────────────────────────────────┐
│ Staff clicks [Panggil] button       │
│ Status changes to: Dilayani ℹ️      │
│ Row turns light blue                │
│ Statistics update automatically     │
└─────────────────────────────────────┘

Step 3: Registration complete (08:42 AM)
┌─────────────────────────────────────┐
│ Staff clicks [Selesai] button       │
│ Status changes to: Selesai ✅       │
│ Row turns light green               │
│ Statistics update again             │
│ Patient proceeds to clinic          │
└─────────────────────────────────────┘
```

---

## 🔍 Quick Reference

### Status Icons
```
⚠️  = Menunggu (Warning - Yellow)
ℹ️  = Dilayani (Info - Blue)
✅  = Selesai (Success - Green)
🔴  = Penuh (Danger - Red)
```

### Action Icons
```
🔔  = Panggil (Call/Bell)
✓   = Selesai (Complete/Checkmark)
👥  = Total Antrean (Users)
⏰  = Sedang Dilayani (Clock)
```

### Queue Formats
```
A-XXX  = Outpatient Registration
B-XXX  = Inpatient Registration
LAB-XXX = Laboratory
RAD-XXX = Radiology
K-XXX  = Cashier
APT-XXX = Pharmacy
```

---

## 💡 Pro Tips

### For Staff
1. **Quick Call**: Click "Panggil" to immediately change status
2. **Monitor Stats**: Keep eye on statistics dashboard for workload
3. **Export Data**: Use export buttons for daily reports
4. **Switch Tabs**: Easily manage different service queues

### For IT Support
1. **Real-time Updates**: All changes are instant, no page refresh needed
2. **State Management**: Each queue maintains independent state
3. **Export Ready**: All tables support 5 export formats
4. **API Ready**: Code is prepared for backend integration

---

**RS Trimatra SIMRS v2.7.0**
*Visual Guide - Queue Management System*
