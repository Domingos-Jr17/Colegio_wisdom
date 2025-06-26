import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnrollmentForm from '../components/EnrollmentForm';

const Enrollment: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-25">
                <h1 className="text-4xl font-bold mb-6  text-center">Matrículas</h1>
                <p className="mb-8 text-lg text-gray-700 text-center">
                    Garanta a vaga do seu filho no Colégio Wisdom! Preencha o formulário abaixo para realizar a pré-inscrição.
                </p>
                <EnrollmentForm />
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900">Instruções para Matrículas Presenciais</h2>
                    <p className="text-gray-700">
                        Para matrículas presenciais, dirija-se à secretaria do colégio durante o horário de atendimento. 
                        Não se esqueça de trazer os documentos necessários.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Enrollment;
