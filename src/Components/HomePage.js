import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import './HomePage.css'

function HomePage() {
    const [modalOpen, setModalOpen] = useState(false)

    return ( <
        div className = "hero" >
        <
        h1 > Hey, click on the button to open the modal. < /h1>{' '} <
        button className = "openModalBtn"
        onClick = {
            () => {
                setModalOpen(true)
            }
        } >
        Open { ' ' } <
        /button>{' '} {
            modalOpen && < Modal setOpenModal = { setModalOpen }
            />}{' '} <
            /div>
        )
    }

    export default HomePage