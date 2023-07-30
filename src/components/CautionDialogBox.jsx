import React from "react"
import deleteIcon from '../assets/delete-icon.svg'
import { useGlobalContext } from "../Context"


export default function CautionDialogBox(){
    const {closeDialogBox, removeData, dataToDelete} = useGlobalContext()
    console.log(dataToDelete.item)


    return(
        <div className="dialog-box-container">
            <div className="dialog-box-warning">
                <div className="img-div1">
                    <div className="img-div2">
                        <img src={deleteIcon} alt="delete-icon" className="dialogBox-delete-icon"/>

                    </div>
                </div>
                <span className="dialogBox-warning1">Caution!</span>
                <span className="dialogBox-warning2">Are you sure you want to delete <span className="name">{dataToDelete.page === 'film' ? dataToDelete.item.title : dataToDelete.item.name}</span>.</span>
            </div>
            <div className="dialog-box-button">
                <button className="dialogBox-close" onClick={closeDialogBox}>Close</button>
                <button className="dialogBox-delete" style={{background : ""}} onClick={() => removeData(dataToDelete.id, dataToDelete.page)}>Delete</button>
            </div>
        </div>
    )
}