const mongoose  =  require("mongoose");


// create schema
const itemSchema  =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company:{
        type : String,
        required: true,
        default : null
    },
    quantity:{
        type : Number,
        required: true,
    },
    price:{
        type : Number,
        required : true
    }
}
);

const restaurantSchema  =  new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactno :{
        type : Number,
        required: true,
        unique: true
    },
    email :{
        type : String,
        required: true,
        unique: true
    },
    ownerName:{
        type: String,
        required: true
    },
    onBoardingDate: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    subscription: {
        type: String,
        required: true
    },
    items : [itemSchema]
},
{
    timestamps : true
}
);

const Restaurant  = mongoose.model('Restaurant',restaurantSchema);
const Items  = mongoose.model('Items',itemSchema);
module.exports  = {Restaurant,Items};