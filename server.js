const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// const User  =  require("./models/userModels");
dotenv.config();
const cors = require("cors");
app.use(cors());

const userRoute  =  require("./routes/userRoute");
const restRoute =  require("./routes/restaurantRoute");
// const itemRoute =  require("./routes/restaurantRoute");
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
    console.log("db connected sucessfully");

        app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, "frontend", "build")));
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
        });
        

    app.listen(PORT, (err)=>{
        
        console.log("hi it is working ok bro" );
    });
}).catch((err)=>{
    console.log("error in the connection" + err);
})

app.use(restRoute,userRoute);
// app.use(Restaurant);
// create 





