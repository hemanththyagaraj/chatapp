import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import { signInUserWithEmailAndPassword, signInUserWithGoogle } from '../../redux/actions/auth-actions'
import '../sign-up/sign-up.scss'

const SignIn = (props) => {

    const [user, setUser] = useState({
        userName: '',
        password: '',
    })

    const { isAuthenticated } = useSelector(state => state.auth)

    const handleGoogleLogin = async () => {
        signInUserWithGoogle()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { userName, password } = user
        signInUserWithEmailAndPassword(userName, password)
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
    }, [isAuthenticated])

    return (
        <div className="sign-up-form">
            <div>
                <h2 className="sign-up-title">Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="userName"
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                        type="text"
                        placeholder="Email"
                    />
                    <Input
                        name="password"
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                        type="password"
                        placeholder="Password"
                    />
                    <Button className="medium sign-up-button">sign in</Button>
                    <Link className="existing-account" to="/sign-up">Create new account</Link>

                </form>
                <p className="sign-up-subtitle">Or sign in with</p>
                <div className="button-google-login-container">
                    <div className="button-google-login" onClick={handleGoogleLogin} />
                </div>
            </div>
        </div>
    )
}

export default SignIn
