const mongoose=require('mongoose');
const sliderImageSchema=mongoose.Schema({
    name: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = mongoose.model('sliderImage', sliderImageSchema);