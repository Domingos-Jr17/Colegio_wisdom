import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-25">
                    <h1 className="text-4xl font-bold  mb-4">Contacte-nos</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Caso tenha alguma dúvida ou precise de mais informações, por favor preencha o formulário abaixo ou entre em contacto diretamente connosco.
                    </p>
                    <ContactForm />
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Nossa Localização</h2>
                        <div className="w-full h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d296.706977844667!2d32.614538654091206!3d-25.890672719750956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDUzJzE2LjQiUyAzMsKwMzYnNTAuNSJF!5e1!3m2!1spt-PT!2smz!4v1750863943575!5m2!1spt-PT!2smz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-md shadow-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
