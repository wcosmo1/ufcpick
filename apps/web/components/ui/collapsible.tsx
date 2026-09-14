"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CollapsibleContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(
  null
);

export function Collapsible({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  className,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolled;
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setUncontrolled(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange]
  );

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div className={cn(className)} data-state={open ? "open" : "closed"}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) throw new Error("CollapsibleTrigger must be inside Collapsible");

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-2 text-left",
        className
      )}
      aria-expanded={ctx.open}
      onClick={() => ctx.setOpen(!ctx.open)}
      {...props}
    >
      {children}
    </button>
  );
}

export function CollapsibleContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) throw new Error("CollapsibleContent must be inside Collapsible");
  if (!ctx.open) return null;

  return <div className={cn("mt-3", className)}>{children}</div>;
}
