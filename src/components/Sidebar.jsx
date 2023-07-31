import React from "react"
import { NavLink } from "react-router-dom"
import Films from "../pages/Films"
import People from "../pages/People"
import Planets from "../pages/Planets"
import Species from "../pages/Species"
import StarShips from "../pages/StarShips"
import Vehicles from "../pages/Vehicles"
import { useGlobalContext } from "../Context"

export default function Sidebar() {
    const { test,link, tellPage, changeActiveStyles, activeStyles } = useGlobalContext()
    return (
        <div className="sidebar-container">
            <nav className="sidebar-nav">
                <NavLink
                    to="/films"
                    onClick={() => changeActiveStyles('films')}
                >
                    <Films />
                </NavLink>

                <NavLink
                    to="/people"
                    onClick={() => changeActiveStyles('people')}
                >
                    <People />
                </NavLink>

                <NavLink
                    to="/planets"
                    onClick={() => changeActiveStyles('planets')}
                >
                    <Planets />
                </NavLink>

                <NavLink to='/species' onClick={() => changeActiveStyles('species')}> <Species /> </NavLink>

                <NavLink to='/starships'
                    onClick={() => changeActiveStyles('starships')}
                > <StarShips /> </NavLink>

                <NavLink to='/vehicles'
                    onClick={() => changeActiveStyles('vehicles')}
                
                > <Vehicles /> </NavLink>
            </nav>
        </div>
    )
}