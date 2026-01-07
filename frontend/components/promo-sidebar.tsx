import { Sparkles, Target, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PromoSidebar() {
  return (
    <Card
      className="
    w-full
    lg:w-80
    xl:w-96
    rounded-2xl
    p-4
    md:p-6
    lg:p-8
    m-0
    lg:m-4
    bg-card
    bg-[radial-gradient(circle_at_125%_25%,rgba(217,70,239,0.25)_0%,rgba(14,165,233,0.15),transparent_50%)]
    shadow-lg
  "
    >      <div className="mb-4 md:mb-6">
        <div className="flex flex-col items-start gap-2 md:gap-3 mb-3 md:mb-4">
          <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-base md:text-lg mb-1">Ace Your Interviews with AI-Powered Mock Sessions!</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you
              shine!
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-4 md:mb-6 hidden lg:block"></hr>
      <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 hidden lg:block">
        <h4 className="font-bold text-sm md:text-base">Why Choose Our AI Mock Interviews?</h4>
        <div className="space-y-3 md:space-y-4 pl-2 md:pl-4 pr-2 md:pr-4">
          <div>
            <div>
              <h5 className="font-semibold mb-1 text-xs md:text-sm">Job-Specific Simulations:</h5>
              <li className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Practice with questions tailored to your target role, ensuring relevance and preparation.
              </li>
            </div>
          </div>

          <div>
            <div>
              <h5 className="font-semibold mb-1 text-xs md:text-sm">Actionable Feedback</h5>
              <li className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
              </li>

            </div>
          </div>

          <div>
            <div>
              <h5 className="font-semibold mb-1 text-xs md:text-sm">Boost Success Rates:</h5>
              <li className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Perfect your interview skills and increase your chances of landing the job you want.
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full py-4 md:py-6 font-semibold text-sm md:text-base">
          <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          Mock Interview
        </Button>
      </div>
    </Card>
  )
}
