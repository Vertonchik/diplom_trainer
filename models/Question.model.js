const { Schema, model } = require('mongoose');
// questions
const Question = new Schema({
  testId: { type: Schema.Types.ObjectId, ref: 'Test', index: true },
  question: { type: String, required: true },
  type: { type: String, required: true },
  answers: {type: [Schema.Types.Mixed]},
});

module.exports = model('Question', Question);