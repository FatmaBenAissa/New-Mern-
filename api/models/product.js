const mongoose=require("mongoose");
const schema=mongoose.Schema;

const productSchema = new schema({
  nameproduct:String,
  img:String,
  price:Number,
  category:String,

});

const Product = mongoose.model('Product', productSchema);
module.exports=Product