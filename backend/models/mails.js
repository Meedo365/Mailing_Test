const mongoose = require("mongoose");

const mailsSchema = mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    isRead: {
      type: String,
      default: false,
    },
    from: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id?.toString();
        delete ret.__v;
        delete ret._id;
        delete ret.userId;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Mails = mongoose.model("mails", mailsSchema);

module.exports = Mails;
