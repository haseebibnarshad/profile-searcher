import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getYear } from "date-fns";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 flex h-40 flex-col items-center justify-center gap-6 bg-soft-background/80 text-primary">
      <div className="flex items-center gap-6 text-2xl transition-all  ease-in-out">
        <Link
          href={"https://github.com/haseebibnarshad/gitfolio"}
          target="_blank"
          aria-label="gitfolio Github Repo"
          className="duration-500 hover:-translate-y-1 hover:text-[#f5f5f5]"
        >
          <FontAwesomeIcon className="" icon={faGithub} />
        </Link>
        <Link
          href="https://discord.com/users/1237277307857797144"
          target="_blank"
          aria-label="Haseeb's Discord Account"
          className="duration-500 hover:-translate-y-1 hover:text-[#5865F2]"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
      </div>
      <p className=" -mt-3 px-5 text-center text-sm text-primary/70 lg:w-full">
        {getYear(new Date())} gitfolio. All Rights reserved. Developed by{" "}
        <Link
          target="_blank"
          aria-label="Haseeb's Github Account"
          href={`https://github.com/haseebibnarshad`}
          className="text-primary underline"
        >
          haseebarshad
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
