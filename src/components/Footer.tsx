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
        <div className="flex justify-between items-center gap-2.5 px-4 p-5">
          <div className="text-center p-5 text-gray-300">
            &copy;copy right 2025 | reserved by Nick
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
