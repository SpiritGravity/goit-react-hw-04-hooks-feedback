import {Message} from './notification.styled';

// export default function Notification({ message }) {
//     return <p className="notification">{message}</p>;
const Notification = ({ message }) => {
    return <Message>{message}</Message>;
  };
  
export default Notification;