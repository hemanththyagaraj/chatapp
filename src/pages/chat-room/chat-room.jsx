import React from 'react'
import MessageRoom from '../../components/message-room/message-room'
import Sidebar from '../../components/sidebar/sidebar'
import './chat-room.scss'

const ChatRoom = () => {
    return (
        <main className="chat-room-container">
            <Sidebar />
            <MessageRoom />
        </main>
    )
}

export default ChatRoom
