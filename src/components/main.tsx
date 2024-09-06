import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="py-5 lg:py-8">{children}</main>;
};

export { Main };
