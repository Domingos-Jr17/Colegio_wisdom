import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Sobre o Colégio Wisdom</h2>
                <p className="text-lg text-gray-700 mb-6">
                    O Colégio Wisdom é uma instituição de ensino que se dedica a formar alunos preparados para os desafios do presente e líderes do amanhã. Nossa missão é educar com excelência, ética e amor, proporcionando um ambiente de aprendizado inovador e inclusivo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-900">Missão</h3>
                        <p className="text-gray-600">Educar com excelência, ética e amor.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-900">Visão</h3>
                        <p className="text-gray-600">Ser referência em educação inovadora em Moçambique.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-900">Valores</h3>
                        <p className="text-gray-600">Comprometimento, Respeito, Inclusão, Inovação.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;