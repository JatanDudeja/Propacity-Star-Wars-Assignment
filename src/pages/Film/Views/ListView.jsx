import React from 'react'
import { useGlobalContext } from '../../../Context'
import gridIcon from "../../../assets/grid-icon.svg"
import listIcon from "../../../assets/list-grey.svg"
import listIconWhite from "../../../assets/list-white.svg"
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import reelIcon from '../../../assets/reel-icon.svg'
import gridIconWhite from '../../../assets/grid-white.svg'



export default function ListView() {

    const { filmsData, filmGrid, gridSetter, showDots } = useGlobalContext()

    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                    <h5 className='films'>Films </h5>
                    <div className='grid-buttons'>
                        <button className={`${filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(true)}>
                            <div className='grid'>
                                <img src={gridIconWhite} />
                                {filmGrid && <span>Grid</span>}
                            </div>
                        </button>
                        <button className={`${!filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(false)}>
                            <div className='list'>
                                <img src = {`${!filmGrid ? listIcon : listIconWhite}`}/>
                                {!filmGrid && <span>List</span>}
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
                    filmsData.map(film => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                    <div className='container-inner'>
                                        <img src={reelIcon} alt="" className='reel-icon'/>

                                        <span>{film.title}</span>
                                    </div>
                                    <span>{film.director}</span>
                                    <span>{film.release_date}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} onClick={() => showDots(film.episode_id, filmsData, 'films')} alt='films-icon'/>
                                    </div>
                                        {film.show && <DropDown id = {film.episode_id} page='film' item = {film}/>}
                                </div>
                                <hr></hr>
                                {/* { film.show && <DropDown  /> } */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}