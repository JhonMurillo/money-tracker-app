import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { Navbar as Nav, NavItem as NI } from 'reactstrap';

export const Navbar = styled(Nav)`
  height: 150px;
  display: block;
`

export const NavItem = styled(NI)`
  padding-inline-start: 25px;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`