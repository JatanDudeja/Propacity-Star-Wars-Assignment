import React from 'react'
import { useGlobalContext } from '../Context'

import ListView from '../pages/Film/Views/ListView'
import GridView from './Film/Views/GridView'

export default function FilmsPage() {
    const { filmsData, filmGrid, gridSetter } = useGlobalContext()
    // console.log(filmsData);

    if (filmGrid) {
        return (
            <GridView />
                            
        )
    }


    else{
        return(<ListView />)
    }









}