"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Components
import { FileInputV1 } from "@/components/file-input-v1";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

// Zod Schema
export const formSchema = z.object({
  file:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((value) => value[0]?.size <= 1024 * 1024, "File size should be less than 1MB"),
});

const FormTemplate = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const fileRef = form.register("file");

  console.log(form.watch("file"));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="file"
          render={({}) => (
            <FormItem>
              <FileInputV1
                showUploadIcon={true}
                showFileSize={true}
                showFileType={true}
                showFileName={true}
                changeFileName="username"
                fileRef={fileRef}
                size="lg"
                className="w-52"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export { FormTemplate };
