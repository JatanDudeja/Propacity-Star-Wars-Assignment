import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-grey.svg"
import listIconWhite from '../../../assets/list-white.svg'
import listIcon from "../../../assets/list-grey.svg"
import gridIconWhite from '../../../assets/grid-white.svg'
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import reelIcon from '../../../assets/vehicles-icon.svg'


export default function ListView() {
    const { vehiclesData, filmGrid, gridSetter, showDots } = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>Vehicles</h5>
                <div className='grid-buttons'>
                    <button className={`${!filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(false)}>
                        <div className='grid'>
                            <img src={gridIconWhite} />
                            {!filmGrid && <span>Grid</span>}
                        </div>
                    </button>
                    <button className={`${filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(true)}>
                        <div className='list'>
                        <img src={filmGrid ? listIcon : listIconWhite} />

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
                                <div className='container-inner'>
                                        <img src={reelIcon} alt="" className='reel-icon'/>
                                    <span>{vehicle.name}</span>
                                    </div>
                                    <span>{vehicle.model}</span>
                                    <span>{vehicle.max_atmosphering_speed}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} alt='films-icon' onClick={() => showDots(vehicle.name, vehiclesData, 'vehicles')} />
                                    </div>
                                    {vehicle.show && <DropDown id={vehicle.name} page='vehicles' item={vehicle}/>}
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