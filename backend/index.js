const express=require('express');
const Port=3000;
const {user,Admin,Course}=require('./db');

const app=express();

app.use(express.json());
//admin routes
app.post('/isadmin', async(req,res)=>{
    //check admin
})

app.get('/alladmin',async(req,res)=>{
    const admin=Admin.find({});
    console.log(admin);
    if(admin.length>=1){
        console.log(admin);
        return res.status(200).msg("admin found");
    }
    return res.status(200).json({"msg":"No admin created yet"})
})

app.post('/addcourses',(req,res)=>{
    //add new course
})

//user routes
app.get('/allcourses',async(req,res)=>{
    //display all courses
    const courses=await Course.find({});
    if(courses.length>=1){
        console.log(courses);
        res.status(200).json(courses);
    }
    else{
        res.status(200).json({msg:"No courses added yet"});
    }
    
})


app.get('/login',(req,res)=>{
    //find user
})

app.post('signup',(req,res)=>{
    //add user account
})

app.get('/purchases',(req,res)=>{
    //find purchased courses
})


app.listen(Port);