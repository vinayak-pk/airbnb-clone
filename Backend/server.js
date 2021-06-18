const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)
app.use("/payment", require("./routes/payment"));
const connect = () => {
  return mongoose.connect(
    'mongodb+srv://airbnb_clone:airbnb_MRV@cluster0.ddlde.mongodb.net/airbnb?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
}
const useSchema = mongoose.Schema({
  id: Number,
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
  review: [
    {
      id: Number,
      comment: String,
    },
  ],
  no_of_guest: Number,
  gym: Boolean,
  beach_front: Boolean,
  river_side: Boolean,
  description: String,
  hostedby: String,
  geometry: [Number],
})
const Hotel = mongoose.model('hotels', useSchema)

app.post('/hotel', async (req, res) => {
  const body = req.body
  const hotel = await Hotel.create(...body)
  res.status(201).json({ data: hotel })
})

app.get('/room/:id',async (req, res)=>{
  let {id}=req.params;
  console.log(req.params)
  const hotel= await Hotel.findById(id).lean().exec()
  res.status(201).json({ data: hotel })
})

app.get("/hotel/all", async (req,res)=>
{
      let page=+req.query.page
      let page_limit=+req.query.page_limit
    //  console.log(page,page_limit)
    //  console.log(req.params)
      const hotel= await Hotel.find({}).skip(page*page_limit).limit(page_limit).lean().exec()
      res.status(200).json({data:hotel})
})


app.get('/hotel', async (req, res) => {
  let ans = filterData(req.query)
  let data
  if(ans.length!==0)
  {
     data = await Hotel.find({ $and: ans }).lean().exec()
  }
  else
  {
     data = await Hotel.find({}).lean().exec()
  }
  //console.log(ans)
 
  res.status(200).json({ data: data })
  // console.log(req.query)
})


const start = async () => {
  await connect()
  app.listen('2244', () => {
    console.log('Listening to port 2244')
  })
}
start()

function filterData(obj) {
 
  let arr = []
    for (let key in obj) {
      let temp = false
      if (
        key === 'price' ||
        key === 'beds' ||
        key === 'bedrooms' ||
        key === 'bathrooms'||
        key==="typeofplace"
      ) {
        temp = {$gte :obj[key]}
      } else if (obj[key] === 'true') {
        temp = true
      }
  
      arr.push({
        [key]: temp,
      })
    }
  //  console.log(arr)
    return arr
}