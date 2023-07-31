import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Vehicle/DetailSideBarPage'
import reelIcon from '../assets/vehicles-icon.svg'
import closeIcon from '../assets/closeMenuIcon.svg'

export default function Vehicles() {

    const { tellPage, showSideBar, vehiclesData, showDetailSideBar, activeStyles } = useGlobalContext()


    return (
        <div>
            {showSideBar.vehiclesPage && <DetailSideBarPage />}

            <div className='container-outer' style={activeStyles.vehicles ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('vehicles')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span className='remove'>Vehicles</span>
                </div>
                <img src={activeStyles.vehicles ? closeIcon : dropDown} alt='films-icon' />

            </div>



            {activeStyles.vehicles && <div>
                {
                    vehiclesData.map((film) => {
                        return (
                            <div>
                                <div className='container-outer child' onClick={() => showDetailSideBar(film.name, 'vehicles')}>
                                    <div className='container-inner'>
                                        <img src={reelIcon} alt='films-icon' />
                                        <span className='remove'>{film.name}</span>
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