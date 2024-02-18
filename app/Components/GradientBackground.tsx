import { HTMLAttributes } from "react";
import "./GradientBackground.css";

interface GradientBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    colors: string[],
    children?: any,
    enabled: boolean
}

export default function GradientBackground({ className, colors, children, enabled }: GradientBackgroundProps) {
    const gradientColors = colors.join(', ');

    const gradientStyle: React.CSSProperties = {
        zIndex: -2,
        background: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: '200% 200%',
    };

    return (
        <div className={`h-full w-screen flex absolute animate-pan inset-0 overflow-auto ${className} ` + (enabled ? "" : "stopped")} style={gradientStyle}>
                {children}
        </div>
    );
}
