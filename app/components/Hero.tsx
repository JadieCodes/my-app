import { ChevronDown } from "lucide-react";
import LogoCarousel from "./LogoCarousel"; // adjust path if LogoCarousel is in a different folder

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center mt-16">
        <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gray-400 flex justify-center space-x-1 overflow-hidden">
          {"Bailey Swanepoel".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-white to-white bg-[length:0%_100%] bg-left bg-no-repeat bg-clip-text text-transparent animate-reveal-letter"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
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

   {/* LOGO CAROUSEL */}
<div
  className="w-full mt-16 mb-12 opacity-0 animate-fade-in-up" // increased mt and added mb
  style={{ animationDelay: "1.8s" }} // fade in after hero text & buttons
>
  <LogoCarousel />
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
