import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-icon.svg"
import listIcon from "../../../assets/list-icon.svg"
import optionsIcon from '../../../assets/options-icon.svg'


export default function ListView() {
    const { vehiclesData, filmGrid, gridSetter } = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>Vehicles</h5>
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
                    <span className='list-view-span'>Model</span>
                    <span className='list-view-span'>Top Speed</span>
                    <span></span>
                </div>
                {
                    vehiclesData.map(vehicle => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                    <span>{vehicle.name}</span>
                                    <span>{vehicle.model}</span>
                                    <span>{vehicle.max_atmosphering_speed}</span>
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