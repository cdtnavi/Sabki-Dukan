const express = require('express');
const server = express();              //initailizing the making of an express app
const port = 3000;
var cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');


const { appendFile, fstat } = require('fs');
const { retryWhen } = require('rxjs');
server.use(cors())

server.use(express.urlencoded({extended:false}));
server.use(express.json());


const DIR  = 'src/uploads';
const fs = require('fs');
let mystorage  = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, DIR);
    },
    filename: (req, file, cb) =>{
        picname = Date.now() + '-' + Math.round(Math.random() * 1E9)+ file.originalname;
        cb(null, picname);
    }
});
let upload = multer({storage:mystorage})  //we will further use this variable during the database connectivity to use this disk engine

mongoose.connect("mongodb://localhost/hackathon",function(err){
    if (err){
        console.log(err)
    }
    else{
        console.log("Connection to MongoDB successful")
    }
})
server.listen(port,()=>{
    console.log("The server is running on "+""+port)

});


var SignupSchema = new mongoose.Schema({name:String,phone:String,email:{type:String,unique:true},
    password:String,buisnessname:String,usertype:String,buisnesstype:String,address:String,pic:String},{versionKey:false});
var SignupModel = mongoose.model("signupmodel",SignupSchema,"signup"); //if the collection name(3rd argument won't be given then it will make the plural of the Model name
//basically this SignupSchema is a schema based variable of the Mongooose

server.post("/api/signup",upload.single('pic'),(req,res)=>{
    if (req.file == null){
        picname = "no-image.png"  //from the above disk engine 
    }
    var newsignup = new SignupModel({name:req.body.pname,phone:req.body.phone,email:req.body.emailname,buisnesstype:req.body.buisnesstype,password:req.body.pass,usertype:"Shopkeeper",address:req.body.address,pic:picname,buisnessname:req.body.buisnessname});                    
//with this record has been stored temporarily, to save it permanently we will save it in the data base

    
    newsignup.save((err)=>
    {
        if (err){
            console.log(err);
            res.send("0")
        }
        else{
            res.send("1")
        }
    })

});
server.post("/api/login",(req, res)=>{
  
    SignupModel.find({username:req.body.uname,password:req.body.pass},function(err,data){
        
        if (err){
            console.log(err)
            res.json({ 
                "errdata":err,
                "statuscode":-1
            })

        }
        else{
            
            if (data.length==0)
            {

             res.json({
                
                "statuscode":0

            })
            }
            else{
                
                res.json({
                    "statuscode":1,
                    "userdata":data
                })
            }
           
        }
    })

})
var AdvertisementSchema = new mongoose.Schema({Gender:String,Advertisement:String},{versionKey:false});
var AdvtModel = mongoose.model("Advtmodel",AdvertisementSchema,"Advtmodel");

server.post("/api/advertisement",(req,res)=>
{
    var newadvt = new AdvtModel({Gender:req.body.gender,Advertisement:req.body.advt});
    newadvt.save(function(err){
        if (err){
            res.send(err)
        }
        else{
            res.send("added")
        }
    })
})

server.get("/api/fetchjobs",(req,res)=>{
    AdvtModel.find(function(err,data)
    {
        if (err){
            res.json(err)
        }
        else
        {
            res.json(data)
        }
    })
})


