import { Sidebar } from "./sidebar";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
