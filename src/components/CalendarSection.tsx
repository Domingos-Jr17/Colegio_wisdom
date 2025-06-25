import React from 'react';

const CalendarSection: React.FC = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Calendário Académico</h2>
                <p className="text-center text-gray-700 mb-4">
                    Fique por dentro dos eventos importantes do Colégio Wisdom.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Exemplo de evento */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-blue-800">Início das Aulas</h3>
                        <p className="text-gray-600">Data: 1 de Fevereiro</p>
                        <p className="text-gray-600">Descrição: Início do ano letivo para todos os níveis.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-blue-800">Férias de Páscoa</h3>
                        <p className="text-gray-600">Data: 10 a 20 de Abril</p>
                        <p className="text-gray-600">Descrição: Período de férias para todos os alunos.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-blue-800">Provas Finais</h3>
                        <p className="text-gray-600">Data: 15 a 20 de Dezembro</p>
                        <p className="text-gray-600">Descrição: Período de avaliações finais do ano letivo.</p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a href="/calendario.pdf" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Baixar Calendário em PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CalendarSection;