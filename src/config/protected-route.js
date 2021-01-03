import React, { Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {
    const { path, component: Component } = props
    const { isAuthenticated } = useSelector(state => state.auth)

    return isAuthenticated
        ? <Route exact path={path} render={(props) => <Suspense fallback={<div>Loading....</div>}><Component {...props} /></Suspense>} />
        : <Redirect to="/sign-in" />
}

export default ProtectedRoute