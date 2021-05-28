const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
const authMiddleware = require('./middlewares/authMiddleware');   

require('dotenv').config({
  path: './config/config.env'
})

connectDB();

const app = express();
app.set('case sensitive routing', true);
app.use(express.json({ extended: true, limit: '50mb' }));
app.use('/static', express.static(`${__dirname}/static/`));
app.use(bodyParser.json());

// config for development
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: process.env.CLIENT_URL
  }))
  app.use(morgan('dev'));
}


// Load all routes
const authRouter = require('./routes/auth.route');
const testRouter = require('./routes/test.route');
const videoRouter = require('./routes/video.route');
// const fileRouter = require('./routes/file.route');

// Use Routes
// app.use('/static', express.static(`${__dirname}/static/`));
app.use('/api/test/', testRouter);
app.use('/api/videos/', videoRouter);
app.use('/api/', authRouter);


app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Page Not Found'
  })
})

const PORT = process.env.PORT || 5000;

global.appRoot = path.resolve(__dirname);

app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} server start on port ${PORT}`);
});