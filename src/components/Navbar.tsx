// Creating the Nav element
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { userDarkMode } from "../hooks/darkMode";

const Navbar = () => {
  const { darkMode, setDarkMode } = userDarkMode();
  return (
    <>
      <div className="flex justify-between items-center gap-10 p-5">
        <span>
          <MdFactCheck size={50} color={"#78C841"} />
        </span>
        <h1 className="text-3xl">My Todos</h1>
        <button className="btn-circle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <IoSunny size={20} color="#78C841" />
          ) : (
            <IoMoon size={20} color="#78C841" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
