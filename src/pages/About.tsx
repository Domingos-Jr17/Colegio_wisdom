import * as React from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;