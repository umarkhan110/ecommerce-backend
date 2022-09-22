const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},
{ timestamps: true }
);

user.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

user.methods.generateAuthToken = async function (){
    try{
        let token =jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch  (err){
        console.log(err);
    }
}

const Users = new mongoose.model('Users',user);
module.exports = Users;
