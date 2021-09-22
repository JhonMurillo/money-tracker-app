import React, { useContext, Suspense } from 'react'

// Pages
import { NotFound } from '../src/pages/NotFound'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { SignInSide } from './pages/SignInSide'
import { SignUp } from '../src/pages/SignUp'
import { ListOutgoings } from './pages/ListOutgoings'
import { OutgoingSave } from './pages/OutgoingSave'

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import { Context } from './Context'

export const App = () => {
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback={<div />}>

            <BrowserRouter>
                <Switch>
                    <PrivateRoute
                        component={Dashboard}
                        loginPath='/login'
                        isAuth={isAuth}
                        path='/dashboard'
                        exact
                    />
                    <PrivateRoute
                        component={ListOutgoings}
                        loginPath='/login'
                        isAuth={isAuth}
                        path='/outgoings'
                        exact
                    />
                    <PrivateRoute
                        component={OutgoingSave}
                        loginPath='/login'
                        isAuth={isAuth}
                        path='/add-outgoing'
                        exact
                    />
                    <PublicRoute
                        component={SignInSide}
                        mainPath='/dashboard'
                        isAuth={isAuth}
                        path='/login'
                        restricted={true}
                        exact
                    />
                    <PublicRoute
                        component={SignUp}
                        mainPath='/dashboard'
                        isAuth={isAuth}
                        path='/signup'
                        restricted={true}
                        exact
                    />
                    <PublicRoute
                        component={Home}
                        mainPath='/'
                        isAuth={isAuth}
                        path='/'
                        restricted={false}
                        exact
                    />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
            <ToastContainer
                position={toast.POSITION.TOP_RIGHT}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Suspense >
    )
}