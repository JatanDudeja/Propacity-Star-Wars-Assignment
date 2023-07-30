import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-grey.svg"
import listIconWhite from '../../../assets/list-white.svg'
import listIcon from "../../../assets/list-grey.svg"
import gridIconWhite from '../../../assets/grid-white.svg'
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import reelIcon from '../../../assets/alien-icon.svg'


export default function ListView() {
    const { speciesData, filmGrid, gridSetter, showDots } = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>Species</h5>
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
                    <span className='list-view-span'>Homeworld</span>
                    <span className='list-view-span'>Average Lifespan</span>
                    <span></span>
                </div>
                {
                    speciesData.map(specie => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                <div className='container-inner'>
                                        <img src={reelIcon} alt="" className='reel-icon'/>
                                    <span>{specie.name}</span>
                                    </div>
                                    <span>{specie.homeworld}</span>
                                    <span>{specie.average_lifespan}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} alt='films-icon' onClick={() => showDots(specie.name, speciesData, 'species')}/>
                                        </div>
                                    { specie.show && <DropDown id = {specie.name} page = 'species' item={specie}/> }
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