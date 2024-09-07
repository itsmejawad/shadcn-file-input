import React from "react";

const PageHeader = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="mb-14" id="intro">
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="text-muted-foreground mb-4">{description}</p>
    </section>
  );
};

export { PageHeader };
