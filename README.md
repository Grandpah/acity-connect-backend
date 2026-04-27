# CampusTrade ACITY (Frontend)

## 📌 Project Overview

CampusTrade ACITY is a smart campus marketplace and skill exchange platform designed for Academic City students.
It allows students to trade second-hand items, offer skills, and connect within a secure campus environment.

---

## 🌐 Deployment Links

Frontend (Live Website):
https://grandpah.github.io/acity-connect-frontend/

Backend API:
https://acity-connect-backend.onrender.com

---

## 🔐 Login Details

Email: [test@acity.edu.gh](mailto:test@acity.edu.gh)
Password: password123

---

## 🚀 Features Implemented

### 👤 User System

✔ User registration and login
✔ Restricted to ACity institutional emails
✔ Secure authentication using JWT

### 🛒 Marketplace and Listings

✔ Create listings (Items and Skills)
✔ Listings include:

* Title
* Description
* Category (Item/Skill)
* Status (Available, Sold, Swapped)

✔ Search and filter listings

### 🤝 Interaction System

✔ “Interested” button
✔ Basic interaction tracking system

### 🛠️ Admin Features

✔ Listings require admin approval before visible
✔ Admin moderation handled via backend/database
✔ Platform activity overview (listing counts)

---

## 🧪 How to Test

1. Register using ACity email
2. Login
3. Create a listing
4. Approve listing in database:

```sql
UPDATE listings SET approved = true;
```

5. Refresh website to view listing

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript (Vanilla)
* Fetch API
* GitHub Pages (Hosting)

---

## ⚙️ Installation Instructions

To run locally:

1. Clone repository:

```bash
git clone https://github.com/Grandpah/acity-connect-frontend
```

2. Open index.html in browser

---

## 📌 Notes

* Only approved listings are displayed
* Backend handles authentication and data storage
* Admin features are implemented through backend workflow
