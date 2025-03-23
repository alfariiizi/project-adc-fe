import { Outlet } from "@remix-run/react";
import Navbar from "~/components/global/Navbar";

export default function LayoutIndex() {
  return (
    <div className="">
      <Navbar />
      LayoutIndex
      <Outlet />
    </div>
  );
}
