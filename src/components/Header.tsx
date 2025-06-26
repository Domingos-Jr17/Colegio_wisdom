import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white fixed w-full z-10 shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-yellow-400">Colégio Wisdom</Link>
                </div>

                {/* Ícone do menu hambúrguer (visível apenas no mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-4">
                    <Link to="/" className="hover:text-yellow-400">Início</Link>
                    <Link to="/about" className="hover:text-yellow-400">Sobre Nós</Link>
                    <Link to="/courses" className="hover:text-yellow-400">Cursos</Link>
                    <Link to="/calendar" className="hover:text-yellow-400">Calendário</Link>
                    <Link to="/news" className="hover:text-yellow-400">Notícias</Link>
                    <Link to="/enrollment" className="hover:text-yellow-400">Matrículas</Link>
                    <Link to="/contact" className="hover:text-yellow-400">Contacto</Link>
                </nav>
            </div>

            {/* Menu Mobile (abre e fecha) */}
            {isOpen && (
                <div className="md:hidden bg-blue-900">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Início</Link>
                        <Link to="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
                        <Link to="/courses" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Cursos</Link>
                        <Link to="/calendar" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Calendário</Link>
                        <Link to="/news" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Notícias</Link>
                        <Link to="/enrollment" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Matrículas</Link>
                        <Link to="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contacto</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
