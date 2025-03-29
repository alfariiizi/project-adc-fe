import { SidebarProvider } from "../ui/sidebar";
import { Toaster } from "../ui/sonner";

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  return (
    <>
      <SidebarProvider
        style={{
          // @ts-expect-error this is okay
          "--sidebar-width": "20rem",
          "--sidebar-width-mobile": "20rem",
        }}
      >
        {children}
      </SidebarProvider>
      <Toaster theme="dark" richColors />
    </>
  );
}
