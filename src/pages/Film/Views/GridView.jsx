import React from 'react'
import { useGlobalContext } from '../../../Context'
import reelIcon from '../../../assets/reel-icon.svg'
import gridIcon from '../../../assets/grid-icon.svg'
import listIcon from "../../../assets/list-icon.svg"
import optionsIcon from '../../../assets/options-icon.svg'
import DropDown from '../../../components/DropDown'


export default function GridView() {
    const { filmsData, filmGrid, gridSetter, showOptionMenu, showOptionsMenu } = useGlobalContext()

    return (
        <div className='home-container'>
                <div className='film-heading-toggle'>
                    <h5 className='films'>Films </h5>
                    <div className='grid-buttons'>
                        <button className='film-button' onClick={() => gridSetter(true)}>
                            <div className='grid'>
                                <img src={gridIcon} />
                                {filmGrid && <span>Grid</span>}
                            </div>
                        </button>
                        <button className='film-button' onClick={() => gridSetter(false)}>
                            <div className='list'>
                                <img src={listIcon} />
                                {!filmGrid && <span>List</span>}
                            </div>
                        </button>
                    </div>
                </div>
                <div className='films-container'>

                    {
                        filmsData.length > 0 && filmsData.map((item) => {
                            return (
                                <div className='film-container'>
                                    <div className='film-poster'></div> {/* Image*/}
                                    <div className='film-name'>
                                        <div className='container-inner'>
                                            <img className='reel-icon' src={reelIcon} alt='films-icon' />
                                            <span>{item.title}</span>
                                        </div>
                                        <div className='options-icon'>
                                            <img src={optionsIcon} alt='films-icon' onClick={showOptionsMenu}/>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div>
                        {showOptionMenu && <DropDown />}
                    </div>

                </div>
            </div>
    )
}