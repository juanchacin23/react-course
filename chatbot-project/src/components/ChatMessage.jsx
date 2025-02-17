import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage({ message, sender, time }) {
  //const message = props.message;
  //const sender = props.sender; 
  //const {message, sender} = props;

  /*
  if (sender === 'robot') {
      return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );     
  }
 */

  

  //const time = dayjs().valueOf();

  

  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
        )}
      {time && (
      <div className="chat-message-text">
        {message}
        
        <div className="chat-message-time">
        {dayjs(time).format('h:mma')}
        </div>
      </div>
      )}
      
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
        )}
    </div>
  );
}