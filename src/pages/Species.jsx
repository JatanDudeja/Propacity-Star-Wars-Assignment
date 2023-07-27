import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'



export default function Species(){
    const {link} = useGlobalContext()
    return(
        <div className='container-outer'>
            <div className='container-inner'>
                <img src={folderIcon} alt='films-icon' />
                <span>Species</span>
            </div>
            <img src={dropDown} alt='films-icon' />
        </div>
    )
}