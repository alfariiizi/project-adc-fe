import { cn } from "~/lib/utils";
import AppIcon from "~/../public/images/app-icon.png";

type Props = {
  className?: string;
};

export default function AppLogo({ className }: Props) {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <img src={AppIcon} alt="App Icon" className="size-10" />
      <p className={cn("font-display font-bold text-xl", className)}>adc.</p>
    </div>
  );
}
