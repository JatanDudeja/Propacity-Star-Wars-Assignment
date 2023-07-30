import React from 'react'
import { useGlobalContext } from '../../../Context'
import reelIcon from '../../../assets/reel-icon.svg'
import gridIcon from '../../../assets/grid-grey.svg'
import listIcon from "../../../assets/list-grey.svg"
import listIconWhite from "../../../assets/list-white.svg"
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import gridIconWhite from '../../../assets/grid-white.svg'


export default function GridView() {
    const { filmsData, filmGrid, gridSetter, showDots, showDetailSideBar } = useGlobalContext()

    return (
        <div className='home-container'>
                <div className='film-heading-toggle'>
                    <h5 className='films'>Films </h5>
                    <div className='grid-buttons'>
                        <button className={`${filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(true)}>
                            <div className='grid'>
                                <img src={`${filmGrid ? gridIcon : gridIconWhite}`} />
                                {filmGrid && <span>Grid</span>}
                            </div>
                        </button>
                        <button className={`${!filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(false)}>
                            <div className='list'>
                                <img src={`${!filmGrid ? listIcon : listIconWhite}`} />
                                {!filmGrid && <span>List</span>}
                            </div>
                        </button>
                    </div>
                </div>

                <div className='films-container'>

                    {
                        filmsData.length > 0 && filmsData.map((item) => {
                            return (
                                <div key = {item.episode_id} className='film-container'>
                                    <div className='film-poster' onClick={() => showDetailSideBar(item.episode_id, 'film')}></div> {/* Image*/}
                                    <div className='film-name'>
                                        <div className='container-inner'>
                                            <img className='reel-icon' src={reelIcon} alt='films-icon' />
                                            <span>{item.title}</span>
                                        </div>
                                        <div className='options-icon'>
                                            <img src={optionsIcon} alt='films-icon' onClick={() => showDots(item.episode_id, filmsData, 'films')}/>
                                        </div>
                                    </div>
                                    
                                    { item.show && <DropDown id = {item.episode_id} page = 'film' item = {item}/> }
                                    
                                </div>
                                
                            )
                        })
                    }

                    

                    {/* { showSideBar && <DetailSideBar />} */}

                </div>
            </div>
    )
}