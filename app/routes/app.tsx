import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <div>
      AppLayout
      <Outlet />
    </div>
  );
}
