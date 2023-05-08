import React from 'react'
import Stain from '../../Assets/Pictures/Mancha_Titurlo.svg'

export default function Title({ title }) {
    return (
        <>
            <h1 style={{ fontSize: "36px", color: "rgba(0, 0, 0, 1)", position: "relative", zIndex: 1 }}>{title}</h1>
            <img src={Stain} alt="Stain" style={{marginTop: "-20px", position: "relative", zIndex: 0, width: "250px"}}/>
        </>
    )
}
