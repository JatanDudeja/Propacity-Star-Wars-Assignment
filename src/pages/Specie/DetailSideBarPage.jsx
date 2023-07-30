import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { useGlobalContext } from '../../Context'
import characterImage from '../../assets/home-character-image.png'

export default function DetailSideBarPage() {

    const { detail, closeDetailSideBar, speciesData } = useGlobalContext()
    
    const { id } = detail
    // console.log("in side bar : " + pageData)
    // console.log("page data", pageData)

    const obj = speciesData.find((item) => {
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
                    <p className='heading'>Classification</p>
                    <p className='summary'>{obj.classification}</p>
                </div>


                <div className='detailSidebar-data-content'>
                    <p className='heading'>Designation</p>
                    <p className='summary'>{obj.designation}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Average Height</p>
                    <p className='summary'>{obj.average_height}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Skin Color</p>
                    <p className='summary'>{obj.skin_colors}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Hair Color</p>
                    <p className='summary'>{obj.hair_colors}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Eye Color</p>
                    <p className='summary'>{obj.eye_colors}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Average Lifespan</p>
                    <p className='summary'>{obj.average_lifespan}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Language</p>
                    <p className='summary'>{obj.language}</p>
                </div>
            </div>

            <div className='detailSidebar-data-container button-container'>
                <button onClick = {closeDetailSideBar} className='heading button'>Close</button>
            </div>

        </div>
    )
}