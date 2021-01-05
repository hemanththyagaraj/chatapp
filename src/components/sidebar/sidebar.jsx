import React from 'react'
import Input from '../input/input'
import MyChat from '../my-chat/my-chat'
import variable from '../../styles/exports.module.scss'
import Navbar from '../navbar/navbar'
import './sidebar.scss'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const { isSidebarOpen } = useSelector(state => state.sidebar)

    return (
        <aside className={`sidebar-container ${isSidebarOpen ? 'open-sidebar' : 'closed-sidebar'}`}>
            <div className="appbar">
                <Navbar />
                <div className="search-bar"><Input placeholder="Search" style={{ backgroundColor: variable.secondaryLight }} /></div>
            </div>
            <MyChat />
        </aside>
    )
}

export default Sidebar
