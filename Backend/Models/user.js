const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error("Invalid email : " + value)
            }
        }
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
},{timestamps: true})

    UserSchema.pre('save',async function(next){
        const user = this
        if(user.isModified('password')){
            console.log(user.password)
            user.password = await bcrypt.hash(user.password, 8)
        }
        next()
    })

    module.exports = mongoose.model("user", UserSchema)