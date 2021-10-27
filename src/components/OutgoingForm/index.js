import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { useInputCheckbox } from '../../hooks/useInputCheckbox'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import { NumberFormatCustom } from '../../util/NumberFormatCustom';
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
        marginBlockStart: '20px',
    }
}));

export const OutgoingForm = ({ error, disabled, loading, onSubmit }) => {
    const classes = useStyles();
    const date = useInputValue('');
    let description = useInputValue('');
    let money = useInputValue(0);
    let isPaid = useInputCheckbox(false);
    const [outgoingsDetails, setOutgoingsDetails] = useState([])
    const [metadata, setMetadata] = useState({
        total: 0,
        isClosed: false,
        totalDetails: 0,
        totalDetailPaid: 0,
        totalDetailUnPaid: 0
    })


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

        setMetadata(calculate([...outgoingsDetails, {
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
        isPaid.onChange({
            target: {
                value: false,
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

                <Grid container spacing={2}>
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            autoComplete="total"
                            name="total"
                            variant="outlined"
                            fullWidth
                            disabled
                            id="total"
                            label="Total"
                            value={metadata.total}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                    </Grid>
                    
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            autoComplete="totalDetails"
                            name="totalDetails"
                            variant="outlined"
                            fullWidth
                            disabled
                            id="totalDetails"
                            label="Total Details"
                            value={metadata.totalDetails}
                        >
                        </TextField>
                    </Grid>
                
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            autoComplete="totalDetailPaid"
                            name="totalDetailPaid"
                            variant="outlined"
                            fullWidth
                            disabled
                            id="totalDetailPaid"
                            label="Total Details Paid"
                            value={metadata.totalDetailPaid}
                        >
                        </TextField>
                    </Grid>
                
                    <Grid item xs={2} sm={4} md={4}>
                        <TextField
                            autoComplete="totalDetailUnPaid"
                            name="totalDetailUnPaid"
                            variant="outlined"
                            fullWidth
                            disabled
                            id="totalDetailUnPaid"
                            label="Total Details Unpaid"
                            value={metadata.totalDetailUnPaid}
                        >
                        </TextField>
                    </Grid>
                
                    <Grid item xs={2} sm={4} md={4}>
                        <Chip color='primary' 
                        label={metadata.isClosed ? 'Closed' : 'Open'} 
                        icon={metadata.isClosed ? <LockIcon /> : <LockOpenIcon />} />
                    </Grid>
                
                </Grid>

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