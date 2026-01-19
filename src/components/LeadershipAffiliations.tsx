import { Users, Award as AwardIcon } from "lucide-react";

const leadership = [
  {
    id: 1,
    role: "Vice-President",
    organization: "National Association of Computing Students (NACOS)",
    year: "2023",
    description: "Led student computing community initiatives and coordinated academic programs"
  },
  {
    id: 2,
    role: "Academic Director",
    organization: "National Association of Computing Students (NACOS)",
    year: "2022",
    description: "Oversaw academic activities and educational development programs"
  },
  {
    id: 3,
    role: "Program Coordinator",
    organization: "Bowen Tech Week",
    year: "2023-2024",
    description: "Organized and managed university technology conference and events"
  },
  {
    id: 4,
    role: "Instructor",
    organization: "Bowen Tech Hub",
    year: "2022-2024",
    description: "Taught programming and technology courses to students"
  }
];

const affiliations = [
  {
    id: 1,
    role: "Program Coordinator/PM",
    organization: "ComputeX"
  },
  {
    id: 2,
    role: "Ambassador",
    organization: "Cowrywise, FSI"
  },
  {
    id: 3,
    role: "Contributor",
    organization: "Polygon Guild Campus Tour"
  },
  {
    id: 4,
    role: "Part-Time Tutor",
    organization: "HOGGOS"
  }
];

export function LeadershipAffiliations() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Leadership Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl">Leadership & Teaching</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Active involvement in student organizations and educational initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item) => (
              <div 
                key={item.id}
                className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{item.role}</h3>
                    <p className="text-blue-400">{item.organization}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Affiliations Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <AwardIcon className="w-6 h-6 text-purple-400" />
              <h2 className="text-4xl md:text-5xl">Professional Affiliations</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Active contributor to technology and education communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {affiliations.map((item) => (
              <div 
                key={item.id}
                className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm hover:border-purple-500/50 transition-all text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg mb-2">{item.role}</h3>
                <p className="text-purple-400 text-sm">{item.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
