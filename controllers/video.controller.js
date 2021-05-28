const Video = require('../models/Video.model');
const fs = require('fs');


exports.videoController = async (req, res) => {
  try {
    const { movieId } = req.query;
    const videos = await Video.find({ movieId })
    res.json({ success: true, videos });
  } catch (e) {
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.createVideoController = async (req, res) => {
  try {
    const {movieId, data} = req.body;

    const urlItems = data.videoUrl.split('/');
    const alias = urlItems[urlItems.length - 1];

    data.movieId = movieId;
    data.alias = alias;

    const video = await Video.create(data);
    res.json({ success: true, video });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.updateVideoController = async (req, res) => {
  try {
    const {movieId, data} = req.body;
    delete data.expanded;

    const urlItems = data.videoUrl.split('/');
    const alias = urlItems[urlItems.length - 1];

    data.alias = alias;

    const video = await Video.findByIdAndUpdate(data._id, data);
    res.json({ success: true, video });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

