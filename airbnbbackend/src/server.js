const app=require("./index");
const connect =require("./config/db")
require("dotenv").config()


app.listen(process.env.PORT,async()=>{
    connect()
    console.log(`Listening to port ${process.env.PORT}`)

})