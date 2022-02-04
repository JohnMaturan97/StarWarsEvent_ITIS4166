const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://evo:o2svvq4p7q95P3Rh@cluster0.fflkn.mongodb.net/spaceTravelEvent' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('<< Database Connection Successfull >>')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error') 
    })


}

connectDB()

module.exports = mongoose