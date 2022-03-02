const express=require("express");
const app=express();
const HotelController=require("./controllers/hotel.controller")
const cors = require('cors')
const paymentController = require("./controllers/payment.controller")
const UserController=require("./controllers/user.controller")

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:8007',
  }),
)
app.use("/payment",paymentController );
app.use("/hotel",HotelController);
app.use('/user',UserController);
module.exports=app