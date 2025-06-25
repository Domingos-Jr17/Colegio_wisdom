import React from 'react';
import NewsSection from '../components/NewsSection';

const News: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-6">Notícias</h1>
            <NewsSection />
        </div>
    );
};

export default News;