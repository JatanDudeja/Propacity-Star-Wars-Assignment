import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { useGlobalContext } from '../../Context'
import characterImage from '../../assets/home-character-image.png'

export default function DetailSideBarPage() {

    const { detail, closeDetailSideBar, peopleData } = useGlobalContext()
    
    const { id } = detail
    // console.log("in side bar : " + pageData)
    // console.log("page data", pageData)

    const obj = peopleData.find((item) => {
        console.log(item)
        return (
            item.height === id
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
                <span className=''>People Details</span>
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
                    <p className='heading'>Release Date</p>
                    <p className='summary'>{obj.height}</p>
                </div>


                <div className='detailSidebar-data-content'>
                    <p className='heading'>Mass</p>
                    <p className='summary'>{obj.mass}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Hair Color</p>
                    <p className='summary'>{obj.hair_color}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Skin Color</p>
                    <p className='summary'>{obj.sikn_color}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Eye Color</p>
                    <p className='summary'>{obj.eye_color}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Birth Year</p>
                    <p className='summary'>{obj.birth_year}</p>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Gender</p>
                    <p className='summary'>{obj.gender}</p>
                </div>
            </div>

            <div className='detailSidebar-data-container button-container'>
                <button onClick = {closeDetailSideBar} className='heading button'>Close</button>
            </div>

        </div>
    )
}