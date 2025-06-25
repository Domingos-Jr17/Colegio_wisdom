import React from 'react';
import CoursesSection from '../components/CoursesSection';

const Courses: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Cursos Oferecidos</h1>
            <CoursesSection />
        </div>
    );
};

export default Courses;