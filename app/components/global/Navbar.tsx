import React from "react";
import AppLogo from "../primary/app-logo";
import { Button } from "../ui/button";
import { Link } from "../ui/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Mapper } from "../primary/mapper";
import { company, products, resources } from "~/shared/menus";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  return (
    <nav className="px-6 py-4 sticky top-0 left-0 z-[10000] bg-black/50 backdrop-blur-md">
      <div className="container flex font-display items-center justify-between">
        <div className="text-2xl flex items-center gap-2 font-bold font-display">
          <Link to="/">
            <AppLogo />
          </Link>
        </div>
        <NavbarMenu />
        <Button variant="default" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
}

function NavbarMenu() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Mapper
              data={products}
              className="p-4 w-[300px] flex flex-col gap-4"
              renderItem={(product) => (
                <ListItem title={product.title} href={product.href}>
                  {product.description}
                </ListItem>
              )}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Mapper
              data={resources}
              className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "
              renderItem={(item) => (
                <ListItem title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              )}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Mapper
              data={company}
              className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "
              renderItem={(item) => (
                <ListItem title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              )}
            />
            {/* <Link to="/docs" className={navigationMenuTriggerStyle()}> */}
            {/*   Documentations */}
            {/* </Link> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div className="h-full">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 h-full leading-none no-underline outline-none transition-colors hover:bg-primary-700 hover:text-accent-foreground focus:bg-primary-700 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </div>
  );
});
ListItem.displayName = "ListItem";
