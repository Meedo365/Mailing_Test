const jwt = require("jsonwebtoken");
const User = require("../models/users.js");
const { errorHandler } = require("../utils/errorHandler.js");

const auth = async (req, res, next) => {
  const token = req.header("mailing-user");

  if (!token) {
    return res.status(403).json({ msg: "Access Denied: No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ _id: decoded._id });
    req.user = user._id;
    next();
  } catch (err) {
    console.log(err);
    return errorHandler(res, "Access Denied: Invalid Token.", 403);
  }
};

module.exports = { auth };
