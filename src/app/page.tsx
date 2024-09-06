import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="px-5 lg:px-8 max-w-2xl">
      <h1 className="font-semibold text-3xl">shadcn/ui File Component</h1>
      <p className="text-muted-foreground mb-4">
        A reusable file input component built on top of shadcn/ui reusable components, designed for
        flexibility and scalability within React applications. This component provides an
        easy-to-implement solution for handling file uploads, offering many variants to choose from.
      </p>
      <div className="space-x-2">
        <Button size="lg" asChild>
          <Link href="/docs">Start now</Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="https://github.com/itsmejawad/shadcn-file-input" target="_blank">
            Github Repository
          </Link>
        </Button>
      </div>
    </div>
  );
}
