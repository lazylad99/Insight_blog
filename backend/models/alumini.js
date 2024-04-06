const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
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
        bannerPic: String
    },
    graduationYear: {
        type: Number,
        required: true
    },
    currentEmployment: {
        type: String
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alumni', alumniSchema);
