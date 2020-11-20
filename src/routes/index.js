const express= require('express');
const router= express.Router();
const path= require('path');

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , '../views/index.html'));
    
});
router.get('/img1', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/images/img1.jpg'));
    
});
router.get('/styles', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/styles.css'));
    
});
module.exports = router;