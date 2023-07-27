import React from 'react'
import { useGlobalContext } from '../Context'


export default function PeoplePage(){
    const {peopleData} = useGlobalContext()
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                
                {
                    peopleData.length > 0 && peopleData.map((item) => {
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