import React from 'react'
import { useGlobalContext } from '../Context'

export default function StartShipsPage(){
    const {starShipsData} = useGlobalContext()
    // console.log(filmsData);
    
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                
                {
                    starShipsData.length > 0 && starShipsData.map((item) => {
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