import React from "react";
import NotFound from "../../screens/404/404";
import Signup from "../../screens/Signup/Signup";
import Landing from "../../screens/Landing/Landing";
import Articles from "../../screens/Blog/Articles";
import Article from "../../screens/Blog/Article";
import Course from "../../screens/Course/Course";
import { Routes, Route, useLocation } from "react-router-dom";
import Courses from "../../screens/Course/Courses.jsx";
import {AnimatePresence} from 'framer-motion';
import H from "../../screens/H";
import Home from "../../Containers/panel/Home";
import Add_user from "../../Containers/panel/Add_user";
import AboutUs from "../../screens/AboutUs/AboutUs";
import TutorsPage from "../../screens/Tutors/TutorsPage";

const AnimatedPages = () => {
    const location = useLocation();
  return (
    <div dir="rtl">
        <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="articles" element={<Articles />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signIn" element={<Signup />} />
        <Route path="courses" element={<Courses />} />
        <Route path="panel" element={<Add_user />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="test" element={<H />} />
        <Route path="dashboard" element={<Add_user />} />
        <Route path="tutors" element={<TutorsPage />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
        </AnimatePresence>
    </div>
  );
};

export default AnimatedPages;
