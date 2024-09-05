import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <header className=" py-4  border-b">
      <nav className=" flex justify-between items-center mx-auto max-w-screen-xl">
        <Button className="bg-primary/10" variant="ghost" asChild>
          <Link href="/" className="font-semibold">
            shadcn/ui File Input
          </Link>
        </Button>
        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://github.com/itsmejawad/shadcn-file-input" target="_blank">
              <GitHubLogoIcon width={18} height={18} />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
