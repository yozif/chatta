import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Chat from "./Chat";

const CreateGroup = () => {
  const [messages, setMessages] = useState([]);
  const [snapshotExists, setSnapshotExists] = useState(false);

  // button that creates a new chat
  const createChat = () => {
    // logic to create a new chat
    const uniqueId = 1; // Generate a unique identifier
    const q = query(
      collection(db, "messages_" + uniqueId),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        const snapshot = getDoc(doc(db, "messages_" + uniqueId));
        if (!snapshot.exists()) {
          setSnapshotExists(false);
        } else {
          setSnapshotExists(true);
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        }
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  };

  createChat();

  return !snapshotExists ? (
    <button style={{margin: "100px"}} className="create-chat" onClick={createChat}>
      Start new chat
    </button>
  ) : (
    <Chat messages={messages} />
  );
};

export default CreateGroup;
