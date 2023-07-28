import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'



export default function Planets(){

    const { tellPage } = useGlobalContext()

    return(
        <div className='container-outer' onClick={() => tellPage('planets')}>
            <div className='container-inner'>
                <img src={folderIcon} alt='films-icon' />
                <span>Planets</span>
            </div>
            <img src={dropDown} alt='films-icon' />
        </div>
    )
}