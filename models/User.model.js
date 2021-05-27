const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const User = new Schema({
  email: { type: String, trim: true, required: true, unique: true, lowercase: true },
  name: { type: String, trim: true, required: true },
  hashed_password: { type: String, required: true },
  salt: { type: String },
  code: { type: String, default: '' },
  verified: { type: Boolean, default: true },
  roles: [{ type: String, ref: 'Role' }],
}, {timeStamp: true});

// Virtual password
User
.virtual('password')
.set(function(password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(password)
})
.get(function() {
  return this._password;
})

// methods
User.methods = {
  authenticate: function(plainPassword) {
    return this.encryptPassword(plainPassword) === this.hashed_password;
  },

  // Generate salt
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random());
  },
  // Encrypt password
  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (e) {
      return "";
    }
  },
}

module.exports = model('User', User);