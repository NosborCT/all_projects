import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import ProjectCard from "./_components/ProjectCard";
import ProjectCard2 from "./_components/ProjectCard2";
import ProjectCard3 from "./_components/ProjectCard3";
export const metadata: Metadata = {
  title: "Home",
  description: "Pagina inicial do projeto",
};

export default function Home() {
  return (
    <>
      <div className=" flex flex-col max-w-xl w-full items-center mt-44 p-7 pb-28	">
        <div className=" text-[#f7f7f7] mb-4 ">
          <h1 className="text-3xl font-boldflex text-center mb-4 text-white">Sobre mim</h1>
          <p className="   mt-6 text-xl text-white text-center justify-center">Me chamo Robson Luiz, formado em Engenharia de Software, tenho 22 anos, 
          e estou realizando este projeto para aprimorar meus conhecimentos. E realizar a criação de um portfolio.</p>
        </div>
        <h1 className=" text-3xl font-bold text-white ">Motivo do projeto:</h1>
        <p className="   mt-6 text-xl text-white text-center justify-center">
          {" "}
          Ao me deparar com um repositório cheio de ideias para apps, resolvi
          criar este projeto onde realizarei alguns dos projetos desde o nível
          básico ao avançado.
        </p>
        <p className="   mt-6 text-xl text-white text-center justify-center">
          {" "}
          Para acessar os projetos basta utilizar o botão de projetos no canto
          superior direito ou logo mais abaixo nos cards.
        </p>
        <p className="   mt-6 text-xl text-white text-center justify-center">
          {" "}
          Para acessar o repositório com as ideias basta clicar no botão abaixo:
        </p>
        <a
          target="_blank"
          href="https://github.com/florinpop17/app-ideas?tab=readme-ov-file"
        >
          <Button className=" mt-4 transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg ">
            Repositório
          </Button>
        </a>
      </div>

      <div>
        <h1 className=" text-xl ml-4 font-bold text-[#f7f7f7] ">
          {" "}
          Projetos Tier 1 - Básico :{" "}
        </h1>
        <ProjectCard />
      </div>

      <div>
        <h1 className=" text-xl ml-4 font-bold text-[#f7f7f7] ">
          {" "}
          Projetos Tier 2 - Intermediário :{" "}
        </h1>
        <ProjectCard2 />
      </div>

      <div>
        <h1 className=" text-xl ml-4 font-bold text-[#f7f7f7] ">
          {" "}
          Projetos Tier 3 - Avançado :{" "}
        </h1>
        <ProjectCard3 />
      </div>

    </>
  );
}
