import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projetos Feitos",
  description: "Pagina referente aos projetos ja feitos",	
};





const projects = [
    { title: "bin2dec", difficulty: "Easy", description: "projeto simples para transformar binário para decimal.", link: "/pages/bin2dec" },
    { title: "Meal Gen", difficulty: "Easy", description: "projeto para gerar uma comida aleatória.", link: "/pages/meal" },
    { title: "Json2csv", difficulty: "Easy", description: "Transformando um arquivo Json em CSV.", link: "/pages/json2csv" },
    { title: "Weather App", difficulty: "Easy", description: "Usando a api de previsão do tempo.", link: "/pages/weather" },
  ]
  
  export default function Projects() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <main className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
  
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projetos Completados </h1>
  
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <span className={`text-sm px-2 py-1 rounded ${
                      project.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                      project.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  {project.link && (
                      <Link href={project.link}>
                      <Button variant="outline" className="flex items-center mt-4">
                        Acessar
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
      </div>
    )
  }