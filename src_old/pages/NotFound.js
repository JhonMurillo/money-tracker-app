import React from 'react'
import { MetaHeader } from '../components/MetaHeader'
import { NotFound as NotFoundComponent } from '../components/NotFound'

export const NotFound = () => (
    <MetaHeader title='Pagina no encontrada' subtitle='Esta pagina no fue encontrada'>
        <NotFoundComponent />
    </MetaHeader>
)