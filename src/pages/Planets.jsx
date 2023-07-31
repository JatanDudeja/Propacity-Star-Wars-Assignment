import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Planet/DetailSideBarPage'
import reelIcon from '../assets/planet-icon.svg'
import closeIcon from '../assets/closeMenuIcon.svg'



export default function Planets(){

    const { tellPage, showSideBar, planetsData, showDetailSideBar, activeStyles } = useGlobalContext()


    return(
        <div>
        { showSideBar.planetPage && <DetailSideBarPage />}


                    
        <div className='container-outer' style={activeStyles.planets ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('planets')}>
            <div className='container-inner'>
                <img src={folderIcon} alt='films-icon' />
                <span className='remove'>Planets</span>
            </div>
            <img src={activeStyles.planets ? closeIcon : dropDown} alt='films-icon' />

        </div>


        {activeStyles.planets && <div>

{
    planetsData.map((people) => {
        return (
            <div>
                <div className='container-outer child' onClick={() => showDetailSideBar(people.name, 'people')}>
                    <div className='container-inner'>
                        <img src={reelIcon} alt='films-icon' />
                        <span className='remove'>{people.name}</span>
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