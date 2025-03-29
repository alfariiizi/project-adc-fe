import "./tailwind.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Providers from "./components/global/Providers";
import { SidebarApp } from "./components/global/SidebarApp";
import { Navbar } from "./components/global/Navbar";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black font-sans relative size-full text-neutral-300">
        <div className="absolute top-32 right-10 size-[200px] hidden md:block rounded-full bg-primary-400/25 blur-3xl" />
        <div className="absolute bottom-[700px] left-60 size-[400px] hidden md:block rounded-full bg-primary-400/25 blur-3xl" />
        <div className="absolute bottom-[700px] left-[400px] top-1/2 size-[300px] hidden md:block rounded-full bg-primary-400/25 blur-3xl" />
        <Providers>
          <SidebarApp />
          <div className="w-full h-full relative">
            <Navbar />
            <main className="h-full w-full py-5 px-3">{children}</main>
          </div>
        </Providers>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
