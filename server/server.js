const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Connection Error:", err));

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
