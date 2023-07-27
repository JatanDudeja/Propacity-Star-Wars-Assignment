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
    const { test,link } = useGlobalContext()
    return (
        <div className="sidebar-container">
            <nav className="sidebar-nav">
                <NavLink
                    to="/films"
                    
                // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <Films />
                </NavLink>
                <NavLink
                    to="/people"
                // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <People />
                </NavLink>
                <NavLink
                    to="/planets"
                // style={({ isActive }) => isActive ? activeStyles : null}
                >
                    <Planets />
                </NavLink>

                <NavLink to='/species' > <Species /> </NavLink>
                <NavLink to='/starships' > <StarShips /> </NavLink>
                <NavLink to='/vehicles' > <Vehicles /> </NavLink>
            </nav>
        </div>
    )
}