const mongoose=require("mongoose")
require("dotenv").config()
const connect=()=>{
    return mongoose.connect(`mongodb+srv://MeeraMendhe:${process.env.DPPASSWORD}@cluster0.4maw9.mongodb.net/airbnb`)
}
module.exports=connect;