const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  classId: {type: mongoose.Schema.Types.ObjectId, ref: 'class'}
  });

  const  model = mongoose.model('student', studentsSchema);
  module.exports = model;