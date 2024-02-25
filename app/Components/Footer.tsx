import Link from "next/link";
import Image from "next/image";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin-in.svg";
import instagram from "./Icons/instagram.svg";
import codeforces from "./Icons/codeforces.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-chill-950 border-t border-blue-chill-600 min-h-16 flex-1 text-white">
      <ul className="text-center mt-6">
        <FooterButton
          link="https://github.com/notSanil"
          src={github}
          alt="Github"
        />
        <FooterButton
          link="https://codeforces.com/profile/notSanil"
          src={codeforces}
          alt="Codeforces"
        />
        <FooterButton
          link="https://www.linkedin.com/in/sanil-gupta-2871621b9/"
          src={linkedin}
          alt="LinkedIn"
        />
        <FooterButton
          link="https://www.instagram.com/notsanil012"
          src={instagram}
          alt="Instagram"
        />
      </ul>

      <div className="text-center">
        <small>© Sanil Gupta {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

interface FooterButtonProps {
  src: any;
  alt: string;
  link: string;
}

function FooterButton({ src, alt, link }: FooterButtonProps) {
  return (
    <li className="inline-block m-2">
      <Link href={link} target="_blank">
        <Image
          src={src}
          alt={alt}
          height={40}
          className="border border-blue-chill-600 p-2 rounded hover:bg-blue-chill-800"
        />
      </Link>
    </li>
  );
}
