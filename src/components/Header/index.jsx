import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import TypewriterEffect from "../TypewriterEffect";
const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const list = [
    "головна",
    "особливості",
    "опис",
    "характеристики",
    "відгуки",
    "відео",
    "замовити",
  ];
  return (
    <header className=" w-full   bg-gradient-to-r from-orange-600 to-red-500 flex items-center h-16 px-5">
      <div className="relative z-20">
        <Link to="головна" smooth={true}>
          <TypewriterEffect textToWrite={"Quick shopping"} />
        </Link>
      </div>
      <nav className="hidden flex-1 md:flex justify-end">
        <ul className="flex justify-evenly">
          {list.map((item, index) => (
            <li key={index} className="px-2 border-r-2 first:border-l-2">
              <Link
                to={item}
                smooth={true}
                className="text-white text-lg capitalize hover:scale-105 transition-all duration-200 inline-block cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className={`absolute ${
          showMenu ? "top-0" : "-top-full"
        }  transition-all duration-500  left-0 bg-gradient-to-b from-orange-600 to-red-400 h-full w-full md:hidden z-10`}
      >
        <ul className="h-full flex flex-col items-center justify-center">
          {list.map((item, index) => (
            <li key={index} className="py-2 px-2">
              <Link
                to={item}
                smooth={true}
                onClick={() => setShowMenu(false)}
                className="text-white text-3xl capitalize hover:scale-105 transition-all duration-200 inline-block"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {showMenu ? (
        <IoMdClose
          className="absolute right-10 top-[22px] md:hidden z-20"
          size={30}
          fill={"#fff"}
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <AiOutlineMenu
          className="absolute right-10 top-[22px] md:hidden z-20"
          size={30}
          fill={"#fff"}
          onClick={() => setShowMenu(true)}
        />
      )}
    </header>
  );
};

export default Header;
