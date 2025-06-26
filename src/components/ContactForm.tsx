import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envio (por exemplo, um request para API)
        setTimeout(() => {
            console.log('Formulário enviado:', formData);
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Entre em Contacto</h2>

            {isSuccess && (
                <div className="mb-4 text-green-600 text-center font-semibold">
                    Mensagem enviada com sucesso!
                </div>
            )}

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">Assunto</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    rows={4}
                />
            </div>

            <button
                type="submit"
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-300'} text-white font-bold py-2 rounded transition`}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
        </form>
    );
};

export default ContactForm;
