import { Mail, Linkedin, Github, Heart, Camera, Music, Lightbulb } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always interested in hearing about new opportunities and collaborations
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a 
              href="mailto:femiadejobipaulolorunjedalo@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Interests */}
        <div className="mb-12 text-center">
          <h3 className="text-xl mb-6 text-gray-400">Interests & Passions</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
              <Camera className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Photography</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Solving Problems</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
              <Music className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Music</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Paul Femi-Adejobi. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}