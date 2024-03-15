import React, { useContext, useEffect, useState } from "react";
import { Framer } from "../Animation/Framer";
import { AnimatePresence, motion } from "framer-motion";
import { Store } from "../Context/ContextApi";

function ModalBox() {
  const { ModalAnimation, Backdrop } = Framer;
  const [ShowModel, setShowModel] = useState(true);
  const { CurrentUser } = useContext(Store);

  useEffect(() => {
    if (CurrentUser) {
      setShowModel(false);
    }
  }, [ShowModel]);
  return (
    <AnimatePresence>
      {ShowModel && (
        <motion.div
          variants={Backdrop}
          initial={"hidden"}
          animate={"visible"}
          className="hero z-50 text-Green fixed top-0 left-0 w-full font-Noto  min-h-screen"
        >
          <motion.div
            variants={ModalAnimation}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className="hero-content  mx-auto text-center rounded-xl CustomBoxShadow bg-transparent backdrop-blur-lg Border"
          >
            <div className="max-w-md max-sm:w-72 mx-auto">
              <h1 className="text-4xl font-semibold">WELCOME TO RIZE - X </h1>
              <p className="py-6 text-xl font-medium">
                Welcome to RIZE - X With RIZE - X, staying in touch with
                friends, family, and colleagues has never been easier.
              </p>
              <button
                onClick={() => setShowModel(false)}
                className="btn w-full bg-Green hover:bg-Green text-black text-xl mx-auto"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalBox;
