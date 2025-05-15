import { SidebarWrapper } from "@/components/sidebar"
import { AIRecommender } from "@/components/ai/ai-recommender"
import { NDAContract } from "@/components/blockchain/nda-contract"

export default function EmployerAIFinder() {
  return (
    <SidebarWrapper userType="employer">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Finder</h1>
          <p className="text-muted-foreground">Discover the perfect candidates for your positions with AI matching</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AIRecommender type="candidate" />
          </div>
          <div className="lg:col-span-1">
            <NDAContract />
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
