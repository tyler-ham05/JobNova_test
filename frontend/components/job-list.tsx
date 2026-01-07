import { RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JobCard, type Job } from "@/components/job-card"

//contains the rendered job interface

const matchColor = (score: number) => {
  if (score > 70) {
    return "text-accent"
  } else if (score > 40) {
    return "text-chart-3"
  } else {
    return "text-chart-2"
  }
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Web Application Developer",
    company: "Backd Business Funding",
    location: "Austin, Texas Metropolitan Area",
    onsite: true,
    matchPercentage: 64,
    employmentType: "Full time",
    experienceLevel: "Mid Level",
    skillsMatch: "0 of 3 skills match",
    salary: "$65K/yr - $70K/yr",
    postedTime: "1 hours ago",
    applicants: 25,
    isLiked: false,
    matchColor: matchColor(64),
    companyLogo: "/placeholder-logo.png",
    jobType: "Full-time",
    posted: "1 hours ago",
    experience: "Mid Level",
    matchScore: 64,
    description: "We are seeking a talented Web Application Developer to join our dynamic team. You will be responsible for developing and maintaining web applications, working with modern frameworks, and collaborating with cross-functional teams to deliver high-quality software solutions.",
    qualifications: {
      tags: ["JavaScript", "React", "Node.js", "TypeScript", "REST APIs"],
      required: [
        "3+ years of experience in web development",
        "Proficiency in JavaScript and modern frameworks",
        "Experience with RESTful API development",
        "Strong problem-solving skills"
      ],
      preferred: [
        "Experience with TypeScript",
        "Knowledge of cloud platforms (AWS, Azure)",
        "Experience with CI/CD pipelines",
        "Understanding of agile methodologies"
      ]
    },
    responsibilities: [
      "Develop and maintain web applications using modern frameworks",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and provide constructive feedback",
      "Troubleshoot and debug applications",
      "Stay up-to-date with emerging technologies and industry trends"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work hours and remote work options",
      "Professional development opportunities",
      "Generous paid time off and holidays"
    ],
    companyInfo: {
      name: "Backd Business Funding",
      location: "Austin, Texas",
      employees: "50-200 employees",
      website: "www.backd.com",
      about: "Backd Business Funding is a leading financial technology company that provides innovative funding solutions to businesses. We are committed to helping businesses grow and succeed through our cutting-edge technology and exceptional service."
    }
  },
  {
    id: 2,
    title: "Software Engineer, Network Infrastructure",
    company: "Cursor AI",
    location: "Sunnyvale, CA",
    onsite: true,
    matchPercentage: 93,
    employmentType: "Full time",
    experienceLevel: "Mid Level",
    skillsMatch: "5+ years exp",
    salary: "$161K/yr - $239K/yr",
    postedTime: "2 hours ago",
    applicants: 25,
    isLiked: true,
    matchColor: matchColor(93),
    companyLogo: "/placeholder-logo.png",
    jobType: "Full-time",
    posted: "2 hours ago",
    experience: "Mid Level",
    matchScore: 93,
    description: "Join our team as a Software Engineer focused on Network Infrastructure. You will design, develop, and maintain scalable network systems that power our AI platform. This role requires deep understanding of distributed systems, network protocols, and cloud infrastructure.",
    qualifications: {
      tags: ["Python", "Go", "Kubernetes", "Docker", "Network Protocols", "Distributed Systems"],
      required: [
        "5+ years of experience in software engineering",
        "Strong background in network infrastructure and distributed systems",
        "Proficiency in Python, Go, or similar languages",
        "Experience with containerization and orchestration (Docker, Kubernetes)"
      ],
      preferred: [
        "Experience with cloud platforms (GCP, AWS)",
        "Knowledge of network protocols (TCP/IP, HTTP/2, gRPC)",
        "Experience with monitoring and observability tools",
        "Understanding of microservices architecture"
      ]
    },
    responsibilities: [
      "Design and implement scalable network infrastructure systems",
      "Optimize network performance and reliability",
      "Collaborate with teams to define system architecture",
      "Debug and resolve network-related issues",
      "Implement monitoring and alerting systems",
      "Document system designs and operational procedures"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Top-tier health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work arrangements",
      "Learning and development budget",
      "Catered meals and snacks",
      "Gym membership reimbursement"
    ],
    companyInfo: {
      name: "Cursor AI",
      location: "Sunnyvale, CA",
      employees: "200-500 employees",
      website: "www.cursor.ai",
      about: "Cursor AI is a leading artificial intelligence company developing cutting-edge AI tools for developers. We're building the future of software development with innovative AI-powered solutions that help developers write better code faster."
    }
  },
  {
    id: 3,
    title: "Full-Stack Software Engineer (Web Developer)",
    company: "Simons Foundation",
    location: "New York, NY",
    onsite: true,
    matchPercentage: 82,
    employmentType: "Full time",
    experienceLevel: "Mid Level",
    skillsMatch: "5+ years exp",
    salary: "$125K/yr - $140K/yr",
    postedTime: "3 hours ago",
    applicants: 28,
    isLiked: false,
    matchColor: matchColor(82),
    companyLogo: "/placeholder-logo.png",
    jobType: "Full-time",
    posted: "3 hours ago",
    experience: "Mid Level",
    matchScore: 82,
    description: "The Simons Foundation is seeking a Full-Stack Software Engineer to join our team. You will work on developing web applications that support scientific research and collaboration. This role involves both frontend and backend development, working with modern technologies to build scalable solutions.",
    qualifications: {
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "GraphQL", "AWS"],
      required: [
        "5+ years of full-stack development experience",
        "Proficiency in React and Node.js",
        "Experience with relational databases (PostgreSQL, MySQL)",
        "Strong understanding of RESTful and GraphQL APIs"
      ],
      preferred: [
        "Experience with TypeScript",
        "Knowledge of cloud platforms (AWS, Azure)",
        "Experience with testing frameworks (Jest, Cypress)",
        "Understanding of scientific computing or research tools"
      ]
    },
    responsibilities: [
      "Develop full-stack web applications from concept to deployment",
      "Design and implement RESTful and GraphQL APIs",
      "Build responsive and accessible user interfaces",
      "Write unit and integration tests",
      "Collaborate with researchers and scientists to understand requirements",
      "Maintain and improve existing applications"
    ],
    benefits: [
      "Competitive salary and comprehensive benefits",
      "Health, dental, and vision insurance",
      "403(b) retirement plan with employer contributions",
      "Flexible work schedule",
      "Professional development opportunities",
      "Access to cutting-edge research and technology",
      "Generous vacation and sick leave"
    ],
    companyInfo: {
      name: "Simons Foundation",
      location: "New York, NY",
      employees: "500-1000 employees",
      website: "www.simonsfoundation.org",
      about: "The Simons Foundation is a private foundation established in 1994 to advance the frontiers of research in mathematics and the basic sciences. We support discovery-driven scientific research and work to advance our understanding of the natural world."
    }
  },
]


export function JobList() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-2 mb-4 md:mb-6">
        <Button className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 md:py-6 text-xs sm:text-sm md:text-base font-medium">
          <RefreshCw className="mr-2 h-4 w-4 flex-shrink-0" />
          <span className="hidden sm:inline truncate">Change Job Reference</span>
          <span className="sm:hidden">Change Reference</span>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto sm:flex-shrink-0 items-center justify-center gap-2 text-muted-foreground bg-card hover:bg-muted/90 rounded-full sm:ml-2 text-xs sm:text-sm md:text-base font-medium py-4 md:py-6 whitespace-nowrap">
          <TrendingUp className="mr-2 h-4 w-4 flex-shrink-0" />
          <span className="font-medium">Top matched</span>
        </Button>
      </div>

      <div className="space-y-4 md:space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
