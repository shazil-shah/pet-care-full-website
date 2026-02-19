const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  username:String,
  text:String,
  image:String,
  likes:[{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
  comments:[{
    user:String,
    text:String,
    createdAt:{type:Date, default:Date.now}
  }]
});
module.exports = mongoose.model("Blog", blogSchema);
