import React from 'react'
import { useHistory } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/contacts')
    }

    return (
        <div className="navbar">
            <div className="logo-container">
                <span className="logo">C</span>
                <span className="logo-text">CCHAT</span>
            </div>
            <div className="add-new" onClick={handleClick}>
                <div className="add-new-img" />
            </div>
        </div>
    )
}

export default Navbar
