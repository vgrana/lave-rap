const express= require('express');
const router= express.Router();


router.get('/', (req, res) => {
    // res.sendFile('./views/index.html')
    res.render("consoleholis");
});

module.exports = router;