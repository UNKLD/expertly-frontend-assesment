import { UserCheck, Flag } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import type { EventItem, EventTimelineProps } from "@/types/matchDetails";
import ballIcon from "@/components/ui/icons/ball.svg";
import arrowsIcon from "@/components/ui/icons/arrows.svg";

function getHalftimeScore(events: EventItem[]) {
  let home = 0;
  let away = 0;

  events.forEach((e) => {
    const minute = parseInt(e.time);

    if (e.eventType === "goal" && minute <= 45) {
      if (e.isHome) home++;
      else away++;
    }
  });

  return { home, away };
}

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
  let halftimeInserted = false;
  return (
    <div className="space-y-5 w-full">
      {events.map((event, idx) => {
        const minute = parseInt(event.time);
        const next = events[idx + 1];
        const nextMinute = next ? parseInt(next.time) : null;
        const shouldInsertHalftime =
          !halftimeInserted && minute > 45 && nextMinute !== null && nextMinute <= 45;
        if (shouldInsertHalftime) halftimeInserted = true;

        return (
          <div key={idx}>
            <div className="grid md:grid-cols-7 grid-cols-3 items-center gap-2 justify-center py-2">
              <div className="md:col-span-3 flex items-center justify-end gap-3 min-w-full">
                {event.isHome && event.homePlayer && (
                  <span className="text-xs text-end">{event.homePlayer}</span>
                )}
                {event.isHome &&
                  event.eventType &&
                  getEventIcon(event.eventType, event?.detail)}
              </div>

              <div className="flex items-center gap-2 w-fit">
                <div className="border-t-2 border-gray-700 h-1 w-6" />

                <Badge
                  className={cn(
                    "text-sm text-primary-foreground whitespace-nowrap px-4",
                    event?.eventType === "goal"
                      ? "bg-primary"
                      : "bg-slate-600 text-white",
                  )}
                >
                  {event.time}
                </Badge>
                <div className="border-t-2 border-gray-700 h-1 w-6" />
              </div>

              <div className="ml-2 flex items-center justify-start gap-3 min-w-full">
                {!event.isHome &&
                  event.eventType &&
                  getEventIcon(event.eventType, event?.detail)}
                {event.awayPlayer && (
                  <>
                    <p className="text-xs text-start">{event.awayPlayer}</p>
                  </>
                )}
              </div>
            </div>
            {shouldInsertHalftime && (
              <div className="flex items-center justify-center my-6">
                <div className="border-t-2 border-gray-700 h-1 w-full" />
                <div className="px-3 text-xs text-gray-400 min-w-fit">
                  Halftime {getHalftimeScore(events).home} -{" "}
                  {getHalftimeScore(events).away}
                </div>
                <div className="border-t-2 border-gray-700 h-1 w-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
