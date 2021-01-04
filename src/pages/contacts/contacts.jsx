import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchContactBook } from '../../redux/actions/contacts-action'
import Contact from './contact'
import './contacts.scss'

const Contacts = () => {
    const { auth: { user }, contact: { contactBook } } = useSelector(state => state)

    useEffect(() => {
        fetchContactBook(user)
    }, [])

    return (
        <div className="contacts">
            <h2 className="contacts-title">People you may know</h2>
            {
                !contactBook.length
                    ? <h3 className="no-users">No users found</h3>
                    : <div className="contacts-collection">
                        {
                            contactBook.map(user => (<Contact key={user.uid} {...user} />))
                        }
                    </div>
            }
        </div>
    )
}

export default Contacts
