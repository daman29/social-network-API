const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatReactionDate,
    },
  },
  {
    toJson: {
      getters: true,
    },
    toObject: {
      getters: true,
    },
    _id: false,
  }
);

// getter function to format date on query
function formatReactionDate(date) {
  return date.toTimeString();
}

module.exports = reactionSchema;
