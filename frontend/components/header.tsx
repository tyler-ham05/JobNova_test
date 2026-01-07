"use client"

import { Briefcase, Menu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useState } from "react"

//Contains the JobNova logo and the matched liked and applied selectors
export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="border-b bg-card">
      <div className="flex items-center px-4 md:px-6 py-4 gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Image 
              src="/JobNova.svg" 
              alt="JobNova" 
              width={200} 
              height={200}
              className="w-32 lg:w-auto"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 ml-auto">
          <button className="px-3 md:px-6 py-2 rounded-full border-2 border-primary bg-card text-foreground font-medium hover:bg-muted transition-colors text-sm md:text-base">
            <span className="hidden sm:inline">Matched</span>
            <span className="sm:hidden">Match</span>
          </button>
          <div className="h-6 w-px bg-border hidden sm:block"></div>
          <button className="px-3 md:px-6 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors relative text-sm md:text-base">
            Liked
            <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground h-5 w-5 flex items-center justify-center p-0 text-xs">
              1
            </Badge>
          </button>
          <div className="h-6 w-px bg-border hidden sm:block"></div>
          <button className="px-3 md:px-6 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors relative text-sm md:text-base">
            <span className="hidden sm:inline">Applied</span>
            <span className="sm:hidden">App</span>
            <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground h-5 w-5 flex items-center justify-center p-0 text-xs">
              1
            </Badge>
          </button>
        </div>
      </div>
    </header>
  )
}
