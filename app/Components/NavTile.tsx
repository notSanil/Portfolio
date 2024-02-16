import Link from "next/link";

interface NavTileParams {
    link: string,
    colStart?: string,
    colEnd?: string,
    rowStart?: string,
    rowEnd?: string,
    children?: any
}


export default function NavTile({ link, colStart, colEnd, rowStart, rowEnd, children }: NavTileParams) {
    return (
        <div className={`relative ${colStart} ${colEnd} ${rowStart} ${rowEnd} border-solid border border-red-700 hover:bg-black`}>
            <Link
                href={link}
            >
                <h1 className="m-4 text-4xl text-white">
                    {children}
                </h1>
            </Link>
        </div>
    );
}