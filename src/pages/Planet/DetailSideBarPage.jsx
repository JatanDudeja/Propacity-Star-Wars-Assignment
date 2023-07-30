import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { useGlobalContext } from '../../Context'
import characterImage from '../../assets/home-character-image.png'

export default function DetailSideBarPage() {

    const { detail, closeDetailSideBar, planetsData } = useGlobalContext()
    
    const { id } = detail
    // console.log("in side bar : " + pageData)
    // console.log("page data", pageData)

    const obj = planetsData.find((item) => {
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
                <span className=''>Planet Details</span>
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
                    <p className='heading'>Rotation Period</p>
                    <p className='summary'>{obj.rotation_period}</p>
                </div>


                <div className='detailSidebar-data-content'>
                    <p className='heading'>Oribital Period</p>
                    <p className='summary'>{obj.orbital_period}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Diameter</p>
                    <p className='summary'>{obj.diameter}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Climate</p>
                    <p className='summary'>{obj.climate}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Gravity</p>
                    <p className='summary'>{obj.gravity}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Terrain</p>
                    <p className='summary'>{obj.terrain}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Surface Water</p>
                    <p className='summary'>{obj.surface_water}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Population</p>
                    <p className='summary'>{obj.population}</p>
                </div>
            </div>

            <div className='detailSidebar-data-container button-container'>
                <button onClick = {closeDetailSideBar} className='heading button'>Close</button>
            </div>

        </div>
    )
}