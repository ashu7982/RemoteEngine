

// const express=require('express');
// const userRouter=express.Router();
// const {UserModel}=require('../Model/developer');

// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');




// userRouter.post('/register',async(req,res)=>{
//     const {email,password}=req.body;
//     try{
//            const user=await UserModel.findOne({email});
//            if(!user){
//             bcrypt.hash(password,4,async(err,hash)=>{
//                 if(err){
//                     res.status(200).send({'err':err})
//                 }
//                 else{
//                     const newUser=new UserModel({email,password:hash});
//                     await newUser.save()
//                     res.status(200).send({'msg':'new user has been added'});
//                 }
//             })
//            }
//            else{
//             res.send({'msg':'user already exist, please login'});
//            }
//     }
//     catch(err){
//         res.status(400).send({'err':err});
//     }
// })


// userRouter.post('/login',async(req,res)=>{
//     const {email,password}=req.body;
//     try{
//             const user=await UserModel.findOne({email});
//             if(user){
//                 bcrypt.compare(password,user.password,(err,result)=>{
//                     if(result){
//                         const token=jwt.sign({name:'ashutosh'},'secretkey');
//                         res.status(200).send({'msg':'user logged in',token});
//                     }
//                     else{
//                         res.status(200).send({'msg':'wrong credentials'});
//                     }
//                 })
//             } 
//     }
//     catch(err){
//         res.status(400).send({'err':err});
//     }
// })


// module.exports={
//     userRouter
// }






const express = require('express');
const userRouter = express.Router();
const { UserModel } = require('../Models/developer');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.post('/register', async (req, res) => {
  // ... (remaining code)
  const {email,password}=req.body;
    try{
           const user=await UserModel.findOne({email});
           if(!user){
            bcrypt.hash(password,4,async(err,hash)=>{
                if(err){
                    res.status(200).send({'err':err})
                }
                else{
                    const newUser=new UserModel({email,password:hash});
                    await newUser.save()
                    res.status(200).send({'msg':'new user has been added'});
                }
            })
           }
           else{
            res.send({'msg':'user already exist, please login'});
           }
    }
    catch(err){
        res.status(400).send({'err':err});
    }
});

userRouter.post('/login', async (req, res) => {
  // ... (remaining code)
  const {email,password}=req.body;
    try{
            const user=await UserModel.findOne({email});
            if(user){
                bcrypt.compare(password,user.password,(err,result)=>{
                    if(result){
                        const token=jwt.sign({name:'ashutosh'},'secretkey');
                        res.status(200).send({'msg':'user logged in',token});
                    }
                    else{
                        res.status(200).send({'msg':'wrong credentials'});
                    }
                })
            } 
    }
    catch(err){
        res.status(400).send({'err':err});
    }
});

module.exports = {
  userRouter,
};

