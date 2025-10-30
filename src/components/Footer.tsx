// components/Footer.tsx
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {" "}
      {/* Ensure full width */}
      <div className="dark:bg-black w-full">
        <div className="flex justify-between items-center gap-5 p-5 min-h-[300px]">
          <h1 className="text-4xl md:text-6xl dark:text-gray-700 font-bold flex justify-center items-center pl-10">
            Nick's Todos
          </h1>
          <div className="flex justify-center items-center text-gray-600 max-w-2xl text-end">
            Interactive todo list you can add, delete, save, check and uncheck
            your todos.
          </div>
        </div>

        <div className="flex justify-between items-center gap-2.5 px-4 pb-5">
          <div className="text-center p-5 text-gray-300">
            &copy;copy right | reserved by saquib hazari
          </div>
          <div className="flex justify-center items-center gap-2 pr-5 text-gray-300 cursor-pointer">
            <FaDiscord size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
