const User = require('../models/User.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
;

// sgMail.setApiKey(process.env.MAIL_KEY)

exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({ success: false, err: firstError });
  } else {
    const candidate = await User.findOne({ email });
    // if (candidate && candidate.verified) {
    //   return res.status(400).json({ err: 'Пользователь с таким email зарегестрирован' });
    // }

    let user; 
    if (!candidate) {
      user = await User.create({ name, email, password });
    } else {
      return res.status(400).json({ err: 'Пользователь с таким email зарегестрирован' });
    }

    const token = jwt.sign({ _id: user._id, roles: user.roles }, process.env.JWT_SECRET, { expiresIn: '183d' });
    
    return res.json({
      token,
      user,
      success: true,
      message: 'Signup success'
    })

    //  return res.json({ success: true, message: `Email has been sent to ${email}`, email, userId: user._id });

  }
}

// exports.activationController = async (req, res) => {
//   const { email, code } = req.body;

//   if (email) {
//     let user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'User not found' });
//     if (code !== user.code) return res.status(401).json({ message: 'Неправильной код' });
//     await User.findOneAndUpdate({ email }, { verified: true })

//     const token = jwt.sign({ _id: user._id, verified: true, roles: user.roles }, process.env.JWT_SECRET, { expiresIn: '183d' });

//     const { _id, name, roles, verified } = user;
    // return res.json({
    //   token,
    //   user: { _id, name, email, roles, verified },
    //   success: true,
    //   message: 'Signup success'
    // })
//   } else {
//     return res.json({ message: 'Произошла ошибка, пожалуйста, повторите снова' });
//   }
// }


exports.loginController = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      success: false,
      err: firstError
    })
  } else {
    User.findOne({ email })
      .exec((err, user) => {
        if (err || !user) {
          return res.status(400).json({
            success: false,
            err: 'Пользователь с таким email не зарегистрирован'
          })
        }

        if (!user.authenticate(password)) {
          return res.status(400).json({ success: false, err: 'Email или пароль введены не верно' });
        }

        const token = jwt.sign({ _id: user._id, roles: user.roles, verified: user.verified }, process.env.JWT_SECRET, { expiresIn: '183d' });

        const { _id, name, email, roles, verified } = user;
        return res.json({
          success: true,
          token,
          user: { _id, name, email, roles, verified }
        })

      })
  }
}

