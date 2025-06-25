import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import CalendarSection from '../components/CalendarSection';
import NewsSection from '../components/NewsSection';
import EnrollmentForm from '../components/EnrollmentForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <HeroBanner />
                <AboutSection />
                <CoursesSection />
                <CalendarSection />
                <NewsSection />
                <EnrollmentForm />
            </main>
            <Footer />
        </div>
    );
};

export default Home;