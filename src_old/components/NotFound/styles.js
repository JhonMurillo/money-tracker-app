import styled, { css } from 'styled-components'
import { Link } from '@reach/router'
import { Col } from 'reactstrap'

export const Button = styled(Link)`
    display: inline-block;
    border-radius: 0px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: #28395d;
    color: white;
    border: 2px solid white;
    text-align: center;
    ${props => props.primary && css`
        background: white;
        color: palevioletred;
    `}
`

export const Column = styled(Col)`
    text-align: center;
`