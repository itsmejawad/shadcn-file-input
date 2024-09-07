import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

// Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { UseFormRegisterReturn } from "react-hook-form";

const fileInputVariantsV1 = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface FileInputProps extends VariantProps<typeof fileInputVariantsV1> {
  className?: string;
  fileRef: UseFormRegisterReturn<"file">;
}

const FileInputV1: React.FC<FileInputProps> = ({ className, variant, size, fileRef }) => {
  // const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {};

  return (
    <Label
      htmlFor="file"
      className={cn(fileInputVariantsV1({ variant, size, className }))}
      onClick={handleClick}>
      Upload File
      <Input className="!sr-only" {...fileRef} type="file" />
    </Label>
  );
};

FileInputV1.displayName = "FileInput";

export { FileInputV1, fileInputVariantsV1 };
