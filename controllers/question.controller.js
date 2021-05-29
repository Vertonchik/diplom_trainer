const Question = require('../models/Question.model');
const fs = require('fs');


exports.questionController = async (req, res) => {
  try {
    const { movieId } = req.query;
    const questions = await Question.find({ movieId })
    res.json({ success: true, questions });
  } catch (e) {
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.createQuestionController = async (req, res) => {
  try {
    const {movieId, data} = req.body;

    const urlItems = data.questionUrl.split('/');
    const alias = urlItems[urlItems.length - 1];

    data.movieId = movieId;
    data.alias = alias;

    const question = await Question.create(data);
    res.json({ success: true, question });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.updateQuestionController = async (req, res) => {
  try {
    const {movieId, data} = req.body;
    delete data.expanded;

    const urlItems = data.questionUrl.split('/');
    const alias = urlItems[urlItems.length - 1];

    data.alias = alias;

    const question = await Question.findByIdAndUpdate(data._id, data);
    res.json({ success: true, question });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

