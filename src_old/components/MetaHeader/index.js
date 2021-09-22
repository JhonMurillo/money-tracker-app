import React from 'react'
import { Helmet } from 'react-helmet'

export const MetaHeader = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                {title && <title>{title} | Money Tracker </title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            {children}
        </>
    )
}