import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text- bg-yellow-400-900 mb-8 text-center">
                    Sobre o Colégio Wisdom
                </h2>
                <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    O Colégio Wisdom é uma instituição de ensino que se dedica a formar alunos preparados para os desafios do presente e líderes do amanhã. Nossa missão é educar com excelência, ética e amor, proporcionando um ambiente de aprendizado inovador e inclusivo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Missão */}
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-gray-50">
                        <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Missão</h3>
                        <p className="text-gray-600">Educar com excelência, ética e amor.</p>
                    </div>

                    {/* Visão */}
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-gray-50">
                        <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Visão</h3>
                        <p className="text-gray-600">Ser referência em educação inovadora em Moçambique.</p>
                    </div>

                    {/* Valores */}
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-gray-50">
                        <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Valores</h3>
                        <p className="text-gray-600">Comprometimento, Respeito, Inclusão, Inovação.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
