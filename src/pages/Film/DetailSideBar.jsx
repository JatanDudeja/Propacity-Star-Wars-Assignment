import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { useGlobalContext } from '../../Context'
import characterImage from '../../assets/home-character-image.png'

export default function DetailSideBar() {

    const { detail, closeDetailSideBar, filmsData } = useGlobalContext()
    
    const { id } = detail
    // console.log("in side bar : " + pageData)
    // console.log("page data", pageData)

    const obj = filmsData.find((item) => {
        console.log(item)
        return (
            item.episode_id === id
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
                <span className=''>Movie Details</span>
                <button onClick={closeDetailSideBar} className='close-button-sidebar'> <img className='' src={closeIcon} alt='close-icon' /> </button>
            </div>

            <div className='detailSidebar-data'>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Image</p>
                    <img src={characterImage} alt='character-image' className='detailSidebar-image'/>
                </div>
                <div className='detailSidebar-data-content'>
                    <p className='heading'>Title</p>
                    <p className='summary'>{obj.title}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Release Date</p>
                    <p className='summary'>{obj.release_date}</p>
                </div>


                <div className='detailSidebar-data-content'>
                    <p className='heading'>Director</p>
                    <p className='summary'>{obj.director}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Producer</p>
                    <p className='summary'>{obj.producer}</p>
                </div>

                <div className='detailSidebar-data-content'>
                    <p className='heading'>Opening Crawl</p>
                    <p className='summary'>{obj.opening_crawl}</p>
                </div>
            </div>

            <div className='detailSidebar-data-container button-container'>
                <button onClick = {closeDetailSideBar} className='heading button'>Close</button>
            </div>

        </div>
    )
}