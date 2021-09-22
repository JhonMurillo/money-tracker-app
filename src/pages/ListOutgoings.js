import React, { useState, useEffect } from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { Nabvar } from '../components/Nabvar'
import { MainContainer } from '../components/MainContainer'
import { Toast } from '../components/Toast';
import { Table } from '../components/Table';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

import OutgoingService from '../services/outgoing.service';


export const ListOutgoings = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        expenses: [],
        total: 0
    });
    const [message, setMessage] = useState({
        show: false,
        type: '',
        text: ''
    });
    const [params, setParams] = useState({
        pageSize: 10,
        page: 0,
        search: '',
        sortType: 'DESC',
        sortValue: 'fullDate'
    });


    const getOutgoings = async (params) => {
        try {
            setLoading(true);
            setMessage({
                show: false,
                type: '',
                text: ''
            });
            const { data } = await OutgoingService.getAll(params);
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setMessage({
                show: true,
                type: 'error',
                text: error?.response?.data?.message || 'Unexpected Error!',
            });
            setData({
                expenses: [],
                total: 0
            });
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOutgoings(params);
            setData(response);
        }

        fetchData();
    }, []);


    const onCloseToast = () => {
        setMessage({
            show: false,
            type: message.type,
            text: ''
        });
    }

    const onChangePageSize = async (newPageSize) => {
        setParams({
            ...params,
            page: 0,
            pageSize: newPageSize,
        })

        const response = await getOutgoings({
            ...params,
            page: 0,
            pageSize: newPageSize,
        });
        setData(response);
    }

    const onChangePage = async (newPage) => {
        setParams({
            ...params,
            page: newPage,
        })

        const response = await getOutgoings({
            ...params,
            page: newPage,
        });
        setData(response);
    }

    const columns = [
        {
            field: 'date',
            headerName: 'Date',
            sortable: false,
            width: 150,
            minWidth: 100,
            maxWidth: 200,
            // editable: true,
        },
        {
            field: 'totalDetailPaid',
            headerName: 'Total paid',
            sortable: false,
            type: 'number',
            width: 150,
            minWidth: 100,
            maxWidth: 200,
            // editable: true,
        },
        {
            field: 'totalDetailUnPaid',
            headerName: 'Total unpaid',
            sortable: false,
            type: 'number',
            width: 150,
            minWidth: 100,
            maxWidth: 200,
            // editable: true,
        },
        {
            field: 'total',
            headerName: 'Total to paid',
            sortable: false,
            type: 'number',
            width: 150,
            minWidth: 100,
            maxWidth: 200,
            // editable: true,
        },
        {
            field: 'totalDetails',
            headerName: 'Total details',
            sortable: false,
            type: 'number',
            width: 150,
            minWidth: 100,
            maxWidth: 200,
        },
        // {
        //     field: 'isClosed',
        //     headerName: 'is Closed',
        //     sortable: false,
        //     type: 'bool',
        //     width: 150,
        //     minWidth: 100,
        //     maxWidth: 200,
        // },
        {
            field: 'isClosed',
            width: 150,
            minWidth: 100,
            maxWidth: 200,
            headerName: 'Closed?',
            renderCell: (params) => {
                const label = params?.row?.isClosed ? 'Close' : 'Open';
                const icon = params?.row?.isClosed ? <LockIcon /> : <LockOpenIcon />;

                return <Chip color='primary' label={label} icon={icon} />
            }
        }
    ];

    return (
        <MetaHeader title='Outgoings' subtitle='Outgoings'>
            <Nabvar />
            <MainContainer>
                <Typography variant='h6'>
                    Outgoings
                </Typography>
                <Table
                    data={data.expenses}
                    total={data.total}
                    page={params.page}
                    pageSize={params.pageSize}
                    columns={columns}
                    loading={loading}
                    onChangePageSize={onChangePageSize}
                    onChangePage={onChangePage}
                />
                <Toast open={message.show}
                    message={message.text}
                    type={message.type}
                    onClose={onCloseToast}
                />
            </MainContainer>
        </MetaHeader>
    )
}