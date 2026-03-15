# 🚀 Hackathon Projects Portfolio

A full-stack web application for managing and showcasing hackathon projects. Built with React, Node.js, Express, and MongoDB.

## 📋 Features

### Backend (Node.js + Express + MongoDB)
- RESTful API for project management
- MongoDB database with Mongoose ODM
- File upload support
- Rate limiting and security middleware
- CORS configuration
- Comprehensive error handling

### Frontend (React + TypeScript)
- Modern React with TypeScript
- React Router for navigation
- React Query for data fetching
- Responsive design with styled-components
- Toast notifications
- Search and filtering capabilities

### Project Management
- ✅ Create, Read, Update, Delete projects
- 🏷️ Category-based organization
- 🔍 Advanced search functionality
- 📊 Statistics dashboard
- 📱 Mobile-responsive design
- 🎨 Beautiful UI with animations

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- React Router
- React Query
- Styled Components
- Axios
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Helmet
- Morgan
- Multer
- JWT (ready for authentication)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)

### Quick Start
1. Clone the repository
2. Run the development script:
   ```bash
   start-dev.bat
   ```

### Manual Installation

#### Backend Setup
```bash
cd backend
npm install
npm start
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects (with pagination, filtering, search)
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Categories
- `GET /api/categories` - Get all project categories

### Statistics
- `GET /api/stats` - Get project statistics

### Health Check
- `GET /health` - Server health status

## 🗂️ Project Structure

```
personal-website/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── App.tsx       # Main app component
│   ├── package.json      # Frontend dependencies
│   └── public/          # Static files
├── start-dev.bat         # Development script
└── README.md            # This file
```

## 🎯 Project Categories

- Web Development
- Mobile App
- AI/ML
- Data Science
- Blockchain
- IoT
- Game Dev
- Other

## 📊 Project Status Options

- In Progress
- Completed
- Won Prize
- Ongoing

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/hackathon-projects
JWT_SECRET=your-secret-key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB on your hosting provider
2. Update environment variables
3. Deploy to your preferred platform (Heroku, AWS, etc.)

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the build folder to your hosting provider
3. Update the API URL in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend
- MongoDB for the flexible database
- All the open-source contributors

---

Built with ❤️ by Ritam Mondal
