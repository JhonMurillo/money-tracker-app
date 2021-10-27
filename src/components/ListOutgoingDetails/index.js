import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

const formatValue = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
    });

    return formatter.format(value);
}

export const ListOutgoingDetails = ({ list = [] }) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>

            {list.map(({ description, value, isPaid }, idx) => (
                <div key={`list-outgoing-detail-${idx}`}>
                    <ListItem alignItems='flex-start'>
                        <ListItemAvatar>
                            <Avatar className={classes.green}>
                                <AssignmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={description}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component='span'
                                        variant='body2'
                                        className={classes.inline}
                                        color='textPrimary'
                                    >
                                        {
                                            formatValue(value)
                                        }
                                    </Typography>
                                    <br />
                                    <Chip
                                        color='primary'
                                        label={isPaid ? 'Paid' : 'Unpaid'}
                                        icon={isPaid ? <MoneyOffIcon /> : <AttachMoneyIcon />}
                                    />
                                </React.Fragment>
                            }
                        />
                        {/* <Fab color="primary" aria-label="edit" onClick={handleEditItem}> */}
                        <Fab color="primary" aria-label="edit" onClick={(e)=> console.log(e)}>
                            <EditIcon />
                        </Fab>
                        <Fab color="primary" aria-label="delete" onClick={(e)=> console.log(e)}>
                            <DeleteIcon />
                        </Fab>
                    </ListItem>


                    <Divider variant='inset' component='li' />
                </div>

            ))}
            {
                list?.length === 0 &&
                <Alert severity='info'>
                    <strong>no items</strong>, Please add them!
                </Alert>
            }

        </List>
    );
}
