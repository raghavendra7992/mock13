const mongoose=require("mongoose")
require("dotenv").config()
const connect=async()=>{
    return mongoose.connect("mongodb+srv://r:r@cluster0.rgobshm.mongodb.net/raghav?retryWrites=true&w=majority")
}
module.exports=connect;