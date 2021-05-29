const { Schema, model } = require('mongoose');

const Test = new Schema({
  testId: { type: Schema.Types.ObjectId, ref: 'Test', index: true },
  testPassword: { type: String, trim: true, required: true, index: true },
  title: { type: String, trim: true, required: true, index: true },
  description: { type: String, trim: true, required: true, index: true },
});

module.exports = model('Test', Test);