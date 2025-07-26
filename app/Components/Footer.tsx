import Link from "next/link";
import Image from "next/image";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin-in.svg";
import instagram from "./Icons/instagram.svg";
import codeforces from "./Icons/codeforces.svg";
import Mail from "./Icons/mail.svg";

interface FooterProps {
  mail?: boolean;
}

export default function Footer({ mail = false }: FooterProps) {
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
        {mail ? (
          <FooterButton
            link="mailto:sanilg566@gmail.com"
            src={Mail}
            alt="Mail"
          />
        ) : null}
      </ul>

      <div className="text-center mb-2">
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
