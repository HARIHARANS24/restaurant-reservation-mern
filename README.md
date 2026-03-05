# 🍽️ Restaurant Reservation System - MERN Stack

A full-stack web application for managing restaurant table reservations built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## ✨ Features
- 🔐 User authentication and authorization  
- 📅 Table reservation management
- 📊 Admin dashboard 
- 📱 Responsive design    
- 🔄 Real-time updates     
- 📧 Email notifications     
- 📊 Analytics and reporting
     
## 🛠️ Tech Stack   
- **Frontend**: React.js, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Real-time**: Socket.io
- **Email**: Nodemailer

## 📁 Project Structure
```
Directory structure:
└── hariharans24-restaurant-reservation-mern/
    ├── README.md
    ├── LICENSE
    ├── backend/
    │   ├── app.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── RESERVATIONS.reservations.json
    │   ├── server.js
    │   ├── config/
    │   │   └── config.env
    │   ├── controller/
    │   │   └── reservation.js
    │   ├── database/
    │   │   └── dbConnection.js
    │   ├── middlewares/
    │   │   └── error.js
    │   ├── models/
    │   │   └── reservation.js
    │   └── routes/
    │       └── reservationRoute.js
    └── frontend/
        ├── README.md
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── vite.config.js
        ├── public/
        └── src/
            ├── App.css
            ├── App.jsx
            ├── main.jsx
            ├── restApi.json
            ├── components/
            │   ├── About.jsx
            │   ├── Footer.jsx
            │   ├── HeroSection.jsx
            │   ├── Menu.jsx
            │   ├── Navbar.jsx
            │   ├── Qualities.jsx
            │   ├── Reservation.jsx
            │   ├── Team.jsx
            │   └── WhoAreWe.jsx
            └── Pages/
                ├── Home/
                │   └── Home.jsx
                ├── NotFound/
                │   └── NotFound.jsx
                └── Success/
                    └── Success.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HARIHARANS24/restaurant-reservation-mern.git
cd restaurant-reservation-mern
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
```bash
# Backend (.env)
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

# Frontend (.env)
VITE_API_URL=http://localhost:5000
```

5. Start the development servers
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## 📚 API Documentation

### Authentication Endpoints
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Reservation Endpoints
- GET /api/reservations - Get all reservations
- POST /api/reservations - Create new reservation
- GET /api/reservations/:id - Get reservation by ID
- PUT /api/reservations/:id - Update reservation
- DELETE /api/reservations/:id - Delete reservation

## 🤝 Contributing

We welcome contributions to improve the Restaurant Reservation System! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing code style.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HARIHARANS24** - *Initial work* - [GitHub Profile](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the MERN stack community for their excellent documentation and support 
