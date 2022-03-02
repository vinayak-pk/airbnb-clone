const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const UserSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    },
    {
        versionKey:false,
        timeSpan:true
    }
)
UserSchema.pre("save",function(next)
{
    if(!this.isModified("password"))
    {
        next()
    }
    let hash=bcrypt.hashSync(this.password,10)
    this.password=hash
    next()
})
UserSchema.methods.checkPassword=function(password)
{
      const hashedpassword=this.password
      return new Promise(function(resolve, reject){
        bcrypt.compare(password,hashedpassword,(err,same)=>{
            if(err){
                return reject(err);
            }
            return resolve(same);
        })
    })
}
const User=mongoose.model("user",UserSchema);
module.exports=User