import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Specie/DetailSideBarPage'
import reelIcon from '../assets/alien-icon.svg'
import closeIcon from '../assets/closeMenuIcon.svg'



export default function Species() {

    const { tellPage, showSideBar, showDetailSideBar, speciesData, activeStyles } = useGlobalContext()


    return (
        <div>
            {showSideBar.speciesPage && <DetailSideBarPage />}
            
            <div className='container-outer' style={activeStyles.species ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('species')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span className='remove'>Species</span>
                </div>
                <img src={activeStyles.species ? closeIcon : dropDown} alt='films-icon' />

            </div>



            {activeStyles.species && <div>



{
    speciesData.map((film) => {
        return (
            <div>
                <div className='container-outer child' onClick={() => showDetailSideBar(film.name, 'species')}>
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