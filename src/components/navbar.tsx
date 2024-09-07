import Link from "next/link";

// Icons
import { Menu } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// Components
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

const Navbar = () => {
  return (
    <header className="py-4 border-b  bg-background">
      <nav className=" flex justify-between items-center mx-auto max-w-screen-xl px-5">
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
          <Sheet>
            <SheetTrigger className="block lg:hidden" asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="text-left">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Sidebar variant="Mobile" />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
