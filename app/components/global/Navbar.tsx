import { useSidebar } from "../ui/sidebar";
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "~/components/ui/select";
import { useState } from "react";
import { Mapper } from "../primary/mapper";

function Navbar() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <nav className="left-0 bg-white/0 z-[1000] backdrop-blur-md flex justify-between items-center top-0 p-3 sticky">
      <div className="flex gap-3">
        <button
          onClick={toggleSidebar}
          className="bg-neutral-800 text-neutral-200 p-2 hover:bg-primary-700 duration-200"
        >
          {state === "expanded" ? (
            <TbLayoutSidebarRightExpandFilled className="size-5" />
          ) : (
            <TbLayoutSidebarLeftExpandFilled className="size-5" />
          )}
        </button>

        <SelectMode />
      </div>

      {/* {state === "collapsed" && <p className="font-display">adc.</p>} */}

      <UserMenu username="Rizal Alfarizi" />
    </nav>
  );
}

function SelectMode() {
  const [mode, setMode] = useState({
    value: "standard",
    label: "Standard",
  });
  const [modes] = useState([
    {
      value: "standard",
      label: "Standard",
      decription: "Fastest for daily analytics",
    },
    {
      value: "advance",
      label: "Advance",
      decription: "More detailed analytics",
    },
    {
      value: "storm",
      label: "Storm ⚡",
      decription: "Our most intelligent Analytics AI mode",
    },
  ]);

  return (
    <Select
      value={mode.value}
      onValueChange={(val) => setMode(modes.find((f) => f.value === val)!)}
    >
      <SelectTrigger className="w-[180px] border-neutral-800">
        <p className="capitalize">{mode.label}</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>AI Mode</SelectLabel>
          {
            <Mapper
              data={modes}
              renderItem={(item) => (
                <SelectItem value={item.value}>
                  <p>{item.label}</p>
                  <p className="text-neutral-400 text-xs">{item.decription}</p>
                </SelectItem>
              )}
            />
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

type UserMenuProps = {
  username: string;
};

function UserMenu({ username }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="border-neutral-800">
          <Avatar className="rounded-none h-fit">
            <AvatarFallback className="rounded-none w-full">AF</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { Navbar };
