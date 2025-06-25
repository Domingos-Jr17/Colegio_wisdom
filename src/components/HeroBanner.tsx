import React from 'react';

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-blue-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Construindo um futuro com excelência</h1>
                <p className="text-lg mb-8">
                    O Colégio Wisdom forma alunos preparados para os desafios do presente e líderes do amanhã.
                </p>
                <a href="#about" className="bg-gold-500 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-gold-400 transition">
                    Conheça o Colégio
                </a>
            </div>
        </div>
    );
};

export default HeroBanner;