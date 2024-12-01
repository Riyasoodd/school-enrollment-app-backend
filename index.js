const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // Parse JSON requests

const PORT = process.env.PORT || 5000;
const lessonsRouter = require("./routes/lessons");
app.use("/api/lessons", lessonsRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
