import React from 'react';

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-[url('/sala_Aula.png')] bg-cover bg-center min-h-screen flex items-center justify-center text-white">

    <div className="relative container mx-auto text-center px-4">
        <h1 className=" text-blue-950 text-4xl font-bold mb-4">Construindo um futuro com excelência</h1>
        <p className="text-lg mb-8">
            O Colégio Wisdom forma alunos preparados para os desafios do presente e líderes do amanhã.
        </p>
        <a href="/about" className="bg-yellow-400 text-blue-950 font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition">
            Conheça o Colégio
        </a>
    </div>
</div>

    );
};

export default HeroBanner;