import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import starWarsLogo from '../assets/star-wars-logo.svg'


export default function Header(){

    const [search, setSearch] = React.useState("")

    function setSearchFunction(e){
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return(
        <header className='header-container'>
            <Link  to='/'><img src={starWarsLogo} alt='star-wars-logo'/></Link>
            {/* <input  */}
            <form>
                <input className='search' type='text' placeholder='Search' value={search} onChange={setSearchFunction}/>
            </form>
        </header>
    )
}