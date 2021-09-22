import React, { createContext, useState } from 'react'

export const Context = createContext({})

const Provider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(() => {
        return !!window.sessionStorage.getItem('user')
    })

    const [userLogged, setUserLogged] = useState(() => {
        return JSON.parse(window.sessionStorage.getItem('user'))
    })

    const value = {
        isAuth,
        userLogged,
        activateAuth: (data) => {
            window.sessionStorage.setItem('user', JSON.stringify(data))
            setIsAuth(true)
            setUserLogged(data);
        },
        removeAuth: () => {
            setIsAuth(false)
            setUserLogged(null)
            window.sessionStorage.removeItem('user')
        },
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}