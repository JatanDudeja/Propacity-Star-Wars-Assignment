import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-icon.svg"
import listIcon from "../../../assets/list-icon.svg"
import optionsIcon from '../../../assets/options-icon.svg'


export default function ListView({people}) {
    const { peopleData, filmGrid, gridSetter } = useGlobalContext()


    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>People</h5>
                <div className='grid-buttons'>
                    <button className='film-button' onClick={() => gridSetter(false)}>
                        <div className='grid'>
                            <img src={gridIcon} />
                            {!filmGrid && <span>Grid</span>}
                        </div>
                    </button>
                    <button className='film-button' onClick={() => gridSetter(true)}>
                        <div className='list'>
                            <img src={listIcon} />
                            {filmGrid && <span>List</span>}
                        </div>
                    </button>
                </div>
            </div>
            <div className='list-view-main-container' style={{ color: 'white' }}>
                <div className='grid-view list-view-heading-container'>
                    <span className='list-view-span'>Name</span>
                    <span className='list-view-span'>Birth Year</span>
                    <span className='list-view-span'>Species</span>
                    <span></span>
                </div>
                {
                    people.map(pop => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                    <span>{pop.name}</span>
                                    <span>{pop.birth_year}</span>
                                    <span>{pop.species.length == 1 ? pop.species[0] : 'NA'}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} alt='films-icon' />

                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}