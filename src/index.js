
express = require("express");
bodyParser = require("body-parser");
var cors = require("cors");
var server = express();
const path = require("path");
morgan = require("morgan");


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.set('port', 15000);
server.set('static',path.join(__dirname, 'static'));
server.set('view engine', 'html');

//routes
// server.use(require('./routes/index'));
server.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , 'index.html'));
    
});
server.get('/img1', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/img1.jpg'));
    
});
server.get('/img2', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/img2.jpg'));
    
});
server.get('/img3', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/img3.jpg'));
    
});
server.get('/img4', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/img4.jpg'));
    
});

server.get('/face', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/face.jpg'));
    
});
server.get('/instagram', (req,res) =>{
    res.sendFile(path.join(__dirname ,'../static/instagram.jpg'));
    
});

server.listen(server.get('port'), () => {
    console.log("Server running on port",server.get('port'));
  });