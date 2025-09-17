"use client";

import React, { useEffect, useState } from "react";
import "@fontsource/slabo-27px";

const projects = [
  {
    name: "Sistema de revenda de carros.",
    description:
      "Um sistema de revenda de carros online, feito totalmente com Django e usando o PostgreSQL como Banco de dados. Utilizando a API da OpenAI para gerar automaticamente a descrição do carro.",
    link: "https://carros-django.onrender.com/cars/",
  },
  /*{
    name: "Chatbot com RAG utilizando a API da OpenAI.",
    description:
      "Um chatbot usando a API da OpenAI. O chat pode fazer RAG, subindo um ou mais documentos. Pode também escolher qual modelo da OpenAI será utilizado.",
    link: "https://chatbot-rag-production-5f7e.up.railway.app/",
  },*/
  {
    name: "Biblioteca de Filmes - API RESTful ",
    description:
      "API RESTful para uma biblioteca de filmes com Django Rest Framework, autenticação JWT e permissões para usuários cadastrados. Frontend em Streamlit exibindo estatísticas, filmes, gêneros, atores e permitindo avaliações. User: teste Senha: testando22",
    link: "https://flixapp-donato.streamlit.app/",
  },
  {
    name: "Previsão do Tempo Global",
    description:
      "Site para consultar a previsão do tempo em cidades do mundo todo, utilizando a API da OpenWeather. Desenvolvido com HTML, CSS e JavaScript puro, permite buscar e visualizar informações como temperatura, umidade, sensação térmica e condições do clima em tempo real.",
    link: "https://guilherme-donato-dev.github.io/open-weather/",
  },
];

const frases = [
  "Code, sleep, repeat.",
  "Aprendizado constante é o combustível do dev.",
  "Do zero ao deploy, um commit de cada vez.",
  "Construindo projetos, aprendendo na prática.",
];

export default function Home() {
  const [fraseAleatoria, setFraseAleatoria] = useState("");

  useEffect(() => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    setFraseAleatoria(frase);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-serif p-4">
        <h1 className="text-3xl font-bold mb-3">guilhermedonato.dev</h1>
        <p className="text-base mb-4">Desenvolvedor Backend | Python</p>

        {/* Sobre mim */}
        <div className="max-w-3xl text-center mb-8">
          <p className="text-gray-300 text-sm">
          Eu sou o Guilherme Donato, 23 anos, e estou em busca de ingressar na área de
          desenvolvimento. Tenho conhecimento e experiência com projetos pessoais e
          acadêmicos, trabalhando com Python, backend com Django e frontend/back-end com
          Next.js. Também atuo com bancos de dados SQL, AWS e Inteligência Artificial para
          criação de chatbots e integração da IA em apps web. Me formando em Análise e
          Desenvolvimento de Sistemas em julho de 2025.
          </p>
        </div>

        {/* Tecnologias */}
        <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="text-gray-300 text-base font-serif space-y-4">
          <p>
            <span className="text-lg font-bold text-white block mb-1">Linguagens:</span>
            Python, JavaScript, TypeScript
          </p>
          <p>
            <span className="text-lg font-bold text-white block mb-1">Tecnologias:</span>
            Next.js, Django, DRF, Flask, TailwindCSS, Docker, PostgreSQL, SQL, NoSQL, AWS, Node.js, Prisma, OpenAI API, LangChain, Git
          </p>
        </div>
      </div>


        {/* Projetos */}
        <div className="w-full max-w-4xl border-t border-gray-600 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black p-6 rounded-lg shadow-xl border border-white hover:shadow-2xl transition transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>

        {/* Links + e-mail */}
        <div className="mt-10 flex flex-col items-center space-y-2 text-sm text-gray-400">
          <div className="flex space-x-4">
            <a
              href="https://github.com/guilherme-donato-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/guilhermedonatodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p>
            Ou me mande um e-mail:{" "}
            <a
              href="mailto:guilhermedonatodev@gmail.com"
              className="text-white underline hover:text-gray-300"
            >
              guilhermedonatodev@gmail.com
            </a>
          </p>
        </div>

        {/* Frase aleatória no rodapé */}
        <p className="mt-8 italic text-sm text-gray-500">{fraseAleatoria}</p>
      </div>
    </>
  );
}
