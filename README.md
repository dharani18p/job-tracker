# MERN Job Application Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A full-stack MERN (MongoDB, Express, React, Node.js) application built to track and manage job applications. This project fulfills all requirements of the CStream MERN Stack Assessment, including full CRUD functionality and frontend/backend validation.

## 🚀 Live Demo

[View the live project deployed here](https://dharani-job-tracker.netlify.app/)

---

## ✨ Features

- **Create:** Add new job applications with a form for company name, job title, application date, and status.
- **Read:** View all job applications in a clean, responsive card-based UI.
- **Update:** Edit any field of an existing application on a dedicated edit page.
- **Delete:** Remove an application from the database with a confirmation prompt.
- **Validation:**
  - **Frontend:** Real-time form validation (e.g., Company Name must be > 3 characters, Date cannot be in the future).
  - **Backend:** Robust Mongoose schema validation to ensure data integrity before saving to the database.

---

## 🛠️ Tech Stack & Deployment

- **Frontend:**
  - React (Functional Components & Hooks)
  - React Router
  - Axios
  - CSS
- **Backend:**
  - Node.js
  - Express
  - Mongoose
  - CORS
- **Database:**
  - MongoDB (hosted on MongoDB Atlas)
- **Deployment:**
  - Backend API deployed on **Render**
  - Frontend deployed on **Netlify**

---

## 📂 Project Structure

This project is a monorepo containing two main folders:

- `/frontend`: Contains the complete React application.
- `/backend`: Contains the Node.js/Express server.
  - `server.js`: Contains the Express server, database connection, Mongoose model, API routes, and controller logic.
  - `.env`: Contains secret keys for the database connection and port.

---

## 🏃‍♂️ How to Run Locally

### Prerequisites

- Node.js (v18 or later)
- A MongoDB Atlas account (or a local MongoDB instance)

### 1. Clone the Repository

```bash
git clone https://github.com/dharani18p/job-tracker.git
cd job-tracker
2. Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in the /backend directory and add your variables:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
Copy code
node server.js
Your API will be running at: http://localhost:5000

3. Frontend Setup
Open a new terminal and navigate to the frontend folder:

bash
Copy code
cd frontend
npm install
Important: In frontend/src/api/jobApi.js, ensure the baseURL points to your backend server:

javascript
Copy code
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', 
});
Start the React development server:

bash
Copy code
npm start
Your application will open at: http://localhost:3000
