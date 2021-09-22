import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: { height: 400, width: '100%' },
    dataGrid: {
        width: "640px"
    }

}));

export const Table = ({
    loading,
    columns,
    data,
    total,
    onChangePageSize,
    onChangePage,
    page,
    pageSize
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={pageSize}
                page={page}
                rowsPerPageOptions={[5, 10, 25, 50]}
                rowCount={total}
                pagination
                paginationMode='server'
                disableColumnFilter
                showRowHover={true}
                // autoHeight={true}
                // disableExtendRowFullWidth={true}
                disableSelectionOnClick
                loading={loading}
                onPageChange={onChangePage}
                onPageSizeChange={onChangePageSize}
                // className={classes.dataGrid}
            />
        </div>
    );
}
