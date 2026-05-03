import type { Match } from "./match";

export interface Team {
  id: string;
  name: string;
  logo: string;
  shortName?: string;
}

export interface MatchEvent {
  id: string;
  type: "goal" | "yellow_card" | "red_card" | "substitution" | "corner" | "offside";
  minute: number;
  player: string;
  team: "home" | "away";
  description?: string;
}

export interface League {
  id: string;
  name: string;
  matches: Match[];
}

export interface DatePickerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export interface PageErrorProps {
  err: string | null;
  onRetry?: () => void;
}

export interface HookError {
  name: string;
  code: string;
}
