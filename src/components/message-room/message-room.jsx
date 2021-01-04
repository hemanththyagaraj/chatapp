import React from 'react'
import { signOutUser } from '../../redux/actions/auth-actions'
import './message-room.scss'

const MessageRoom = () => {
    return (
        <div className="chat-room">
            <header className="header">
                <div>Current chat user</div>
                <p onClick={signOutUser}>Logout</p>
            </header>
        </div>
    )
}

export default MessageRoom
