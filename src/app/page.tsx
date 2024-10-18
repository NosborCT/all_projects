import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col max-w-xl w-full items-center mt-44 p-7 pb-28	">
        <h1 className=" text-3xl font-bold text-white ">Motivo do projeto:</h1>
        <p className="   mt-6 text-xl text-white text-center justify-center"> Ao me deparar com um repositório cheio de ideias para apps, resolvi criar este projeto onde realizarei todos os projetos desde o nivem basico ao avançado.</p>
        <p className="   mt-6 text-xl text-white text-center justify-center"> Para acessar os projetos basta utilizar o botão de projetos no canto superior direito.</p>
        <p className="   mt-6 text-xl text-white text-center justify-center"> Para acessar o repositório com as ideias basta clicar no botão abaixo:</p>
        <a target="_blank" href="https://github.com/florinpop17/app-ideas?tab=readme-ov-file">
        <Button  className=" mt-4 transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg ">Repositório</Button>
        </a>
       
      </div>
    </>
  );
}
