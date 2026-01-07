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

interface JobDetailProps {
  job: Job
}

export function JobDetail({ job }: JobDetailProps) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(job.isLiked)

  return (
    <div className="space-y-6">
      {/* Back Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-card hover:bg-muted"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Badge className="rounded-full bg-primary text-primary-foreground px-4 py-2">
            {job.applicants} applicants
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
            <Share2 className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-5 w-5 ${isLiked ? "fill-primary text-primary" : ""}`}
            />
          </Button>

          <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background px-6">
            Apply Now
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 border">
          <Image
            src={job.companyLogo || "/placeholder.svg"}
            alt={job.company}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold leading-tight truncate">
                {job.title}
              </h1>
              <p className="text-muted-foreground">{job.company}</p>
              <p className="text-muted-foreground">
                {job.posted} · {job.location} · {job.jobType}
              </p>
            </div>

            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-lime-400 flex-shrink-0">
              <div className="text-center">
                <div className="text-xl font-bold leading-none">
                  {job.matchScore}%
                </div>
                <div className="text-[10px] leading-none mt-0.5">MATCH</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="bg-muted px-3 py-1 rounded">{job.jobType}</span>
        <span>{job.experience}</span>
        <span>{job.salary}</span>
      </div>

      {/* Description */}
      <section>
        <p className="text-muted-foreground leading-relaxed">
          {job.description}
        </p>
      </section>

      <section className="bg-lime-400 rounded-lg p-6 text-black">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full  flex items-center justify-center flex-shrink-0">
            <Image src = "/ai_icon.png" alt = "JobNova" width={50} height={50}></Image>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">
              Ace Your Interview with AI-Powered Mock Sessions!
            </h3>

            <p className="text-sm mb-4">
              Prepare for your interview with our cutting-edge AI mock interview system tailored to this role.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">
                  Job-Specific Simulations
                </h4>
                <p className="text-xs leading-relaxed">
                  Practice with questions tailored to this web developer role, ensuring relevance and preparation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1">
                  Actionable Feedback
                </h4>
                <p className="text-xs leading-relaxed">
                  Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1">
                  Boost Success Rates
                </h4>
                <p className="text-xs leading-relaxed">
                  Perfect your interview skills and increase your chances of landing this position.
                </p>
              </div>
            </div>

            <Button className="mt-4 bg-black text-lime-400 hover:bg-black/90">
              Start Interview
            </Button>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Qualification</h2>
        <p className="text-sm text-muted-foreground">
          Discover how your skills align with the requirements of this position.
        </p>

        <div className="flex flex-wrap gap-2">
          {job.qualifications.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="font-normal bg-muted/50">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Required</h3>
        <ul className="space-y-2">
          {job.qualifications.required.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Preferred</h3>
        <ul className="space-y-2">
          {job.qualifications.preferred.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Responsibilities</h2>
        <ul className="space-y-3">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="space-y-3">
          {job.benefits.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Company */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Company</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">{job.companyInfo.name}</h3>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.companyInfo.location}
              </div>

              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {job.companyInfo.employees}
              </div>

              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {job.companyInfo.website}
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <Button size="icon" variant="outline" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <Building className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {job.companyInfo.about}
          </p>
        </div>
      </section>
    </div>
  )
}