import About from "../Components/About"
import Hero from "../Components/Hero"
import Project from "../Components/Project"
import Skill from "../Components/Skill"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
    </div>
  )
}

export default HomePage
