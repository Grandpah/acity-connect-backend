# CampusTrade ACITY (Backend API)

## 📌 Project Overview

This is the backend API for CampusTrade ACITY, a campus marketplace platform that enables students to trade items and exchange skills.
It provides authentication, listing management, and database integration.

---

## 🌐 Deployment Links

Backend API:
https://acity-connect-backend.onrender.com

Frontend Application:
https://grandpah.github.io/acity-connect-frontend/

---

## 🔐 Login Details

Email: [test@acity.edu.gh](mailto:test@acity.edu.gh)
Password: password123

---

## 🚀 Features Implemented

### 👤 Authentication System

✔ User registration (ACity email restriction)
✔ Secure login system
✔ Password hashing using bcrypt
✔ JWT authentication

### 🛒 Listings System

✔ Create listings (protected route)
✔ Fetch approved listings
✔ Store listings in PostgreSQL database

### 🤝 Interaction System

✔ Interest requests supported
✔ Interaction tracking handled via frontend/backend

### 🛠️ Admin Logic

✔ Listings require approval before display
✔ Moderation handled via backend database
✔ Supports admin workflow

---

## 📡 API Endpoints

### Register

POST /api/register

### Login

POST /api/login

### Get Listings

GET /api/listings

### Create Listing (Protected)

POST /api/listings

---

## 🔐 Authentication

Protected routes require:
Authorization: Bearer TOKEN

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* PostgreSQL (Render Database)
* JWT (Authentication)
* bcryptjs
* dotenv

---

## ⚙️ Environment Variables

PORT=5000
JWT_SECRET=your_secret
DATABASE_URL=your_database_url

---

## 🧪 Database Setup

Run schema.sql to create:

* users
* listings
* interests

---

## ⚙️ Installation Instructions

1. Clone repository:

```bash
git clone https://github.com/Grandpah/acity-connect-backend
```

2. Install dependencies:

```bash
npm install
```

3. Run server:

```bash
npm start
```

---

## 📌 Notes

* PostgreSQL connection uses SSL (Render requirement)
* Only approved listings are returned
* Backend is deployed on Render
