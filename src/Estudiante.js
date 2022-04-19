import React, { Component } from 'react'
import "./Estudiante.css";
export default class Estudiante extends Component {
    
    render() {
        let obj={
            nombre:"Nicolas",
            apellido:"Gomez-Tolosa",
            edad:24
        };
    return (
      <div className='estilo' >
          <p > Nombre: {obj.nombre}</p>
          <p>Apellido:{obj.apellido}</p>
          <p>Edad: {obj.edad}</p>
      </div>
    )
  }
}
