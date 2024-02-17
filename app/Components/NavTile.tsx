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
        <div className={`relative ${colStart} ${colEnd} ${rowStart} ${rowEnd} bg-white opacity-100 bg-opacity-15 hover:bg-black hover:bg-opacity-15 underline decoration-2 decoration-white underline-offset-auto m-2 rounded-sm`}>
            {link.length > 0 ? <Link
                href={link}
                className="h-full w-full inline-block"
            >
                <h1 className="m-4 text-4xl text-white">
                    {children}
                </h1>
            </Link> : children}
        </div>
    );
}