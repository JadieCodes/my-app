const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground animate-slide-up">
            <p>
              I'm a passionate developer and designer who loves creating beautiful, 
              functional digital experiences. With a keen eye for detail and a drive 
              for innovation, I transform ideas into reality.
            </p>
            
            <p>
              My approach combines clean code with thoughtful design, ensuring every 
              project is not just visually stunning but also performs flawlessly. 
              I believe in the power of simplicity and the impact of well-crafted user experiences.
            </p>
            
            <p>
              When I'm not coding or designing, you'll find me exploring new technologies, 
              contributing to open source, or seeking inspiration in the world around me.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
