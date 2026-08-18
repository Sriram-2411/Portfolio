import {Mail, Phone, MapPin,Send, CheckCircle, AlertCircle} from "lucide-react"
 import { Button } from "@/components/Button";
 import { useState } from "react";
 import emailjs from "@emailjs/browser"



const contactInfo =[
   { icon:Mail,
    label:"Email",
    value:"sriram24112001@gmail.com",
    href : "mailto:sriram24112001@gmail.com"
},
 { icon:Phone,
    label:"Phone",
    value:"+91 9789942922",
    href : "tel:+91 9789942922"
},
{ icon:MapPin,
    label:"Location",
    value:"chennai",
  href: "https://www.google.com/maps/search/?api=1&query=Sabapathi%20Illam%2C%20Kayar%2C%20Tamil%20Nadu"
},
]







export const Contact =()=>{
                const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
            });

            const [isLoading, setIsLoading] =useState(false)
            const [submititStatus, setSubmititStatus] =useState({
                type:null,//'success or 'error
                message:"",
            })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        setIsLoading(true);
        setSubmititStatus({type:null , message: ""});
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const Publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !Publickey) {
                throw new Error(
                    "Email configuration is missing, please check your environment variable"
                );
            }


            await emailjs.send(serviceId ,templateId , {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            Publickey
        );

        setSubmititStatus({
            type: "success",
            message:" Message sent Successfully"
        });

        setFormData({name:"",email:"", message:""});



        }catch(err){
            console.error("Emailjs error:",err);
            setSubmititStatus({
                type: "error",
                message:
                err.text|| "Failed to send message. Please try again later"
            });

        }finally{
            setIsLoading(false)
        }
    }
    return(
          <section
               id="contact"
               className="min-h-screen py-15 lg:py-24 relative overflow-hidden"
                >
            <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>

                </div>
                <div className="container mx-auto px-6 relative z-10"> 
                    {/* section header */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-secondary-foreground text-sm font-medium tracking-normalanimate-delay-100"> 
                            GET IN TOUCH                        </span>
                        <h2 className="text-secondary-foreground text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-200 "> 
                            Let's build{" "}
                            
                        
                            <span className="font-serif italic font-normal text-white ">
                             something great

                     </span>
                     </h2>
                     <p className="text-muted-foreground animate-fade-in animate-delay-300">  Great ideas begin with a conversation. Let’s connect and turn your vision into something meaningful.</p>

                    </div>  

                        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="desighn p-6 lg:p-7 rounded-3xl border border-primary/30 animate-fade-in animate-delay-300">                             
                           <form className="space-y-4 "onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name </label>
                                        <input 
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Enter Your Name" 
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name:e.target.value})
                                        }
                                        className="w-full px-4 py-3 bg-surface rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                 <div>
                                       <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                        </label>

                                        <input
                                        id="email"
                                        type="email"
                                                                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                                        required
                                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                                        placeholder="your@mail.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email:e.target.value})
                                        }
                                        className="w-full px-4 py-3 bg-surface rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                       <label htmlFor="message" 
                                       className="block text-sm font-medium mb-2">Message </label>
                                       
                                        
                                       <textarea 
                                         id="message"
                                            rows={4}
                                            value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message:e.target.value})
                                        }
                                            placeholder="Your message..."
                                            
                                            className="w-full px-4 py-3 bg-surface rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                                    </div>
                                    <Button 
                                    className=" w-full"
                                    type="submit"size="lg"
                                    disabled={isLoading}>
                                       
                                       
                                       { isLoading ? (

                                        <>
                                        Sending.....✌️✌️
                                        </>

                                       ) : (
                                        <>
                                        Send Message
                                        <Send className="w-5 h-5"/>
                                        </>
                                        )}
                                    </Button>

                                    {true &&(
                                        <div className={`flex items-center gap-3 p-4 rounded-xl
                                        ${
                                            "success"==="success"

                                        }` }>
                                            {"success" ==="success"?(
                                                <CheckCircle className="w-5 h-5 flex-shrink-0"/>
                                            ) :(
                                                <AlertCircle className="w-5 h-5 flex-shrink-0"/>
                                            )}
                                            <p className="text-sm">{submititStatus.message}</p>
                                        </div>
                                    )}

                        
                                </form>
                            </div>
                            <div className="space-y-3 ">
                                <div className="desighn rounded-3xl p-8">
                                    <h3 className="text-xl font-semibold">
                                        Contact Information

                                    </h3>
                                    <div className="space-y-4">
                                        {contactInfo.map((item, i) =>(
                                            <a
                                              key={i}
                                              href={item.href}
                                              target={item.label === "Location" ? "_blank" : undefined}
                                             rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                                             className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                                 >
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group  ">
                                                    <item.icon className="w-5 h-5 text-primary"/>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {item.label}
                                                    </div>
                                                    <div className="font-bold">
                                                        {item.value}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}

                                    </div>
                                </div>
                                <div className="desighn rounded-3xl p-8 border border-primary/30">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span className="font-medium ">
                                                Currently Available
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">

                                           Open to full-time opportunities and 
                                           exciting projects. Looking to join a great team, 
                                           learn new technologies, build meaningful products,
                                            and grow as a versatile developer. Let's connect.

                                        </p>
                                </div>



                            </div>

                        </div>


                </div>
                
           
    </section>
    
    );
};