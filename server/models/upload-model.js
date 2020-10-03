const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Upload = new Schema(
    {
        original_filename : {
            type : String,
        },
        created_at : {
            type : String, // timestamps can be used instead of this
        },
        format : {
            type : String,
        },
        thumbnail_url : {
            type : String,
        },
        url : {
            type : String,
        },
    },
    { timestamps: true },
)
    
module.exports = mongoose.model('uploads', Upload);