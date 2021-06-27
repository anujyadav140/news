const jwt = require('jsonwebtoken');
const user = require('../Models/user');

const auth = async(req,res,next) =>{
    try{
        const token = req.header('Authorization').replace("Bearer ","")
        console.log("Token: "+ token)
        const decoded = jwt.verify(token,process.env.jwt_secret_key);
        console.log(decoded)
        const User = await user.findOne({"username":decoded.username})
        console.log(User)
        if(!user){
            throw error ("Not valid entry")
        }
        req.user = User
        req.token = token
        next()
    }
    catch(e){
        res.status(401).send({"Type":"Error" , "Message":"No Entry"})
    }
}
module.exports = auth

