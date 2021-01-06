import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fireStore } from '../../config/firebase'
import { onFailFetchMessages, onRequestFetchMessages, onSuccessFetchMessages } from '../../redux/actions/conversation-actions'
import './conversation.scss'

const Conversation = () => {

    const ref = createRef(null)

    const { conversation: { currentReceiverId, messages = [] }, auth: { user } } = useSelector(state => state)

    const getDocumentId = () => {
        if (currentReceiverId > user.uid) return currentReceiverId + user.uid
        else return user.uid + currentReceiverId
    }

    useEffect(() => {
        let unsubscribe

        async function listenToNewMessages(params) {
            if (currentReceiverId) {
                onRequestFetchMessages()
                try {
                    const documentRef = await fireStore.collection('chat').doc(getDocumentId())
                    unsubscribe = documentRef.onSnapshot((doc) => {
                        if (doc.exists) onSuccessFetchMessages(doc.data().messages)
                        else onSuccessFetchMessages([])
                    })
                } catch (error) {
                    onFailFetchMessages(error)
                }
            }
        }

        listenToNewMessages()
    }, [currentReceiverId])

    useEffect(() => {
        ref.current.scrollIntoView(false)
    }, [messages])

    return (
        <div className="conversation-container">
            <div ref={ref}>
                {
                    messages.map(message => {
                        return <div
                            key={message.sentAt}
                            className={`${message.senderId === user.uid ? 'sender' : 'receiver'}`}
                        >
                            {message.message}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Conversation
