import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Framer } from "../Animation/Framer";

function Footer() {
  const { TextAnimation } = Framer;

  return (
    <footer className="footer bg-[#14171b] text-Green items-center p-4  ">
      <aside className="items-center hidden sm:block grid-flow-col md:mx-10">
        <p className="text-xl">
          Copyright © 2024 - All right reserved to MR SHIVAM ANAND 24
        </p>
      </aside>
      <motion.nav
        variants={TextAnimation}
        initial={"hidden"}
        animate={"visible"}
        className="grid-flow-col gap-4 mx-auto md:place-self-center md:justify-self-end md:mx-10"
      >
        <a href="hhttps://twitter.com/ShivamA02580516">
          <FaSquareXTwitter className="text-3xl" />
        </a>
        <a href="https://instagram.com/_shivam_anand__?igshid=YTQwZjQ0NmI0OA== ">
          <FaSquareInstagram className="text-3xl" />
        </a>
        <a href="https://github.com/Shivam03-coder">
          <FaGithub className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/shivam-anand-b79136277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin className="text-3xl" />
        </a>
      </motion.nav>
    </footer>
  );
}

export default Footer;
