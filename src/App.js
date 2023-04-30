import React from "react";
import "./style.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import TeachOnIBRA from "./routes/TeachOnIBRA";
import { Route, Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Student from "./routes/Student";
import Teacher from "./routes/Teacher";
import Profile from './pages/Profile';
import CoursesA from './pages/CoursesA';
import Courses from './pages/Courses';
import UpdateCourse from './pages/UpdateCourse';
import Payments from './pages/Payments';
import Quizs from './pages/Quizs';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Reset from "./routes/Reset";
import AddCourse from "./routes/AddCourse";
import Admin from "./routes/Admin";

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/teach-on-ibra" element={<TeachOnIBRA/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/quizs" element={<Quizs />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/coursesA" element={<CoursesA />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/updateCourse" element={<UpdateCourse />} />
        <Route path="/addCourse" element={<AddCourse/>}/>
      </Routes>
    </div>
  );
}
