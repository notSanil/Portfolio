export default function Tile({ height, width }: { height: number, width: number }) {
    const marginSize: number = 0.7;

    return (
        <div
        style={
            {
                margin: 0.5
            }
        }
            className={`hover:bg-[#1e1e1e] bg-[#0f0f0f]`}
        >
        </div>
    );
}
