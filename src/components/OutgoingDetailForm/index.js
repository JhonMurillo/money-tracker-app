import React from 'react'

import showToast from '../../util/showMultipleToast';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { NumberFormatCustom } from '../../util/NumberFormatCustom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const OutgoingDetailForm = ({
    description,
    money,
    isPaid,
    error,
    disabled,
    loading,
    onSubmit
}) => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        let errors = []
        if (!description.value) errors.push({ type: 'error', text: 'Description cannot be empty', })
        if (!money.value || money.value < 1) errors.push({ type: 'error', text: 'Money cannot be empty', })
        if (errors?.length > 0) {
            showToast(errors)
            return;
        }
        onSubmit({
            description: description.value,
            money: money.value,
            isPaid: isPaid.value,
        })
    }
    return (
        <>
            <div className={classes.root} disabled={disabled} onSubmit={handleSubmit}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="description"
                            name="description"
                            variant="outlined"
                            fullWidth
                            id="description"
                            label="description"
                            {...description}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="money"
                            label="money"
                            name="money"
                            autoComplete="money"
                            {...money}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox {...isPaid} color="primary" />}
                            label="Already is paid?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fab color="primary" aria-label="add" onClick={handleSubmit}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}