const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name: String,
    description:String,
    price:Number,
    status:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = mongoose.model('Category', cateogrySchema);