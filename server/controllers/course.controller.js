const Course = require("../models/Course.model");

module.exports.index = ({ req, res }) => {
  res.json({
    message: "Pet Controller",
  });
};
module.exports.getCourses = (req, res) => {
  Course.find({}, (err, courses) => {
    if (err) {
      res.send(err);
    }
    res.json(courses);
  });
};
module.exports.getCourse = (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};
module.exports.createCourse = (req, res) => {
  Course.create(req.body)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json(err));
};
module.exports.updateCourse = (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};
module.exports.deleteCourse = (req, res) => {
  Course.findByIdAndDelete(req.params.id, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};
module.exports.getCourseByType = (req, res) => {
  Course.find({ type: req.params.type }, (err, course) => {
    if (err) {
      res.send(err);
    }
    res.json(course);
  });
};
