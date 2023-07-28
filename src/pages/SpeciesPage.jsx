import React from 'react'
import { useGlobalContext } from '../Context'
import GridView from './Specie/Views/GridView'
import ListView from './Specie/Views/ListView'

export default function SpeciesPage() {
    const { speciesData, filmGrid, gridSetter } = useGlobalContext()
    // console.log("species",speciesData);

    if (!filmGrid) {
        return (
            <GridView />
                            
        )
    }


    else{
        return(<ListView />)
    }
}