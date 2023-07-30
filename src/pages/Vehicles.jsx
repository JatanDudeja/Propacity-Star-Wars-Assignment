import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Vehicle/DetailSideBarPage'

export default function Vehicles() {

    const { tellPage, showSideBar } = useGlobalContext()


    return (
        <div>
            {showSideBar.vehiclesPage && <DetailSideBarPage />}

            <div className='container-outer' onClick={() => tellPage('vehicles')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span>Vehicles</span>
                </div>
                <img src={dropDown} alt='films-icon' />
            </div>
        </div>
    )
}