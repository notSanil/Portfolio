import Link from "next/link";

interface NavbarProps {
    page: string
}


export default function Navbar({page}: NavbarProps) {
    return (
        <nav className="bg-black text-white sticky top-0 flex flex-row justify-between">
            <div className="p-3 ml-4">
                Sanil Gupta
            </div>

            <ul className="mr-4">
                <li className={"inline-block p-3 mx-1 " + (page === "about" ? "bg-white bg-opacity-20" : "hover:opacity-50")}>
                    <Link href="/about">
                        About 
                    </Link>
                </li>
                <li className={"inline-block p-3 mx-1 " + (page === "blogs" ? "bg-white bg-opacity-20" : "hover:opacity-50")}>
                    <Link href="/blogs">
                        Blogs 
                    </Link>
                </li>
                <li className={"inline-block p-3 mx-1 " + (page === "projects" ? "bg-white bg-opacity-20" : "hover:opacity-50")}>
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
                <li className={"inline-block p-3 mx-1 " + (page === "contact" ? "bg-white bg-opacity-20" : "hover:opacity-50")}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}