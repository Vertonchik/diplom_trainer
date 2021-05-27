const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,   
    })
    console.log(`mongoDB connected ${connection.connection.host}`);
  } catch (e) {
    console.log('connect DB error', e);
  }
}

module.exports = connectDB