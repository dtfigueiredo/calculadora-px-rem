import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full mt-4 py-4 px-8 bg-emerald-700 flex justify-center items-center shadow-xl">
      <>
        <p className="text-white mr-4 ">
          Desenvoldido por <span className="underline font-semibold">Daniel Figueiredo</span>.
        </p>
      </>
      <div className="flex justify-between items-center">
        <a
          className="mx-2 text-2xl text-white "
          href="https://github.com/dtfigueiredo"
          aria-label="Github"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithubAlt />
        </a>

        <a
          className="mx-2 text-2xl text-white"
          href="https://www.linkedin.com/in/dtfigueiredo/"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
