import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../../components/button/button'
import { addNewContact } from '../../redux/actions/contacts-action'

const Contact = (props) => {
    const { photoURL, displayName, email, uid } = props
    const { user } = useSelector(state => state.auth)
    const history = useHistory()

    const handleClick = () => {
        const loggedInUser = { photoURL: user.photoURL, displayName: user.displayName, uid: user.uid, email: user.email }
        addNewContact(loggedInUser, { photoURL, displayName, email, uid }, history)
    }

    return (
        <div className="contact-card">
            {photoURL && <img src={photoURL} alt={email} className="display-image" />}
            <p className="display-name">{displayName ? displayName : email.split('@')[0]}</p>
            <p className="display-email">{email}</p>
            <hr className="contact-divider" />
            <Button className="medium btn-follow" onClick={handleClick}>Follow</Button>
        </div>
    )
}

export default Contact
