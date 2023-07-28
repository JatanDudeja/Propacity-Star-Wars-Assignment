import React from 'react'
import { useGlobalContext } from '../Context'
import ListView from './Starship/Views/ListView'
import GridView from './Starship/Views/GridView'

export default function StartShipsPage(){
    const { starShipsData, filmGrid, gridSetter } = useGlobalContext()

    // console.log(filmsData);
    
    if (!filmGrid) {
        return (
            <GridView />
                            
        )
    }


    else{
        return(<ListView />)
    }

}