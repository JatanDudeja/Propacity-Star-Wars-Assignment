import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import starWarsLogo from '../assets/star-wars-logo.svg'
import { useGlobalContext } from '../Context'


export default function Header() {

    const [search, setSearch] = React.useState("")

    const { showSearch, tellPage, menuBar, showMenuBar } = useGlobalContext()

    function setSearchFunction(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <header className=''>
            <div className='header-container'>

            <Link to='/'><img src={starWarsLogo} alt='star-wars-logo' onClick={() => tellPage('home')} /></Link>
            {/* <input  */}
            {showSearch && <form>
                <input className='search' type='text' placeholder='Search' value={search} onChange={setSearchFunction} />
            </form>}
            </div>
            {/* <Menu /> */}
        </header>
    )
}