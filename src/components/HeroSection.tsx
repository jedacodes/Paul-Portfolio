import { Github, Linkedin, Mail, ArrowRight, Sparkles, Award, Code, Briefcase } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="relative max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full backdrop-blur-md mb-8 hover:scale-105 transition-transform">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
            First Class Graduate • Strategy & Data Specialist
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          <span className="block text-gray-400 text-2xl md:text-3xl mb-4">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Paul Femi-Adejobi
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Transforming Complex Data into Strategic Insights
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Business Analyst & Data Scientist specializing in data-driven decision making, 
          financial modeling, and strategic innovation across dynamic business environments.
        </p>
        
        {/* Key highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">4.8/5.0 CGPA</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg backdrop-blur-sm">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">5+ Professional Roles</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">14+ Certifications</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="mailto:femiadejobipaulolorunjedalo@gmail.com" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Get In Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 hover:border-gray-600 rounded-xl transition-all backdrop-blur-sm hover:scale-105"
          >
            <span className="font-medium">Explore My Work</span>
          </a>
        </div>
        
        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50 rounded-xl transition-all backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500/50 rounded-xl transition-all backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </a>
          
          <a 
            href="mailto:femiadejobipaulolorunjedalo@gmail.com"
            className="group relative p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/50 rounded-xl transition-all backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email
            </span>
          </a>
        </div>
        
        {/* Contact details - simplified */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span>Lagos, Nigeria</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <a href="mailto:femiadejobipaulolorunjedalo@gmail.com" className="hover:text-blue-400 transition-colors">
            femiadejobipaulolorunjedalo@gmail.com
          </a>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>+234 907 174 8447</span>
        </div>
      </div>
    </section>
  );
}
