import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Skill = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-7xl text-headline" />,
      url: "https://www.w3schools.com/html/",
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 className="text-7xl text-headline" />,
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript className="text-7xl text-headline" />,
      url: "https://www.w3schools.com/js/",
    },
    {
      name: "ReactJS",
      icon: <RiReactjsFill className="text-7xl text-headline" />,
      url: "https://reactjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-7xl text-headline" />,
      url: "https://tailwindcss.com/",
    },
    {
      name: "Github",
      icon: <AiFillGithub className="text-7xl text-headline" />,
      url: "https://github.com/mbintangw",
    },
  ];

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main id="Skill" className="h-screen flex justify-center items-center">
      <div className="flex flex-col mx-auto gap-10">
        <h1 className="text-center text-5xl text-headline font-bold">
          My Skills
        </h1>

        <div className="flex flex-wrap justify-center items-center mt-12 gap-10">
          {skills.map((skill,index) => (
            <button
              onClick={() => handleButtonClick(skill.url)}
              title={skill.name}
              className="card-skill"
              key={index}
            >
              {skill.icon}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skill;
