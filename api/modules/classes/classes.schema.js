const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
  name: {type: String}
  });

  const  model = mongoose.model('class', classesSchema);
  module.exports = model;