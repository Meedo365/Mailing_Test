const { successHandler } = require("../utils/core");
const { errorHandler } = require("../utils/errorHandler");
const Mails = require("../models/mails");
const User = require("../models/users");

module.exports = {
  sendMailToUser: async (req, res) => {
    try {
      const { subject, content, to, from } = req.body;
      if (!to || !from || !content || !subject) {
        return errorHandler(
          res,
          "Please fill in all fields, one or more fields are empty!",
          400
        );
      }

      const findUser = await User.findOne({ email: to });

      if (!findUser) {
        return errorHandler(
          res,
          "This email is not registered with us. Please double-check the recipient's email address and try again.",
          404
        );
      }

      const newMail = new Mails({
        content,
        subject,
        userId: findUser._id,
        from,
      });

      await newMail.save();
      return successHandler(res, "Mail Sent", newMail);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  getAllMails: async (req, res) => {
    const user = req.user;
    try {
      let mails = await Mails.find({
        userId: user,
      }).sort({ createdAt: -1 });

      return successHandler(res, "All Mails Found", mails);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  getMailById: async (req, res) => {
    try {
      let id = req.params.id;
      const user = req.user;
      const mail = await Mails.findOneAndUpdate(
        { _id: id, userId: user },
        { isRead: true },
        {
          new: true,
        }
      );
      if (!mail) return errorHandler(res, "No Mail found.", 404);
      return successHandler(res, "Mail Found", mail);
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
  deleteMailsById: async (req, res) => {
    try {
      let id = req.params.id;
      let user = req.user;
      const mail = await Mails.findOne({ _id: id, userId: user });
      if (!mail) return errorHandler(res, "No Mail found with the ID", 404);

      await Mails.deleteOne({ _id: id });

      return successHandler(res, "Mail Deleted");
    } catch (error) {
      return errorHandler(res, error.message, error.statusCode);
    }
  },
};
