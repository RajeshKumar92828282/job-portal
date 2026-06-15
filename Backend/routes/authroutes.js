
const express= require("express");
const router= express.Router();
const {
    registerUser,
    loginUser,
    getme,
}= require("../controllers/authcontrol");

const {protect} = require("../middleware/authmiddleware");

//public routs

router.post("/register",registerUser);
router.post("/login",loginUser);

//protect routes

router.post("/me",protect,getme);

module.exports=router;