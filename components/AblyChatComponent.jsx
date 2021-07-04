import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './AblyChatComponent.module.css';
import {useSession} from "next-auth/client";
import { useBeforeunload } from 'react-beforeunload';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
  Heading,
  Grid,
    Box,
    GridItem ,
  Input,
  Skeleton,
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react'

const AblyChatComponent = (props) => {


  useEffect(()=>{
    channel2.publish({ name: "", data: session.user.name+' Has joined' });

  },[])
  const session=props.session
  let inputBox = null;
  let messageEnd = null;
  const [Logs, setLogs] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;
  const [channel2, ably2] = useChannel("Logs", (Lg) => {
    const history2 = Logs.slice(-199);
    setLogs([...history2, Lg]);
  });
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
const Alllogs = Logs.map((dataa, index) => {

    return(
        <div key={dataa.data}>
          <Alert status="info">
    <AlertIcon />
    {dataa.data}
  </Alert>
<br/>

        </div>

    )
  });
  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
      <Flex>
        <Box bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} w="100%" p={4} >
          <Heading color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}>Notifications</Heading>
          <div className={styles.chatHolder}>
      <div className={styles.chatText}>

          {Alllogs}
          </div>
            </div>
</Box>
<Box  w="300%" p={4} >
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
          placeholder=" Type a message..."
          onChange={e => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
             />

        <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Send</button>
      </form>


    </div>
</Box>

</Flex>

  )
}

export default AblyChatComponent;