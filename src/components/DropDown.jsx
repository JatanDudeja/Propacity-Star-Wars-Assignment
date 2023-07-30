import React from 'react'
import view from '../assets/Options Menu Icons/view-icon.svg'
import download from '../assets/Options Menu Icons/download-icon.svg'
import rename from '../assets/Options Menu Icons/rename-icon.svg'
import share from '../assets/Options Menu Icons/share-icon.svg'
import move from '../assets/Options Menu Icons/move-icon.svg'
import markPrivate from '../assets/Options Menu Icons/markPrivate-icon.svg'
import del from '../assets/Options Menu Icons/delete-icon.svg'
import { useGlobalContext } from '../Context'

export default function DropDown({ id, page, item }) {
    // console.log(page)
    const { filmGrid, showDetailSideBar, deleteCautionTrigger } = useGlobalContext()
    if (page === 'film') {
        return (
            <div className={`${filmGrid ? 'dropdown-container dropdown-container-grid' : 'dropdown-container dropdown-container-list'}`}>
                <div className='dropdown-item-container' onClick={() => showDetailSideBar(id, page)} style={{ cursor: "pointer" }}>
                    <img src={view} className='dropdown-image' />
                    <span className='drowndown-span'>View</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={download} className='dropdown-image' />
                    <span className='drowndown-span'>Download</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={rename} className='dropdown-image' />
                    <span className='drowndown-span'>Rename</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={share} className='dropdown-image' />
                    <span className='drowndown-span'>Share Link</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={move} className='dropdown-image' />
                    <span className='drowndown-span'>Move</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={markPrivate} className='dropdown-image' />
                    <span className='drowndown-span'>Mark Private</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }} onClick={() => deleteCautionTrigger(id, page, item)}>
                    <img src={del} className='dropdown-image' />
                    <span className='drowndown-span'>Delete</span>
                </div>
            </div>
        )
    }




    else {
        return (
            <div className={`${filmGrid ? 'dropdown-container dropdown-container-list' : 'dropdown-container dropdown-container-grid'}`}>
                <div className='dropdown-item-container' onClick={() => showDetailSideBar(id, page)} style={{ cursor: "pointer" }}>
                    <img src={view} className='dropdown-image' />
                    <span className='drowndown-span'>View</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={download} className='dropdown-image' />
                    <span className='drowndown-span'>Download</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={rename} className='dropdown-image' />
                    <span className='drowndown-span'>Rename</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={share} className='dropdown-image' />
                    <span className='drowndown-span'>Share Link</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={move} className='dropdown-image' />
                    <span className='drowndown-span'>Move</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }}>
                    <img src={markPrivate} className='dropdown-image' />
                    <span className='drowndown-span'>Mark Private</span>
                </div>
                <div className='dropdown-item-container' style={{ cursor: "pointer" }} onClick={() => deleteCautionTrigger(id, page, item)}>
                    <img src={del} className='dropdown-image' />
                    <span className='drowndown-span'>Delete</span>
                </div>
            </div>
        )
    }
}