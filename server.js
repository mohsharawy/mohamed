const http = require('http');
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./server/basicRoutes')


const dotenv = require('dotenv');
dotenv.config()


app.use(cors());
app.use(express.json());
app.use(express.static("express"));
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.json({limit: '200mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true, parameterLimit: 50000 }));


app.use('/api', routes)


app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express'));
    //__dirname : It will resolve to your project folder.
});

app.use('/showClients', function(req,res){
    res.sendFile(path.join(__dirname+'/express/showClients.html'));
    //__dirname : It will resolve to your project folder.
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

mongoose.connect(process.env.mongoURL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log("Mongoose is connected xD ..."))
    .catch(err => console.log(err));



const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is run on port ${port}`))