//common practice is import first from packages
import { useEffect, useState } from 'react'

//common practice is import second from javascript files

import { ChatInput } from './components/ChatInput';

import ChatMessages from './components/ChatMessages';

import { Chatbot } from 'supersimpledev';

//common practice is import third from other types of files

//import RobotProfileImage from './assets/robot.png';
//import UserProfileImage from './assets/user.png';
//import LoadingSpinnerImage from './assets/loading-spinner.gif'; //basically we are getting the filepath

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css' //vite is letting import css files directly


function App() {

  /*here we are using the destructuring as well */
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []); //we are using the useState hook to store the messages in the chatMessages variable
  //const [chatMessages, setChatMessages] = array; //using the destructuring assignment to store the values of the array in a variable
  //const chatMessages = array[0]; normal way to store the values of the array in a variable 
  //const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      'dumb': 'you are dumb',
      'divide in 2': 'I am not a calculator',
      'give me a unique id': () => {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`
      }
    })
    
  }, []);

  useEffect(() => {
   localStorage.setItem('messages', JSON.stringify(chatMessages)); 
  }, [chatMessages]);

return (
  <div className="app-container">
     
    {chatMessages.length === 0 && (
      <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox</p>
    )}
    <ChatMessages 
      chatMessages={chatMessages}
    />
    <ChatInput 
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
  </div>
);
}

export default App
