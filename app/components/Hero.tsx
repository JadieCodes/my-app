import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
          <span className="inline-block opacity-0 animate-fade-in">
            Billie
          </span>
          {" "}
          <span 
            className="inline-block bg-gradient-to-r from-muted via-muted-foreground to-foreground bg-clip-text text-transparent bg-[length:200%_100%] animate-text-reveal"
          >
            Duvalle
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 opacity-0 animate-fade-in-delay">
          Creative Developer & Designer
        </p>

        <div className="flex gap-4 justify-center opacity-0 animate-fade-in-delay-2">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-primary text-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;