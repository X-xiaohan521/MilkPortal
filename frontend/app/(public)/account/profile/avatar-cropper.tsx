"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AvatarCropperProps {
    src: string;
    size?: number; // 外框尺寸
}

export function AvatarCropper({ src, size = 300 }: AvatarCropperProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });

    const onWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        setScale((prev) => Math.min(4, Math.max(0.5, prev - e.deltaY * 0.001)));
    };

    const onMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - start.x,
            y: e.clientY - start.y,
        });
    };

    const onMouseUp = () => setDragging(false);

    return (
        <div
            ref={containerRef}
            style={{ width: size, height: size }}
            className={cn(
                "relative overflow-hidden rounded-lg border bg-muted shadow-sm select-none",
                "cursor-grab active:cursor-grabbing"
            )}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
        >
            {/* 图片 */}
            <img
                src={src}
                alt="avatar"
                draggable={false}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                }}
                className="absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2"
            />

            {/* 圆形聚光灯 mask */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    WebkitMask: `radial-gradient(circle at center, white 60%, transparent 61%)`,
                    mask: `radial-gradient(circle at center, white 60%, transparent 61%)`,
                    background: "rgba(0,0,0,0.6)",
                }}
            />
        </div>
    );
}
