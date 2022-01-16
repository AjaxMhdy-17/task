import React  from 'react'
import { createPortal } from 'react-dom'
import './protal.css'

const Overlay = () => {
    return <div className="backdrop_main"></div>
}

const portalElement = document.getElementById('portal')

function Portal(props) {
    return (
        <div>
            <div className="" onClick={props.onClose}>
                {createPortal(<Overlay/>,portalElement)}
            </div>
            <div className="modal_content">
                {props.children}
            </div>
        </div>
    )
}

export default Portal
