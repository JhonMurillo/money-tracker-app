import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { useInputCheckbox } from '../../hooks/useInputCheckbox'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { OutgoingDetailForm } from '../OutgoingDetailForm'
import { ListOutgoingDetails } from '../ListOutgoingDetails'

import { makeStyles } from '@material-ui/core/styles';

import calculate from '../../util/calculateData';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    divider: {
        marginBlockEnd: '20px',
    }
}));

export const OutgoingForm = ({ error, disabled, loading, onSubmit }) => {
    const classes = useStyles();
    const date = useInputValue('');
    let description = useInputValue('');
    let money = useInputValue(0);
    let isPaid = useInputCheckbox(false);
    const [outgoingsDetails, setOutgoingsDetails] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ date: date.value, expenseDetail: outgoingsDetails })
    }
    const handleAddDetail = (item) => {
        setOutgoingsDetails([...outgoingsDetails, {
            description: item.description,
            value: +item.money,
            isPaid: item.isPaid
        }])

        console.log(calculate([...outgoingsDetails, {
            description: item.description,
            value: +item.money,
            isPaid: item.isPaid
        }]))

        description.onChange({
            target: {
                value: ''
            }
        });
        money.onChange({
            target: {
                value: 0
            }
        });
        isPaid.onClick({
            target: {
                checked: false
            }
        });
    }
    return (
        <>
            <form className={classes.form} disabled={disabled} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="date"
                    label="Date"
                    name="date"
                    autoComplete="date"
                    autoFocus
                    type='date'
                    {...date}
                    disabled={disabled}
                />

                <Divider className={classes.divider} />

                <OutgoingDetailForm
                    disabled={disabled}
                    loading={loading}
                    description={description}
                    money={money}
                    isPaid={isPaid}
                    onSubmit={handleAddDetail}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={disabled}
                >
                    Save
                </Button>

                <Divider className={classes.divider} />

                <ListOutgoingDetails
                    list={
                        outgoingsDetails
                    }
                />
            </form>

            <Backdrop className={classes.backdrop} open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}