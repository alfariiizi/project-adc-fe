import { cn } from "~/lib/utils";

type Props = {
  className?: string;
};

export default function AppLogo({ className }: Props) {
  return <p className={cn("font-display font-bold", className)}>adc.</p>;
}
