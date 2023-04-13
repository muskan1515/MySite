const mongoose=require('mongoose');
const cateogrySchema=mongoose.Schema({
    name: String,
    description:String,
    status:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = mongoose.model('Category', cateogrySchema);