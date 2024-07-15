import About from "../Components/About"
import Hero from "../Components/Hero"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero/>
      <About/>
    </div>
  )
}

export default HomePage
