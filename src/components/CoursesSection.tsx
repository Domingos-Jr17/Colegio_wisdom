import React from 'react';

const courses = [
  {
    title: 'Pré-Escolar',
    description: 'Estimulação precoce e aprendizagem divertida.',
    image: '/path/to/pre-escolar-image.jpg',
  },
  {
    title: 'Ensino Primário',
    description: 'Fundamentos sólidos para o sucesso escolar.',
    image: '/path/to/ensino-primario-image.jpg',
  },
  {
    title: 'Ensino Secundário',
    description: 'Formação crítica, criativa e responsável.',
    image: '/path/to/ensino-secundario-image.jpg',
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
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