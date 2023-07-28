import React from "react"
import { useGlobalContext } from "../Context"
import GridView from "./Planet/Views/GridView"
import ListView from "./Planet/Views/ListView"

export default function PlanetsPage(){
    const { planetsData, filmGrid, gridSetter } = useGlobalContext()
    
    
    if(!filmGrid){
        return(
            <GridView />
        )
    }

    else{
        return(
            <ListView />
        )
    }


}