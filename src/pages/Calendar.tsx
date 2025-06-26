import React from 'react';
import CalendarSection from '../components/CalendarSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Calendar: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-25">
                    <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
                        Calendário Acadêmico
                    </h1>
                    <CalendarSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Calendar;
