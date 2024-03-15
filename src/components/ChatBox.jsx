import React, { useContext, useEffect, useRef, useState } from "react";
import MessagePage from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { Store } from "../Context/ContextApi";

function ChatBox() {
  const MessageScroll = useRef();
  const { database } = useContext(Store);
  const [UserMessages, setUserMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(database, "Messages"),
      orderBy("createdAt"),
      limit(100)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        setUserMessages(messages);
      });
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="  text-white  ">
      {UserMessages.map((mes) => (
        <MessagePage UserMessages={UserMessages} key={mes.id} message={mes} />
      ))}
    </div>
  );
}

export default ChatBox;
