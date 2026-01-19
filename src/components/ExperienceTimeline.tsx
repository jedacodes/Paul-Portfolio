import { Briefcase, TrendingUp, Users, Database, BarChart3 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Business Strategy Analyst",
    company: "Noemdek",
    period: "03/2025 – 12/2025",
    location: "Lagos",
    icon: TrendingUp,
    description: "Market research, financial modeling, and writing PRDs",
    highlights: [
      "Conducted market research and industry analysis to support strategic initiatives across energy, healthcare, and consumer goods sectors",
      "Developed financial models to assess the viability and ROI of new projects and business ventures",
      "Wrote Product Requirement Documents (PRDs) for new business ideas, defining objectives, scope, and functionality",
      "Prepared presentations and strategic reports for executive leadership and external stakeholders",
      "Assisted in deal sourcing, due diligence, and valuation for M&A and private equity projects",
      "Identified growth opportunities and improved operational efficiency across multiple strategic projects"
    ],
    color: "blue"
  },
  {
    id: 2,
    role: "Business Analyst",
    company: "youbloom",
    period: "09/2025 – 12/2025",
    location: "Remote",
    icon: Users,
    description: "UX evaluation and engagement metrics",
    highlights: [
      "Collaborated with Product Analysis and UX teams to evaluate product usability and improve user experience",
      "Analyzed user feedback and engagement metrics to identify product gaps and prioritize feature development",
      "Supported creation of PRDs and user stories for platform enhancement initiatives",
      "Partnered with engineering and design teams to ensure smooth implementation of new features",
      "Conducted competitive and market research to guide product strategy and optimize performance metrics"
    ],
    color: "purple"
  },
  {
    id: 3,
    role: "Power BI Analyst",
    company: "PwC Forage Simulation",
    period: "12/2024",
    location: "Remote",
    icon: BarChart3,
    description: "Power BI dashboards and data visualization",
    highlights: [
      "Strengthened Power BI skills to better understand clients and their data visualization needs",
      "Created Power BI dashboards that effectively conveyed KPIs and responded to client requests",
      "Demonstrated strong communication skills through concise email delivery of insights to engagement partners",
      "Examined HR data focusing on gender-related KPIs and identified root causes for gender balance issues",
      "Showcased commitment to data-driven decision-making and analytical problem-solving"
    ],
    color: "cyan"
  },
  {
    id: 4,
    role: "Data Analytics and Visualization Intern",
    company: "Accenture Forage Simulation",
    period: "07/2024 – 10/2024",
    location: "Remote",
    icon: Database,
    description: "Content trends analysis and insights",
    highlights: [
      "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends",
      "Advised hypothetical social media client on strategic decisions based on data analysis",
      "Prepared PowerPoint deck and video presentation to communicate key insights",
      "Collaborated with data teams on insight generation for client and internal stakeholders"
    ],
    color: "green"
  },
  {
    id: 5,
    role: "Data Analytics Intern",
    company: "KPMG Forage Simulation",
    period: "12/2023",
    location: "Remote",
    icon: Database,
    description: "Customer segmentation and analysis",
    highlights: [
      "Conducted data quality assessments and generated insights for strategic analysis",
      "Performed customer segmentation using advanced analytics techniques",
      "Created analytical dashboards and presentations for executive reporting",
      "Gained expertise in data visualization and customer behavior analysis"
    ],
    color: "orange"
  },
  {
    id: 6,
    role: "Intern",
    company: "Fibernet",
    period: "08/2022 – 10/2022",
    location: "Ogun, Nigeria",
    icon: Database,
    description: "Database management and administration",
    highlights: [
      "Managed and updated student management system database ensuring data accuracy",
      "Created presentations and important documents for staff meetings",
      "Researched latest trends to keep abreast with new products and features",
      "Participated in training and seminars to enhance skills and promote growth",
      "Collaborated with departments to fulfill group projects"
    ],
    color: "gray"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
    accent: "bg-blue-500"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400",
    accent: "bg-purple-500"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "text-cyan-400",
    accent: "bg-cyan-500"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400",
    accent: "bg-green-500"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    icon: "text-orange-400",
    accent: "bg-orange-500"
  },
  gray: {
    bg: "bg-gray-500/10",
    border: "border-gray-500/30",
    icon: "text-gray-400",
    accent: "bg-gray-500"
  }
};

export function ExperienceTimeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl">Professional Experience</h2>
          </div>
          <p className="text-gray-400 text-lg">
            A track record of delivering data-driven insights and strategic value
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              const Icon = exp.icon;
              
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-8 w-4 h-4 rounded-full ${colors.accent} border-4 border-gray-900 hidden md:block -translate-x-[7px]`}></div>
                  
                  {/* Content */}
                  <div className="md:ml-24">
                    <div className={`p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-[1.02] transition-transform`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-2xl mb-1">{exp.role}</h3>
                              <p className={`text-lg ${colors.icon}`}>{exp.company}</p>
                            </div>
                            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{exp.description}</p>
                          
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300">
                                <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors.accent} mt-2`}></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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