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

          {/* --- Skill Circles --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Glow layer */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-30 blur-2xl rounded-full group-hover:opacity-60 group-hover:blur-3xl transition-all duration-500`}
                    />

                    {/* Circle wrapper */}
                    <div
                      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-border bg-card flex items-center justify-center transition-all duration-500 
                      group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-110"
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-md transition-all duration-500`}
                      />
                      <Icon className="relative w-10 h-10 md:w-12 md:h-12 text-foreground group-hover:text-accent transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-center group-hover:text-gradient transition-all duration-500">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* --- Tech Badges --- */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Next.js",
              "Figma",
              "Git",
              "AWS",
            ].map((tech, index) => (
              <div
                key={index}
                className="relative px-6 py-3 bg-card border border-border rounded-lg text-center transition-all duration-500 cursor-default animate-fade-in 
                hover:border-accent hover:bg-secondary hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1"
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
