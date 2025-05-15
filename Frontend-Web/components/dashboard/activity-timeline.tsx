import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TimelineEvent {
  id: string
  title: string
  description: string
  time: string
  type: "application" | "view" | "message" | "recommendation" | "other"
}

interface ActivityTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function ActivityTimeline({ events, className }: ActivityTimelineProps) {
  const getEventIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "application":
        return "🚀"
      case "view":
        return "👁️"
      case "message":
        return "💬"
      case "recommendation":
        return "✨"
      default:
        return "📌"
    }
  }

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-auto">
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {getEventIcon(event.type)}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
