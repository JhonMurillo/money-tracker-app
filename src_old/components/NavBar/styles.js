import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { Navbar as Nav, NavItem as NI } from 'reactstrap';

export const Navbar = styled(Nav)`
  background-color: #253556;
  height: 75px;
`

export const NavItem = styled(NI)`
  padding-inline-start: 25px;
`

// export const Link = styled(LinkRouter)`
//   color: #fff;
//   display: inline-flex;
//   height: 100%;
//   justify-content: center;
//   text-decoration: none;
//   width: 100%;
// `

export const Link = styled.a`
  color: #fff;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    text-decoration: none;
    color: #6c757d;
  }
`