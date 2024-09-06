import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 grid grid-cols-[1fr_auto]  gap-x-2  bg-background">
      <div>
        <section className="pb-4" id="intro">
          <h1 className="font-semibold text-3xl">File Input</h1>
          <p className="text-muted-foreground mb-4">
            Upload files with ease using the File Input component.
          </p>
        </section>
        <section className="py-4" id="pre-requisites">
          <h2 className="font-semibold text-2xl mb-2">Pre-requisites</h2>

          <div>
            <h3 className="font-semibold text-xl">1. shadcn/ui components</h3>
            <p className="text-muted-foreground mb-4">
              Import the following schdcn/ui components to use the File Input component.
            </p>
            <h3 className="font-semibold text-xl">2. React Hook Form</h3>
            <p className="text-muted-foreground mb-4">Install the React Hook Form library.</p>
          </div>
        </section>
      </div>
      <div>
        <ul className="flex flex-col gap-1 text-sm bg-muted px-6 py-4 rounded-lg min-w-[12rem] sticky top-32">
          <li className="font-semibold text-base">On this page</li>
          {[{ label: "Intro", href: "#intro" }].map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
