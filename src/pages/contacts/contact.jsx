import React from 'react'
import Button from '../../components/button/button'

const Contact = (props) => {
    const { photoURL, displayName, email } = props
    return (
        <div className="contact-card">
            <img src={photoURL} alt={email} className="display-image" />
            <p className="display-name">{displayName}</p>
            <p className="display-email">{email}</p>
            <hr className="contact-divider" />
            <Button className="medium btn-follow">Follow</Button>
        </div>
    )
}

export default Contact
