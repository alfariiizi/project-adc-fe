import { Outlet } from "@remix-run/react";
import Navbar from "~/components/global/Navbar";
import Footer from "./components/Footer";

export default function LayoutIndex() {
  return (
    <div className="min-h-dvh relative">
      <div className="absolute top-40 left-20 size-[300px] hidden md:block rounded-full bg-primary-400/30 blur-3xl" />
      <div className="absolute bottom-40 left-3/4 size-[260px] hidden md:block rounded-full bg-primary-400/30 blur-3xl" />
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
