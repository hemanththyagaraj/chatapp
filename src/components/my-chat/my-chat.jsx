import React from 'react'
import Chat from '../chat/chat'
import './my-chat.scss'

const MyChat = () => {
    const myChats = [
    ]
    return (
        <div className="my-chat">
            {
                !myChats.length
                    ? <h2 className="no-chat">No chat found</h2>
                    : myChats.map(chat => {
                        return <Chat key={chat.uid} {...chat} />
                    })
            }
        </div>
    )
}

export default MyChat
