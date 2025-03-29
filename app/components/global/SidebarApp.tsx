import AppLogo from "../primary/app-logo";
import { Link } from "../ui/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "../ui/sidebar";
import { IoCreateSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { Filter, Search } from "lucide-react";
import { Dialog } from "../ui/dialog";
import { Button } from "../ui/button";

export function SidebarApp() {
  return (
    <TooltipProvider delayDuration={200}>
      <Sidebar>
        <SidebarContent className="p-4">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-2">
              <AppLogo />
              <Tooltip>
                <TooltipTrigger>
                  <Link to="/" variant="secondary">
                    <IoCreateSharp />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>New</TooltipContent>
              </Tooltip>
            </div>
            <div className="flex gap-2">
              <Dialog
                trigger={
                  <Button
                    variant="secondary"
                    className="h-full border-neutral-800"
                  >
                    <Filter className="size-5" />
                  </Button>
                }
                title="Filter"
                description="Filter your history"
              >
                <div>Filter content</div>
              </Dialog>
              <Input
                placeholder="Search"
                startAdornment={<Search className="size-4" />}
              />
            </div>
          </div>
          <SidebarGroup className="p-0 mt-5">
            <SidebarGroupLabel>History Analytics</SidebarGroupLabel>
            <SidebarGroupContent className="p-0 space-y-3 overflow-y-auto">
              <CardHistory
                id="1"
                name="Card 1"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="2"
                name="Card 2"
                type={["Type 1", "Type 2", "Type 3"]}
                mode="Mode 1"
              />
              <CardHistory
                id="3"
                name="Card 3"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="4"
                name="Card 4"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="5"
                name="Card 5"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="6"
                name="Card 6"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="7"
                name="Card 7"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="8"
                name="Card 8"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
              <CardHistory
                id="9"
                name="Card 9"
                type={["Type 1", "Type 2"]}
                mode="Mode 1"
              />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </TooltipProvider>
  );
}

type CardHistoryProps = {
  id: string;
  name: string;
  type: string[];
  mode: string;
};
function CardHistory({ id, name, type, mode }: CardHistoryProps) {
  return (
    <Link
      to={`/chat/${id}`}
      className="flex justify-start h-fit border-neutral-600 p-2 flex-col gap-3 items-start border"
      variant="secondary"
    >
      <p className="text-xs font-semibold">{name}</p>
      <div className="flex gap-2 flex-wrap">
        {type.map((t) => (
          <p
            key={t}
            className="text-xs text-[8px] border m-[1px] py-0.5 px-1 bg-red-200 text-neutral-800"
          >
            {type}
          </p>
        ))}
        <p className="text-xs text-[8px] border m-[1px] py-0.5 px-1 bg-blue-200 text-neutral-800">
          {mode}
        </p>
      </div>
    </Link>
  );
}
