import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { JobList } from "@/components/job-list"
import { PromoSidebar } from "@/components/promo-sidebar"

export default function Home() {
  return (
    <div className="h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <JobList />
        </main>
        
        <PromoSidebar />
      </div>
    </div>
  )
}
