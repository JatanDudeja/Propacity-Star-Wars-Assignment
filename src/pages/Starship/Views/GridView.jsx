import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-grey.svg"
import gridIconWhite from '../../../assets/grid-white.svg'
import listIconWhite from '../../../assets/list-white.svg'
import listIcon from "../../../assets/list-grey.svg"
import reelIcon from '../../../assets/starships-icon.svg'
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'


export default function ListView() {
    const { starShipsData, filmGrid, gridSetter, showDetailSideBar , showDots} = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>Starships</h5>
                <div className='grid-buttons'>
                    <button className={`${!filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(false)}>
                        <div className='grid'>
                            <img src={!filmGrid ? gridIcon : gridIconWhite} />
                            {!filmGrid && <span>Grid</span>}
                        </div>
                    </button>
                    <button className={`${filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(true)}>
                        <div className='list'>
                        <img src={listIconWhite} />
                            {filmGrid && <span>List</span>}
                        </div>
                    </button>
                </div>
            </div>



            <div className='films-container'>

                {
                    starShipsData.length > 0 && starShipsData.map((starship) => {
                        return (
                            <div className='film-container'>
                                <div className='film-poster' onClick={() => showDetailSideBar(starship.name, 'starships')}></div> {/* Image*/}
                                <div className='film-name'>
                                    <div className='container-inner'>
                                        <img className='reel-icon' src={reelIcon} alt='films-icon' />
                                        <span>{starship.name}</span>
                                    </div>
                                    <div className='options-icon'>
                                        <img src={optionsIcon} alt='films-icon' onClick={() => showDots(starship.name, starShipsData, 'starships')}/>
                                        </div>
                                    </div>
                                    
                                    { starship.show && <DropDown id = {starship.name} page = 'starships' item={starship}/> }
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}