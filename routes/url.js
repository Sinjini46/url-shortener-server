const express=require('express');
const {handlegeneratedurl,handlegetAnalytics}=require('../controllers/url');
const router=express.Router();

router.post("/",handlegeneratedurl);

router.get('/analytics/:shortid',handlegetAnalytics)
module.exports=router;