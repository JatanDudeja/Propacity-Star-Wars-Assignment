import React from 'react'
import { useGlobalContext } from '../Context'

export default function SpeciesPage(){
    const {speciesData} = useGlobalContext()
    console.log("species",speciesData);
    
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                
                {
                    speciesData.length > 0 && speciesData.map((item) => {
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