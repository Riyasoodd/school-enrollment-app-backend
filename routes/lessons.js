const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// Get all lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new lesson
router.post("/", async (req, res) => {
  const lesson = new Lesson({
    title: req.body.title,
    subject: req.body.subject,
    location: req.body.location,
    price: req.body.price,
    availability: req.body.availability,
  });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
