import React from "react";
import ChatBox from "./ChatBox";
import Sendmessage from "./Sendmessage";

function ChatPage() {
  return (
    <div className=" ChatPage">
      <div className="mt-20">
        <ChatBox />
      </div>
      <Sendmessage />
    </div>
  );
}

export default ChatPage;
