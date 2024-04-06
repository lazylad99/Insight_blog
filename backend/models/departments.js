const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  faculty: [{
    type: Schema.Types.ObjectId,
    ref: 'Faculty'
  }],
});

module.exports = mongoose.model('Department', departmentSchema);
