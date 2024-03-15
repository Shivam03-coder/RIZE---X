import React, { useContext, useEffect, useRef } from "react";
import { Store } from "../Context/ContextApi";
import AltImage from "../assets/Alt.jpg";

function MessagePage({ message, UserMessages }) {
  const MessageScroll = useRef();
  const { CurrentUser } = useContext(Store);
  const ScrollBottom = () => {
    MessageScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(ScrollBottom, [UserMessages]);

  return (
    <div
      className={`chat ${
        message.uid === CurrentUser.uid ? "chat-end" : "chat-start "
      } sm:w-[75%] mx-auto py-5 sm:py-7 w-[90%]  cursor-pointer`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={AltImage} />
        </div>
      </div>
      <div className="chat-header">{message.email}</div>
      <div
        ref={MessageScroll}
        className="chat-bubble bg-[#86c486] font-semibold font-Nunito text-xl text-black "
      >
        {message.text}!
      </div>
    </div>
  );
}

export default MessagePage;
