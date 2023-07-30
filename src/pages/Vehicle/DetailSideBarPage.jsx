import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { useGlobalContext } from '../../Context'
import characterImage from '../../assets/home-character-image.png'

export default function DetailSideBarPage() {

    const { detail, closeDetailSideBar, vehiclesData } = useGlobalContext()
    
    const { id } = detail
    // console.log("in side bar : " + pageData)
    // console.log("page data", pageData)

    const obj = vehiclesData.find((item) => {
        console.log(item)
        return (
            item.name === id
        )
    })

    // console.log("obj", obj)
    // console.log("data", data[0])

    // console.log(obj[data[0]])

    // obj.data[0]


    // console.log(obj)

    // console.log(pageData.length > 0 && pageData);

    return (
        <div className="detail-sidebar">
            <div className='detailSidebar-header'>
                <span className=''>Vehicle Details</span>
                <button onClick={closeDetailSideBar} className='close-button-sidebar'> <img className='' src={closeIcon} alt='close-icon' /> </button>
            </div>

            
            <div className='detailSidebar-data'>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Image</p>
                    <img src={characterImage} alt='character-image' className='detailSidebar-image'/>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Name</p>
                    <p className='summary'>{obj.name}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Model</p>
                    <p className='summary'>{obj.model}</p>
                </div>


                <div className='detailSidebar-data-content'>
                    <p className='heading'>Manufacturer</p>
                    <p className='summary'>{obj.manufacturer}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Cost In Credits</p>
                    <p className='summary'>{obj.cost_in_credits}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Length</p>
                    <p className='summary'>{obj.length}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Max Atmospheric Speed</p>
                    <p className='summary'>{obj.max_atmosphering_speed}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Crew</p>
                    <p className='summary'>{obj.crew}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Passengers</p>
                    <p className='summary'>{obj.passengers}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Cargo Capacity</p>
                    <p className='summary'>{obj.cargo_capacity}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Consumables</p>
                    <p className='summary'>{obj.consumables}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Vehicle Class</p>
                    <p className='summary'>{obj.vehicle_class}</p>
                </div>
            </div>

            <div className='detailSidebar-data-container button-container'>
                <button onClick = {closeDetailSideBar} className='heading button'>Close</button>
            </div>

        </div>
    )
}