import '../styles/cardlol.css';
import aatrox from '../img/Aatrox.jpg'
// import React, {useEffect, useState} from 'react'



export default function CardLoL(props) {

    

    // const [usuarios, setUsuarios] = useState([]);
   


    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = async () => {
    //     const data = await fetch ("https://jsonplaceholder.typicode.com/users");
    //     const users = await data.json();
    //     setUsuarios(users)
    // }
   
    
    // const random = (min, max) =>{
    //     return Math.floor((Math.random() * (max - min + 1)) + min);
    // }




    return (
        <div className="container">
            <h3 className="titulos">Aatrox</h3>
            <div className="img">
                <img src={aatrox} alt="" />
            </div>
            <p>Ve a top</p>
            <h2>Prueba</h2>
            <p>{props.nombre} </p>
            <p>{props.id}</p>

            
        </div>
    )
}
