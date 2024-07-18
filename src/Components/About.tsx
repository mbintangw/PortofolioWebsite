const About = () => {
  return (
    <main className="flex md:flex-row flex-col justify-center items-center gap-10 px-10 h-screen" id="About">
      <div className="space-y-5 md:w-[600px]">
        <h1 className="text-4xl text-headline font-bold">About Me</h1>
        <h1 className="md:text-5xl text-3xl text-headline font-bold">FrontEnd Web Developer</h1>
        <p className="text-justify text-paragraph text-wrap">
          I am a FrontEnd Web Developer. I have 2 years of experience. I am
          very passionate about web development. I am good at HTML, CSS, Javascript, ReactJs, and NodeJs.
        </p>
      </div>

      <div>
        <img src="/images/PP.jpg" className="w-96 rounded-xl" />
      </div>

    </main>
  );
};

export default About;
