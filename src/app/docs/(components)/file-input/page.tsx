import Link from "next/link";

// Components
import PageHeader from "@/components/page-header";
import PageSection from "@/components/page-section";

export default function Home() {
  return (
    <div className="px-5 lg:px-8 grid grid-cols-[1fr] md:grid-cols-[1fr_auto]  gap-x-6  bg-background">
      <div>
        <PageHeader
          title="File Input"
          description="Upload files with ease using the File Input component."
        />

        <PageSection
          title="Pre-requisites"
          description="Upload files with ease using the File Input component."
          subSections={[
            {
              title: "shadcn/ui Components",
              description:
                "Import the following schdcn/ui components to use the File Input component.",
              code: ["`npx` shadcn@latest add input"],
            },
            {
              title: "React Hook Form Package",
              description: "Install the React Hook Form library.",
              code: ["`npm` i react-hook-form"],
            },
          ]}
        />
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-col gap-1 text-sm bg-muted px-6 py-4 rounded-lg min-w-[12rem] sticky top-32">
          <li className="font-semibold text-base">On this page</li>
          {[{ label: "Pre-requisites" }].map((link) => (
            <li key={link.label.toLocaleLowerCase()}>
              <Link href={"#" + link.label.toLocaleLowerCase()}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
