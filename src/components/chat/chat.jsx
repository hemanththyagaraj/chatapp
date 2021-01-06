import React from 'react'
import { setCurrentConversationId } from '../../redux/actions/conversation-actions'
import { toggleSideBar } from '../../redux/actions/sidebar-actions'
import './chat.scss'

const Chat = (props) => {
    const { displayName, photoURL, uid } = props

    const handleClick = () => {
        setCurrentConversationId(uid)
        toggleSideBar()
    }

    return (
        <div className="chat-container" onClick={handleClick}>
            <img src={photoURL} alt={displayName} />
            <h3>{displayName}</h3>
            <p></p>
        </div>
    )
}

export default Chat
