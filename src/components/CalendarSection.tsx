import React from 'react';

const CalendarSection: React.FC = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Calendário Académico - Ensino Primário</h2>
                <p className="text-center text-gray-700 mb-4">
                    Acompanhe as principais datas e eventos do ano letivo.
                </p>

                {/* I Trimestre */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">I Trimestre (14 semanas)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Aulas</h4>
                            <p className="text-gray-600">04 de Fevereiro a 09 de Maio</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Avaliações Trimestrais</h4>
                            <p className="text-gray-600">28 de Abril a 02 de Maio</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Interrupção Lectiva</h4>
                            <p className="text-gray-600">12 a 16 de Maio</p>
                        </div>
                    </div>
                </div>

                {/* II Trimestre */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">II Trimestre (13 semanas)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Aulas</h4>
                            <p className="text-gray-600">19 de Maio a 15 de Agosto</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Avaliações Trimestrais</h4>
                            <p className="text-gray-600">04 a 08 de Agosto</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Interrupção Lectiva</h4>
                            <p className="text-gray-600">18 a 29 de Agosto</p>
                        </div>
                    </div>
                </div>

                {/* III Trimestre */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">III Trimestre (12 semanas)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Aulas</h4>
                            <p className="text-gray-600">01 de Setembro a 21 de Novembro</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Avaliações Trimestrais</h4>
                            <p className="text-gray-600">10 a 14 de Novembro</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Fim do Ano Letivo</h4>
                            <p className="text-gray-600">20 de Novembro a 12 de Dezembro</p>
                        </div>
                    </div>
                </div>

                {/* Exames e Divulgação de Resultados */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">Exames e Resultados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Exames da 1ª Chamada (6ª Classe)</h4>
                            <p className="text-gray-600">20 e 21 de Novembro</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Exames da 2ª Chamada (6ª Classe)</h4>
                            <p className="text-gray-600">27 e 28 de Novembro</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">Divulgação dos Resultados</h4>
                            <p className="text-gray-600">Até 05 de Dezembro</p>
                        </div>
                    </div>
                </div>

                {/* Botão para PDF */}
                <div className="text-center mt-6">
                    <a href="/public/calendario-escolar-2025.pdf" className="inline-block bg-yellow-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        Baixar Calendário em PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CalendarSection;
