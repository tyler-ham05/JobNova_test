import { Briefcase, MessageSquare, FileText, User, Settings, CreditCard, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ComponentType, SVGProps } from "react"

interface SidebarLinkProps{
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  active: boolean;
}

function SidebarLink({icon, label, active}: SidebarLinkProps) {
  const Icon = icon
  return (
    <li>
      <button
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${active
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
          }`}
      >
        <Icon className="h-5 w-5" />
        <span className="font-medium">{label}</span>
      </button>
    </li>
  )
}

export function Sidebar() {
  const navItems = [
    { icon: Briefcase, label: "Jobs", active: true },
    { icon: MessageSquare, label: "AI Mock Interview", active: false },
    { icon: FileText, label: "Resume", active: false },
    { icon: User, label: "Profile", active: false },
    { icon: Settings, label: "Setting", active: false },
    { icon: CreditCard, label: "Subscription", active: false },
    { icon: Globe, label: "Extra Credits", active: false },
  ]

  return (
    <aside className="w-64 border-r bg-card min-h-[calc(100vh-73px)] flex flex-col">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <SidebarLink icon={Briefcase} label="Jobs" active={true}></SidebarLink>
          <SidebarLink icon={MessageSquare} label="AI Mock Interview" active={false}></SidebarLink>
          <SidebarLink icon={FileText} label="Resume" active={false}></SidebarLink>
          <hr></hr>
          <SidebarLink icon={User} label="Profile" active={false}></SidebarLink>
          <SidebarLink icon={Settings} label="Setting" active={false}></SidebarLink>
          <hr></hr>
          <SidebarLink icon={CreditCard} label="Subscription" active={false}></SidebarLink>
          <SidebarLink icon={Globe} label="Extra Credits" active={false}></SidebarLink>
        </ul>
      </nav>

      <div className="p-4">
        <div className="bg-gradient-to-br from-primary to-primary/10 to-primary/30rounded-2xl p-6 text-primary-foreground rounded-md">
          <h3 className="font-bold text-lg mb-2 ">Upgrade Your Plan</h3>
          <p className="text-sm opacity-90 mb-4">Boost your success rate now!</p>
          <Button variant="secondary" className="w-full bg-card text-foreground hover:bg-card/90">
            Subscription
          </Button>
        </div>
      </div>
    </aside>
  )
}
