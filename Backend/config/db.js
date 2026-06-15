const mongoose= require("mongoose");

const mongoDB= async () => {
  try{
      const connect= await mongoose.connect(process.env.MONGO_URI);
      console.log(`✅ mongodb connect: ${connect.connection.host}`);
  }catch(error){
    console.error(`❌ error: ${error.message}`);
      
  }
}
module.exports = mongoDB;