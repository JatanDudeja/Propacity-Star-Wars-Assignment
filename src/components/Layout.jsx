import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import CautionDialogBox from './CautionDialogBox'



export default function Layout(){
    const { showSearch, showSideBar, deleteElement } = useGlobalContext()
    return(
        <div className='main-container'>
            <div className='item1'>
            <Header />

            </div>
            <div className='item2'>
            <Sidebar />

            </div>
            <div className='item3'>
                <Outlet />

            </div>
            <div>
                {deleteElement && <CautionDialogBox />}

            </div>
            
        </div>
    )
}