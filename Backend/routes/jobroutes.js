const express = require("express");
const router= express.Router();

const {
    createjob,
    getalljobs,
    searchalljobs,
    getMyPostedJobs,
    getJobById,
    updatejob,
    deletejob,
} = require("../controllers/jobcontrol");

const {protect ,recruiterOrAdmin} = require("../middleware/authmiddleware");

//public routes
router.get("/",getalljobs);
router.get("/search",searchalljobs);

//protect routes (recruiter Or Admin)

router.get("/my/jobs",protect,getMyPostedJobs);
router.post("/",protect,createjob);
router.put("/:id",protect,recruiterOrAdmin,updatejob);
router.delete("/:id",protect,recruiterOrAdmin,deletejob);

// Public (must be last to avoid catching /search /my)

router.get("/:id",getJobById);

module.exports = router;
