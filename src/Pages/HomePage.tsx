import About from "../Components/About"
import GetInTouch from "../Components/GetInTouch"
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
      <GetInTouch/>
    </div>
  )
}

export default HomePage
