const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
const connect =()=>
{
    return mongoose.connect("mongodb+srv://airbnb_clone:airbnb_MRV@cluster0.ddlde.mongodb.net/airbnb?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
}
const useSchema=  mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    rating: Number,
    location: String,
    location_nearby: String,
    img: [String],
    cancel: Boolean,
    typeofplace: String,
    instant_booking: Boolean,
    parking: Boolean,
    pool: Boolean,
    tv: Boolean,
    kitchen: Boolean,
    wifi: Boolean,
    heating: Boolean,
    hair_dryer: Boolean,
    ac: Boolean,
    pets: Boolean,
    smoking: Boolean,
    bedrooms: Number,
    bathrooms: Number,
    beds: Number,
    self_checkin: Boolean,
    review: [{ 
        id:Number,
        comment:String
    }],
    no_of_guest: Number,
    gym: Boolean,
    beach_front: Boolean,
    river_side: Boolean,
    description: String,
    hostedby: String,
    geometry:[Number]
  
})
const useSchema1=  mongoose.Schema({
    name:String,
    password: Number
})
const Hotel=mongoose.model("hotels",useSchema)

app.post("/hotel",async (req,res)=>
{ 
    const body=req.body
    const hotel=await Hotel.create(...body)
    res.status(201).json({data:hotel})
})
// app.get("/hotel", async (req,res)=>
// {
//     const hotel= await Hotel.find({}).lean().exec()
//      res.status(200).json({data:hotel})
// })
app.get("/hotel", async (req, res) => {
    let price = +req.query.price;
    let booking = req.query.instant_booking;
    let beds = +req.query.beds;
    let bedrooms = +req.query.bedrooms;
    let bathrooms = +req.query.bathrooms;
    let ac = req.query.ac;
    let parking = req.query.parking;
    let pool = req.query.pool;
    let tv = req.query.tv;
    let pets = req.query.pets;
    let smoking = req.query.smoking;
    let kitchen = req.query.kitchen;
    let self_checkin = req.query.self_checkin;
    let cancel = req.query.cancel;
    let obj = {}
    let sortObj = {}
    place ? obj.typeofplace = place : null;
    price ? obj.price = { $gt: price } : null;
    beds ? obj.beds = { $gt: beds } : null;
    bedrooms ? obj.bedrooms = { $gt: bedrooms } : null;
    bathrooms ? obj.bathrooms = { $gt: bathrooms } : null;
    ac ? obj.ac = { $eq: true } : null;
    obj.cancel = cancel==="true"? { $eq: true } : {$eq:false};
    const data = await Hotel.find(obj).sort(sortObj).lean().exec()
    res.status(200).json({ data: data })
    console.log(req.query)
})

const start= async ()=>
{
    await connect();
    app.listen("2244",()=>
    {
        console.log("Listening to port 2244")
    })
}
start()