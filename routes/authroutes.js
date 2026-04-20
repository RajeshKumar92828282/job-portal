
const express= require("express");
const router= express.Router();
const {
    registeruser,
    loginuser,
    getme,
}= require("../controllers/authcontrol");

const {protect} = require("../middleware/authmiddleware");

//public routs

