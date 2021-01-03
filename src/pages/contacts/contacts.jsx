import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../helpers/firebase'
import Contact from './contact'
import './contacts.scss'

const Contacts = () => {
    const { user } = useSelector(state => state.auth)
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await getAllUsers(user.uid)
                setUsers(users)
            } catch (error) {
                window.alert(error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="contacts">
            <h2 className="contacts-title">People you may know</h2>
            {
                !users.length
                    ? <h3 className="no-users">No users found</h3>
                    : <div className="contacts-collection">
                        {
                            users.map(user => (<Contact key={user.uid} {...user} />))
                        }
                    </div>
            }
        </div>
    )
}

export default Contacts
