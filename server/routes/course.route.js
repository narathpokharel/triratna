const CourseContoller = require("../controllers/course.controller");
const UserController = require("../controllers/user.controller");
module.exports = (app) => {
  app.get("/api", CourseContoller.index);
  app.get("/api/courses", CourseContoller.getCourses);
  app.get("/api/courses/:id", CourseContoller.getCourse);
  app.post("/api/courses", CourseContoller.createCourse);
  app.put("/api/courses/:id", CourseContoller.updateCourse);
  app.delete("/api/courses/:id", CourseContoller.deleteCourse);
  app.get("/api/courses/type/:type", CourseContoller.getCourseByType);
  app.post("/api/login", UserController.Login);
  app.post("/api/register", UserController.Register);
};
