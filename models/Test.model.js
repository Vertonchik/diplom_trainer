const { Schema, model } = require('mongoose');

const Test = new Schema({
  //testId: { type: Schema.Types.ObjectId, ref: 'Test', index: true },
  nameTest: { type: String, trim: true, required: true, index: true },
  testPassword: { type: String, trim: true, required: true, index: true },
  descriptionTest: { type: String, trim: true, required: true, index: true },
  testType: { type: String, trim: true, required: true, index: true },

});

module.exports = model('Test', Test);