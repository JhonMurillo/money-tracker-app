import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Context } from '../../Context'


export const MetaHeader = ({ children, title, subtitle }) => {
    const { isAuth, userLogged } = useContext(Context)
    return (
        <>
            <Helmet>
                {title && <title>{title} {isAuth ? ' | ' + userLogged?.user?.name : ''} | Money Tracker </title>}
                {!title && <title>{isAuth ? userLogged?.user?.name : ''} | Money Tracker </title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            {children}
        </>
    )
}