import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc Computer Science",
    institution: "Bowen University",
    location: "Osun, Nigeria",
    period: "2020 – 2024",
    achievement: "CGPA - 4.8/5.0 (First Class Honors)",
    highlights: [
      "Graduated Top 5 in the College of Computing and Communication Studies",
      "Vice-President, National Association of Computing Students (NACOS), 2023",
      "Academic Director, National Association of Computing Students (NACOS), 2022",
      "Program Coordinator, Bowen Tech Week",
      "Instructor, Bowen Tech Hub"
    ],
    color: "blue"
  },
  {
    id: 2,
    degree: "Mathematics for Science and Technology",
    institution: "Open University",
    location: "Online",
    period: "10/2024",
    achievement: "Distinction",
    highlights: ["Advanced mathematics coursework focused on scientific and technological applications"],
    color: "purple"
  },
  {
    id: 3,
    degree: "Diploma in Mathematics",
    institution: "Alison",
    location: "Online",
    period: "09/2024",
    achievement: "Distinction",
    highlights: ["Comprehensive mathematics diploma covering core mathematical concepts"],
    color: "green"
  }
];

const secondary = {
  institution: "F.C.E Model Secondary School",
  location: "Ogun State",
  period: "2017 – 2020",
  qualification: "WASSCE",
  achievements: [
    "Best Graduating Student in Computer Science",
    "Second Best Student in Mathematics",
    "Appointed as Music Prefect and Choir Coordinator",
    "Member of School Quiz Team"
  ]
};

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400"
  }
};

export function Education() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl">Education</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Strong academic foundation in computer science and mathematics
          </p>
        </div>
        
        {/* Higher Education */}
        <div className="space-y-8 mb-12">
          {education.map((edu) => {
            const colors = colorClasses[edu.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={edu.id}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-[1.01] transition-transform`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <GraduationCap className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl mb-1">{edu.degree}</h3>
                        <p className={`text-lg ${colors.icon}`}>{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="mb-4 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg inline-block">
                      <p className="text-green-400">{edu.achievement}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors.icon} mt-2`}></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Secondary Education */}
        <div className="p-6 rounded-xl border border-gray-600/30 bg-gray-600/10 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gray-600/10 border border-gray-600/30">
              <Award className="w-6 h-6 text-gray-400" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl mb-1">{secondary.institution}</h3>
                  <p className="text-gray-400">{secondary.qualification}</p>
                  <p className="text-gray-500 text-sm">{secondary.location}</p>
                </div>
                <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                  {secondary.period}
                </span>
              </div>
              
              <ul className="space-y-2 mt-4">
                {secondary.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-1.5"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
