import React from 'react';
import NewsSection from '../components/NewsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const News: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-25">
                    <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">Notícias</h1>
                    <NewsSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default News;
