import React, { useEffect } from "react";
import IMAGE1 from "../assets/images/Image1.png";
import IMAGE2 from "../assets/images/Image2.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Framer } from "../Animation/Framer";

function Home() {
  const { ImageAnimation, TextAnimation, ParagraphAnimation, ButtonAnimation } =
    Framer;
  return (
    <>
      <section className="Home md:mt-10  grid space-y-9 text-Green md:grid-cols-2 w-[85%] py-14 mx-auto gap-10">
        <motion.div
          variants={TextAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="font-Nunito VerticalCenter max-sm:order-4"
        >
          <h1 className="TitleText">Chat , Spread Love</h1>
          <br />
          <h1 className="TitleText">Secretly Chat</h1>
          <br />
          <p className="text-2xl">
            Introducing RIZE - X the ultimate platform for seamless
            communication and connection.
            <span className="hidden md:block">
              With RIZE - X, staying in touch with friends, family, and
              colleagues has never been easier.
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={ImageAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="FlexCol max-sm:order-1"
        >
          <img src={IMAGE1} alt="image1" />
        </motion.div>
        <motion.div
          variants={ImageAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="FlexCol max-sm:order-3"
        >
          <img src={IMAGE2} alt="IMAGE2" />
        </motion.div>
        <motion.div
          variants={ParagraphAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="font-Nunito  VerticalCenter max-sm:order-2"
        >
          <h1 className="TitleText">We are RIZE - X</h1>
          <br />
          <h1 className="TitleText">It's just a start</h1>
          <br />
          <span className="space-x-3 ">
            <Link
              to={"/chatbox"}
              className="btn btn-outlin text-Green text-xl border-Green bg-transparent "
            >
              LETS CHAT
            </Link>
            <a
              href="https://devshivam03.netlify.app/"
              className="btn  text-xl bg-Green text-black "
            >
              DEVELOPER
            </a>
          </span>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
