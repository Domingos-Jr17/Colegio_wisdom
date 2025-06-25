import React from 'react';
import EnrollmentForm from '../components/EnrollmentForm';

const Enrollment: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Matrículas</h1>
            <p className="mb-6">
                Garanta a vaga do seu filho no Colégio Wisdom! Preencha o formulário abaixo para realizar a pré-inscrição.
            </p>
            <EnrollmentForm />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Instruções para Matrículas Presenciais</h2>
                <p>
                    Para matrículas presenciais, dirija-se à secretaria do colégio durante o horário de atendimento. 
                    Não se esqueça de trazer os documentos necessários.
                </p>
            </div>
        </div>
    );
};

export default Enrollment;