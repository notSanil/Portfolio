interface GradientBackgroundProps {
    colors: string[],
    children?: any
}

export default function GradientBackground({ colors, children }: GradientBackgroundProps) {
    const gradientColors = colors.join(', ');

    const gradientStyle: React.CSSProperties = {
        zIndex: -1,
        background: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: '200% 200%',
    };

    return (
        <div className="h-screen w-screen flex absolute animate-pan inset-0" style={gradientStyle}>
                {children}
        </div>
    );
}
