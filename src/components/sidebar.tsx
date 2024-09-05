"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      title: "Getting Started",
      links: [{ label: "Introduction", href: "/docs" }],
    },
    {
      title: "Components",
      links: [{ label: "File Input", href: "/docs/file-input" }],
    },
  ];

  return (
    <aside className="bg-primary-foreground min-w-72 px-5 py-5">
      {sidebarLinks.map((sidebarLink) => (
        <ul key={sidebarLink.title} className="flex flex-col gap-1.5 sticky top-24 mb-8 last:mb-0">
          <li className="font-semibold">{sidebarLink.title}</li>
          {sidebarLink.links.map((link) => (
            <li className={cn("text-sm text-muted-foreground", pathname === link.href && "font-semibold text-primary")} key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
};

export { Sidebar };
