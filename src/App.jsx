import { Navbar } from "@/Layout/Navbar";
import { Hero} from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Testimonials } from "@/sections/Testimonials";





function App() {
  return (
   
     
      <div className="min-h-screen overflow-x-hidden">
        <Navbar/>
        <main>
            
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Testimonials/>
     
     
        </main>
    </div>
  );
}

export default App


