import React from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { Nabvar } from '../components/Nabvar'
import { MainContainer } from '../components/MainContainer'

export const Dashboard = () => (
    <MetaHeader title='Dashboard' subtitle='Dashboard'>
        <Nabvar />
        <MainContainer>
            <h1>Dashboard</h1>
        </MainContainer>
    </MetaHeader>
)