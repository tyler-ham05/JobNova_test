import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { PromoSidebar } from "@/components/promo-sidebar"
import { JobDetail } from "@/components/job-full"
import { jobs } from "@/components/job-list"
import { notFound } from "next/navigation"

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobs.find((j) => j.id === parseInt(id))

  if (!job) {
    notFound()
  }

  return (
    <div className="h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <JobDetail job={job} />
        </main>
        <PromoSidebar />
      </div>
    </div>
  )
}

