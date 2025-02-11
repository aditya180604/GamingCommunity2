const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");  // ✅ Import UUID

const EmployeeModel = require("./model/employee");
const MessageModel = require("./model/message");  
const messageRoutes = require("./routes/messageRoutes"); 

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB Atlas (Single Connection)
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://user2:1234@cluster0.occ3u.mongodb.net/chatdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// ✅ Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await EmployeeModel.findOne({ email });
    if (!user) return res.json("No record exists");
    if (user.password !== password) return res.json("The password is incorrect");
    res.json({ message: "Success", user });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ Register Route (With Unique ID)
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const uniqueId = uuidv4();  // ✅ Generate a Unique ID

    const employee = await EmployeeModel.create({ uniqueId, name, email, password });
    res.json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ Message Routes
app.use("/api/messages", messageRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
