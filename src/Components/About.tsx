const About = () => {
  return (
    <main
      className="flex md:flex-row flex-col justify-center items-center gap-10 px-10 h-screen"
      id="About"
    >
      <div className="space-y-5 md:w-[600px]">
        <h1 className="text-4xl text-headline font-bold">About Me</h1>
        <h1 className="md:text-5xl text-3xl text-headline font-bold">
          FrontEnd Web Developer
        </h1>
        <p className="text-justify text-paragraph text-wrap">
          I have a high interest in learning new things, driven by a strong
          sense of curiosity. Analytical and critical thinking skills,
          communicative, and quick learner traits and the ability to work
          together in a team are an integral part of me. I am able to adapt
          quickly. I am committed to being a reliable team member, contributing
          to the maximum, and striving with the team to achieve company goals.
        </p>
      </div>

      <div>
        <img src="/images/PP.jpg" className="w-96 rounded-xl" />
      </div>
    </main>
  );
};

export default About;
