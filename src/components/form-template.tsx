import React from "react";

const FormTemplate = ({ children }: { children: React.ReactNode }) => {
  return <form>{children}</form>;
};

export { FormTemplate };
