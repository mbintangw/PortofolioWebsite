import { useState, useEffect } from "react";
import data from "../../data.json";
import { IoCloseSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub} from "react-icons/fa";
const Project = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  useEffect(() => { document.body.style.overflow = selectedProject ? 'hidden' : 'auto'; }, [selectedProject]);

  return (
    <main className="flex flex-col h-screen justify-center items-center gap-20" id="Project">
      <div>
        <h1 className="text-5xl text-headline font-bold">Project</h1>
      </div>

      <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 justify-center mx-10">
        {data.map((project, index) => (
          <div className="card-project" key={index} onClick={() => setSelectedProject(project)}>

            <div className="w-full h-full">
            <img src={project.poster_path} className="rounded-3xl object-top w-full h-full" />
            </div>
            <div className="absolute text-white bottom-4 left-0 text-center bg-highlight px-6 cursor-pointer">
             <h1 className="font-semibold text-2xl  my-2">{project.name}</h1> 
            </div>
            
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xl z-50">
          <div className="bg-stroke text-white p-10 rounded-lg shadow-lg w-[500px] h-[500px] md:h-[700px] md:w-2/3 overflow-y-auto md:overflow-hidden space-y-10">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
              <IoCloseSharp className="cursor-pointer text-3xl text-tertiary" onClick={() => setSelectedProject(null)} />
            </div>
            <img src={selectedProject.poster_path} className="w-full h-64 object-cover mb-4" />
            <p className="mb-4 text-justify text-md md:text-xl text-white/70 ">{selectedProject.description}</p>
            <div className="flex gap-4">
              <button className="bg-tertiary text-white px-4 py-2 rounded" onClick={() => setSelectedProject(null)}>Close</button>
              <button className="bg-highlight text-white px-4 py-2 rounded" onClick={() =>  window.open(selectedProject.website_url, '_blank')} > <TbWorldWww size={30}/> </button>
              <button className="bg-highlight text-white px-4 py-2 rounded" onClick={() =>  window.open(selectedProject.github_url, '_blank')} > < FaGithub size={30}/> </button>
            </div>
            
          </div>
        </div>
      )}
    </main>
  )
}

export default Project
