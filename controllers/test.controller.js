const Test = require('../models/Test.model');
// const Video = require('../models/Video.model');

exports.listController = async (req, res) => {
  try {
    const tests = await Test.find().lean();
    res.json({ success: true, tests });
  } catch (e) {
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.getTestController = async (req, res) => {
  try {
    const { testId } = req.query;

    const promises = [
      Test.findById(movieId).lean(),
      Video.find({ movieId }).lean()
    ]

    const [test, videos] = await Promise.all(promises);

    res.json({ success: true, test: {...test, videos} });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.updateTestController = async (req, res) => {
  try {
    const data = req.body;
    const test = await Test.findByIdAndUpdate(data._id, data);
    res.json({ success: true, test });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.createTestController = async (req, res) => {
  try {
    const data = req.body;
    data.nameId = data.nameEn.toLowerCase().split(' ').join('_') + `_${data.yearStart}`
    const test = await Test.create(data);
    res.json({ success: true, test });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.deleteTestController = async (req, res) => {
  try {
    const {testId} = req.body;
    await Test.findByIdAndDelete(testId);
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}