# 🚖 Cab Service App

A full-stack cab booking application built with **React**, **Node.js**, **Express**, and **Socket.IO**. It includes real-time location updates, user and captain (driver) roles, authentication, and map integration.

---

## 📌 Features

### 👤 User
- Register and log in securely.
- Book a cab by selecting pickup and destination on a map.
- See available captains (drivers) nearby in real-time.
- Live tracking of assigned captain.

### 🚗 Captain (Driver)
- Register and log in securely.
- Go online/offline.
- Get ride requests from nearby users.
- Accept/reject ride requests.
- Update live location in real-time.
- Complete ride and set status back to available.

### 🔐 Authentication
- JWT-based authentication for both user and captain.
- Separate routes and dashboards based on role.

### 📍 Real-time Location & Map
- Real-time location updates via **Socket.IO**.
---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| **Frontend** | React, Axios, Socket.IO Client |
| **Backend** | Node.js, Express, MongoDB, Socket.IO |
| **Authentication** | JWT, Bcrypt |
| **Real-time** | Socket.IO |

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/RitikNotiyal/trippy.git
cd TripNow
