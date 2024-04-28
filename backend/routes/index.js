const express = require("express");
const app = express.Router();

require("./endpoints/Auth")(app);
require("./endpoints/Mails")(app);

module.exports = app;
