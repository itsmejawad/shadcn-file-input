"use client";

// Hooks
import { useState } from "react";

// Icons
import { Check, Copy } from "lucide-react";

// Components
import { Button } from "./button";
import { toast } from "sonner";
import { cn } from "../../lib/utils";

const Terminal = ({ text }: { text: string[] }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(text.map((line) => line.replace(/`/g, "")).join("\n"));
    setIsCopied(true);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="bg-primary pl-5 pr-3 py-4 rounded-lg text-primary-foreground font-[family-name:var(--font-geist-mono)] text-sm flex justify-between items-center">
      <div className="flex flex-col gap-1">
        {text.map((line, index) => (
          <pre className="block" key={index}>
            {line.split("`").map((segment, i) => (
              <span
                key={i}
                className={cn(i % 2 === 1 ? "font-semibold" : "text-primary-foreground/80")}>
                {segment}
              </span>
            ))}
          </pre>
        ))}
      </div>
      <Button
        className="self-start"
        size="icon"
        variant="ghost"
        onClick={handleCopyLink}
        type="button">
        {isCopied ? <Check size={16} /> : <Copy size={16} />}
      </Button>
    </div>
  );
};

export default Terminal;
