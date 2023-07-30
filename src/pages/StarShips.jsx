import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Starship/DetailSideBarPage'



export default function StarShips() {
    const { tellPage , showSideBar} = useGlobalContext()


    return (
        <div>
            {showSideBar.startshipsPage && <DetailSideBarPage />}
            <div className='container-outer' onClick={() => tellPage('starships')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span>Starships</span>
                </div>
                <img src={dropDown} alt='films-icon' />
            </div>
        </div>
    )
}