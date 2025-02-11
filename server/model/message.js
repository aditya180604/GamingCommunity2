const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // Sender's email
  receiver: { type: String, required: true }, // Receiver's email
  text: { type: String, required: true }, // Message text
  timestamp: { type: Date, default: Date.now, index: true } // ✅ Added index for faster queries
});

// ✅ Use a capitalized model name (common practice)
const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
