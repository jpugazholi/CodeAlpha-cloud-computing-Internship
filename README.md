# 🚌 Cloud Bus Pass System

A frontend-based web application that allows students and passengers to apply for bus passes online, track application status, and access an approved digital bus pass.

## 🚀 Project Overview

The **Cloud Bus Pass System** provides a simple digital platform for managing bus pass applications.

Users can:

* Register an account
* Login securely
* Apply for a bus pass
* Track application status
* View an approved digital bus pass
* Print or save the digital pass as PDF
* Logout securely

Administrators can:

* Login through the same login page using the Admin option
* View submitted applications
* Approve applications
* Reject applications
* Monitor application statistics

## ✨ Features

### 👤 User Module

* User Registration
* User Login
* User Dashboard
* Bus Pass Application
* Application Status Tracking
* Digital Bus Pass
* Print / Save Digital Pass
* Logout

### 👨‍💼 Admin Module

* Admin Login
* Admin Dashboard
* View Applications
* Application Statistics
* Approve Applications
* Reject Applications
* Admin Logout

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Browser LocalStorage
* Visual Studio Code
* Git & GitHub
* Live Server

## 💾 Data Storage

This project is a **frontend-based prototype**.

Application and user data are stored using the browser's **LocalStorage**.

LocalStorage provides client-side data persistence for this prototype, so a separate backend server or database is not required to run the application locally.

> Note: LocalStorage is browser storage, not a production cloud database.

## 🔐 Login

### User Login

Users can register and login using their registered credentials.

### Admin Login

Select **Admin** from the Login As dropdown.

Demo admin credentials:

```text
Email: admin@cloudbuspass.com
Password: Admin@123
```

> These credentials are for the internship prototype only. Production applications should use server-side authentication and authorization.

## 🔄 Application Flow

```text
Register
   ↓
User Login
   ↓
Dashboard
   ↓
Apply for Bus Pass
   ↓
Application Status: Pending
   ↓
Admin Login
   ↓
Admin Dashboard
   ↓
Approve / Reject
   ↓
User Status Updated
   ↓
Digital Pass
   ↓
Print / Save as PDF
```

## 📁 Project Structure

```text
CLOUD-BUS-PASS-SYSTEM
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── admin-dashboard.html
├── apply-pass.html
├── dashboard.html
├── digitalpass.html
├── index.html
├── login.html
├── register.html
├── status.html
└── README.md
```

## ▶️ How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click the file.
6. Select **Open with Live Server**.
7. Register a new user account.
8. Login as a User and apply for a bus pass.
9. Login as Admin and approve or reject the application.
10. Login again as User to view the updated status and digital pass.

## 🎯 Internship Project

This project was developed as a frontend-focused internship project demonstrating:

* Frontend web development
* JavaScript DOM manipulation
* Form handling
* Client-side authentication flow
* LocalStorage data management
* Admin dashboard functionality
* Application status management
* Digital pass generation
* Responsive UI design

## ⚠️ Project Scope

This version is designed as a **frontend prototype**.

For a production cloud deployment, the application can be extended with:

* Java Spring Boot / Node.js backend
* MySQL or PostgreSQL database
* Server-side authentication
* Password hashing
* Role-based authorization
* REST APIs
* Cloud deployment
* Secure database storage

## 👩‍💻 Author

**Pugazholi J**

B.Tech Information Technology Student

---

⭐ If you like this project, feel free to explore the source code and improvements.
