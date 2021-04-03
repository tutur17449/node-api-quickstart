const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  createdOn: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  var user = this;
  if (user.password) {
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  } else {
    return next();
  }
});

UserSchema.statics.comparePassword = function (reqPwd, dbPwd) {
  return bcrypt.compareSync(reqPwd, dbPwd);
};

UserSchema.methods.generateJwt = function (user) {
  const payload = {
    _id: user._id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

module.exports = mongoose.model("User", UserSchema);
