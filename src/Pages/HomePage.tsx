import About from "../Components/About"
import Hero from "../Components/Hero"
import Project from "../Components/Project"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero/>
      <About/>
      <Project/>
    </div>
  )
}

export default HomePage
