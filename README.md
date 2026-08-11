# 🚌 Cloud Bus Pass System

A frontend-based web application that provides a digital platform for students and passengers to apply for bus passes, track application status, and access an approved digital bus pass.

🌐 **Live Demo:**
https://jpugazholi.github.io/CodeAlpha-cloud-computing-Internship_Task3_CloudBusPass/

---

## 🚀 Project Overview

The **Cloud Bus Pass System** is a web-based bus pass management application developed as part of the **CodeAlpha Cloud Computing Internship – Task 3**.

The system provides separate user and administrator workflows for managing bus pass applications digitally.

### 👤 Users can:

* Register an account
* Login through the user login option
* Access a user dashboard
* Apply for a bus pass
* Track application status
* View an approved digital bus pass
* Print or save the digital pass as PDF
* Logout securely

### 👨‍💼 Administrators can:

* Login through the same login page using the Admin option
* Access the Admin Dashboard
* View submitted applications
* Monitor application statistics
* Approve applications
* Reject applications
* Logout securely

---

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
* Protected User Pages

### 👨‍💼 Admin Module

* Admin Login
* Admin Dashboard
* Application Management
* Application Statistics
* Approve Applications
* Reject Applications
* Protected Admin Dashboard
* Admin Logout

---

## 🛠️ Technologies Used

* **HTML5** – Web page structure
* **CSS3** – Styling and responsive user interface
* **JavaScript** – Application logic and DOM manipulation
* **Browser LocalStorage** – Client-side data persistence
* **Git** – Version control
* **GitHub** – Source code hosting
* **GitHub Pages** – Live deployment
* **Visual Studio Code** – Development environment
* **Live Server** – Local development and testing

---

## 💾 Data Storage

This project is currently implemented as a **frontend-based prototype**.

User accounts, login sessions, and bus pass applications are stored using the browser's **LocalStorage**.

LocalStorage provides client-side persistence for the prototype, allowing the application to function without a separate backend server or database.

> ⚠️ **Note:** LocalStorage is browser-based storage and is not suitable for storing sensitive information in a production application. A production version should use a secure backend, database, password hashing, and server-side authentication.

---

## 🔐 Authentication

### User Login

Users can register an account and login using their registered email and password.

### Admin Login

Administrators can select the **Admin** option from the login page and access the Admin Dashboard using the configured administrator credentials.

The Admin Dashboard includes an access check to prevent unauthenticated users from directly accessing the page.

> ⚠️ **Prototype Note:** Authentication in this version is client-side and is intended for demonstration purposes. Production applications should implement server-side authentication and role-based authorization.

---

## 🔄 Application Flow

```text
Register
   ↓
User Login
   ↓
User Dashboard
   ↓
Apply for Bus Pass
   ↓
Application Status: Pending
   ↓
Admin Login
   ↓
Admin Dashboard
   ↓
Approve / Reject Application
   ↓
User Status Updated
   ↓
Digital Pass
   ↓
Print / Save as PDF
```

---

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

---

## ▶️ How to Run Locally

1. Clone or download the repository.
2. Open the project folder in **Visual Studio Code**.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click `index.html`.
6. Select **Open with Live Server**.
7. Register a new user account.
8. Login as a User.
9. Apply for a bus pass.
10. Login as Admin using the **Admin** login option.
11. Approve or reject the application.
12. Login again as the User.
13. Check the updated application status.
14. View the approved Digital Pass.

---

## 🌐 Live Deployment

The project is deployed using **GitHub Pages**.

🔗 **Live Website:**

https://jpugazholi.github.io/CodeAlpha-cloud-computing-Internship_Task3_CloudBusPass/

---

## 🎯 Internship Project

This project was developed as part of the **CodeAlpha Cloud Computing Internship – Task 3: Cloud-Based Bus Pass System**.

The project demonstrates practical experience in:

* Frontend web development
* JavaScript programming
* DOM manipulation
* Form validation and handling
* Client-side authentication flow
* LocalStorage data management
* User and Admin workflows
* Application status management
* Digital pass generation
* Git and GitHub
* GitHub Pages deployment
* Testing and debugging

---

## 🚀 Future Enhancements

The current version is a frontend-focused prototype. It can be extended into a production-ready cloud application by adding:

* Java Spring Boot / Node.js backend
* MySQL or PostgreSQL database
* REST APIs
* Server-side authentication
* Password hashing
* Role-based authorization
* Secure session management
* Cloud database integration
* Cloud backend deployment
* Dynamic cloud resource provisioning
* Scalable infrastructure for high traffic
* Online payment and pass pricing management
* Email/SMS notifications

---

## ⚠️ Project Scope

This project is developed as an **internship prototype** and demonstrates the complete frontend workflow of a digital bus pass management system.

The current implementation uses browser LocalStorage instead of a production database or backend server.

The GitHub Pages deployment provides access to the frontend application online, while a future production version can introduce a backend API, database, authentication services, and scalable cloud infrastructure.

---

## 👩‍💻 Author

**Pugazholi J**

B.Tech Information Technology Student

---

⭐ If you like this project, feel free to explore the source code and share your feedback.

