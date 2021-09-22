import React, { useContext, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { SignUp as SignUpComponent } from '../components/SignUp';
import { MetaHeader } from '../components/MetaHeader'
import { Context } from '../Context';
import AuthService from '../services/auth.service';
import showToast from '../util/showMultipleToast';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const SignUp = () => {
    const { activateAuth } = useContext(Context);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitRegister = ({ name, email, password }) => {
        setDisabled(true);
        setLoading(true);
        AuthService.register(name, email, password).then(({ data }) => {
            activateAuth(data);
        }).catch((error) => {
            let errors = [
                {
                    type: 'error',
                    text: 'Unexpected Error!',
                }
            ]
            if (error?.response?.data?.message && Array.isArray(error?.response?.data?.message)) {
                errors = error?.response?.data?.message.map((item) => {
                    return {
                        type: 'error',
                        text: item,
                    }
                })
            }
            showToast(errors);
        }).finally(() => {
            setDisabled(false);
            setLoading(false);
            showToast([
                {
                    type: 'success',
                    text: 'Account created!',
                }
            ]);
        });
    };

    return (
        <MetaHeader title='Sign Up' subtitle='Sign Up'>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <SignUpComponent
                    onSubmit={onSubmitRegister}
                    disabled={disabled}
                    loading={loading}
                />
            </Container>

        </MetaHeader>
    );
}