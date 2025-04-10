# Task Management System

A full-stack task management system with a **React.js frontend** and **Node.js backend** that allows administrators to manage agents and assign tasks dynamically via CSV uploads. The system includes authentication using JWT, secure agent management, and task distribution.

##Login Credentials (Admin Login)
Email - (You Can Create Accordingly)
Password - (You Can Create Accordingly)

## 🚀 Features

- **JWT Authentication** for secure API access.
- **Task Assignment** via CSV upload.
- **Agent Management** (Create, Retrieve, Delete).
- **Task Retrieval** (All tasks, tasks by agent).
- **File Upload Handling** with Multer.
- **MongoDB Integration** for data persistence.
- **React Frontend** for a user-friendly interface.

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT
- **File Handling:** Multer, csv-parser
- **Database ORM:** Mongoose

## 📂 Project Structure

```
mern_project/

     backend/
            ├── config/             # Mongo Db connection handler
            ├── controllers/        # Route handlers (business logic)
            ├── middleware/         # Authentication middleware
            ├── models/             # Mongoose models (User, Agent, Task)
            ├── routes/             # Express route definitions
            ├── utils/              # Helper utilities (multer config)
            ├── .env                # Environment variables
            ├── script.js           # Main server entry point

            frontend/
            ├── src/
            │   ├── components/      # Reusable components
            │   ├── pages/           # Application pages
            │   ├── services/        # API service functions
            │   ├── App.js           # Main React App component
            │   ├── index.js         # Application entry point
            │   ├── styles/          # Tailwind CSS setup
            │   └── hooks/           # Custom React hooks
            ├── .env                 # Environment variables
            ├── package.json         # Dependencies and scripts

            
```

## 🔧 Installation & Setup

### Backend Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/task-management-system.git
   cd task-management-system/backend
   ```

2. **Install Dependencies**
   ```sh
   npm install express mongoose dotenv multer csv-parser jsonwebtoken cors bcryptjs
   ```

3. **Set Up Environment Variables**
   Create a `.env` file and add the following:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the Server**
   ```sh
   npm start
   ```
   The backend will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the Frontend Directory**
   ```sh
   cd ../frontend
   ```

2. **Install Dependencies**
   ```sh
   npm install react react-dom react-router-dom axios tailwindcss @headlessui/react

4. **Run the Frontend**
   ```sh
   npm start
   ```
   The frontend will start on `http://localhost:3000`

## 📌 API Endpoints

### **Authentication**
- `POST /api/login` - Login and get a JWT token.

### **Agent Management**
- `POST /api/agents` - Add a new agent.
- `GET /api/agents` - Get all agents.
- `DELETE /api/agents/:id` - Delete an agent and associated tasks.

### **Task Management**
- `GET /api/tasks` - Get all tasks.
- `GET /api/tasks/:agentId` - Get tasks assigned to a specific agent.
- `POST /api/upload` - Upload a CSV file and distribute tasks.

## ✅ Usage Guide

- Authenticate using `/api/login` to obtain a JWT token.
- Use the token in the `Authorization` header (`Bearer your_token`) for API requests.
- Add agents before uploading tasks.
- Ensure CSV files include headers: `FirstName, Phone, Notes`.
- Use the React frontend for easy management.

### 🎥 Project Presentation
[📹 Watch the Video]([https://drive.google.com/file/d/YOUR_VIDEO_ID/view](https://drive.google.com/file/d/1Ug_Oo_M_o0uxVMMDVAaWWElemRcpu3dC/view?usp=sharing/view))


### 🔗 Connect with Me

If you have any questions or suggestions, feel free to reach out!

GitHub: [Chirag-Tank1971](https://github.com/Chirag-Tank1971)

