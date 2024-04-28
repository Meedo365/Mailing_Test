const {
  sendMailToUser,
  getAllMails,
  getMailById,
  deleteMailsById,
} = require("../../controllers/mails-controller");
const { auth } = require("../../middlewares/middleware");

let routes = (app) => {
  app.post("/mail", sendMailToUser);
  app.get("/mails", auth, getAllMails);
  app.get("/mail/:id", auth, getMailById);
  app.delete("/mail/:id", auth, deleteMailsById);
};

module.exports = routes;
