import React from 'react';

const newsData = [
  {
    id: 1,
    title: 'Feira Escolar 2025',
    date: '2025-03-15',
    summary: 'Participe da nossa feira escolar, onde os alunos apresentarão seus projetos e talentos.',
    image: '/path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Início das Aulas',
    date: '2025-02-01',
    summary: 'As aulas começam no dia 1º de fevereiro. Prepare-se para um ano letivo incrível!',
    image: '/path/to/image2.jpg',
  },
  {
    id: 3,
    title: 'Visita de Estudo ao Museu',
    date: '2025-04-10',
    summary: 'Os alunos do Ensino Secundário farão uma visita ao Museu Nacional para aprender sobre a história.',
    image: '/path/to/image3.jpg',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-2">{news.title}</h3>
              <p className="text-gray-500">{news.date}</p>
              <p className="mt-2">{news.summary}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Ler mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;