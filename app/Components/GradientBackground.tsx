interface GradientBackgroundProps {
    colors: string[],
    children?: any
}

export default function GradientBackground({ colors, children }: GradientBackgroundProps) {
    const gradientColors = colors.join(', ');

    const gradientStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
        background: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: '200% 200%',
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center absolute bg-center animate-pan inset-0" style={gradientStyle}>
                {children}
        </div>
    );
}
