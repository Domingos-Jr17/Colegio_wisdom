import React from 'react';
import CoursesSection from '../components/CoursesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-25">
                    <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">Cursos Oferecidos</h1>
                    <CoursesSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Courses;
