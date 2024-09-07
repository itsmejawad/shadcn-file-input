"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Utils
import { cn } from "@/lib/utils";

// Types
import { SidebarLinks } from "@/types/SidebarLinks";
import { ArrowLeft } from "lucide-react";

// Components

const DesktopSidebar = ({
  pathname,
  sidebarLinks,
}: {
  pathname: string;
  sidebarLinks: SidebarLinks;
}) => {
  return (
    <aside className="min-w-72 px-5 py-5 hidden lg:block border-r">
      <ul className="flex flex-col gap-1.5 last:mb-0 sticky top-24">
        {sidebarLinks.map((sidebarLink) => (
          <li key={sidebarLink.title}>
            <h3 className="font-semibold mb-1 mt-4 first:mt-0">{sidebarLink.title}</h3>
            {sidebarLink.links.map((link) => (
              <p
                className={cn(
                  "text-sm text-muted-foreground",
                  pathname === link.href && "font-semibold text-primary"
                )}
                key={link.href}>
                <Link className="flex items-center justify-between" href={link.href}>
                  {link.label}
                  {pathname === link.href && (
                    <span className="text-primary">
                      <ArrowLeft size={16} />
                    </span>
                  )}
                </Link>
              </p>
            ))}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const MobileSidebar = ({
  pathname,
  sidebarLinks,
}: {
  pathname: string;
  sidebarLinks: SidebarLinks;
}) => {
  return (
    <aside className="py-5">
      {sidebarLinks.map((sidebarLink) => (
        <ul key={sidebarLink.title} className="flex flex-col gap-1.5  mb-4 last:mb-0">
          <li className="font-semibold">{sidebarLink.title}</li>
          {sidebarLink.links.map((link) => (
            <li
              className={cn(
                "text-sm text-muted-foreground",
                pathname === link.href && "font-semibold text-primary"
              )}
              key={link.href}>
              <Link className="flex items-center justify-between" href={link.href}>
                {link.label}
                {pathname === link.href && (
                  <span className="text-primary">
                    <ArrowLeft size={18} />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
};

const Sidebar = ({ variant }: { variant: "Mobile" | "Desktop" }) => {
  const pathname = usePathname();

  const sidebarLinks: SidebarLinks = [
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
    <>
      {variant === "Desktop" && <DesktopSidebar pathname={pathname} sidebarLinks={sidebarLinks} />}
      {variant === "Mobile" && <MobileSidebar pathname={pathname} sidebarLinks={sidebarLinks} />}
    </>
  );
};

export { Sidebar };
