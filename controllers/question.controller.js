const Question = require('../models/Question.model');
const fs = require('fs');


exports.questionController = async (req, res) => {
  try {
    const { testId } = req.query;
    const questions = await Question.find({ testId })
    res.json({ success: true, questions });
  } catch (e) {
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.createQuestionController = async (req, res) => {
  try {
    const {testId, data} = req.body;

    //const urlItems = data.questionUrl.split('/');
    //const alias = urlItems[urlItems.length - 1];

    data.testId = testId;
    // delete data._id
    //data.alias = alias;

    const question = await Question.create(data);
    res.json({ success: true, question });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.updateQuestionController = async (req, res) => {
  try {
    const {testId, data} = req.body;

    const id = data._id;
    delete data.expanded;
    delete data._id

    const question = await Question.findByIdAndUpdate(id, data);
    res.json({ success: true, question });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

