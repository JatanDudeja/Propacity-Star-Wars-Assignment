import React from 'react'
import { useGlobalContext } from '../../../Context'
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'
import gridIcon from "../../../assets/grid-grey.svg"
import peopleIcon from '../../../assets/people-icon.svg'
import listIcon from "../../../assets/list-grey.svg"
import gridIconWhite from '../../../assets/grid-white.svg'
import listIconWhite from '../../../assets/list-white.svg'


export default function ListView({people}) {
    const { peopleData, filmGrid, gridSetter, showDots,  } = useGlobalContext()


    return (
        <div className='home-container'>
            <div className='film-heading-toggle'>
                <h5 className='films'>People</h5>
                <div className='grid-buttons'>
                    <button className={`${!filmGrid ? 'film-button button-left' : 'film-button'}`} onClick={() => gridSetter(false)}>
                        <div className='grid'>
                            <img src={gridIconWhite} />
                            {!filmGrid && <span>Grid</span>}
                        </div>
                    </button>
                    <button className={`${filmGrid ? 'film-button button-right' : 'film-button'}`} onClick={() => gridSetter(true)}>
                        <div className='list'>
                            <img src={filmGrid ? listIcon : listIconWhite} />
                            {filmGrid && <span>List</span>}
                        </div>
                    </button>
                </div>
            </div>

            <div className='list-view-main-container' style={{ color: 'white' }}>
                <div className='grid-view list-view-heading-container'>
                    <span className='list-view-span'>Name</span>
                    <span className='list-view-span'>Birth Year</span>
                    <span className='list-view-span'>Species</span>
                    <span></span>
                </div>
                {
                    peopleData.map(pop => {
                        return (
                            <div className='grid-view-information-container'>
                                <div className='grid-view'>
                                    <div className='container-inner'>
                                        <img className='reel-image' src={peopleIcon}/>
                                        <span>{pop.name}</span>
                                    </div>
                                    <span>{pop.birth_year}</span>
                                    <span>{pop.species.length == 1 ? pop.species[0] : 'NA'}</span>
                                    <div className='options-icon-listView-container'>
                                        <img src={optionsIcon} onClick={() => showDots(pop.height, peopleData, 'people')} alt='films-icon' />

                                    </div>
                                    {pop.show && <DropDown id = {pop.height} page='people' item = {pop}/>}
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}