 import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
 
 const skills =[
  "React",
  "Javascript",
  "HTML",
  "Node.js",
  "Express.js",
  "CSS",
  "My SQL",
  "MongoDB",
  "Render",
  "Vercel",
  "Tailwind CSS",
  "Git",

 ];






export const Hero = () => {
    return (
    <section 
    id="home"
    
    className="relative min-h-screen flex items-center overflow-hidden">
       {/* bg */}

       <div className="absolute inset-0 ">
         <img src="/Projects/hero-bg.jpg" alt="Hero background"  className="w-full h-full object-cover opacity-40"/>   
         
         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
          </div>

          {/* greendots

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) =>(
                <div key={i} 
                className=" absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#22c55e",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation:`slow-drift ${15 + Math.random() *20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                
                />
            ))}
          </div> */}
          {/* colorful glowing particles */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(100)].map((_, i) => {
    const colors = [
      "#a855f7", // Purple
      "#3b82f6", // Blue
      "#06b6d4", // Cyan
      "#ec4899", // Pink
      "#f59e0b", // Amber
    ];

    const color = colors[i % colors.length];

    return (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          backgroundColor: color,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.4 + Math.random() * 0.5,
          boxShadow: `0 0 6px ${color}, 0 0 14px ${color}`,
          animation: `slow-drift ${
            12 + Math.random() * 15
          }s ease-in-out infinite`,
          animationDelay: `${Math.random() * 6}s`,
        }}
      />
    );
  })}
</div>

{/* content */}
<div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20  2xl:px-24 pt-40 pb-20 relative z-10">    
<div className="grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28 items-center">     
       {/* left column - text content  */}
        <div className="space-y-8"> 
      {/* Greeting */}
<div className="animate-fade-in">
    <p className="text-lg md:text-xl text-muted-foreground mb-3 translate-x-5 ">
        Hi, I'm {" "}
        <span className="text-white font-bold">
           Sriram.S
        </span>{" "}
        
    </p>

    <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full desighn text-sm text-primary">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
        MERN Stack Developer
    </span>
</div>
            {/* Headline */}
            <div className="space-y-4 ">
<h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight  lg:text-left animate-fade-in animate-delay-100">                    Turning <span className="text-primary glow-text">Complexity</span>
                    <br />
                    into digital
                    <br />
                    <span className="font-serif italic font-normal text-white">
                        Simplicity.
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">

                    I enjoy making complicated things feel simple. 
                    From architecture to interface, 
                    I use the MERN stack to build dependable applications that solve real problems without making the experience feel complicated.

                </p>
            </div>
            {/* CALL TO ACTION */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-200">

                <Button size="lg"> Contact Me <ArrowRight className="w-5 h-5"/>
                </Button>
            <AnimatedBorderButton/>
            </div>
            {/* Social Link */}
            <div className="flex items-center gap-3">
  <span className="text-muted-foreground">
    Follow me:
  </span>

  <a
    href="https://github.com/Sriram-2411"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center
               text-muted-foreground hover:text-primary hover:border-primary
               transition-all duration-300"
  >
    <FaGithub className="w-5 h-5" />
  </a>

  <a
       href="https://www.linkedin.com/in/sriram-s-7aa670244/"
       target="_blank"
      rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center
               text-muted-foreground hover:text-primary hover:border-primary
               transition-all duration-300"
  >
    <FaLinkedin className="w-5 h-5" />
  </a>
</div>

        </div>
        {/* right column - image content */}
<div className="relative mt-7 lg:mt-0 animate-fade-in animate-delay-300 lg:translate-x- xl:translate-x-10">                 <div className="relative max-w-md mx-auto ">

                  

            <div className="relative desighn  rounded-3xl p-2 glow-border">
              <img src="/Projects/profile-photo.jpeg" alt="Sriram"className="  w-full aspect-[4/5] object-cover rounded-2xl"/>

              {/* Floating Badge */}

              <div className="absolute -bottom-4 -right-4 desighn rounded-xl px-4 py-3  animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold"> Available for work </span>
                </div>
              </div>


              {/* statsbadge */}
              <div>
                <div>
                  {/* venum na experience  add panikilam */}
                </div>
              </div>





            </div>
          </div>
        </div>
    </div>
    {/* skills section */}
<div className="mt-8 animate-fade-in animate-delay-600">
<p className="text-sm text-muted-foreground mb-6 text-center">
  Technologies I work with
</p>
</div>
<div className="relative overflow-hidden">
  <div  className="flex  animate-marquee">
   { [...skills, ...skills].map((skill, index) => (
  <div key={index} className="flex-shrink-0 px-7 py-0 ">
    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
    </div>
    
    ))}
  </div>
</div>

</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
<a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-shadow-primary-foreground">
 <span className="text-xs uppercase tracking-wider">Scroll</span> 
 <ChevronDown className="w-6 h-6 animate-bounce"/>
</a>

</div>

   
    </section>
    );
};

