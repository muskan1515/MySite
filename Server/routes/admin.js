const express=require('express');
const router= express.Router();

const adminController=require('../controller/admin');

router.get('/sliderImage',adminController.getImageSlider);

router.post('/sliderImage',adminController.sendImageSlider);

router.get('/category',adminController.getCategory);

router.post('/category',adminController.postCategory);

module.exports=router;
