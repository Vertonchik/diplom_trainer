const { Schema, model } = require('mongoose');
// questions
const Video = new Schema({
  testId: { type: Schema.Types.ObjectId, ref: 'Test', index: true },
  question: { type: String, required: true },
  answers: {type: [Schema.Types.Mixed]},
  rightAnswerId: { type: Schema.Types.ObjectId },
});

module.exports = model('Video', Video);