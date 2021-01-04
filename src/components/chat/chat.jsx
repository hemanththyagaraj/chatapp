import React from 'react'
import './chat.scss'

const Chat = (props) => {
    const { displayName, photoURL } = props
    return (
        <div className="chat-container">
            <img src={photoURL} alt={displayName} />
            <h3>{displayName}</h3>
            <p></p>
        </div>
    )
}

export default Chat
