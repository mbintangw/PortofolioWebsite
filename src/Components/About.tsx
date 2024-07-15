const About = () => {
  return (
    <main className="flex flex-row justify-center items-center gap-10 px-10 h-screen">
      <div className="space-y-5 w-[600px]">
        <h1 className="text-3xl text-headline font-bold">About Me</h1>
        <h1 className="text-5xl text-headline font-bold">FrontEnd Web Developer</h1>
        <p className="text-justify text-paragraph text-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel debitis
          inventore nobis repellat. Sint, hic in, corrupti labore natus vero
          nulla omnis doloremque neque unde consectetur temporibus quae
          consequuntur alias incidunt sunt! Et ducimus perferendis culpa
          distinctio veniam eveniet? Eos ab at consequatur doloribus quo
          explicabo voluptatum, ipsa autem aspernatur, odio, placeat sint! Nemo
          ab neque minus, soluta delectus illum aliquam voluptates ducimus
          saepe? A provident, libero repellat dicta veniam dolore suscipit
          ratione. Amet modi dicta similique reprehenderit accusantium!
          Laboriosam eius facere, at itaque corrupti praesentium esse suscipit
          minus laborum sint molestiae modi odit nesciunt similique impedit
          quasi nisi veritatis!
        </p>
      </div>

      <div>
        <img src="/images/PP.jpg" className="w-96 rounded-xl" />
      </div>

    </main>
  );
};

export default About;
