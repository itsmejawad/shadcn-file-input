import Link from "next/link";

// Components
import { PageHeader } from "@/components/page-header";
import { PageSection } from "@/components/page-section";
import { FileInputV1 } from "@/components/file-input-v1";

export default function Home() {
  return (
    <div className="px-5 lg:px-8 grid grid-cols-[1fr] md:grid-cols-[1fr_auto]  gap-x-6  bg-background">
      <div>
        <PageHeader
          title="File Input"
          description="Upload files with ease using the File Input component."
        />

        <PageSection title="Preview" description="">
          <div className="w-full border h-96 rounded-lg flex items-center justify-center">
            <form>
              <FileInputV1 />
              <button type="submit">Submit</button>
            </form>
          </div>
        </PageSection>

        <PageSection
          title="Pre-requisites"
          description="Upload files with ease using the File Input component."
          subSections={[
            {
              title: "1. Install shadcn/ui",
              description:
                "Import the following schdcn/ui components to use the File Input component.",
              code: ["`npx` shadcn-ui@latest init"],
            },
            {
              title: "2. shadcn/ui Components",
              description:
                "Import the following schdcn/ui components to use the File Input component.",
              code: ["`npx` shadcn@latest add input", "`npx` shadcn@latest add form"],
            },
            {
              title: "3. React Hook Form Package",
              description: "Install the React Hook Form library.",
              code: ["`npm` i react-hook-form"],
            },
          ]}
        />

        <PageSection
          title="Snippets"
          description=""
          subSections={[
            {
              title: "file-input.tsx",
              description: "Create file-input.tsx file and add it to your components folder.",
              code: ["`npx` shadcn@latest add input"],
            },
          ]}
        />

        {/* <PageSection title="Examples" description="">
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Regular File Input</h3>
            <p className="text-muted-foreground mb-2">Regular example</p>
          </div>
        </PageSection> */}
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-col gap-1 text-sm bg-muted px-6 py-4 rounded-lg min-w-[12rem] sticky top-4">
          <li className="font-semibold text-base">On this page</li>
          {[{ label: "Preview" }, { label: "Pre-requisites" }, { label: "Snippets" }].map(
            (link) => (
              <li key={link.label.toLocaleLowerCase()}>
                <Link href={"#" + link.label.toLocaleLowerCase()}>{link.label}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
