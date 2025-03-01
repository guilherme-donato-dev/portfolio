import React from "react";
import "@fontsource/slabo-27px";

const projects = [
  { name: "Sistema de revenda de carros.", description: "Um sistema de revenda de carros online, feito totalmente com Django e usando o PostgreSQL como Banco de dados.", link: "http://3.217.69.134/cars/" },
  { name: "Chatbot com RAG utilizando a API da OpenAI.", description: "Um chatbot usando a API da OpenAI. O chat pode fazer RAG, subindo um ou mais documentos. Pode também escolher qual modelo da OpenAI será utilizado.", link: "#" },
  { name: "Projeto 3", description: "Descrição do Projeto 3", link: "#" },
  { name: "Projeto 4", description: "Descrição do Projeto 4", link: "#" },
  { name: "Projeto 5", description: "Descrição do Projeto 5", link: "#" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-serif p-4">
      <h1 className="text-3xl font-bold mb-3">guilhermedonato.dev</h1>
      <p className="text-base mb-4">Desenvolvedor Backend | Python</p>
      <div className="w-full max-w-4xl border-t border-gray-600 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block bg-black p-6 rounded-lg shadow-xl border border-white hover:shadow-2xl transition transform hover:scale-105 hover:bg-blue-900/20"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 flex space-x-4">
        <a href="https://github.com/guilherme-donato-dev" className="text-white hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/guilhermedonatodev" className="text-white hover:underline">LinkedIn</a>
      </div>
    </div>
  );
}

