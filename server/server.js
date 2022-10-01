const express=require('express');
const app=express();
const cors=require('cors')

const port =5000 || process.env.PORT;

const bodyparser=require('body-parser');



//global middleware
app.use(bodyparser.json())
app.use(cors());

//route:post
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
 if(email==="thammaliabhishek05@gmail.com"){
    if(password==="12345678"){
        res.json({"log":true})
        
    }else{
        res.json({"log":false})
    }
}else{
    res.json({"log":false})
}
res.end()
})







app.listen(port,()=>{
    console.log("hi connect to port")
})