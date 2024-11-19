
import { useAuthContext } from "../pages/hooks/context/AuthContext";
import useConversation from "../pages/hooks/useConversations";
import { extractTime } from "../pages/utils/ExtractTime";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	// eslint-disable-next-line react/prop-types
	const fromMe = message.senderId === authUser._id;
	// eslint-disable-next-line react/prop-types, no-undef
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// eslint-disable-next-line react/prop-types
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='hidden md:block chat-image avatar'>
				<div className='w-6 md:w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white text-sm md:text-md ${bubbleBgColor} ${shakeClass} pb-2`}>
				
				{/*  eslint-disable-next-line react/prop-types */}
				{message.message} 
				</div>
			<div className=' flex gap-1 items-center chat-footer opacity-50 text-xs  text-white'>{formattedTime}</div>
		</div>
	);
};

export default Message;