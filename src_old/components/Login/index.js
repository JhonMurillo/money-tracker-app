import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const Login = ({ error, disabled, onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Email' {...email} />
                <Input placeholder='Password' type='password' {...password} />
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    )
}