import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Specie/DetailSideBarPage'


export default function Species() {

    const { tellPage, showSideBar } = useGlobalContext()


    return (
        <div>
            {showSideBar.speciesPage && <DetailSideBarPage />}
            
            <div className='container-outer' onClick={() => tellPage('species')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span>Species</span>
                </div>
                <img src={dropDown} alt='films-icon' />
            </div>
        </div>
    )
}