"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@billieduvalle.com", label: "Email" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in">
            Let's create something amazing together
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent hover:bg-secondary transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:text-accent transition-colors" />
                      <span className="group-hover:text-accent transition-colors">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-card border-border focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-card border-border focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className="bg-card border-border focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-foreground font-semibold hover:scale-105 transition-transform"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
