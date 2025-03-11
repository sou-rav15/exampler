const mongoose =require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
if(!process.env.MONGODB_URI){
    throw new Error(
        "please provide MongoDB_URI in the .env file"
    )
}
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb conncect error",error);
        process.exit(1);
    }
}
module.exports= connectDb;