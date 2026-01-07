"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Globe,
  Users,
  ExternalLink,
  Building,
  ArrowLeft,
  Share2,
  Heart,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type { Job } from "@/components/job-card"
import { CircularProgress } from "@/components/circular-progress"

interface JobDetailProps {
  job: Job
}

const matchColor = (score: number) => {
  if (score > 70) {
    return "text-accent"
  } else if (score > 40) {
    return "text-chart-3"
  } else {
    return "text-chart-2"
  }
}

export function JobDetail({ job }: JobDetailProps) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(job.isLiked)

  return (
    <div className="space-y-6">
      {/* Back Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-card hover:bg-muted h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Badge className="rounded-full bg-primary text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
            {job.posted}
          </Badge>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted h-8 w-8 sm:h-10 sm:w-10">
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? "fill-primary text-primary" : ""}`}
            />
          </Button>

          <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-4 sm:px-6 flex-1 sm:flex-none text-sm sm:text-base">
            Apply Now
            <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-lg overflow-hidden flex-shrink-0 border">
          <Image
            src={job.companyLogo || "/placeholder.svg"}
            alt={job.company}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-2xl font-bold leading-tight">
                {job.title}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">{job.company}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {job.posted} · {job.location} · {job.jobType}
              </p>
            </div>

            <div className="flex-shrink-0">
              <CircularProgress percentage={job.matchScore} color={matchColor(job.matchScore)} size="sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 flex-wrap">
        <span className="bg-muted px-2 py-1 sm:px-3 sm:py-1 rounded">{job.jobType}</span>
        <span>{job.experience}</span>
        <span>{job.salary}</span>
      </div>

      {/* Description */}
      <section>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {job.description}
        </p>
      </section>

      <section className="bg-lime-400 rounded-lg p-4 sm:p-6 text-black">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/ai_icon.png" alt="JobNova" width={40} height={40} className="sm:w-[50px] sm:h-[50px]"></Image>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-base sm:text-lg mb-1">
              Ace Your Interview with AI-Powered Mock Sessions!
            </h3>

            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              Prepare for your interview with our cutting-edge AI mock interview system tailored to this role.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">
                  Job-Specific Simulations
                </h4>
                <p className="text-xs leading-relaxed">
                  Practice with questions tailored to this web developer role, ensuring relevance and preparation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">
                  Actionable Feedback
                </h4>
                <p className="text-xs leading-relaxed">
                  Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">
                  Boost Success Rates
                </h4>
                <p className="text-xs leading-relaxed">
                  Perfect your interview skills and increase your chances of landing this position.
                </p>
              </div>
            </div>

            <Button className="mt-3 sm:mt-4 bg-black text-lime-400 hover:bg-black/90 text-sm sm:text-base w-full sm:w-auto">
              Start Interview
            </Button>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Qualification</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Discover how your skills align with the requirements of this position.
        </p>

        <div className="flex flex-wrap gap-2">
          {job.qualifications.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="font-normal bg-muted/50 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-2 sm:space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">Required</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {job.qualifications.required.map((item, index) => (
            <li key={index} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2 sm:space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">Preferred</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {job.qualifications.preferred.map((item, index) => (
            <li key={index} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Responsibilities</h2>
        <ul className="space-y-2 sm:space-y-3">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Benefits</h2>
        <ul className="space-y-2 sm:space-y-3">
          {job.benefits.map((item, index) => (
            <li key={index} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Company */}
      <section className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">Company</h2>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">{job.companyInfo.name}</h3>

            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                {job.companyInfo.location}
              </div>

              <div className="flex items-center gap-1">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                {job.companyInfo.employees}
              </div>

              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                {job.companyInfo.website}
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <Button size="icon" variant="outline" className="h-7 w-7 sm:h-8 sm:w-8">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button size="icon" variant="outline" className="h-7 w-7 sm:h-8 sm:w-8">
                <Building className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {job.companyInfo.about}
          </p>
        </div>
      </section>
    </div>
  )
}