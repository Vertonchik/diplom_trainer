const Movie = require('../models/Movie.model');
// const Video = require('../models/Video.model');

exports.listController = async (req, res) => {
  try {
    const movies = await Movie.find().lean();
    res.json({ success: true, movies });
  } catch (e) {
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.getMovieController = async (req, res) => {
  try {
    const { movieId } = req.query;

    const movie = await Movie.findById(movieId).lean();

    res.json({ success: true, movie });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.updateMovieController = async (req, res) => {
  try {
    const data = req.body;
    const movie = await Movie.findByIdAndUpdate(data._id, data);
    res.json({ success: true, movie });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.createMovieController = async (req, res) => {
  try {
    const data = req.body;
    data.nameId = data.nameEn.toLowerCase().split(' ').join('_') + `_${data.yearStart}`
    const movie = await Movie.create(data);
    res.json({ success: true, movie });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}

exports.deleteMovieController = async (req, res) => {
  try {
    const {movieId} = req.body;
    await Movie.findByIdAndDelete(movieId);
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, err: 'Server error' });
  }
}