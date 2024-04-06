const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    facultyNo:{
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        name: String,
        bio: String,
        profilePic: String,
        bannerPic: String,
        interests: [String]
    },
    Dept: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Faculty', facultySchema);
