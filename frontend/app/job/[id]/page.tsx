"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { PromoSidebar } from "@/components/promo-sidebar"
import { JobDetail } from "@/components/job-full"
import { jobs } from "@/components/job-list"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function JobPage() {
  const params = useParams()
  const id = params?.id as string
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const job = jobs.find((j) => j.id === parseInt(id))

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:h-screen lg:flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-col lg:flex-row lg:flex-1 lg:overflow-hidden">
        {/* Promo Sidebar - Card at top on mobile */}
        <div className="lg:hidden p-4 pt-4 pb-0">
          <PromoSidebar />
        </div>
        
        <div className="flex flex-col lg:flex-row lg:flex-1 lg:overflow-hidden">
          <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
          <main className="flex-1 p-4 md:p-6 lg:overflow-y-auto">
            <JobDetail job={job} />
          </main>
          
          {/* Promo Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:overflow-y-auto">
            <PromoSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

