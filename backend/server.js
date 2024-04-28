require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const app = express();
const connectDb = require("./config/config");
const cors = require("cors");

const port = process.env.PORT || 3050;

// Middleware setup
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes
app.use("/api/v1", routes);

// Define a default route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the index route for endpoints of the Mailing Inbox App Assessment."
  );
});

// Connect to the database
connectDb();

// Start the Express app and listen on the specified port
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
