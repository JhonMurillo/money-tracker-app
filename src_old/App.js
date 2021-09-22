import React, { useContext, useState, useEffect, Suspense } from 'react'
import { NavBar } from '../src/components/NavBar'
import { Footer } from '../src/components/Footer'

import AuthService from "./services/auth.service";

// Pages
import { NotFound } from '../src/pages/NotFound'
// import { Home } from '../src/pages/Home'
import { Login } from '../src/pages/Login'
// import { Signup } from '../src/pages/Signup'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
    const { isAuth } = useContext(Context)
    const [userLogged, setUserLogged] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getUserLogged();

        if (user) {
            setUserLogged(user);
            // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);
    return (
        <Suspense fallback={<div />}>
            <NavBar />
            <Router>
                <NotFound default />
                {!isAuth && <Login path='/login' />}

                {/* <Home path='/' /> */}
                {/* {!isAuth && <Login path='/login' />}
                {!isAuth && <Signup path='/signup' />}
                {isAuth && <Redirect from='/login' to='/' noThrow />} */}
            </Router>
            <Footer />
            {/* <Router>
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router> */}
        </Suspense >
    )
}