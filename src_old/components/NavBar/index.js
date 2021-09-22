import React, { useState } from 'react';
import { Navbar, Link } from './styles';
import { Logo } from '../Logo';
import { Alert, Container, Nav, Collapse, NavbarText } from 'reactstrap';
import { Banner } from '../Banner';

export const NavBar = () => {
    const [showBanner, setShowBanner] = useState(false);
    return (
        <>
            <Navbar fixed="top" sticky="top" expand="md">
                <Container>
                    <Logo />

                    <Nav className="ml-auto" navbar>
                        <NavbarText>

                            {/* <Link href="https://api.whatsapp.com/send?phone=53145202474&text=Hola, dejame saber cual es tu negocio" target='_blank'>Quieres que tu negocio aparezca aqui!</Link> */}

                        </NavbarText>
                    </Nav>
                </Container>
            </Navbar>
            <Banner showBanner={showBanner} message="Mensaje informativo!" />
        </>
    );
};