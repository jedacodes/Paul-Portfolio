import { BadgeCheck, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    date: "2024",
    skills: ["Data Analysis", "Statistical Modeling", "Python", "SQL"],
    color: "blue"
  },
  {
    id: 2,
    title: "SQL Associate",
    issuer: "DataCamp",
    date: "2024",
    skills: ["SQL", "Database Queries", "Data Manipulation", "Joins"],
    color: "cyan"
  },
  {
    id: 3,
    title: "AI Fundamentals",
    issuer: "DataCamp",
    date: "2024",
    skills: ["Artificial Intelligence", "Machine Learning Basics", "AI Ethics", "Neural Networks"],
    color: "purple"
  },
  {
    id: 4,
    title: "Data Literacy",
    issuer: "DataCamp",
    date: "2024",
    skills: ["Data Interpretation", "Analytics", "Business Intelligence", "Data Communication"],
    color: "indigo"
  },
  {
    id: 5,
    title: "Technical Project Manager",
    issuer: "Treford Academy",
    date: "2024",
    skills: ["Project Management", "Agile", "Stakeholder Management", "Risk Assessment"],
    color: "green"
  },
  {
    id: 6,
    title: "Diploma in Project Management",
    issuer: "Udemy",
    date: "2024",
    skills: ["Project Planning", "Resource Management", "Timeline Control", "Delivery"],
    color: "emerald"
  },
  {
    id: 7,
    title: "Python for Data Science & ML",
    issuer: "Data Science Nigeria (DSN)",
    date: "2024",
    skills: ["Python", "Machine Learning", "scikit-learn", "Data Preprocessing"],
    color: "orange"
  },
  {
    id: 8,
    title: "Python Programming",
    issuer: "Udacity",
    date: "2023",
    skills: ["Python", "Object-Oriented Programming", "Algorithms", "Data Structures"],
    color: "amber"
  },
  {
    id: 9,
    title: "Data Analysis",
    issuer: "Alex The Analyst",
    date: "2024",
    skills: ["Excel", "SQL", "Tableau", "Data Cleaning"],
    color: "teal"
  },
  {
    id: 10,
    title: "Data Analytics with Excel",
    issuer: "Great Learning",
    date: "2023",
    skills: ["Excel", "Pivot Tables", "VLOOKUP", "Data Analysis"],
    color: "lime"
  },
  {
    id: 11,
    title: "Google Sheets Completion Badge",
    issuer: "Google Cloud",
    date: "2023",
    skills: ["Google Sheets", "Formulas", "Data Management", "Collaboration"],
    color: "sky"
  },
  {
    id: 12,
    title: "Android Development",
    issuer: "Google Africa Developer Training",
    date: "2023",
    skills: ["Android", "Kotlin", "Mobile Development", "UI Design"],
    color: "rose"
  },
  {
    id: 13,
    title: "Front-end Development",
    issuer: "Great Learning",
    date: "2023",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "violet"
  },
  {
    id: 14,
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "2023",
    skills: ["Algorithms", "Problem Solving", "Data Structures", "Coding"],
    color: "fuchsia"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500/50"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    hover: "hover:border-cyan-500/50"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500/50"
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    hover: "hover:border-indigo-500/50"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    hover: "hover:border-green-500/50"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hover: "hover:border-emerald-500/50"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:border-orange-500/50"
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    hover: "hover:border-amber-500/50"
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-400",
    hover: "hover:border-teal-500/50"
  },
  lime: {
    bg: "bg-lime-500/10",
    border: "border-lime-500/30",
    text: "text-lime-400",
    hover: "hover:border-lime-500/50"
  },
  sky: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    text: "text-sky-400",
    hover: "hover:border-sky-500/50"
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    text: "text-rose-400",
    hover: "hover:border-rose-500/50"
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    hover: "hover:border-violet-500/50"
  },
  fuchsia: {
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/30",
    text: "text-fuchsia-400",
    hover: "hover:border-fuchsia-500/50"
  }
};

export function Certifications() {
  return (
    <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <BadgeCheck className="w-6 h-6 text-green-400" />
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white">Certifications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Continuous Learning & Professional Development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={cert.id}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hover} transition-all hover:scale-[1.02] group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <BadgeCheck className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl mb-2 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                
                <p className={`mb-4 ${colors.text}`}>{cert.issuer}</p>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-400">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}