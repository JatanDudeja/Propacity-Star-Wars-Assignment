import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout(){
    return(
        <div>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}