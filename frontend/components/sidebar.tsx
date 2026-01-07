"use client"

import { Briefcase, MessageSquare, FileText, User, Settings, CreditCard, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
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

function SidebarContent() {
  return (
    <>
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
    </>
  )
}

export function Sidebar({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r bg-card min-h-[calc(100vh-73px)] flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-64 p-0 max-h-[90vh] overflow-y-auto">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <aside className="w-full border-r bg-card flex flex-col">
            <SidebarContent />
          </aside>
        </SheetContent>
      </Sheet>
    </>
  )
}
