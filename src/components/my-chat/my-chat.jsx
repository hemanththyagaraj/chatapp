import React from 'react'
import { Link } from 'react-router-dom'
import './my-chat.scss'

const MyChat = () => {
    return (
        <div className="my-chat">
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}

export default MyChat
