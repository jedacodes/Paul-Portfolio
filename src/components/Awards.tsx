import { Trophy, Medal, Star, Sparkles } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "National IT Competition 2023",
    achievement: "Winner",
    icon: Trophy,
    description: "First place in Nigeria's prestigious National IT Competition, demonstrating exceptional technical skills and innovation",
    year: "2023",
    color: "yellow"
  },
  {
    id: 2,
    title: "BCMQ Competition",
    achievement: "Runner-up",
    icon: Medal,
    description: "Second place in the competitive academic quiz competition, showcasing broad knowledge and analytical abilities",
    year: "2022",
    color: "silver"
  },
  {
    id: 3,
    title: "Tech Savvy Of The Year",
    achievement: "Nominee",
    icon: Sparkles,
    description: "Nominated for Tech Savvy of the Year at the Skilled Student Awards | Bowen Awards, recognizing outstanding contribution to technology",
    year: "2024",
    color: "blue"
  }
];

const colorClasses = {
  yellow: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    icon: "text-yellow-400",
    hover: "hover:border-yellow-500/50",
    gradient: "from-yellow-500/20 to-transparent"
  },
  silver: {
    bg: "bg-gray-400/10",
    border: "border-gray-400/30",
    icon: "text-gray-300",
    hover: "hover:border-gray-400/50",
    gradient: "from-gray-400/20 to-transparent"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
    hover: "hover:border-blue-500/50",
    gradient: "from-blue-500/20 to-transparent"
  }
};

export function Awards() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl">Awards & Recognition</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Recognized for excellence in technology and academics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award) => {
            const colors = colorClasses[award.color as keyof typeof colorClasses];
            const Icon = award.icon;
            
            return (
              <div 
                key={award.id}
                className={`relative p-8 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hover} transition-all hover:scale-[1.02] overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colors.gradient} rounded-full blur-3xl -z-10 opacity-50`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                      <Icon className={`w-10 h-10 ${colors.icon}`} />
                    </div>
                    <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">
                      {award.year}
                    </span>
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} border ${colors.border} mb-4`}>
                    <span className={`text-sm ${colors.icon}`}>{award.achievement}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-4 group-hover:text-white transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}