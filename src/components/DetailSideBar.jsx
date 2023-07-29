import React from 'react'
import closeIcon from '../assets/close-icon.svg'
import { useGlobalContext } from '../Context'

export default function () {

    const { detail, closeDetailSideBar } = useGlobalContext()

    const { data , pageData, id } = detail
    // console.log("page data", pageData)

    const obj = pageData.find((item) => {
        // console.log(item)
        return (
            item.episode_id === id 
        )
    })

    console.log("obj",obj)
    console.log("data",data[0])

    console.log(obj[data[0]])

    // obj.data[0]


    // console.log(obj)

    // console.log(pageData.length > 0 && pageData);

    return (
        <div className="detail-sidebar">
            <div className='detailSidebar-header'>
                <span>Movie Details</span>
                <button onClick={closeDetailSideBar}> <img className='' src={closeIcon} alt='close-icon' /> </button>
            </div>

            <div className='detailSidebar-data'>
            <div className='detailSidebar-data-content'>
                    <p className='heading'>Image</p>
                    <img />
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

            {/* <div className='detailSidebar-button-container'>
                <button className='detailSidebar-button'>Close</button>
            </div> */}

        </div>
    )
}