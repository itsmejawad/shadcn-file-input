import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Interfaces
import { UseFormRegisterReturn } from "react-hook-form";

// Components
import { Input } from "@/components/ui/input";
import { FormControl, FormDescription, FormLabel } from "@/components/ui/form";

const formatFileSize = (sizeInBytes: number): { size: string; unit: string } => {
  if (sizeInBytes >= 1024 * 1024) {
    return { size: (sizeInBytes / 1024 / 1024).toFixed(2), unit: "MB" };
  } else if (sizeInBytes >= 1024) {
    return { size: (sizeInBytes / 1024).toFixed(2), unit: "KB" };
  }
  return { size: sizeInBytes.toFixed(2), unit: "bytes" };
};

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
  showFileSize?: boolean;
  showFileType?: boolean;
  className?: string;
  fileRef: UseFormRegisterReturn<"file">;
}

const FileInputV1: React.FC<FileInputProps> = ({
  className,
  variant,
  size,
  fileRef,
  showFileSize,
  showFileType,
}) => {
  const [fileInfo, setFileInfo] = React.useState<{ size: string; unit: string } | null>(null);
  const [fileType, setFileType] = React.useState<string | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const { size, unit } = formatFileSize(file.size);
      setFileInfo({ size, unit });
      // get file extension e.g., png, pdf, exe.
      const extension = file.name.split(".").pop();
      setFileType(extension);
    }
  };

  return (
    <>
      <FormLabel htmlFor="file" className={cn(fileInputVariantsV1({ variant, size, className }))}>
        Upload File
      </FormLabel>
      <FormControl>
        <Input
          id="file"
          className="!sr-only"
          {...fileRef}
          type="file"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormDescription>
        {showFileSize && fileInfo && (
          <p className="block">
            Size: {fileInfo.size} {fileInfo.unit}
          </p>
        )}
        {showFileType && fileType && <p className="block">Type: {fileType}</p>}
      </FormDescription>
    </>
  );
};

export { FileInputV1, fileInputVariantsV1 };
