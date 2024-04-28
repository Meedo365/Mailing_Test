const { successHandler } = require("../utils/core");
const { errorHandler } = require("../utils/errorHandler");
const User = require("../models/users");
const generateTokens = require("../utils/generateToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return errorHandler(
          res,
          "Please fill in all fields, one or more fields are empty!",
          400
        );
      }

      if (!validateEmail(email)) {
        return errorHandler(
          res,
          "This is not a valid email address",
          400
        );
      }

      const findUser = await User.findOne({ email });

      if (findUser) {
        return errorHandler(res, "The email is already registered", 409);
      }

      if (!validatePassword(password)) {
        return errorHandler(
          res,
          "Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
          400
        );
      }
      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password: passwordHash,
      });
      await newUser.save();
      return successHandler(res, "Account has been created!", newUser);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return errorHandler(res, "This user does not exist.", 404);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return errorHandler(res, "Email or Password is incorrect.", 401);
      }
      const accessToken = await generateTokens(user);

      return successHandler(res, "Login successful", accessToken);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      let user = await User.find().sort({ createdAt: -1 });
      return successHandler(res, "All Users Found", user);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  getUserById: async (req, res) => {
    try {
      let id = req.params.id;
      let user = await User.findOne({ _id: id });
      if (!user) return errorHandler(res, "No User found with the ID", 404);
      return successHandler(res, "User Found", user);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  getUserByToken: async (req, res) => {
    try {
      let id = req.user;
      let user = await User.findOne({ _id: id });
      if (!user) return errorHandler(res, "No User found", 404);
      return successHandler(res, "User Found", user);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
  return re.test(password);
}
