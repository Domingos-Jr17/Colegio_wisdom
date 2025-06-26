import React from 'react';

const courses = [
  {
    title: 'Primeiro Ciclo',
    description: 'Ensino Primário da 1ª à 3ª Classe. Desenvolvimento das bases essenciais para a leitura, escrita e matemática.',
    image: '/1_ciclo_unsplash.jpg',
  },
  {
    title: 'Segundo Ciclo',
    description: 'Ensino Primário da 4ª à 6ª Classe. Consolidação dos conhecimentos e preparação para o Ensino Secundário.',
    image: '/2_ciclo_unsplash.jpg',
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Ensino Primário</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
