import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Calendar from '../pages/Calendar';
import News from '../pages/News';
import Enrollment from '../pages/Enrollment';
import Contact from '../pages/Contact';
import { ErrorPage } from '@/pages/ErrorPage';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/news" element={<News />} />
                <Route path="/enrollment" element={<Enrollment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Switch>
        </Router>
    );
};

export default Routes;