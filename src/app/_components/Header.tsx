import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <header className=" w-full max-w-5xl flex justify-between items-center mb-12 ">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <h1 className=" text-white text-2xl font-bold">Home</h1>
            </div>
          </Link>


          <Sheet>
          <SheetTrigger asChild>
            <Button className=" transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black text-lg ">Projetos</Button>


          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-[#053D39] ">
            <SheetHeader>
              <SheetTitle className=" text-white mb-5" >Projetos:</SheetTitle>
              <SheetDescription className=" text-white">
                  
                  <Link href = "/pages/bin2dec">
                    
                    <SheetClose asChild>
                      <Button className=" flex w-full max-w-md  font-semibold transition duration-300 bg-[#FC7F42] hover:bg-[#D9D9D9] hover:text-black" >Bin2Dec</Button>
                    </SheetClose>
                  </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </header>
    </>
  );
};

export default Header;
