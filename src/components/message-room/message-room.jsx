import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { signOutUser } from '../../redux/actions/auth-actions'
import { storeConversation } from '../../redux/actions/conversation-actions'
import { toggleSideBar } from '../../redux/actions/sidebar-actions'
import Conversation from '../conversation/conversation'
import Input from '../input/input'
import './message-room.scss'

const MessageRoom = () => {

    const [message, setMessage] = useState('')
    const { auth: { user }, conversation: { currentReceiverId } } = useSelector(state => state)

    const handleChange = (event) => {
        const { value } = event.target
        setMessage(value)
    }

    const handleSend = (event) => {
        event.stopPropagation()
        const conversation = {
            receiverId: currentReceiverId,
            senderId: user.uid,
            sentAt: new Date(),
            message
        }
        storeConversation(conversation)
        setMessage('')
    }

    const handleToggle = (event) => {
        event.stopPropagation()
        toggleSideBar()
    }

    return (
        <div className="chat-room" onClick={toggleSideBar}>
            <header className="header">
                <div className="hamburger" onClick={handleToggle}></div>
                <p onClick={signOutUser}>Logout</p>
            </header>
            <Conversation />
            <footer className={`message-input-container ${currentReceiverId ? 'show-input' : 'hide-input'}`}>
                <Input onClick={(event) => event.stopPropagation()} value={message} onChange={handleChange} placeholder="Type a message..." className="input-message" />
                <button className="btn-send" onClick={handleSend}></button>
            </footer>
        </div>
    )
}

export default MessageRoom
