import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBar from './Film/DetailSideBar'
import reelIcon from '../assets/reel-icon.svg'
import closeIcon from'../assets/close-movies.svg'

export default function Films() {

    const { tellPage, showSideBar, filmsData, activeStyles, showDetailSideBar } = useGlobalContext()

    return (
        <div>
            {showSideBar.filmPage && <DetailSideBar />}

            <div className='container-outer' style={activeStyles.films ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('films')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span className='remove'>Films</span>
                </div>
                <img src={activeStyles.films ? closeIcon : dropDown}  alt='films-icon' />

            </div>


            {activeStyles.films && <div>



                {
                    filmsData.map((film) => {
                        return (
                            <div key = {film.episode_id}>
                                <div className='container-outer child' onClick={() => showDetailSideBar(film.episode_id, 'films')}>
                                    <div className='container-inner'>
                                        <img src={reelIcon} alt='films-icon' />
                                        <span className='remove'>{film.title}</span>
                                    </div>
                                    <img src={dropDown} alt='films-icon' />
                                </div>

                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}