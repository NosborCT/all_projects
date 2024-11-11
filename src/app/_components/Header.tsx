import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <>
  <header className="w-full flex justify-between sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
    <nav className="container mx-auto px-6 py-3">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          My Portfolio
        </Link>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/NosborCT" target="_blanc"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/robsonluizn/" target="_blanc"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="robsonfilho007@hotmail.com" target="_blanc"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  </header>
</>

  );
};

export default Header;
