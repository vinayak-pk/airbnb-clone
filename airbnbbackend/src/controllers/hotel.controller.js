const Hotel =require("../models/hotel.model")
const express=require("express");
const router=express.Router();
const filterData=require("../utils/filter")


router.post('/', async (req, res) => {
  try{
    const body = req.body
    const hotel = await Hotel.create(...body)
    res.status(201).json({ data: hotel })
  }catch(err){
    console.log(err)
    res.status(404).json({ status:"error",message:"Something went wrong" })
  }
 
});

router.get('/room/:id',async (req, res)=>{
  try{
    let {id}=req.params;
    console.log(req.params)
    const hotel= await Hotel.findById(id).lean().exec()
    res.status(201).json({ data: hotel })
  }catch(err){
    res.status(404).json({ status:"error",message:"Something went wrong" })

  }
 
})


router.get("/all", async (req,res)=>
{
  try{
    let page=+req.query.page;
    let page_limit=+req.query.page_limit;
    const hotel= await Hotel.find({}).skip(page*page_limit).limit(page_limit).lean().exec()
    res.status(200).json({data:hotel})
  }catch(err){
    res.status(404).json({ status:"error",message:"Something went wrong" })
  }
    
})
router.get('/', async (req, res) => {
  try{
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
  }catch(err){
    res.status(404).json({ status:"error",message:"Something went wrong" });
  }
  
  // console.log(req.query)
})
module.exports=router


