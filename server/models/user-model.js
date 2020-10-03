const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: 
            { 
                type: String,
                required: true 
            },
        email: 
        { 
            type: String,
            required: true ,
            unique:true,
        },
        pass: 
        { 
            type:String,
            required: true 
        },
        uploads: [
            {
                type:  mongoose.Schema.Types.ObjectId,
                ref: 'uploads'
            }
        ],
    },
    { timestamps: true },
)
    
module.exports = mongoose.model('users', User);