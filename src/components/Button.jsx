



export const Button =({className="",size="default",children,...props})=>{
    const baseclasses="relative overflow-hidden rounded-full font-bold focus:outline-none focus-visible:ring-primary  bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
    const sizeclasses={
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg",
    };
    const classes = `${baseclasses} ${sizeclasses[size] } ${className}`;
    return(
        <button className={classes} {...props}> 
            <span className="relative flex items-center justify-center gap-3 ">
                 {children}
                 </span>  
                 
                  </button>
    )
}


