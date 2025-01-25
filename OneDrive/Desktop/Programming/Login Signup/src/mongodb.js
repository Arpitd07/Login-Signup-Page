const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
// mongoose.connect("mongodb://localhost:27017/Login_Signup")
// .then(() => {
//     console.log("Database is Connected");
// })
// .catch(() => {
//     console.log("Data failed to connect");
// });

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});
// loginSchema.plugin(passportLocalMongoose);
// loginSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,10);
//     }
//     next();
// }
// )

loginSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
})

const collection = new mongoose.model("LoginCollection",loginSchema);
module.exports = collection;
