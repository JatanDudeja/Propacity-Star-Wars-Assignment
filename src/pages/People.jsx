import React from 'react'
import folderIcon from '../assets/folder-icon.svg'
import dropDown from '../assets/dropdown-icon.svg'
import { useGlobalContext } from '../Context'
import DetailSideBarPage from './Peoples/DetailSideBarPage'
import reelIcon from '../assets/people-icon.svg'
import closeIcon from '../assets/closeMenuIcon.svg'





export default function People() {

    const { tellPage, showSideBar, peopleData, activeStyles, showDetailSideBar } = useGlobalContext()

    return (
        <div>
            {showSideBar.peoplePage && <DetailSideBarPage />}

            <div className='container-outer' style={activeStyles.people ? {background : "#CB1A80", borderRadius : '6px'} : null} onClick={() => tellPage('people')}>
                <div className='container-inner'>
                    <img src={folderIcon} alt='films-icon' />
                    <span className='remove'>People</span>
                </div>
                <img src={activeStyles.people ? closeIcon : dropDown} alt='films-icon' />

            </div>


            {activeStyles.people && <div>

                {
                    peopleData.map((people) => {
                        return (
                            <div>
                                <div className='container-outer child' onClick={() => showDetailSideBar(people.height, 'people')}>
                                    <div className='container-inner'>
                                        <img src={reelIcon} alt='films-icon' />
                                        <span className='remove'>{people.name}</span>
                                    </div>
                                    <img src={dropDown} alt='films-icon' />
                                </div>

                            </div>
                        )
                    })
                }
            </div>}






        </div>
    )
}