import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className=" w-full max-w-5xl flex justify-between items-center mb-12 ">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <h1 className=" text-white text-2xl font-bold">Home</h1>
            </div>
          </Link>
          <Button className=" transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg ">Projetos</Button>
      </header>
    </>
  );
};

export default Header;
