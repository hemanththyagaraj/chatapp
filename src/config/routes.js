import { lazy } from 'react'

const SignUp = lazy(() => import('../pages/sign-up/sign-up'))
const SignIn = lazy(() => import('../pages/sign-in/sign-in'))
const Chat = lazy(() => import('../pages/chat-room/chat-room'))
const Contacts = lazy(() => import('../pages/contacts/contacts'))

const routes = [
    {
        path: '/sign-up',
        component: SignUp,
        isProtected: false
    },
    {
        path: '/sign-in',
        component: SignIn,
        isProtected: false
    },
    {
        path: '/contacts',
        component: Contacts,
        isProtected: true
    },
    {
        path: '/',
        component: Chat,
        isProtected: true
    }
]

export default routes