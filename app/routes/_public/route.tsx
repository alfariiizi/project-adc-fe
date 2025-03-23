import { Outlet } from "@remix-run/react";
import Navbar from "~/components/global/Navbar";
import Footer from "./components/Footer";
import { cn } from "~/lib/utils";

export default function LayoutIndex() {
  return (
    <div className={cn("min-h-dvh relative")}>
      <div className="absolute top-32 md:top-40 left-20 size-[270px] md:size-[300px] rounded-full bg-primary-400/30 blur-3xl" />
      <div className="absolute bottom-[620px] md:bottom-40 right-20 md:left-3/4 size-[220px] rounded-full bg-primary-400/30 blur-3xl" />
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
