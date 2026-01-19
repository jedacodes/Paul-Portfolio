import { Briefcase, Activity, BarChart3, Database, PhoneCall, PieChart, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Data Professional Survey Breakdown",
    description: "Power BI dashboard analyzing data professional survey insights",
    icon: PieChart,
    technologies: ["Power BI", "DAX", "Data Cleaning", "Survey Analysis"],
    highlights: [
      "Analyzed survey data from data professionals across various industries",
      "Created interactive visualizations for salary trends and job satisfaction",
      "Developed insights on programming language preferences and career paths",
      "Designed user-friendly dashboard with drill-down capabilities"
    ],
    color: "blue"
  },
  {
    id: 2,
    title: "Bike Sales Dashboard",
    description: "Excel dashboard for sales performance analysis",
    icon: TrendingUp,
    technologies: ["Excel", "Pivot Tables", "Charts", "Data Analysis"],
    highlights: [
      "Built comprehensive sales dashboard tracking regional performance",
      "Implemented dynamic pivot tables for multi-dimensional analysis",
      "Created visualizations for customer demographics and purchase patterns",
      "Automated reporting with Excel formulas and conditional formatting"
    ],
    color: "green"
  },
  {
    id: 3,
    title: "Call Centre Churn Analysis",
    description: "Power BI dashboard for customer retention insights",
    icon: PhoneCall,
    technologies: ["Power BI", "DAX", "Data Modeling", "Predictive Analytics"],
    highlights: [
      "Analyzed call centre data to identify churn patterns and risk factors",
      "Built interactive Power BI dashboard with KPIs and retention metrics",
      "Implemented predictive models to forecast customer churn probability",
      "Provided actionable insights to reduce churn rate by 15%"
    ],
    color: "violet"
  },
  {
    id: 4,
    title: "Python BMI & Health Tracker",
    description: "A comprehensive health assessment tool with status indicators",
    icon: Activity,
    technologies: ["Python", "NumPy", "Pandas", "Data Visualization"],
    highlights: [
      "Developed BMI calculation and health status classification system",
      "Implemented health risk indicators and personalized recommendations",
      "Created interactive data visualization for health metrics tracking",
      "Built user-friendly interface for health data input and analysis"
    ],
    color: "rose"
  },
  {
    id: 5,
    title: "Fitness Data Science Pipeline",
    description: "Excel & Power BI dashboard for fitness analytics",
    icon: BarChart3,
    technologies: ["Excel", "Power BI", "DAX", "Data Modeling"],
    highlights: [
      "Designed end-to-end data pipeline for fitness metrics collection",
      "Created interactive Power BI dashboards with real-time insights",
      "Implemented advanced DAX calculations for trend analysis",
      "Automated data refresh and reporting workflows"
    ],
    color: "emerald"
  },
  {
    id: 6,
    title: "COVID-19 SQL Exploration",
    description: "Using CTEs and Joins for trend analysis",
    icon: Database,
    technologies: ["SQL", "PostgreSQL", "CTEs", "Data Analysis"],
    highlights: [
      "Analyzed COVID-19 trends using complex SQL queries",
      "Utilized Common Table Expressions (CTEs) for data transformation",
      "Performed multi-table joins to correlate infection and vaccination data",
      "Generated insights on pandemic progression and regional patterns"
    ],
    color: "cyan"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
    hover: "hover:border-blue-500/50"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400",
    hover: "hover:border-green-500/50"
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    icon: "text-rose-400",
    hover: "hover:border-rose-500/50"
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    icon: "text-violet-400",
    hover: "hover:border-violet-500/50"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: "text-emerald-400",
    hover: "hover:border-emerald-500/50"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "text-cyan-400",
    hover: "hover:border-cyan-500/50"
  }
};

export function TechnicalProjects() {
  return (
    <section className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white">Technical Projects</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Innovative Solutions & Development Work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            const Icon = project.icon;
            
            return (
              <div 
                key={project.id} 
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hover} transition-all hover:scale-[1.02] group`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className={`inline-block w-1 h-1 rounded-full ${colors.icon} mt-1.5`}></span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}