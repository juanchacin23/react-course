import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinnerImage from '../assets/loading-spinner.gif';
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {

    if (isLoading || inputText === '') {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
          message: inputText,
          sender: 'user',
          id: crypto.randomUUID(),
          time: dayjs().valueOf()
      }

    ];

    setIsLoading(true);
    setInputText('');

    setChatMessages([
        ...newChatMessages,
        {
            message: <img src={LoadingSpinnerImage} className="loading-spinner"/>,
            sender: 'robot',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
        }

      ]);

    const response = await (Chatbot.getResponseAsync(inputText));
    setChatMessages([
      ...newChatMessages,
      {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID(),
          time: dayjs().valueOf()
          
      }

    ]);


    setIsLoading(false);

    
  }

  function handleKeysDown(event) {
    if(event.key === 'Enter') {
      sendMessage();
    }
    else if(event.key === 'Escape'){
      setInputText('');
    }
  }

  function clearMessagesArray() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeysDown}
        className="chat-input"
      />
      <button
      onClick={sendMessage}
      className="send-button"
      >
      Send</button>
      <button 
        className="clear-button"
        onClick={clearMessagesArray}
      >
        Clear</button>
    </div>
  );
}