import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" z-50 w-full  fixed">
      <div className=" flex items-center justify-between px-4 py-5 mx-auto">
        <div>
          <h1 className="font-signature text-5xl text-white">Bintang</h1>
        </div>
        <ul className="flex gap-6 justify-end items-center flex-1 font-bold text-3xl text-white [&>li]:cursor-pointer">
          <li>
            <Link to="home" smooth={true} activeClass="text-blue-500">
              Home
            </Link>
          </li>
          <li>Projects</li>
          <li>Skill</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
