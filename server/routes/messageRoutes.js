const express = require("express");
const router = express.Router();
const MessageModel = require("../model/message"); // ✅ Corrected model import

// ✅ Send a Message
router.post("/send", async (req, res) => {
  const { sender, receiver, text } = req.body;

  if (!sender || !receiver || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const message = await MessageModel.create({ sender, receiver, text });
    res.status(201).json({ message: "Message sent successfully!", data: message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get Messages Between Two Users
router.get("/chat/:sender/:receiver", async (req, res) => {
  const { sender, receiver } = req.params;

  try {
    const messages = await MessageModel.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender }
      ]
    }).sort({ timestamp: 1 }); // ✅ Corrected sorting by timestamp

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
