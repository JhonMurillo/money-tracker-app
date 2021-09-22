import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
    }
}));

export const MainContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
        </div>
    );
}
