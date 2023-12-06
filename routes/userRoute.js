const express =  require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User  =  require("../models/userModels");
const router =  express.Router();
const jwt  = require("jsonwebtoken");

// const generateToken =(id) =>{
//     return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "1d"});
// } 



router.post("/user", async (req,res)=>{

    
  
    try {
        const { name,email,password} = req.body;
        // Create a new BlogPost document
        const salt  = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            name,
            email,
            password: hashpassword 
        });
        
        if(newUser){
            const savedUser = await newUser.save();
        // console.log("its okay");
        // const token  = generateToken(savedUser._id);
        // res.cookie("token",token)
        res.status(201).json(savedUser);
        }
        else {
            res.status(400).json({error:  error.messaage});
        }
    }
     catch (error) {
        res.status(400).json({error:  error.messaage});
    }

});




router.get("/user",async(req,res) => {
    try {
        const showAll = await User.find();
        res.send(showAll);
    } catch (error) {
        res.status(400).json({error:  error.messaage});
    }
})

// login

router.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Please add email and password");
    }

    // 
    const user = await User.findOne({email})
    if(!user){
        res.status(400);
        throw new Error("User not found");
    }

    const passwordIsCorrect = await bcrypt.compare(password,user.password)

    if(user && passwordIsCorrect){
        res.send();
    }
    else{
        res.render("eroe");
    }

    // res.send(email);
})

//  logout
router.post("/logout", async (req,res)=>{
    res.send("logout");
})



module.exports = router;