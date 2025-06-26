import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-900 text-white fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-yellow-400">Colégio Wisdom</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-yellow-400">Início</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-yellow-400">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="hover:text-yellow-400">Cursos</Link>
                        </li>
                        <li>
                            <Link to="/calendar" className="hover:text-yellow-400">Calendário</Link>
                        </li>
                        <li>
                            <Link to="/news" className="hover:text-yellow-400">Notícias</Link>
                        </li>
                        <li>
                            <Link to="/enrollment" className="hover:text-yellow-400">Matrículas</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;