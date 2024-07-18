const Footer = () => {
  return (
    <main className="bg-highlight lg:h-[500px]">
      <img
        src="/images/cloud.png"
        className=" lg:h-[300px] -rotate-180"
      />
      <div className="space-y-5 mt-16">
        <h1 className="font-signature text-[25px] md:text-[40px] lg:text-[50px] tracking-widest text-center text-white ">
          Bintang Portofolio
        </h1>
        <h1 className="text-white text-center text-sm md:text-base lg:text-2xl">
          Created by Mohammad Bintang Wicaksono. All Rights Reserved.
        </h1>
      </div>
    </main>
  );
};

export default Footer;
