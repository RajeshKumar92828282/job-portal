const express= require("express");
const mongoose= require("mongoose");
const mongoDB= require("./config/db");
const dotenv= require("dotenv");

//load env variables
dotenv.config();

//conncet db
mongoDB();
//routes import
const authroutes= require("./routes/authroutes");
const jobroutes = require("./routes/jobroutes");
const applicationroutes= require("./routes/applicationroutes");


const app =express();

//middlewae
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/api/auth",authroutes);
app.use("/api/jobs",jobroutes);
app.use("/api/applications",applicationroutes);

// ─── Health Check + API Overview ─────────────────────────────
app.get("/", (req, res) => {
  const dbState = mongoose.connection.readyState;
  res.json({
    message: "🚀 Job Portal API is running!",
    version: "1.0.0",
    roles: ["user", "recruiter", "admin"],
    database: dbState === 1 ? "connected" : "not connected",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        me: "GET /api/auth/me",
      },
      jobs: {
        listAll: "GET /api/jobs",
        search: "GET /api/jobs/search?q=&location=&type=",
        getOne: "GET /api/jobs/:id",
        myJobs: "GET /api/jobs/my/jobs",
        create: "POST /api/jobs",
        update: "PUT /api/jobs/:id",
        delete: "DELETE /api/jobs/:id",
      },
      applications: {
        apply: "POST /api/applications/:jobId",
        myApplications: "GET /api/applications/my",
        withdraw: "DELETE /api/applications/:id",
        jobApplicants: "GET /api/applications/job/:jobId",
        updateStatus: "PUT /api/applications/:id/status",
      },
    },
  });
});


// ─── 404 Handler ──────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: "❌ Route not found" });
});

// ─── Global Error Handler ─────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "❌ Something went wrong!",
    error: err.message,
  });
});
//start server

const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`✅ server is running http://localhost:${PORT}`);
});

