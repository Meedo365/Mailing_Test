const {
    createUser,
    getAllUsers,
    getUserById,
    login,
    getUserByToken,
  } = require("../../controllers/auth-controller");
  const { auth } = require("../../middlewares/middleware");
  
  let routes = (app) => {
    app.post("/register", createUser);
    app.get("/users", getAllUsers);
    app.get("/user/:id", getUserById);
    app.get("/token", auth, getUserByToken);
    app.post("/login", login);
  };
  
  module.exports = routes;
  