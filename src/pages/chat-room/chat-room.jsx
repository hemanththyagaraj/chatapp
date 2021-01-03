import React from 'react'
import MessageRoom from '../../components/message-room/message-room'
import Sidebar from '../../components/sidebar/sidebar'
import './chat-room.scss'

const Chat = () => {
    return (
        <main className="chat-container">
            <Sidebar />
            <MessageRoom />
        </main>
    )
}

export default Chat
