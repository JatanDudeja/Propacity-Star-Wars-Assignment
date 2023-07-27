import React from 'react'
import homePageImage from '../assets/home-character-image.png'


export default function Home(){
    return(
        <div className='home-container'>
            <div className='home-inner-upper-container'>
                <img className = 'home-page-image' src={homePageImage} alt='home-page-character-image'/>
                    
                <div className='home-innerContainer'>
                    <h5 className='home-innerContainer-h5'>Welcome to Star Wars Dashboard</h5>
                    <p className='home-innerContainer-p'>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
                </div>
            </div>
        </div>
    )
}