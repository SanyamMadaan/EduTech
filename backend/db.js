const mongoose=require('mongoose');

try{
    mongoose.connect('mongodb+srv://sanyam:Sanyam%407820@cluster0.h0ddjdt.mongodb.net/EduTech');
    console.log('database connected successfully');
}
catch(error){
    console.log('Error while connecting database',error);
}



const userSchema=mongoose.Schema({
    email:String,
    contact:Number,
    password:String,
    ConfirmPassword:String
})

const courseSchema=mongoose.Schema({
    Image:String,
    price:Number,
    title:String,
    description:String
})

const AdminSchema=mongoose.Schema({
    username:String,
    password:String
})

const user=mongoose.model('users',userSchema);
const Admin=mongoose.model('Admins',AdminSchema);
const Course=mongoose.model('courses',courseSchema);

module.exports={
    user,Admin,Course
}