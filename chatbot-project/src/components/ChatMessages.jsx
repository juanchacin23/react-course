import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css';


function ChatMessages({ chatMessages }) {
  
  const chatMessagesRef = useAutoScroll([chatMessages]); 

  

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >


      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
            time={chatMessage.time}  //this will be in case that we have the time in the chatMessage object
          />
        );
      })}
    </div>
  );


}

function useAutoScroll(dependencies) {  //we create this hook using another hooks, this one is a custom hook

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, dependencies);

  return chatMessagesRef;

}


export default ChatMessages;