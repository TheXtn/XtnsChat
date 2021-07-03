import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './AblyChatComponent.module.css';
import {useSession} from "next-auth/client";
import {
  Input,
  Skeleton,
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'
const AblyChatComponent = (props) => {
  const session=props.session


  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    channel.publish({ name: session.user.name, data: messageText });
    setMessageText("");

  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  }

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";

    return(
        <div key={message.data}>
          <span>{message.name} </span>
        <span key={index} className={styles.message} data-author={author}>{message.data}</span>
          <br/>
          <br/>
          <br/>

        </div>

    )
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatText}>
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>
      <form onSubmit={handleFormSubmission} className={styles.form}>
        <Input
            variant="unstyled"
            ref={(element) => { inputBox = element; }}
          value={messageText}
          placeholder="Type a message..."
          onChange={e => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
             />

        <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Send</button>
      </form>
    </div>
  )
}

export default AblyChatComponent;