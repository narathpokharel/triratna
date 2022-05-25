const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Course name is required!"],
  },
  description: {
    type: String,
    required: [true, "Course description is required!"],
  },
  duration: {
    type: Number,
    required: [true, "Course duration is required!"],
  },
  credit: {
    type: String,
    required: [true, "Course credits is required!"],
  },
  starting_date: {
    type: Date,
    required: [true, "Course starting date is required!"],
  },
  format: {
    type: String,
    required: [true, "Course format is required!"],
  },
  createdBy: {
    type: String,
    required: [true, "Course creator is required!"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", CourseSchema);
