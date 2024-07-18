import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Hero = () => {
  return (
    <main className=" flex flex-col justify-center bg-highlight w-full h-screen bg-cover text-white mx-auto" id="Home">
      <div className="flex flex-col items-center justify-center mx-auto h-full font-bold">
        <h1 className="text-[25px] md:text-[50px]">Hello, I'm</h1>
        <h1 className="font-signature text-[50px] md:text-[80px] lg:text-[100px] tracking-widest text-center ">
          Mohammad Bintang Wicaksono
        </h1>
      </div>

      <img src="/images/cloud.png" className="h-[150px] lg:h-[300px]" />

      <div className="flex gap-2 lg:gap-10 text-[30px] lg:text-[60px] absolute bottom-5 lg:left-60 left-7 md:left-24 ">
        <div className="card-socialmedia">
          <a href="https://github.com/mbintangw">
            <FaGithub className="" />
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
