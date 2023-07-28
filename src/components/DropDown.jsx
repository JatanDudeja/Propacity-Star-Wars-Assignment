import React from 'react'
import view from '../assets/Options Menu Icons/view-icon.svg'
import download from '../assets/Options Menu Icons/download-icon.svg'
import rename from '../assets/Options Menu Icons/rename-icon.svg'
import share from '../assets/Options Menu Icons/share-icon.svg'
import move from '../assets/Options Menu Icons/move-icon.svg'
import markPrivate from '../assets/Options Menu Icons/markPrivate-icon.svg'
import del from '../assets/Options Menu Icons/delete-icon.svg'

export default function DropDown(){
    return(
        <div className='dropdown-container'>
            <div className='dropdown-item-container'>
                <img src ={view} className='dropdown-image'/>
                <span className='drowndown-span'>View</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {download} className='dropdown-image'/>
                <span className='drowndown-span'>Download</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {rename} className='dropdown-image'/>
                <span className='drowndown-span'>Rename</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {share} className='dropdown-image'/>
                <span className='drowndown-span'>Share Link</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {move} className='dropdown-image'/>
                <span className='drowndown-span'>Move</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {markPrivate} className='dropdown-image'/>
                <span className='drowndown-span'>Mark Private</span>
            </div>
            <div className='dropdown-item-container'>
                <img src = {del} className='dropdown-image'/>
                <span className='drowndown-span'>Delete</span>
            </div>
        </div>
    )
}