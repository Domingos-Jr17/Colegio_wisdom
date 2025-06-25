import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h5 className="text-lg font-bold">Colégio Wisdom</h5>
                    <p>Telefone: (123) 456-7890</p>
                    <p>Email: contato@colegio-wisdom.mz</p>
                    <p>Endereço: Rua da Educação, 123, Maputo, Moçambique</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">Instagram</a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500">WhatsApp</a>
                </div>
                <p className="text-sm">© 2025 Colégio Wisdom. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;