import Link from "next/link";
import Image from "next/image";
import Logo from "./lorem_ipsum.jpg";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Sanil Gupta</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About me</Link>
    </nav>
  );
}