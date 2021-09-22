import React from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { Nabvar } from '../components/Nabvar'
import { MainContainer } from '../components/MainContainer'



export const Home = () => (
    <MetaHeader title='Main' subtitle='Main'>
        <Nabvar />
        <MainContainer>
            <h1>Home</h1>
        </MainContainer>
    </MetaHeader>
)