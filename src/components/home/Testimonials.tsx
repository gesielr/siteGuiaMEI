
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Serviço incrível! Consegui emitir uma nota fiscal em menos de 5 minutos pelo WhatsApp. Economizei muito tempo e dinheiro sem precisar de um contador.",
      author: "Carlos Silva",
      role: "Designer Autônomo",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      content: "Como MEI, esse serviço facilitou muito a minha vida. Rápido, prático e com um preço justo. Recomendo para todos os pequenos empreendedores.",
      author: "Ana Santos",
      role: "Confeiteira MEI",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      content: "Muito seguro e confiável. No início fiquei receoso por ser pelo WhatsApp, mas a plataforma de cadastro me passou muita confiança e o serviço é excelente.",
      author: "Roberto Almeida",
      role: "Consultor Independente",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">O que dizem nossos clientes</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Milhares de profissionais e pequenas empresas já utilizaram nossos serviços. Confira o que eles têm a dizer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
