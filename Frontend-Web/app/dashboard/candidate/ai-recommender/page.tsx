import { SidebarWrapper } from "@/components/sidebar"
import { AIRecommender } from "@/components/ai/ai-recommender"
import { AIProfileAnalyzer } from "@/components/ai/ai-profile-analyzer"

export default function CandidateAIRecommender() {
  return (
    <SidebarWrapper userType="candidate">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Recommender</h1>
          <p className="text-muted-foreground">Get personalized job recommendations powered by AI</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AIRecommender type="job" />
          </div>
          <div className="lg:col-span-1">
            <AIProfileAnalyzer />
          </div>
        </div>
      </div>
    </SidebarWrapper>
  )
}
