import React from 'react'
import { useGlobalContext } from '../Context'

export default function VehiclesPage(){
    const {vehiclesData} = useGlobalContext()
    // console.log(filmsData);
    
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                
                {
                    vehiclesData.length > 0 && vehiclesData.map((item) => {
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