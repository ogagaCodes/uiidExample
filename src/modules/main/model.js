const mongoose = require("mongoose");

const uuidSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
    }
  },
  {
    timestamps: { createdAt: "createdAt"},
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Uuid = mongoose.model("Uuid", uuidSchema);

module.exports = Uuid;
