import React from 'react'
import Stain from '../../Assets/Pictures/Mancha.svg'

export default function Title({ title }) {
    return (
        <div>
            <h1 style={{ fontSize: "2.25rem", color: "rgba(0, 0, 0, 1)", position: "relative", zIndex: 1 }}>{title}</h1>
            <img src={Stain} alt="Stain" style={{marginTop: "-20px", position: "relative", zIndex: 0, width: "250px" }}/>
        </div>
    )
}
