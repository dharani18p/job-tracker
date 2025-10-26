# MERN Job Application Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A full-stack MERN (MongoDB, Express, React, Node.js) application built to track and manage job applications. This project fulfills all requirements of the CStream MERN Stack Assessment, including full CRUD functionality and frontend/backend validation.



## 🚀 Live Demo

**View the live project deployed here:**
**[https://dharani-job-tracker.netlify.app/](https://dharani-job-tracker.netlify.app/)**

## ✨ Features

* **Create:** Add new job applications with a form for company name, job title, application date, and status.
* **Read:** View all job applications in a clean, responsive card-based UI.
* **Update:** Edit any field of an existing application on a dedicated edit page.
* **Delete:** Remove an application from the database with a confirmation prompt.
* **Validation:**
    * **Frontend:** Real-time form validation (e.g., Company Name must be > 3 characters, Date cannot be in the future).
    * **Backend:** Robust Mongoose schema validation to ensure data integrity before saving to the database.

## 🛠️ Tech Stack & Deployment

* **Frontend:**
    * React (Functional Components & Hooks)
    * React Router
    * Axios
    * CSS
* **Backend:**
    * Node.js
    * Express
    * Mongoose
    * CORS
* **Database:**
    * MongoDB (hosted on MongoDB Atlas)
* **Deployment:**
    * Backend API deployed on **Render**
    * Frontend deployed on **Netlify**

## 🏃‍♂️ How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* A MongoDB Atlas account (or a local MongoDB instance)

### 1. Clone the Repository

```bash
git clone [https://github.com/dharani18p/job-tracker.git](https://github.com/dharani18p/job-tracker.git)
cd job-tracker
