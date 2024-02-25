import Link from "next/link";
import Image from "next/image";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin-in.svg";
import instagram from "./Icons/instagram.svg";
import codeforces from "./Icons/codeforces.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 min-h-16 flex-1 text-white">
      <ul className="text-center mt-6">
        <li className="inline-block m-2">
          <Link href="https://github.com/notSanil" target="_blank">
            <Image
              src={github}
              alt="Github"
              width={40}
              height={40}
              className="bg-gray-500 p-2 rounded-sm hover:bg-gray-700"
            />
          </Link>
        </li>
        <li className="inline-block m-2">
          <Link href="https://codeforces.com/profile/notSanil" target="_blank">
            <Image
              src={codeforces}
              alt="Codeforces"
              height={40}
              width={40}
              className="bg-gray-500 p-2 rounded-sm hover:bg-gray-700"
            />
          </Link>
        </li>
        <li className="inline-block m-2">
          <Link
            href="https://www.linkedin.com/in/sanil-gupta-2871621b9/"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="LinkedIn"
              height={40}
              width={40}
              className="bg-gray-500 p-2 rounded-sm hover:bg-gray-700"
            />
          </Link>
        </li>
        <li className="inline-block m-2">
          <Link href="https://www.instagram.com/notsanil012" target="_blank">
            <Image
              src={instagram}
              alt="Instagram"
              height={40}
              width={40}
              className="bg-gray-500 p-2 rounded-sm hover:bg-gray-700"
            />
          </Link>
        </li>
      </ul>

      <div className="text-center">
        <small>© Sanil Gupta {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
