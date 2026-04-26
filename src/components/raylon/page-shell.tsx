import type { ReactNode } from "react";
import { RaylonNavbar } from "@/components/raylon/chrome";
import { RaylonPageTail } from "@/components/raylon/page-tail";

export function RaylonPageShell({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) {
  return (
    <div className="pages-wrapper">
      <RaylonNavbar />
      {children}
      <RaylonPageTail pathname={pathname} />
    </div>
  );
}
