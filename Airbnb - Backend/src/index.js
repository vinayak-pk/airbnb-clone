const express=require("express");
const app=express();
const HotelController=require("./controllers/hotel.controller")
const cors = require('cors')



app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)

app.use("/hotel",HotelController)
module.exports=app