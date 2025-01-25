const {mongoose} = require("mongoose");

const dbConnection = async() =>{
    const {connection} =await mongoose.connect('mongodb://localhost:27017/Login_Signup')

    if(connection){
        console.log(`connected to ${connection.host}`)
    }
}

module.exports = dbConnection;