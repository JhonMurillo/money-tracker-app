import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: { height: 400, width: '100%' },
}));

export const Table = ({ loadind, columns, data, total }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 15]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
