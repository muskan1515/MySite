const fs=require('fs');
const sliderImage=require('../model/SliderImage');
const formidable=require('express-formidable');
const Category=require('../model/Category');

exports.getImageSlider= async (req,res,next)=>{
    const images= await sliderImage.find();
    res.send(images);
};

exports.sendImageSlider=((req,res,next)=>{
    console.log(req.files);
    const ImagePath=req.files.file.path;
    const data=new sliderImage({
        name:req.files.file.name,
        img:{
            data:fs.readFileSync(ImagePath),
            contentType:req.files.file.type
        }
    });

    data.save().then(result=>{
        res.status(200).send('OK');
    }).catch(err=>{
        console.log(err);
        res.status(400).send('Error');
    });
    
});

exports.getCategory= async (req,res,next)=>{
    const categories= await Category.find();
    res.send(categories);
};

exports.postCategory= async (req,res,next)=>{
    const ImagePath=req.files.image.path;
    const category=new Category({
        name: req.fields.name ? req.fields.name : '',
        description:req.fields.description ? req.fields.description : '',
        status:req.fields.status ? req.fields.status : 'active',
        img:
        {
            data: fs.readFileSync(ImagePath),
            contentType: req.files.image.type
        }
    });
    category.save().then(result=>{
        fs.unlinkSync(ImagePath);
        res.status(200).send('OK');
    }).catch(err=>{
        console.log(err);
        res.status(400).send('Error');
    });
};