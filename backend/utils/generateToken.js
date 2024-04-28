const jwt = require("jsonwebtoken");

async function generateTokens(user) {
  const payload = { _id: user._id };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return accessToken;
}

module.exports = generateTokens;
