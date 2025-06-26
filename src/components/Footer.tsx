import React from 'react';
import { Facebook, Instagram, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center">

        {/* Logo com título acima */}
        <div className="px-4 flex flex-col items-center md:items-start">
          <h5 className="text-xl font-bold mb-4">Colégio Wisdom</h5>
          <img src="/timbre_wisdom.png" alt="Logo Colégio Wisdom" className="h-24 object-contain" />
        </div>

        {/* Contactos clicáveis */}
        <div>
          <h5 className="text-xl font-bold mb-4">Contactos</h5>
          <a
            href="tel:+258844845325"
            className="flex items-center justify-center md:justify-start mb-2 hover:text-yellow-400 transition"
          >
            <Phone className="w-4 h-4 mr-2" /> (+258) 84 484 5325
          </a>
          <a
            href="mailto:contato@colegio-wisdom.mz"
            className="flex items-center justify-center md:justify-start mb-2 hover:text-yellow-400 transition"
          >
            <Mail className="w-4 h-4 mr-2" /> contato@colegio-wisdom.mz
          </a>
        </div>

        {/* Redes sociais */}
        <div>
          <h5 className="text-xl font-bold mb-4">Siga-nos</h5>
          <div className="flex flex-col space-y-2 md:space-y-4 justify-center md:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center justify-center md:justify-start">
              <Facebook className="w-5 h-5 mr-1" /> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center justify-center md:justify-start">
              <Instagram className="w-5 h-5 mr-1" /> Instagram
            </a>
            <a href="https://wa.me/258844845325" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center justify-center md:justify-start">
              <MessageCircle className="w-5 h-5 mr-1" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa incorporado */}
        <div className="w-full h-40 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d296.706977844667!2d32.614538654091206!3d-25.890672719750956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2szMjXCsDUzJzE2LjQiUyAzMsKwMzYnNTAuNSJF!5e1!3m2!1spt-PT!2smz!4v1750863943575!5m2!1spt-PT!2smz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center mt-8 text-sm">
        © 2025 Colégio Wisdom. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
