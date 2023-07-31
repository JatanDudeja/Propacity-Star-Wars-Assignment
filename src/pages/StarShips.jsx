import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Starship/DetailSideBarPage'
import reelIcon from '../assets/starships-icon.svg'
import closeIcon from '../assets/closeMenuIcon.svg'





export default function StarShips() {
    const { tellPage, showSideBar, starShipsData, showDetailSideBar, activeStyles } = useGlobalContext()



    return (
        <div>
            {showSideBar.startshipsPage && <DetailSideBarPage />}
            <div className='container-outer'  style={activeStyles.starships ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('starships')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span className='remove'>Starships</span>
                </div>
                <img src={activeStyles.startships ? closeIcon : dropDown} alt='films-icon' />

            </div>



            {activeStyles.startships && <div>



{
    starShipsData.map((film) => {
        return (
            <div>
                <div className='container-outer child' onClick={() => showDetailSideBar(film.name, 'starships')}>
                    <div className='container-inner'>
                        <img src={reelIcon} alt='films-icon' />
                        <span className='remove'>{film.name}</span>
                    </div>
                    <img src={activeStyles.films ? closeIcon : dropDown} alt='films-icon' />

                </div>

            </div>
        )
    })
}
</div>}



        </div>
    )
}