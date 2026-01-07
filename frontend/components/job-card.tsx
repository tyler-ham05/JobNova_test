"use client"

import { MapPin, Link2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircularProgress } from "@/components/circular-progress"
import { useState } from "react"
import { useRouter } from "next/navigation"

export interface Job {
  id: number
  title: string
  company: string
  location: string
  onsite: boolean
  matchPercentage: number
  employmentType: string
  experienceLevel: string
  skillsMatch: string
  salary: string
  postedTime: string
  applicants: number
  isLiked: boolean
  matchColor: string
  companyLogo: string
  jobType: string
  posted: string
  experience: string
  matchScore: number
  description: string
  interviewAccess?: {
    title: string
    description: string
    sections: Array<{
      title: string
      description: string
    }>
  }
  qualifications: {
    tags: string[]
    required: string[]
    preferred: string[]
  }
  responsibilities: string[]
  benefits: string[]
  companyInfo: {
    name: string
    location: string
    employees: string
    website: string
    about: string
  }
}

//contains each job card
const matchColor =
function matchPercentage(score:number){
  if(score > 70){
    return "text-accent"
  }
  else if(score > 40){
    return "text-chart-3"
  }
  else{
    return "text-chart-2"
  }
}

export function JobCard({ job }: { job: Job }) {
  const [isLiked, setIsLiked] = useState(job.isLiked)
  const router = useRouter()
  
  const handleCardClick = () => {
    router.push(`/job/${job.id}`)
  }
  
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow min-w-[600px] cursor-pointer" 
      onClick={handleCardClick}
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <CircularProgress percentage={job.matchPercentage} color={matchColor(job.matchPercentage)} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1 gap-4">
            <h3 className="text-2xl font-bold min-w-0">{job.title}</h3>
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Link2 className="h-5 w-5 text-muted-foreground" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }} className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Heart className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-bold">🏢</span>
            </div>
            <span className="font-medium">{job.company}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            {job.onsite && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>On-site</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <Badge variant="secondary" className="rounded-md bg-card !border-border">
          {job.employmentType}
        </Badge>
        <Badge variant="secondary" className="rounded-md bg-card !border-border">
          {job.skillsMatch}
        </Badge>
        <Badge variant="secondary" className="rounded-md bg-card !border-border">
          {job.experienceLevel}
        </Badge>
        <Badge variant="secondary" className="rounded-md bg-card !border-border">
          {job.salary}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{job.postedTime}</span>
          <span>{job.applicants} applicants</span>
        </div>

        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <Button variant="outline" className="rounded-full px-8 bg-transparent">
            Apply
          </Button>
          <Button className="rounded-full px-6 bg-accent hover:bg-accent/90 text-accent-foreground">
            Mock Interview
          </Button>
        </div>
      </div>
    </Card>
  )
}
