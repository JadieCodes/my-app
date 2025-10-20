import { Code2, Palette, Rocket, Sparkles, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    { icon: Code2, name: "Frontend", color: "from-purple-500 to-pink-500" },
    { icon: Palette, name: "UI/UX", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, name: "Performance", color: "from-green-500 to-emerald-500" },
    { icon: Sparkles, name: "Animation", color: "from-yellow-500 to-orange-500" },
    { icon: Layers, name: "Architecture", color: "from-red-500 to-rose-500" },
    { icon: Zap, name: "Optimization", color: "from-indigo-500 to-purple-500" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
            My <span className="text-gradient">Skills</span>
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in">
            Expertise across the full spectrum of modern web development
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-border bg-card flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-center group-hover:text-gradient transition-all duration-300">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React", "TypeScript", "Tailwind CSS", "Node.js",
              "Next.js", "Figma", "Git", "AWS"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-lg text-center hover:border-accent hover:bg-secondary transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${600 + index * 50}ms` }}
              >
                <span className="text-sm md:text-base font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
