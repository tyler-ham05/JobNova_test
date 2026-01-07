import { Sparkles, Target, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoSidebar() {
  return (
    <aside
      className="
    w-88
    rounded-2xl
    p-8
    m-4
    border border-border/50
    bg-[radial-gradient(circle_at_125%_25%,rgba(217,70,239,0.25)_0%,rgba(14,165,233,0.15),transparent_50%)]
  "
    >      <div className="mb-6">
        <div className="flex flex-col items-start gap-3 mb-4">
          <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-1">Ace Your Interviews with AI-Powered Mock Sessions!</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you
              shine!
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-6"></hr>
      <div className="mb-6 space-y-4">
        <h4 className="font-bold text-base">Why Choose Our AI Mock Interviews?</h4>
        <div className="space-y-4 pl-4 pr-4">
          <div>
            <div>
              <h5 className="font-semibold mb-1">Job-Specific Simulations:</h5>
              <li className="text-sm text-muted-foreground leading-relaxed">
                Practice with questions tailored to your target role, ensuring relevance and preparation.
              </li>
            </div>
          </div>

          <div>
            <div>
              <h5 className="font-semibold mb-1">Actionable Feedback</h5>
              <li className="text-sm text-muted-foreground leading-relaxed">
                Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
              </li>

            </div>
          </div>

          <div>
            <div>
              <h5 className="font-semibold mb-1">Boost Success Rates:</h5>
              <li className="text-sm text-muted-foreground leading-relaxed">
                Perfect your interview skills and increase your chances of landing the job you want.
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full py-6 font-semibold text-base">
          <MessageSquare className="mr-2 h-5 w-5" />
          Mock Interview
        </Button>
      </div>
    </aside>
  )
}
