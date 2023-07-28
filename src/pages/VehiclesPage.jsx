import React from 'react'
import { useGlobalContext } from '../Context'
import ListView from './Vehicle/Views/ListView'
import GridView from './Vehicle/Views/GridView'

export default function VehiclesPage() {
    const { vehiclesData, filmGrid, gridSetter } = useGlobalContext()
    // console.log(filmsData);


    if (!filmGrid) {
        return (
            <GridView />

        )
    }


    else {
        return (<ListView />)
    }


}