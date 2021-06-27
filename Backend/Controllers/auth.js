const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const user = require("../Models/user")

require("dotenv").config();

exports.signup =  async(req,res,next)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    
    const NewUser = new user({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
        username:username,
    })
    NewUser.save().then(
        (a)=>{
            res.status(200).send({"Type":"Success"})
        }
    ).catch((error)=>{
        res.status(401).send({"Type":"Error","Message":"signup failed"+ error})
    })
    console.log(req.body)
}

exports.login = async(req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({username: username}, process.env.jwt_secret_key, {algorithm: "HS256", expiresIn: process.env.access_token_life})
    const User = await user.findOne({username: username})
    const right = await bcrypt.compare(password, User.password)
    console.log(right)
    if(right){
        User.save().then((a)=>{
            res.status(200).send({"Type":"Success", "Token": token})
        }).catch((error)=>{
            res.status(401).send({"Type":"Error", "Message": "login failed" + error})
        })
    }
    else{
                res.status(401).send({"Type": "Error" , "Message" : "Wrong Password"})

    }
}

exports.user = async(req,res,next) => {
    try{
        const username = req.params.username;
        user.findOne({username : username}).then((details)=>{
        res.status(200).send({"Type":"Success" , "data" : details})})
    }catch(err){
        res.status(401).send({"Type" : "Error" , "Message" : err})
    }
}
