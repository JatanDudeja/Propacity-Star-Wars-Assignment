import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import CautionDialogBox from './CautionDialogBox'



export default function Layout(){
    const { showSearch, showSideBar, deleteElement } = useGlobalContext()
    return(
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            <div>
                {deleteElement && <CautionDialogBox />}

            </div>
            
        </div>
    )
}