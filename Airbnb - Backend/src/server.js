const app=require("./index");
const connect =require("./config/db")
require("dotenv").config()


app.listen(process.env.PORT,async()=>{
    connect()
    console.log(`I am listening to port ${process.env.PORT}`)

})