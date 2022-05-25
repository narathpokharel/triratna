import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import CoursePage from "./pages/CoursePage";
import CourseDetail from "./pages/CourseDetail";
import CourseEdit from "./pages/CourseEdit";
import ProtectedRoute from "./util/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />} />{" "}
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/' element={<Main />} />
          </Route>
          <Route path='/add' element={<ProtectedRoute />}>
            <Route path='/add' element={<CoursePage />} />
          </Route>
          <Route path='/course/:id' element={<ProtectedRoute />}>
            <Route path='/course/:id' element={<CourseDetail />} />
          </Route>
          <Route path='/edit/:id' element={<ProtectedRoute />}>
            <Route path='/edit/:id' element={<CourseEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
