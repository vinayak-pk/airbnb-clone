const Hotel =require("../models/hotel.model")
const express=require("express");
const router=express.Router();
const filterData=require("../utils/filter")


router.post('/', async (req, res) => {
  const body = req.body
  const hotel = await Hotel.create(...body)
  res.status(201).json({ data: hotel })
})
router.get("/all", async (req,res)=>
{
      let page=+req.query.page
      let page_limit=+req.query.page_limit
    //  console.log(page,page_limit)
    //  console.log(req.params)
      const hotel= await Hotel.find({}).skip(page*page_limit).limit(page_limit).lean().exec()
      res.status(200).json({data:hotel})
})
router.get('/', async (req, res) => {
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
module.exports=router


