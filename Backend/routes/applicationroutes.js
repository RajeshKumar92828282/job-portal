const express= require("express");
const router= express.Router();

const{
     applyForJob,
    getMyApplications,
    getApplicationsForJob,
    updateApplicationsStatus,
     withdrawApplication,
} = require("../controllers/applicationcontrol");

const {protect,recruiterOrAdmin} = require("../middleware/authmiddleware");

//user routes
router.get("/my",protect,getMyApplications);
router.post("/:jobId",protect,applyForJob);
router.delete("/:id",protect,withdrawApplication);

//recruiter Or Admin

router.get("/job/:jobId",protect,recruiterOrAdmin,getApplicationsForJob);
router.put("/:id/status",protect,recruiterOrAdmin,updateApplicationsStatus);

module.exports= router;