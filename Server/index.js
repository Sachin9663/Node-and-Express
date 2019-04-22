const express=require('express');
const path=require('path');
var fs=require('fs');

const app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));




const PORT=process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/submit-student-data', (req, res)=> {
        var user={
                "id":6,
                "name": req.body.Name,
                "username": req.body.userName,
                "email": req.body.email,
                "password":req.body.password
            }
            
        
        console.log(user);
        
        fs.readFile(path.join(__dirname,'Public','user.json'),'utf8',(err,data)=>{
            if(err){
                console.log("Error is ",err);
                return err;
            }
           
            console.log("data is ",typeof data);
            var obj= JSON.parse(data);
            obj.push(user);
            console.log('>>',obj);
           
           
           fs.writeFile(path.join(__dirname,'Public','user.json'),JSON.stringify(obj),'utf8',(err2,data)=>{
               if(err2){
                   console.log('err2>>>>>>>>>>', err2);
               }
           });
        });
        
        res.send(user.username + ' Submitted Successfully!');
    });



    app.get('/',(req,res)=>{ 
        res.send("<h1>Welcome to nodejs Server</h1>");
        
    })
    app.get('/api/getlist',(req,res)=>{
    // res.sendFile(path.join(__dirname,'Public','index.html'));
    res.sendFile(path.join(__dirname,'Public','user.json'));
    })

    app.get('/api/about',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'Public','about.text'));
    
    });

    app.listen(PORT,()=>{
    console.log(`Server started at http://127.0.0.1:${PORT}`);
    });
