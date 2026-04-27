CampusTrade ACITY (Backend)

📌 Project Overview

This is the backend API for CampusTrade ACITY, a smart campus marketplace platform.
It provides authentication, listing management, and database integration.


🌐 Live API

https://acity-connect-backend.onrender.com


🚀 Features Implemented

👤 Authentication

* User registration (ACity email only)
* Secure login system
* Password hashing with bcrypt
* JWT-based authentication

🛒 Listings System

* Create listings (protected route)
* Fetch approved listings
* Listings stored in PostgreSQL database

🛠️ Admin Logic

* Listings require approval before display
* Approval handled via database query
* Supports moderation workflow


📡 API Endpoints

Register

POST /api/register

Login

POST /api/login

Get Listings

GET /api/listings

Create Listing (Protected)

POST /api/listings


🔐 Authentication

Protected routes require:
Authorization: Bearer TOKEN


🛠️ Technologies Used

* Node.js
* Express.js
* PostgreSQL (Render Database)
* JWT (Authentication)
* bcryptjs (Password hashing)
* dotenv


⚙️ Environment Variables

PORT=5000
JWT_SECRET=your_secret
DATABASE_URL=your_database_url


🧪 Database Setup

Run schema.sql to create tables:

* users
* listings
* interests

 📌 Notes

* Database connection uses SSL (Render requirement)
* Only approved listings are returned to users
* Backend is deployed on Render
