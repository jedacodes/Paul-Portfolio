import { Target, Database, Lightbulb, Code, TrendingUp, Users, Zap, Brain } from "lucide-react";

const profile = {
  title: "About Me",
  intro: "Highly enthusiastic and detail-oriented professional with a strong foundation in business analysis, project management, and data analytics.",
  description: [
    "Passionate about leveraging data to drive strategic decisions, uncover trends, and optimize business processes. Skilled in transforming complex datasets into actionable insights, leading cross-functional initiatives, and consistently delivering results under pressure.",
    "With a background in computer science, software development, and IT operations, I bring analytical thinking, technical fluency, and a proactive approach to continuous learning. Eager to contribute to data-driven innovation, process improvement, and effective project execution across dynamic business environments."
  ]
};

const stats = [
  { label: "CGPA", value: "4.8/5.0", icon: TrendingUp, color: "blue" },
  { label: "Certifications", value: "14+", icon: Target, color: "purple" },
  { label: "Projects", value: "10+", icon: Code, color: "cyan" },
  { label: "Leadership Roles", value: "8+", icon: Users, color: "green" }
];

const skills = [
  {
    category: "Data Analysis & Visualization",
    icon: Database,
    items: ["Power BI", "Excel", "SQL", "Python", "Data Visualization", "Statistical Modeling", "Data Science", "AI/Machine Learning"],
    color: "blue"
  },
  {
    category: "Product & Strategy",
    icon: Lightbulb,
    items: ["PRD Writing", "Requirements Gathering", "A/B Testing", "User Research", "Product Roadmapping", "Market Analysis"],
    color: "purple"
  },
  {
    category: "Project Management",
    icon: Target,
    items: ["Agile Methodology", "Product Lifecycle", "Process Optimization", "Stakeholder Management", "Risk Assessment"],
    color: "cyan"
  },
  {
    category: "Technical Skills",
    icon: Code,
    items: ["Front-end Development", "Android Development", "Software Engineering", "Microsoft Office Suite"],
    color: "green"
  }
];

const softSkills = [
  { name: "Communication", icon: Users },
  { name: "Problem Solving", icon: Brain },
  { name: "Critical Thinking", icon: Zap },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Target },
  { name: "Presentation", icon: TrendingUp }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
    hover: "hover:border-blue-500/50",
    gradient: "from-blue-500/20 to-blue-500/5"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400",
    hover: "hover:border-purple-500/50",
    gradient: "from-purple-500/20 to-purple-500/5"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "text-cyan-400",
    hover: "hover:border-cyan-500/50",
    gradient: "from-cyan-500/20 to-cyan-500/5"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400",
    hover: "hover:border-green-500/50",
    gradient: "from-green-500/20 to-green-500/5"
  }
};

export function AboutSkills() {
  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 relative overflow-hidden transition-colors">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">{profile.title}</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {profile.intro}
            </p>
            {profile.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* Stats Grid - Smaller */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => {
            const colors = colorClasses[stat.color as keyof typeof colorClasses];
            const Icon = stat.icon;
            
            return (
              <div 
                key={stat.label}
                className={`p-4 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl backdrop-blur-sm hover:scale-105 transition-transform`}
              >
                <Icon className={`w-6 h-6 ${colors.icon} mb-3`} />
                <p className="text-2xl mb-1 text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{stat.label}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Skills Grid */}
        <div className="mb-12">
          <h3 className="text-3xl text-center mb-12 text-gray-900 dark:text-white">
            Technical Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => {
              const colors = colorClasses[skill.color as keyof typeof colorClasses];
              const Icon = skill.icon;
              
              return (
                <div 
                  key={skill.category}
                  className={`group p-6 bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl backdrop-blur-sm ${colors.hover} transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 ${colors.bg} border ${colors.border} rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h4 className="text-xl pt-2 text-gray-900 dark:text-white">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="group px-5 py-2.5 bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}