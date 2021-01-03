import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './config/protected-route';
import routes from './config/routes';
import store from './redux/store';
import { onSignInSuccess, onSignOutSuccess } from './redux/actions/auth-actions'
import './styles/main.scss'

function App() {


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) store.dispatch(onSignInSuccess(user))
    else store.dispatch(onSignOutSuccess())
  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
          {
            routes.map(route => {
              const { isProtected, path, component: Component } = route
              return isProtected
                ? <ProtectedRoute key={path} {...route} />
                : <Route
                  exact
                  key={path}
                  path={path}
                  render={(props) => (<Suspense fallback={<div>Loading....</div>}><Component {...props} /></Suspense>)}
                />
            })
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
