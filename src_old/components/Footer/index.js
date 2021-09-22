import React from 'react';
import { Container, NavbarText, Nav } from 'reactstrap';
import { Navbar, NavItem, Link } from './styles';
import { SocialNetwork } from '../SocialNetwork';

export const Footer = () => {
    return (
        <>
            <hr />
            <Navbar expand="md">
                <Container>
                    <NavbarText>Apóyanos!</NavbarText>
                    <NavbarText>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <a href="https://api.whatsapp.com/send?phone=53145202474&text=Hola, dejame saber cual es tu negocio" target='_blank'>Contactanos!</a>
                            </NavItem>
                        </Nav>
                    </NavbarText>
                </Container>
                <Container>
                    <NavbarText>©2020 | Todos los derechos reservados</NavbarText>
                </Container>
            </Navbar>
        </>
    );
};