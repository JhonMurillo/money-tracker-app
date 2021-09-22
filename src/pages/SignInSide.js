import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Login } from '../components/Login';
import { Toast } from '../components/Toast';
import { MetaHeader } from '../components/MetaHeader'
import { Context } from '../Context';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignInSide = () => {
    const { activateAuth } = useContext(Context);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        show: false,
        type: '',
        text: ''
    });
    const classes = useStyles();

    const onSubmitLogin = ({ email, password }) => {
        setDisabled(true);
        setLoading(true);
        setMessage({
            show: false,
            type: '',
            text: ''
        });
        AuthService.login(email, password).then(({ data }) => {
            setMessage({
                show: true,
                type: 'success',
                text: 'Login successfull!',
            });
            activateAuth(data);
        }).catch((error) => {
            setMessage({
                show: true,
                type: 'error',
                text: error?.response?.data?.message || 'Unexpected Error!',
            });
        }).finally(() => {
            setDisabled(false);
            setLoading(false);
        });
    };

    const onCloseToast = () => {
        setMessage({
            show: false,
            type: message.type,
            text: ''
        });
    }

    return (
        <MetaHeader title='Sign In' subtitle='Sign In'>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Login
                            onSubmit={onSubmitLogin}
                            disabled={disabled}
                            loading={loading}
                        />

                        <Toast open={message.show}
                            message={message.text}
                            type={message.type}
                            onClose={onCloseToast}
                        />

                    </div>
                </Grid>
            </Grid>
        </MetaHeader>
    );
}