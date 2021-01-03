import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import { signInUserWithGoogle } from '../../redux/actions/auth-actions'
import '../sign-up/sign-up.scss'

const SignIn = (props) => {

    const { isAuthenticated } = useSelector(state => state.auth)

    const handleGoogleLogin = async () => {
        signInUserWithGoogle()
    }

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
    }, [isAuthenticated])

    return (
        <div className="sign-up-form">
            <h2 className="sign-up-title">Sign in</h2>
            <form>
                <Input required className="sign-up-input" type="text" placeholder="Username" />
                <Input required className="sign-up-input" type="password" placeholder="Password" />
                <Button className="medium sign-up-button">sign in</Button>
            </form>
            <p className="sign-up-subtitle">Or sign in with</p>
            <div className="button-google-login-container">
                <div className="button-google-login" onClick={handleGoogleLogin} />
            </div>
        </div>
    )
}

export default SignIn
