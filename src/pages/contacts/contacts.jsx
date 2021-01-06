import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchContactBook } from '../../redux/actions/contacts-action'
import Contact from './contact'
import './contacts.scss'

const Contacts = () => {
    const { auth: { user }, contact: { contactBook = [], myContacts = [] } } = useSelector(state => state)

    useEffect(() => {
        fetchContactBook(user)
    }, [])

    const getUnknownContacts = () => {
        const unKnown = contactBook.filter(contact => {
            return !myContacts.some(cont => cont.uid === contact.uid)
        })
        return unKnown
    }

    getUnknownContacts()

    return (
        <div className="contacts">
            <h2 className="contacts-title">People you may know</h2>
            {
                !getUnknownContacts().length
                    ? <h3 className="no-users">No users found</h3>
                    : <div className="contacts-collection">
                        {
                            getUnknownContacts().map(user => (<Contact key={user.uid} {...user} />))
                        }
                    </div>
            }
        </div>
    )
}

export default Contacts
