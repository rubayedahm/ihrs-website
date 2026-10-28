import {
  CalendarDays,
  HeartHandshake,
  Megaphone,
  MessagesSquare,
  Scale,
  Settings2,
  Share2,
  ShieldCheck,
  UserPlus,
  Users,
  type LucideProps,
} from "lucide-react";

const map = {
  CalendarDays,
  HeartHandshake,
  Megaphone,
  MessagesSquare,
  Scale,
  Settings2,
  Share2,
  ShieldCheck,
  UserPlus,
  Users,
};

export type IconName = keyof typeof map;

/** Lets content files refer to icons by name. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden {...props} />;
}
