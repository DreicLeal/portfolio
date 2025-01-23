import Link from "next/link";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function UsefulLinks () {
    return(
        <div className="flex justify-between h-full w-52 gap-4 max-[700px]:gap-0 ">
        {/* <Link href={"/"}>
          <FaYoutube />
        </Link> */}
        <Link
          className="flex items-center justify-center "
          href={"https://www.github.com/dreicleal"}
          target="_blank"
        >
          <FaGithub className="h-12 w-12 text-white hover:text-zinc-600 max-[700px]:h-6 transition ease-in-out duration-300" title="Git Hub" />
        </Link>
        <Link
          className="flex items-center justify-center"
          href={"https://www.linkedin.com/in/dreicleal"}
          target="_blank"
        >
          <FaLinkedin className="h-12 w-12 text-white hover:text-zinc-600 max-[700px]:h-6 transition ease-in-out duration-300" title="LinkedIn" />
        </Link>
        <Link
          className="flex items-center justify-center"
          href={
            "https://drive.google.com/file/d/1frQqugX21Dw12IcbIUqW6cY3Tg6pDtQp/view?usp=sharing"
          }
          target="_blank"
        >
          <PiReadCvLogoBold className="h-12 w-12 text-white hover:text-zinc-600 max-[700px]:h-6 transition ease-in-out duration-300" title="CV" />
        </Link>
      </div>
    )
}