# 🏢 Job Portal Management System

A fully-featured **REST API** backend for a Job Portal built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Tech Stack

| Technology | Usage |
|---|---|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |

---

## 👥 Roles

| Role | Description |
|---|---|
| `user` | Browse jobs, apply, withdraw applications |
| `recruiter` | Post jobs, manage their own job listings & applications |
| `admin` | Full access to everything |

---

## 📁 Project Structure

```
job-portal/
├── config/
│   └── db.js
├── controllers/
│   ├── authcontrol.js
│   ├── jobcontrol.js
│   └── applicationcontrol.js
├── middleware/
│   └── authmiddleware.js
├── models/
│   ├── User.js
│   ├── Job.js
│   └── Application.js
├── routes/
│   ├── authroutes.js
│   ├── jobroutes.js
│   └── applicationroutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd job-portal

# 2. Install dependencies
npm install

# 3. Create .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d

# 4. Start the server
npm run dev       # Development
npm start         # Production
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Register user |
| POST | `/api/auth/login` | Public | Login user |
| GET | `/api/auth/me` | Private | Get profile |

### 💼 Job Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/api/jobs` | Public | List all jobs |
| GET | `/api/jobs/search` | Public | Search jobs |
| GET | `/api/jobs/:id` | Public | Get single job |
| GET | `/api/jobs/my/jobs` | Recruiter/Admin | My posted jobs |
| POST | `/api/jobs` | Recruiter/Admin | Post a job |
| PUT | `/api/jobs/:id` | Recruiter/Admin | Update job |
| DELETE | `/api/jobs/:id` | Recruiter/Admin | Delete job |

### 📝 Application Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/applications/:jobId` | User | Apply for job |
| GET | `/api/applications/my` | User | My applications |
| DELETE | `/api/applications/:id` | User | Withdraw application |
| GET | `/api/applications/job/:jobId` | Recruiter/Admin | View job applicants |
| PUT | `/api/applications/:id/status` | Recruiter/Admin | Update app status |

---

## 🧪 Testing with Postman

Set `Authorization: Bearer <token>` in headers for protected routes.

### Search Examples
```
GET /api/jobs/search?q=developer
GET /api/jobs/search?location=Chennai
GET /api/jobs/search?type=Full-Time
GET /api/jobs/search?q=backend&location=Chennai&type=Remote
```

### Application Status Values
```
Pending → Reviewed → Accepted / Rejected
```
