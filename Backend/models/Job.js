const mongoose = require("mongoose");

const jobSchema= new mongoose.Schema(
    {
     
    title:{
       type:String,
       required:[true,"Job title is require"],
       trim:true,
    },
    company:{
      type:String
    },

    location:{
      type:String,
      required:[true,"location is required"],

    },
     description:{
       type:String,
       required:[true,"Job description is required"],

    },
     
    salary:{
      type:String,
      default:"Not disclosed",
    },

    type:{
      type:String,
      enum:["Full-Time","Part-Time","Internship","Remote"],
      default:"Full-Time",
    },

    postedBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    postedByrole:{
           type:String,
           enum:["user","admin","recruiter"],
           required:true,
    },
},
{timestamps : true}
);

module.exports= mongoose.model("Job" , jobSchema);