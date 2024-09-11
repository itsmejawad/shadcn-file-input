import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Interfaces
import { UseFormRegisterReturn } from "react-hook-form";

// Components
import { Input } from "@/components/ui/input";
import { FormControl, FormDescription, FormLabel } from "@/components/ui/form";
import { UploadCloudIcon } from "lucide-react";

const fileInputVariantsV1 = cva("flex items-center justify-center rounded-md cursor-pointer", {
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

const formatFileSize = (sizeInBytes: number): { size: string; unit: string } => {
  if (sizeInBytes >= 1024 * 1024) {
    return { size: (sizeInBytes / 1024 / 1024).toFixed(2), unit: "MB" };
  } else if (sizeInBytes >= 1024) {
    return { size: (sizeInBytes / 1024).toFixed(2), unit: "KB" };
  }
  return { size: sizeInBytes.toFixed(2), unit: "bytes" };
};

export interface FileInputProps extends VariantProps<typeof fileInputVariantsV1> {
  showFileSize?: boolean;
  showFileType?: boolean;
  showFileName?: boolean;
  showUploadIcon?: boolean;
  changeFileName?: string;
  className?: string;
  fileRef: UseFormRegisterReturn<"file">;
}

const FileInputV1: React.FC<FileInputProps> = ({
  className,
  variant,
  size,
  fileRef,
  showUploadIcon,
  showFileSize,
  showFileType,
  showFileName,
  changeFileName,
}) => {
  const [fileInfo, setFileInfo] = React.useState<{ size: string; unit: string } | null>(null);
  const [fileType, setFileType] = React.useState<string | undefined>(undefined);
  const [fileName, setFileName] = React.useState<string | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      /* SHOW FILE SIZE. */
      const { size, unit } = formatFileSize(file.size);
      setFileInfo({ size, unit });

      setFileName(file.name);

      /* SHOW FILE EXTENSION (E.G., PNG.). */
      const extension = file.name.split(".").pop();
      setFileType(extension);

      /* SET FILE NAME */
      setFileName(file.name);

      /* CHANGE THE UPLOADED FILE NAME TO PANDA */
      if (changeFileName) {
        const newFile = new File([file], `${(changeFileName || file.name) + "." + extension}`, {
          type: file.type,
        });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(newFile);
        e.target.files = dataTransfer.files;

        /* SET NEW FILE NAME */
        setFileName(newFile.name);
      }
    }
  };

  return (
    <>
      <FormLabel htmlFor="file" className={cn(fileInputVariantsV1({ variant, size, className }))}>
        Upload File
        {showUploadIcon && <UploadCloudIcon className="w-4 h-4 ml-2" />}
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

      <FormDescription className="flex flex-col">
        {showFileSize && fileInfo && (
          <span>
            Size: {fileInfo.size} {fileInfo.unit}
          </span>
        )}
        {showFileType && fileType && <span>Type: {fileType}</span>}
        {showFileName && fileType && <span>Name: {fileName}</span>}
      </FormDescription>
    </>
  );
};

export { FileInputV1, fileInputVariantsV1 };
