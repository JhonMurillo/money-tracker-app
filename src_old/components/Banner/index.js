import React from 'react'
import { Alert, Container } from 'reactstrap';


export const Banner = ({ showBanner, message, type = 'primary' }) => {
    return (
        <>
            {showBanner &&
                <Alert color={type}>
                    <Container>
                        {message}
                    </Container>
                </Alert>
            }
        </>
    )
}