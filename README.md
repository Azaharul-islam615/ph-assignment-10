#  Freelance MarketPlace

### 🌐 Live Site:
[https://your-live-site-url.netlify.app](https://your-live-site-url.netlify.app)](https://exquisite-smakager-ae5a74.netlify.app/)  
### 💻 Server (API) Live URL:
 [https://your-server.vercel.app](https://your-server.vercel.app)  

---

## 🧩 Project Overview (প্রকল্প সারসংক্ষেপ)

Freelance MarketPlace is a full-stack web application where users can Add, Read, Update, and Delete (CRUD) jobs or tasks. Other users can accept jobs posted by others, which will then appear on the “My Accepted Tasks” page. The application is built using React (Vite), Node.js + Express.js, MongoDB Atlas, and Firebase Authentication.



## Technologies Used:

Frontend: React (Vite), TailwindCSS

Backend: Node.js, Express.js

Database: MongoDB Atlas

Authentication: Firebase Authentication

Deployment: Netlify (Frontend), Vercel (Backend)

## Key Features:

✅ User Authentication (Firebase) — Supports Email/Password & Google Login

✅ CRUD Operations — Add, Read, Update, Delete Jobs

✅ Accept Job System — Users can accept jobs posted by others, visible in “My Accepted Tasks”

✅ Responsive UI — Mobile, Tablet, Desktop

✅ Dark/Light Theme Toggle — Switch between Dark and Light mode

✅ Protected Routes — /addJob, /myAddedJobs, /updateJob/:id, /my-accepted-tasks accessible only to logged-in users

✅ Toast Notifications — Using react-toastify for success/failure messages

✅ MongoDB + Express API Integration — Fetch and update data directly from database

✅ Smooth SPA Deployment — Hosted on Netlify + Vercel without reload errors

## Dependencies:

react, react-dom, react-router-dom, tailwindcss

express, mongoose, cors, dotenv

firebase, react-toastify, axios

Steps to Run Locally:

Clone the repository:

git clone https://github.com/Azaharul-islam615/freelance-marketplace.git


## Install dependencies:

cd frontend && npm install
cd ../backend && npm install


Setup .env file with Firebase & MongoDB credentials.

Run the project:

npm run dev   # Frontend
npm start     # Backend


Open http://localhost:5173 in your browser.
