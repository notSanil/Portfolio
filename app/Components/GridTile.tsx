interface TileProps {
    callback: () => void,
}


function Tile({ callback }: TileProps) {
    return (
        <div
            style={{
                margin: 0.5,
            }}
            className={`hover:bg-[#1e1e1e] bg-[#0f0f0f] tile`}
            onClick={() => callback()}
        >
        </div>
    );
}

export default Tile;