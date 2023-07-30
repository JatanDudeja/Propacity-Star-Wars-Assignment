import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-grey.svg"
import peopleIcon from '../../../assets/people-icon.svg'
import listIcon from "../../../assets/list-grey.svg"
import gridIconWhite from '../../../assets/grid-white.svg'
import listIconWhite from '../../../assets/list-white.svg'
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import reelIcon from '../../../assets/planet-icon.svg'


export default function ListView() {
    const { planetsData, filmGrid, gridSetter, showDots } = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>Planets</h5>
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
                    <span className='list-view-span'>Director</span>
                    <span className='list-view-span'>Release Date</span>
                    <span></span>
                </div>
                {
                    planetsData.map(planet => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                <div className='container-inner'>
                                        <img src={reelIcon} alt="" className='reel-icon'/>
                                        <span>{planet.name}</span>

                                    </div>
                                    <span>{planet.climate}</span>
                                    <span>{planet.gravity}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} alt='films-icon' onClick={() => showDots(planet.name, planetsData, 'planets')}/>
                                        </div>
                                    { planet.show && <DropDown id = {planet.name} page = 'planets' item = {planet}/> }
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