import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Hero = () => {
  return (
    <main className=" flex flex-col justify-center bg-hero-pattern w-full h-screen bg-cover text-white mx-auto ">
      <div className="flex flex-col items-center justify-center mx-auto h-full font-bold">
        <h1 className=" text-[50px]">Hello, I'm</h1>
        <h1 className="font-signature text-[100px] tracking-widest ">
          Mohammad Bintang Wicaksono
        </h1>
      </div>

      <div className="flex gap-10 text-[60px] pl-[77px] pb-[30px]">
        <div className="card-socialmedia">
          <a href="https://github.com/mbintangw">
            <FaGithub className="text-[60px]" />
          </a>
        </div>
        <div className="card-socialmedia">
          <a href="https://www.linkedin.com/in/mbintangw">
          <FaLinkedin />
          </a>
        </div>
        <div className="card-socialmedia">
          <a href="mailto:mbintangw@gmail.com">
          <MdEmail />
          </a>
        </div>

      </div>
    </main>
  );
};

export default Hero;
