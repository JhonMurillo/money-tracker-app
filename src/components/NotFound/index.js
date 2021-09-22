import React from 'react'
import { Column } from './styles'
import Button from '@material-ui/core/Button';
import { Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

export const NotFound = () => (
    <Container>
        <Row>
            <Column sm='12' md={{ size: 6, offset: 3 }}>
                <h1>
                    Pagina no encontrada :(
                </h1>
                <Button component={Link} to={'/'} >Inicio</Button>
            </Column>
        </Row>
    </Container>
)