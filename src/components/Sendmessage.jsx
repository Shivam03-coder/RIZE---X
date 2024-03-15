import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LuSendHorizonal } from "react-icons/lu";
import { Store } from "../Context/ContextApi";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { Framer } from "../Animation/Framer";

function Sendmessage() {
  const { TextAnimation } = Framer;
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm();
  const { CurrentUser, database } = useContext(Store);
  const FormSubmit = async (data) => {
    const { Textmessage } = data;
    if (Textmessage.trim() === "") {
      alert("Enter Valid Message");
      return;
    }
    const { uid, displayName, photoURL, email } = CurrentUser;
    await addDoc(collection(database, "Messages"), {
      text: Textmessage,
      Name: displayName,
      ProfilePic: photoURL,
      uid,
      email: email,
      createdAt: serverTimestamp(),
    });
    try {
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <div className="join rounded-none fixed bottom-0 bg-[#191919] w-full p-2 sm:p-5 shadow-xl">
      <motion.form
        variants={TextAnimation}
        initial={"hidden"}
        animate={"visible"}
        className="join Border mx-auto w-[95%] sm:w-[75%] "
        onSubmit={handleSubmit(FormSubmit)}
      >
        <motion.textarea
          variants={TextAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="Textchat resize-none outline-none p-8 bg-transparent text-xl sm:text-2xl text-white rounded-xl w-full  join-item"
          placeholder="Messaging........ "
          rows="1"
          {...register("Textmessage")}
        />
        <button
          type="submit"
          className="join-item text-xl border-0 px-10 bg-[#191919]"
        >
          <LuSendHorizonal className="text-3xl text-yellow-500 hover:scale-105" />
        </button>
      </motion.form>
    </div>
  );
}

export default Sendmessage;
