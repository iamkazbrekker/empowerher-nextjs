import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please provide an username'],
    },
    email:{
        type: String,
        required: [true, 'please provide an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    unlockedUpto: {
        type: Number,
        default: 0
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User