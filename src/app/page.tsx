/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pagina inicial",
  description: "Pagina inicial do projeto",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-6 py-8 max-w-[1024px]">
        <section className="text-center mb-16  " >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Bem vindo ao meu portfólio
          </h1>
          <p className="text-xl text-gray-600  dark:text-gray-300 mb-8">
            Olá! Sou Robson Luiz e este é o meu portfólio, onde vou apresentar
            alguns dos meus projetos e trabalhos pessoais, algum tempo atrás eu
            encontrei um repositório de ideias para apps, resolvi criar este
            projeto onde realizarei alguns dos projetos desde o nível básico ao
            avançado. Para poder encontrar o repositório basta clicar no botão
            abaixo"repositório".
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Para ver os projetos já realizados basta clicar no botão "Projetos"
          </p>

          <a
            target="_blank" 
            href="https://github.com/florinpop17/app-ideas?tab=readme-ov-file"
          >
            <Button className="text-lg mr-4">
              Repositório
            </Button>
          </a>

          <Link href="/pages/Projects">
            <Button className="text-lg">Projetos</Button>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Sobre Mim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="col-span-1 md:col-span-2">
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sou um desenvolvedor full-stack apaixonado por tecnologia e
                  inovação. Com uma formação em Engenharia de Software, finalizado
                  em 2024, estou sempre em busca de novos desafios e aprendizado.
                  Tenho experiência em desenvolvimento de mais de 2 anos porém profissionalmente 
                  estou iniciando na carreira de desenvolvedor full-stack.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Eu me especializei em desenvolvimento web e mobile usando
                  tecnologias como React, React Native, Node.js.
                  Utilizo também os frameworks Next.js e Vue.js para criar
                  aplicativos web modernos e responsivos.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Para o desenvolvimento back-end tenho experiencia em Java e 
                  estou estudando c# para que possa engrandecer ainda mais meus projetos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <Image width={150} height={150}  src="/Screenshot_2.jpg" alt="robson luiz" />
                  
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Desenvolvedor Full-Stack  
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300">
                      1 year experience profissional
                    </span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Universidade Alves Faria - UNIALFA
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
