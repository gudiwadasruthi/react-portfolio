import React from "react";
import {
  Linkedin,
  Github,
  Mail,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "Sruthi Gudiwada",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sruthi-gudiwada-10b707288/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@gudiwadasruthi",
    icon: Github,
    url: "https://github.com/gudiwadasruthi",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Email",
    displayName: "Email",
    subText: "sruthigudiwada9@gmail.com",
    icon: Mail,
    url: "mailto:sruthigudiwada9@gmail.com",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#a855f7]"
  }
];

const SocialLinks = () => {
  return (
    <div className="w-full space-y-4">
      {/* Primary Social Link (LinkedIn) */}
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-xl 
                   bg-white/5 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500 w-full"
        >
          {/* Hover Gradient Background */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                     bg-gradient-to-r ${link.gradient}`}
          />
          
          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                         group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>
          </div>

          {/* External Link Icon */}
          <ExternalLink 
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;