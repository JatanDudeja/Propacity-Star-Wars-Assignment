import React from 'react'
import { useGlobalContext } from '../Context'
import GridView from './Peoples/Views/GridView'
import ListView from './Peoples/Views/ListView'


export default function PeoplePage(){
    const { peopleData, filmGrid, gridSetter } = useGlobalContext()

    
    if(!filmGrid){
        return(
            <GridView />
            // <div>Hi</div>
        )
    }

    else{
        return(
            <ListView />
        )
    }
}