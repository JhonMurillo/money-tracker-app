  
import React from "react"
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
    <Link to="/">
        <img src='logo.png' alt='Apóyanos Logo' title='Apóyanos!' />
    </Link>
  )
}