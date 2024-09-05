import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="w-full">{children}</main>;
};

export { Main };
