import React from 'react';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

export const ToastMultiple = ({ messages = [] }) => {
    const classes = useStyles();
    messages = messages.slice(0, 1);
    return (
        <div className={classes.root}>
            {
                messages.map((item, i) => toast(item.text, {
                    toastId: i
                }))
            }
        </div>
    );
}
