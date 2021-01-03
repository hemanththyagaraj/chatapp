import React from 'react'
import Input from '../input/input'
import MyChat from '../my-chat/my-chat'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <div className="search-bar"><Input placeholder="Search" /></div>
            <MyChat />
        </aside>
    )
}

export default Sidebar
