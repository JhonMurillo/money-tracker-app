import React from 'react'
import { LupaNotFound } from '../LupaNotFound'
import { Button, Column } from './styles'
import { Container, Row } from 'reactstrap'

export const NotFound = () => (
    <Container>
        <Row>
            <Column sm='12' md={{ size: 6, offset: 3 }}>
                <LupaNotFound />
                <h1>
                    Pagina no encontrada :(
                </h1>
                <Button to='/' >Inicio</Button>
            </Column>
        </Row>
    </Container>
)