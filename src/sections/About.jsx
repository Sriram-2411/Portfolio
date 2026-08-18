import { Code2,Lightbulb,Rocket,Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing simple, organized, and readable code that is easy to understand and improve.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building responsive applications with a focus on speed, usability, and a smooth experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Sharing ideas, learning from others, and working together to turn problems into solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring new technologies and finding practical ways to turn ideas into useful solutions.",
  },
];



export const About =()=>{
    return(
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-10 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in w-full">
                    <span className=" block text-left md:text-center text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                        About Me
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        one component at a time.
                    </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                    <p>
                        I enjoy taking an idea and figuring out how to turn it into a working web application.
                         As a MERN Stack Developer, 
                         I work across React, Node.js, Express, and MongoDB,
                         bringing together interface, logic, and data to build applications that
                         feel complete from end to end.
                    </p>
                    <p>
                        What keeps me interested in development is the process
                         of figuring things out  solving a problem, trying a 
                         different approach, and seeing the result come together. 
                         I'm continuously sharpening my skills through projects and 
                         looking for opportunities where I can learn, contribute, and
                          grow as a developer.
                    </p>
                </div>
                <div className="desighn rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                    <p className="text-lg font-extrabold italic text-foreground">
                        "Turning ideas into digital experiences that 
                        are simple to use, meaningful to users, and 
                        built to last."
                    </p>
                </div>


        </div>
        {/* right column */}

        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index)=>(
                <div key={index} className="desighn p-6 rounded-2xl animate-fade-in" 
                style={{animationDelay:`${index +1 *100}ms`}}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"> 
                         <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2"> {item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
            ))}
        </div>


        </div>
        </div>
        </section>
);
}