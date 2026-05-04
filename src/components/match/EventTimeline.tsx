import { UserCheck, Flag } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import type { EventTimelineProps } from "@/types/matchDetails";
import ballIcon from "@/components/ui/icons/ball.svg";
import arrowsIcon from "@/components/ui/icons/arrows.svg";

function getEventIcon(eventType?: string, card?: string) {
  switch (eventType) {
    case "subst":
      return <img src={arrowsIcon} alt="subst" className="w-5 h-5 text-primary" />;
    case "card":
      return (
        <div
          className={`min-w-4 min-h-4  ${card === "Yellow Card" ? "bg-yellow-300" : "bg-red-500"}`}
        />
      );
    case "pass":
      return <UserCheck className="w-5 h-5" />;
    case "corner":
      return <Flag className="w-5 h-5" />;
    case "goal":
      return <img src={ballIcon} alt="goal" className="w-5 h-5 text-primary" />;
    default:
      return null;
  }
}

export default function EventTimeline({ events }: EventTimelineProps) {
  return (
    <div className="space-y-5">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 items-center gap-2 justify-center py-2"
        >
          <div className="flex items-center justify-end gap-1 md:gap-3 min-w-full">
            {event.isHome && event.homePlayer && (
              <span className="text-xs">{event.homePlayer}</span>
            )}
            {event.isHome &&
              event.eventType &&
              getEventIcon(event.eventType, event?.detail)}
          </div>

          <div className="flex items-center gap-2">
            <div className="border-t-2 border-gray-700 h-1 w-6" />

            <Badge
              className={cn(
                "text-sm text-primary-foreground whitespace-nowrap px-4",
                event?.eventType === "goal" ? "bg-primary" : "bg-slate-600 text-white",
              )}
            >
              {event.time}
            </Badge>
            <div className="border-t-2 border-gray-700 h-1 w-6" />
          </div>

          <div className="flex items-center justify-start gap-3">
            {!event.isHome &&
              event.eventType &&
              getEventIcon(event.eventType, event?.detail)}
            {event.awayPlayer && (
              <>
                <p className="text-sm">{event.awayPlayer}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
