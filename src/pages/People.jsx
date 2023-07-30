import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Peoples/DetailSideBarPage'


export default function People() {

    const { tellPage, showSideBar } = useGlobalContext()

    return(
        <div>
        { showSideBar.peoplePage && <DetailSideBarPage />}

        <div className='container-outer' onClick={() => tellPage('people')}>
            <div className='container-inner'>
                <img src={folderIcon} alt='films-icon' />
                <span>People</span>
            </div>
            <img src={dropDown} alt='films-icon' />
        </div>
        </div>
    )
}