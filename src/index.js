
express = require("express");
bodyParser = require("body-parser");
var cors = require("cors");
var server = express();
const path = require("path");
morgan = require("morgan");


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.set('port', 20000);
server.set('views',path.join(__dirname, 'views'));
server.set('view engine', 'html');

//routes
server.use(require('./routes/index'));
// server.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname , '/views/index.html'));
    
// });
//
server.listen(server.get('port'), () => {
    console.log("Server running on port",server.get('port'));
  });