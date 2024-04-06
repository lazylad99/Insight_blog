const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    scholarNo:{
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        unique: true 
    },
    profile: {
        name: String,
        bio: String,
        profilePic: String,
        bannerPic: String,
        interests: {
            type: [String], default: []
        }
    },
    coursesEnrolled: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
    created_at: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('Student', studentSchema);
