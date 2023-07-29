import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import DetailSideBar from './DetailSideBar'



export default function Layout(){
    const { showSearch, showSideBar } = useGlobalContext()
    return(
        <div>
            <Header />
            <Sidebar />
            { showSideBar && <DetailSideBar />}
            <Outlet />
        </div>
    )
}