import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <main className="flex flex-col gap-10 h-screen justify-center items-center">
      <div className="space-y-5">
        <h1 className="text-center text-5xl text-headline font-bold">Get In Touch</h1>
        <h2>Do you have any job vacancies? Just contact me with this media below</h2>
      </div>

      <div className="flex flex-row gap-10">
        <div className="flex justify-center items-center gap-4 p-4 shadow-highlight shadow-2xl border rounded-xl">
        
        <FaWhatsapp className="text-4xl"/>
        <div className="text-center space-y-2">
          <h2 className="text-xl">WhatsApp</h2>
          <button className="bg-highlight text-white px-4 py-2 rounded" onClick={() => window.open("https://wa.me/6281288669180")}>Get In Touch</button>
        </div>
        </div>

        <div className="flex justify-center items-center gap-4 p-4 shadow-highlight shadow-2xl border rounded-xl">
        <MdEmail className="text-4xl"/>
        <div className="text-center space-y-2">
          <h2 className="text-xl">Email</h2>
          <button className="bg-highlight text-white px-4 py-2 rounded" onClick={() => window.open("mailto:mbintangw@gmail.com")}>Get In Touch</button>
        </div>
        </div>
      </div>
      

    </main>
  )
}

export default GetInTouch
