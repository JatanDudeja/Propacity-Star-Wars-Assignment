import React from 'react'
import { useGlobalContext } from '../../../Context'
import reelIcon from '../../../assets/people-icon.svg'
import gridIcon from "../../../assets/grid-grey.svg"
import listIcon from "../../../assets/list-icon.svg"
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import gridIconWhite from '../../../assets/grid-white.svg'




export default function GridView({people}) {




    const { filmGrid, gridSetter, showDetailSideBar, peopleData, showDots } = useGlobalContext()
    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>People</h5>
                <div className='grid-buttons'>
                    <button className={`${!filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(false)}>
                        <div className='grid'>
                            <img src={!filmGrid ? gridIcon : gridIconWhite} />
                            {!filmGrid && <span>Grid</span>}
                        </div>
                    </button>
                    <button className={`${filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(true)}>
                        <div className='list'>
                            <img src={listIcon} />
                            {filmGrid && <span>List</span>}
                        </div>
                    </button>
                </div>
            </div>



            <div className='films-container'>

                {
                    peopleData.length > 0 && peopleData.map((item) => {
                        return (
                            <div key = {item.height} className='film-container'>
                                <div className='film-poster' onClick={() => showDetailSideBar(item.height, 'people')}></div> {/* Image*/}
                                <div className='film-name'>
                                    <div className='container-inner'>
                                        <img className='reel-icon' src={reelIcon} alt='films-icon' />
                                        <span>{item.name}</span>
                                    </div>
                                    <div className='options-icon' >
                                        <img src={optionsIcon} onClick={() => showDots(item.height, peopleData, 'people')} alt='films-icon' />
                                    </div>
                                </div>

                                    {item.show && <DropDown id={item.height} page = 'people' item = {item}/>}

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}