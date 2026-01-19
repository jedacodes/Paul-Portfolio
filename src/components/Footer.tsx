import { Mail, Linkedin, Github, Heart, Camera, Music, Lightbulb } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl mb-6 text-gray-700 dark:text-gray-400">Get In Touch</h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>Lagos, Nigeria</p>
              <a href="mailto:femiadejobipaulolorunjedalo@gmail.com" className="block hover:text-blue-400 transition-colors">
                femiadejobipaulolorunjedalo@gmail.com
              </a>
              <p>+234 907 174 8447</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200/50 hover:bg-gray-300/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 border border-gray-300 dark:border-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-200/50 hover:bg-gray-300/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 border border-gray-300 dark:border-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Interests */}
          <div>
            <h3 className="text-xl mb-6 text-gray-700 dark:text-gray-400">Interests & Passions</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg">
                <Camera className="w-5 h-5 text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">Photography</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-700 dark:text-gray-300">Solving Problems</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg">
                <Music className="w-5 h-5 text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">Music</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-300 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Paul Femi-Adejobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}