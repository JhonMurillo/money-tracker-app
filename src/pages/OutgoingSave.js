import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { MetaHeader } from '../components/MetaHeader'
import { Nabvar } from '../components/Nabvar'
import { MainContainer } from '../components/MainContainer'
import { OutgoingForm } from '../components/OutgoingForm';

import OutgoingService from '../services/outgoing.service';
import showToast from '../util/showMultipleToast';
import convert from '../util/convertDateFormat';

export const OutgoingSave = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    const saveOutgoings = async (input) => {
        try {
            setLoading(true);
            setDisabled(true);
            const { data } = await OutgoingService.create(input);
            setLoading(false);
            setDisabled(false)
            showToast({
                type: 'success',
                text: 'Outgoing created!',
            });
            history.push('/outgoings');
            return data;
        } catch (error) {
            setLoading(false);
            setDisabled(false)

            let errors = [
                {
                    type: 'error',
                    text: error?.response?.data?.message || 'Unexpected Error!',
                }
            ]
            if (error?.response?.data?.message && Array.isArray(error?.response?.data?.message)) {
                errors = error?.response?.data?.message.map((item) => {
                    return {
                        type: 'error',
                        text: item,
                    }
                })
            }
            showToast(errors);
        }
    }

    const onChangePageSize = async (input) => {
        input = {
            ...input,
            date: convert(input.date, 'YYYY-MM-DD', 'YYYY-MM')
        }
        const response = await saveOutgoings(input);
    }

    return (
        <MetaHeader title='Create Outgoing' subtitle='Create Outgoing'>
            <Nabvar />
            <MainContainer>
                <OutgoingForm
                    onSubmit={onChangePageSize}
                    disabled={disabled}
                    loading={loading}
                />
            </MainContainer>
        </MetaHeader>
    )
}