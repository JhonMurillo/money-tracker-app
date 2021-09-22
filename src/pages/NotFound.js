import React from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { NotFound as NotFoundComponent } from '../components/NotFound'
import { MainContainer } from '../components/MainContainer'

export const NotFound = () => (
    <MetaHeader title='Pagina no encontrada' subtitle='Esta pagina no fue encontrada'>
        <MainContainer>
            <NotFoundComponent />
        </MainContainer>
    </MetaHeader>
)