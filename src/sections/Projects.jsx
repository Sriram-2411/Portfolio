import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";


  const projects =[
    {title: " Visitorpass Dashboard",
    description :
    "A smart digital workflow that transforms traditional visitor handling into a secure, paperless experience from registration and employee approval to check-in and check-out. Built with MERN and role-based access control for seamless coordination between reception, employees, and administrators.",
     image: "/Projects/visitor.jpg",
     tags: ["React" , "node.js","MongoDB","Express","JWT" ,"RBAC"],
     link:"https://visitorpassmanagementsystem-2-r0ob.onrender.com/",
     github: "https://github.com/Sriram-2411/Visitorpassmanagementsystem.git",
    },
    {
  title: "BiteBox",
  description:
    "A modern food ordering platform designed to make discovering meals and placing orders simple and seamless. Built with MERN to deliver a responsive experience with dynamic menu browsing, cart management, secure authentication, and smooth order handling.",
  image: "/Projects/bitebox.png",
  tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  link: "https://bitebox-p3sm.vercel.app/",
  github: "https://github.com/Sriram-2411/BITEBOX.git",
},
{
  title: "Charity Helper",
  description:
    "A simple platform that connects donors with meaningful causes, making it easier to discover, contribute, and manage charitable support through a seamless digital experience.",
  image: "/Projects/charity.png",
  tags: ["React", "Node.js","javascript"],
  link:"#",
  github: "#",
},
{
  title: "Built by Greeks",
  description:"A modern digital experience built with clean design, intuitive navigation, and user-focused functionality.",
  image: "/Projects/learning.png",
  tags: ["HTML", "CSS","javascript"],
  link:"#",
  github: "#",
},


  ]
  
  
  export const Projects =()=>{
    return(
    
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl "></div>
        <div className="container mx-auto px-10 relative z-10">
          {/* section header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground hover:text-white">Project that
               <span className="font-serif italic font-normal  text-amber-50 hover:text-secondary-foreground">  make an impact</span> 
               </h2>
               <p className="text-muted-foreground animate-fade-in animate-delay-200">
                  Turning ideas into practical solutions while continuously exploring, learning, and building meaningful digital experiences.               </p>
          </div>
          {/* projects grid */}
          <div className=" grid md:grid-cols-2 gap-8">
              {projects.map((project, idx)=> (
                <div key={idx} className="group desighn rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                
                 style={{animationDelay:`${(idx +1) *100}ms`}}>
                  
                  {/* image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                     src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50
                    to-transparent opacity-60"/>

                    {/* image link */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.link}className="p-3 rounded-full desighn hover:bg-primary hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <a href={project.github}className="p-3 rounded-full desighn hover:bg-primary hover:text-primary-foreground transition-all">
                        
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* image content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-color">{project.title}</h3>
                      <ArrowUpRight 
                      className="w-5 h-5 text-muted-foreground
                      group-hover:text-primary group-hover:translate-x-1
                      group-hover:-translate-y-1 transition-all"/>

                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className=" flex flex-wrap gap-2">{project.tags.map((tag, tagidx) => (
                      <span
                      key={tagidx}
                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                    ))}</div>
                  </div>

                </div>
              ))}
          </div>
        </div>
    </section>
) };