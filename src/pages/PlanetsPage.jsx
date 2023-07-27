import React from "react"
import { useGlobalContext } from "../Context"

export default function PlanetsPage(){
    const {planetsData} = useGlobalContext()
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                
                {
                    planetsData.length > 0 && planetsData.map((item) => {
                        return(
                            <div>
                                {item.name}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}