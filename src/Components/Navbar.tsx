import { useState } from "react";
import { Link } from "react-scroll";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <nav className=" z-50 w-full  fixed bg-stroke/30 backdrop-blur-xl ">
      <div className="flex items-center justify-between px-7 py-5 mx-auto">
        <div>
          <h1 className="font-signature text-5xl text-white cursor-pointer">
            <Link to="Home" smooth={true} spy={true}>
              Bintang
            </Link>
          </h1>
        </div>
        <ul className="hidden lg:flex gap-6 justify-end items-center flex-1 font-bold text-3xl text-white [&>li]:cursor-pointer">
          <li>
            <Link
              to="About"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="Project"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Skill"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              Skill
            </Link>
          </li>
          <li>
            <a
              href={"/Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-500"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="lg:hidden">
          {modalOpen ? (
            <IoCloseSharp
              className="text-3xl text-white cursor-pointer"
              onClick={toggleModal}
            />
          ) : (
            <BsList
              className="text-3xl text-white cursor-pointer"
              onClick={toggleModal}
            />
          )}
        </div>
      </div>
      {modalOpen && (
        <ul className="lg:hidden flex flex-col gap-6 -mt-20 justify-center items-center  font-bold text-3xl text-white [&>li]:cursor-pointer h-dvh ">
          <li>
            <Link
              to="About"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="Project"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Skill"
              smooth={true}
              spy={true}
              activeClass="text-blue-500"
            >
              Skill
            </Link>
          </li>
          <li>
            <a
              href={"/Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-blue-500"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
