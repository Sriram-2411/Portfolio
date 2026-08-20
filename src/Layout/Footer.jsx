import { Icon } from "lucide-react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const socialLinks = [
    {Icon:FaGithub, href:"https://github.com/Sriram-2411",label:"Github" },
    {Icon:FaLinkedin, href:"https://www.linkedin.com/in/sriram-saba540247/",label:"Linkedin" }


];

const navlinks = [
    
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },

  
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];


export const Footer =() =>{
    const currentYear = new Date().getFullYear();
    return(
        <footer className="py-12 border-t border-border mx-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* logo&copyrights   */}
                  <div className="text-center md:text-left">
                        <a href="#"className="text-xl font-bold tracking-tight">S.
                            <span className="text-primary">
                                        S
                            </span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            ©{currentYear} Sriram.S All rights reserved.

                        </p>


                    </div>

                    {/* links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navlinks.map((link) =>(
                           <a 
                           key={link.href}
                           href={link.href}
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {link.label}

                           </a> 
                        ))}
                       
                    </nav>

                    {/* social link */}
                    <div className=" flex items-center gap-8 ">
                        {socialLinks.map((social) =>(
                            <a
                            key={social.href}
                            href={social.href}
                            className="p-2 rounded-full desighn hover:bg-primary/10 hoer:text-primary transition-all"
                            >
                                <social.Icon className="w-5 h-5" />
                            </a>
                        )
                        )}

                    </div>
                </div>
            </div>
        </footer>
    )
}