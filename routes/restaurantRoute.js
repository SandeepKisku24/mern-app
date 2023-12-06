const express =  require("express");
const mongoose = require("mongoose");
const {Restaurant,Items}  =  require("../models/restaurantModel");
const router =  express.Router();
router.post("/rest", async (req,res)=>{

   
    try {
        const { id,name,contactno,email,ownerName,onBoardingDate,address,subscription,items} = req.body;
        // Create a new BlogPost document
        const newInventory = new Restaurant({
          id,
          name,
          contactno,
          email,
          ownerName,
          onBoardingDate,
          address,subscription,items
        });
    
        // Save the new blog post to the database
        const savedItenary = await newInventory.save();
        // console.log("its okay");
        res.status(201).json(savedItenary);
    }
     catch (error) {
        res.status(400).json({error:  error.messaage});
    }

});


router.get("/rest",async(req,res) => {
    try {
        const showAll = await Restaurant.find();
        const showAll1 = await Items.find();
        res.status(201).json(showAll);
    } catch (error) {
        res.status(400).json({error:  error.messaage});
    }
})


module.exports = router;