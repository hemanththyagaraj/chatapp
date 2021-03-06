import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import { signInUserWithGoogle, signUpUserWithEmailAndPassword } from '../../redux/actions/auth-actions'
import './sign-up.scss'

const SignUp = (props) => {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        confirmPassword: ''
    })
    const { isAuthenticated } = useSelector(state => state.auth)

    const handleSubmit = (event) => {
        event.preventDefault()
        const { password, confirmPassword, userName } = user
        if (password !== confirmPassword) alert('Passwords do not match')
        else signUpUserWithEmailAndPassword(userName, password)
    }

    const handleGoogleLogin = async () => {
        signInUserWithGoogle()
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
                <h2 className="sign-up-title">Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                        type="text"
                        placeholder="Email"
                        name="userName"
                    />
                    <Input
                        name="password"
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        onChange={handleChange}
                        required
                        className="sign-up-input"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                    />
                    <Button className="medium sign-up-button">sign up</Button>
                    <Link className="existing-account" to="/sign-in">I already have an account</Link>
                </form>
                <p className="sign-up-subtitle">Or sign up with</p>
                <div className="button-google-login-container">
                    <div className="button-google-login" onClick={handleGoogleLogin} />
                </div>
            </div>
        </div>
    )
}

export default SignUp
