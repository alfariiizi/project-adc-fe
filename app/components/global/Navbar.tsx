import AppLogo from "../primary/app-logo";
import { Button } from "../ui/button";
import Link from "../ui/link";

const menus = [
  {
    name: "Models",
    href: "/models",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Docs",
    href: "#",
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
        <ul className="hidden md:flex space-x-8">
          {menus.map((menu) => (
            <Link key={menu.name} to={menu.href} variant="link">
              {menu.name}
            </Link>
          ))}
        </ul>
        <Button variant="default">Get Started</Button>
      </div>
    </nav>
  );
}
