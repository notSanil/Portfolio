interface TileProps {
    callback: () => void,
    visible: boolean
}


export default function Tile({ callback, visible }: TileProps) {
    const marginSize: number = 0.7;

    return (
        <div
            style={{
                margin: 0.5,
                opacity: visible ? 1 : 0
            }}
            className={`hover:bg-[#1e1e1e] bg-[#0f0f0f]`}
            onClick={() => callback()}
        >
        </div>
    );
}
