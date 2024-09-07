import React from "react";
import Terminal from "@/components/ui/terminal";
import { SubSection } from "@/types/SubSections";

const PageSection = ({
  title,
  description,
  subSections,
  children,
}: {
  title: string;
  description: string;
  subSections?: SubSection;
  children?: React.ReactNode;
}) => {
  return (
    <section id={title.toLocaleLowerCase()} className="mb-14">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground ">{description}</p>
      </div>

      <div className="flex flex-col gap-4">
        {subSections?.map((subSection) => (
          <div key={subSection.title}>
            <h3 className="text-xl font-semibold">{subSection.title}</h3>
            <p className="text-muted-foreground mb-2">{subSection.description}</p>
            {subSection.code && <Terminal text={subSection.code} />}
          </div>
        ))}
      </div>
      {children}
    </section>
  );
};

export { PageSection };
