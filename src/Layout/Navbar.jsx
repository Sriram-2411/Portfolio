 
 import { useEffect, useState } from "react";
 import { Button } from "@/components/Button";
 import { Menu, X } from "lucide-react";
const navlinks = [
    
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },

  
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const[isMobileMenuopen,setIsMobileMenuopen] = useState(false);
    const[isScrolled,setIsScrolled] = useState(false);
useEffect(() =>{

  const handleScroll = () =>{
    setIsScrolled(window.scrollY>50);
  }

  window.addEventListener("scroll",handleScroll)

  return () =>   window.removeEventListener("scroll",handleScroll)


},[])
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "desighn-strong py-3"  : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto  px-6 flex items-center justify-between">
        <a
  href="#home"
  className="text-2xl md:text-3xl font-bold tracking-tight group"
>
  <span className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
    &lt;
  </span>

  <span className="text-white group-hover:text-primary transition-colors duration-300">
    S.S
  </span>

  <span className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
    /&gt;
  </span>
</a>
{/* desktop */}

        <div className="hidden md:flex items-center gap-1 ">
          <div className="desighn rounded-full px-13 py-2 flex items-left gap-1" >
            {navlinks.map((link, index) => (
              <a href={link.href} key={index} className="px-6 py-1  text-x text-muted-foreground hover:text-foreground rounded-full font-extrabold  hover:bg-surface  ">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* button */}

        <div className="hidden md:block">
<Button
  size="sm"
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Contact Me
</Button>
        </div>
        {/* mobile menu button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer"

        onClick={()=> setIsMobileMenuopen((prev) => !prev)}>
          {isMobileMenuopen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* mobile menu */}

      {isMobileMenuopen && (
      <div className="md:hidden desighn-strong animate-fade-in">
        
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
           {navlinks.map((link, index) => (
              <a href={link.href} 
              key={index} 
              onClick={() => setIsMobileMenuopen(false)}
              className="text-lg text-muted-foreground hover:text-foreground py-4">
                {link.label}
              </a>
            ))}

                      <Button onClick={() => setIsMobileMenuopen(false)}
 >Contact Me</Button>

        </div>

      </div>
      )}
    </header>
  );
};

