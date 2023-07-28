import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../Context'


export default function Layout(){
    const { showSearch } = useGlobalContext()
    return(
        <div>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}