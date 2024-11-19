import { useEffect} from 'react'
import { useSocketContext } from './context/SocketContext'
import useConversation from './useConversations'
import notificationSound from '../../assets/sounds/notification.mp3'

const MessageListen = () => {
   const {socket} =  useSocketContext()
const {messages,setMessages}=useConversation()
 useEffect(() => {
  socket?.on("newMessage", (newMessages) => {
    newMessages.shouldShake = true
    const sound = new Audio(notificationSound)
    sound.play()
    setMessages([...messages, newMessages])
  })
  return () => socket?.off("newMessage")
 }, [socket,setMessages,messages])
 
}

export default MessageListen
