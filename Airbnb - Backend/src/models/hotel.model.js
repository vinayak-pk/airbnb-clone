const mongoose = require('mongoose')

const HotelSchema=mongoose.Schema({
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
},{
    versionKey:false,
    timeSpan:true
})

const Hotel=mongoose.model("hotel",HotelSchema);
module.exports=Hotel