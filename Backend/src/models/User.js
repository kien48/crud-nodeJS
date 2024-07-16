import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
         type: String,
         require : true
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true,
    }
}, {versionKey: false, timestamps: true})

export default mongoose.model('user', userSchema)