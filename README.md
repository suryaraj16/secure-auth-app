# Secure Auth App 🔐

A full-stack authentication system built using the MERN stack.

## Features
- User Registration
- User Login
- JWT Authentication
- Protected Dashboard Route
- MongoDB Database Integration
- React Frontend with Routing

## Tech Stack
### Frontend
- React
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Folder Structure

secure-auth-app/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ └── App.jsx
│
└── README.md

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create `.env` inside backend folder:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

## Author
Surya Raj