import { Briefcase} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
//Contains the JobNova logo and the matched liked and applied selectors
export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="flex items-center px-6 py-4 gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">

            <Image src = "/JobNova.svg" alt = "JobNova" width={200} height={200}></Image>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-6 py-2 rounded-full border-2 border-primary bg-card text-foreground font-medium hover:bg-muted transition-colors">
            Matched
          </button>
          <div className="h-6 w-px bg-border"></div>
          <button className="px-6 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors relative">
            Liked
            <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground h-5 w-5 flex items-center justify-center p-0 text-xs">
              1
            </Badge>
          </button>
          <div className="h-6 w-px bg-border"></div>
          <button className="px-6 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors relative">
            Applied
            <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground h-5 w-5 flex items-center justify-center p-0 text-xs">
              1
            </Badge>
          </button>
        </div>
      </div>
    </header>
  )
}
