import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMyContacts } from '../../redux/actions/contacts-action'
import Chat from '../chat/chat'
import './my-chat.scss'

const MyChat = () => {

    const { auth, contact: { myContacts = [] } } = useSelector(state => state)

    useEffect(() => {
        getMyContacts(auth.user.uid)
    }, [])

    return (
        <div className="my-chat">
            {
                !myContacts.length
                    ? <h2 className="no-chat">No chat found</h2>
                    : myContacts.map(chat => {
                        return <Chat key={chat.uid} {...chat} />
                    })
            }
        </div>
    )
}

export default MyChat
