import '../styles/cardlol.css';
import aatrox from '../img/Aatrox.jpg'
// import React, {useEffect, useState} from 'react'



export default function CardLoL(props) {


    return (
        <div className="container">
            <h3 className="titulos">{props.nombre}</h3>
            <div className="img">
                <img src={aatrox} alt="" />
            </div>
            <p>Ve a top</p>
            <h2>Prueba</h2>
            <p>{props.id}</p>

            
        </div>
    )
}
