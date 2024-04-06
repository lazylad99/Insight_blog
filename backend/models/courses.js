const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  studentsEnrolled: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }],
});

module.exports = mongoose.model('Course', courseSchema);
                         