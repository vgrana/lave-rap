const express= require('express');
const router= express.Router();
const path= require('path');

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , '../views/index.html'));
    
});
router.get('/img1', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/img1.jpg'));
    
});
router.get('/img2', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/img2.jpg'));
    
});
router.get('/img3', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/img3.jpg'));
    
});
router.get('/img4', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/img4.jpg'));
    
});
router.get('/estilos', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/estilos.css'));
    
});
router.get('/face', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/face.jpg'));
    
});
router.get('/instagram', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../views/instagram.jpg'));
    
});
module.exports = router;