import React from 'react';
import CalendarSection from '../components/CalendarSection';

const Calendar: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-8">Calendário Acadêmico</h1>
            <CalendarSection />
        </div>
    );
};

export default Calendar;