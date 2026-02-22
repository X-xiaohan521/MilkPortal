"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordRequirementsProps {
    lengthOk: boolean;
    charsetOk: boolean;
    mixOk: boolean;
}

export function PasswordRequirements({
    lengthOk,
    charsetOk,
    mixOk,
}: PasswordRequirementsProps) {
    const items = [
        {
            label: "Should be at least 6 characters long",
            ok: lengthOk,
        },
        {
            label:
                <>
                    Should be made up of{" "}
                    <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">a-z</code>,{" "}
                    <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">A-Z</code>,{" "}
                    <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">0-9</code>,{" "}
                    <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">@ . _ -</code>
                </>,
            ok: charsetOk,
        },
        {
            label: "Should have at least one alphabet and number",
            ok: mixOk,
        },
    ];

    return (
        <div className="space-y-2">
            <p className="text-sm font-medium">Password should meet the following requirements:</p>

            <ul className="space-y-1">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                        {item.ok ? (
                            <Check className="h-4 w-4 text-chart-3" />
                        ) : (
                            <X className="h-4 w-4 text-destructive" />
                        )}
                        <span
                            className={cn(
                                item.ok ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
