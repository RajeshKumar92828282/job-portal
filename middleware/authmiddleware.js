const jwt= require("jsonwebtoken");
const User = require("../models/User");



// protect routes jwt

const protect= async (req,res,next)=>{
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "❌ Not authorized, invalid token" });
    }
  } else {
    return res.status(401).json({ message: "❌ No authorized, no token" });
  }
};
   // admin only 
   const adminonly= (req,res,next) =>{
      if(req.user && req.user.role==="admin"){  // check if the admin exists
          next(); //allow access
      }else{
        return res.status(403).json({message:"❌ access denied, admin only"}); // Forbidden if not admin
      }
   };


   //Recruiter
   const recruiter = (req,res,next)=>{
    if(req.user&& req.user.role==="recruiter"){  //check if the recruiter exists
        next();//allow access
    }else{
        return res.status(403).json({message:"❌ access denied,recruiter only"}); //forbidden if not recruiter
    }
   };

   //Recruiter or Admin
   const recruiterOrAdmin = (req, res, next) => {
     if (req.user && (req.user.role === "recruiter" || req.user.role === "admin")) {
       next();
     } else {
       return res.status(403).json({ message: "❌ access denied, recruiter or admin only" });
     }
   };

module.exports={protect,adminonly,recruiter,recruiterOrAdmin};