const mongoose=require("mongoose");
const dbConnect=async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=dbConnect;
