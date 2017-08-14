const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, unique: true, trim: true, required: true },
  photo: { type: String, trim: true },
  dob: { type: Date, trim: true },
  description: { type: String, trim: true },
  passwordHash: { type: String, required: true },
  items: [{ type: mongoose.Schema.ObjectId, ref: 'Item' }]
});

// we don't want to store the password and password confirmation as strings in the schema, however we do need to check that they match and that they satisfy the criteria we have set down
userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

userSchema
  .path('email')
  .validate(validateEmail);

// here we are referencing a function which will validate the password
userSchema.methods.validatePassword = validatePassword;

// getters and setters _id and id
userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.passwordHash;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);

function setPassword(value){
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

// provides the error messages to be shown if the user does not do as needed
function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required.');
    }

    if (this._password.length < 2) {
      return this.invalidate('password', 'must be at least six characters.');
    }

    if (this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
  }
}

// this will check to see if the string entered in the e-mail field is the format we are expecting eg a@a.com
function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

// on login, this will hash the password entered and then compare it with the password stored in the database
function validatePassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}
