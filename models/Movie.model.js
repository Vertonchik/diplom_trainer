const { Schema, model } = require('mongoose');

const Movie = new Schema({
  title: { type: String, trim: true, required: true, index: true },
  description: { type: String, trim: true, required: true, index: true },
});

module.exports = model('Movie', Movie);