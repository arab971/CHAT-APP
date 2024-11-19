
import Conversation from "./Conversation"
import useGetConversations from "../pages/hooks/Getconversations"
import {getRandomEmoji} from "../pages/utils/emojie.js"

const Conversations = () => {
  const {loading,conversations}=useGetConversations()
  return (
    <div>
    {conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
   
    </div>
  )
}

export default Conversations
