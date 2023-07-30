import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBar from './Film/DetailSideBar'

export default function Films(){

    const { tellPage, showSideBar } = useGlobalContext()

    return(
        <div>
            { showSideBar.filmPage && <DetailSideBar />}

        <div className='container-outer' onClick={() => tellPage('films')}>
            <div className='container-inner'>
                <img src={folderIcon} alt='films-icon' />
                <span>Films</span>
            </div>
            <img src={dropDown} alt='films-icon' />
        </div>
        </div>
    )
}